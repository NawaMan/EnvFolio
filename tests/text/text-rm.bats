#!/usr/bin/env bats

# folio text rm, through the real ./folio, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store: texts web/user, web/home, web/deep/x, mail/work; secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$FOLIO" text insert -t "$name value" "$name" < /dev/null
    done
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
}

@test "MANUAL: text rm — remove a text" {
    make-store
    run "$FOLIO" text rm -f mail/work < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/mail" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Remove mail/work from store." ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    [ "$(git -C "$FOLIO_STORE_DIR" show HEAD~1:mail/work.txt)" = "mail/work value" ]
}

@test "text rm: piped in, it does not ask" {
    make-store
    run "$FOLIO" text rm web/user < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt.sig" ]
    [ -e "$FOLIO_STORE_DIR/web/home.txt" ]
}

@test "text rm: -r removes the texts in a folder, and keeps its secrets" {
    make-store
    run "$FOLIO" text rm -r web < /dev/null
    [ "$status" -eq 0 ]
    [ -z "$(find "$FOLIO_STORE_DIR/web" -name '*.txt*')" ]
    [ ! -e "$FOLIO_STORE_DIR/web/deep" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ -e "$FOLIO_STORE_DIR/mail/work.txt" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "text rm: a folder needs -r" {
    make-store
    run "$FOLIO" text rm web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is a folder; use -r"* ]]
    [ -e "$FOLIO_STORE_DIR/web/user.txt" ]
}

@test "text rm: a secret or an unknown name is not in the store" {
    make-store
    local name
    for name in web/github nope; do
        run "$FOLIO" text rm "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not in the store"* ]]
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "text rm: a name leaving the store, or bad arguments, are refused" {
    make-store
    local name
    for name in .. ../out a/../.. /; do
        run "$FOLIO" text rm -r "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
    done
    run "$FOLIO" text rm a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio text rm"* ]]
}

@test "text rm: no store fails and creates nothing" {
    run "$FOLIO" text rm x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "text rm --help: works without a store" {
    run "$FOLIO" text rm --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio text rm"* ]]
    run "$FOLIO" help text rm
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

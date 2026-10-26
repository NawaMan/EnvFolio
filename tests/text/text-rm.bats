#!/usr/bin/env bats

# folio rm text, through the real ./folio, against a throwaway GPG home and store.

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
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$FOLIO" insert text -t "$name value" "$name" < /dev/null
    done
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
}

@test "MANUAL: rm text — remove a text" {
    make-store
    run "$FOLIO" rm text -f mail/work < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/mail" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Remove mail/work from store." ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    [ "$(git -C "$FOLIO_STORE_DIR" show HEAD~1:mail/work.txt)" = "mail/work value" ]
}

@test "rm text: piped in, it does not ask" {
    make-store
    run "$FOLIO" rm text web/user < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt.sig" ]
    [ -e "$FOLIO_STORE_DIR/web/home.txt" ]
}

@test "rm text: -r removes the texts in a folder, and keeps its secrets" {
    make-store
    run "$FOLIO" rm text -r web < /dev/null
    [ "$status" -eq 0 ]
    [ -z "$(find "$FOLIO_STORE_DIR/web" -name '*.txt*')" ]
    [ ! -e "$FOLIO_STORE_DIR/web/deep" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ -e "$FOLIO_STORE_DIR/mail/work.txt" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "rm text: a folder needs -r" {
    make-store
    run "$FOLIO" rm text web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is a folder; use -r"* ]] || false
    [ -e "$FOLIO_STORE_DIR/web/user.txt" ]
}

@test "rm text: a secret or an unknown name is not in the store" {
    make-store
    local name
    for name in web/github nope; do
        run "$FOLIO" rm text "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not in the store"* ]] || false
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "rm text: a name leaving the store, or bad arguments, are refused" {
    make-store
    local name
    for name in .. ../out a/../.. /; do
        run "$FOLIO" rm text -r "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]] || false
    done
    run "$FOLIO" rm text a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio rm text"* ]] || false
}

@test "rm text: no store fails and creates nothing" {
    run "$FOLIO" rm text x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "rm text --help: works without a store" {
    run "$FOLIO" rm text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio rm text"* ]] || false
    run "$FOLIO" help rm text
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

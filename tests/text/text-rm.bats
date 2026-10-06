#!/usr/bin/env bats

# keep text rm, through the real ./keep, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$KEEP_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $KEEP_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    KEEP="$BATS_TEST_DIRNAME/../../keep"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store: texts web/user, web/home, web/deep/x, mail/work; secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$KEEP" text insert -t "$name value" "$name" < /dev/null
    done
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
}

@test "MANUAL: text rm — remove a text" {
    make-store
    run "$KEEP" text rm -f mail/work < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR/mail" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Remove mail/work from store." ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
    [ "$(git -C "$KEEP_STORE_DIR" show HEAD~1:mail/work.txt)" = "mail/work value" ]
}

@test "text rm: piped in, it does not ask" {
    make-store
    run "$KEEP" text rm web/user < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR/web/user.txt" ]
    [ ! -e "$KEEP_STORE_DIR/web/user.txt.sig" ]
    [ -e "$KEEP_STORE_DIR/web/home.txt" ]
}

@test "text rm: -r removes the texts in a folder, and keeps its secrets" {
    make-store
    run "$KEEP" text rm -r web < /dev/null
    [ "$status" -eq 0 ]
    [ -z "$(find "$KEEP_STORE_DIR/web" -name '*.txt*')" ]
    [ ! -e "$KEEP_STORE_DIR/web/deep" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ -e "$KEEP_STORE_DIR/mail/work.txt" ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
}

@test "text rm: a folder needs -r" {
    make-store
    run "$KEEP" text rm web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is a folder; use -r"* ]]
    [ -e "$KEEP_STORE_DIR/web/user.txt" ]
}

@test "text rm: a secret or an unknown name is not in the store" {
    make-store
    local name
    for name in web/github nope; do
        run "$KEEP" text rm "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not in the store"* ]]
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "text rm: a name leaving the store, or bad arguments, are refused" {
    make-store
    local name
    for name in .. ../out a/../.. /; do
        run "$KEEP" text rm -r "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
    done
    run "$KEEP" text rm a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text rm"* ]]
}

@test "text rm: no store fails and creates nothing" {
    run "$KEEP" text rm x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text rm --help: works without a store" {
    run "$KEEP" text rm --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text rm"* ]]
    run "$KEEP" help text rm
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR" ]
}

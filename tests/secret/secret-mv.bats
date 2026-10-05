#!/usr/bin/env bats

# keep secret mv, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$KEEP" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
}

@test "MANUAL: secret mv — rename a secret" {
    make-store
    run "$KEEP" secret mv web/github web/gh
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR/web/github.gpg" ]
    [ "$(pass show web/gh | head -1)" = "s3cr3t" ]
    [[ $(git -C "$KEEP_STORE_DIR" log -1 --format=%s) == "Rename web/github to web/gh"* ]]
}

@test "secret mv: into a folder" {
    make-store
    run "$KEEP" secret mv mail/work archive/
    [ "$status" -eq 0 ]
    [ "$(pass show archive/work)" = "other" ]
}

@test "secret mv: an unknown name fails" {
    make-store
    run "$KEEP" secret mv nope other
    [ "$status" -ne 0 ]
}

@test "secret mv --help: works without a store" {
    run "$KEEP" secret mv --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret mv"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret mv
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret mv"* ]]
}

@test "secret mv: no store fails and creates nothing" {
    run "$KEEP" secret mv web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

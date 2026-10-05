#!/usr/bin/env bats

# keep secret cp, through the real ./keep, against a throwaway GPG home and store.

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

@test "MANUAL: secret cp — copy a secret" {
    make-store
    run "$KEEP" secret cp web/github web/github-copy
    [ "$status" -eq 0 ]
    [ "$(pass show web/github | head -1)"      = "s3cr3t" ]
    [ "$(pass show web/github-copy | head -1)" = "s3cr3t" ]
    [[ $(git -C "$KEEP_STORE_DIR" log -1 --format=%s) == "Copy web/github to web/github-copy"* ]]
}

@test "secret cp: --force overwrites" {
    make-store
    run "$KEEP" secret cp -f mail/work web/github
    [ "$status" -eq 0 ]
    [ "$(pass show web/github)" = "other" ]
}

@test "secret cp --help: works without a store" {
    run "$KEEP" secret cp --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret cp"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret cp
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret cp"* ]]
}

@test "secret cp: no store fails and creates nothing" {
    run "$KEEP" secret cp web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

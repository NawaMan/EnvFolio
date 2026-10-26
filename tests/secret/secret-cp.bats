#!/usr/bin/env bats

# folio cp secret, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$FOLIO" insert secret -m mail/work  < <(printf 'other\n')              >/dev/null
}

@test "MANUAL: cp secret — copy a secret" {
    make-store
    run "$FOLIO" cp secret web/github web/github-copy
    [ "$status" -eq 0 ]
    [ "$(pass show web/github | head -1)"      = "s3cr3t" ]
    [ "$(pass show web/github-copy | head -1)" = "s3cr3t" ]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) == "Copy web/github to web/github-copy"* ]] || false
}

@test "cp secret: --force overwrites" {
    make-store
    run "$FOLIO" cp secret -f mail/work web/github
    [ "$status" -eq 0 ]
    [ "$(pass show web/github)" = "other" ]
}

@test "cp secret --help: works without a store" {
    run "$FOLIO" cp secret --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio cp secret"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help cp secret
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio cp secret"* ]] || false
}

@test "cp secret: no store fails and creates nothing" {
    run "$FOLIO" cp secret web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

#!/usr/bin/env bats

# folio secret grep, through the real ./folio, against a throwaway GPG home and store.

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
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$FOLIO" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
}

@test "MANUAL: secret grep — find by value" {
    make-store
    run "$FOLIO" secret grep jane
    [ "$status" -eq 0 ]
    [[ $output == *"github"*"user: "*"jane"* ]]
    [[ $output != *"work"* && $output != *"s3cr3t"* ]]
}

@test "secret grep: grep's options go to grep" {
    make-store
    run "$FOLIO" secret grep -i JANE
    [ "$status" -eq 0 ]
    [[ $output == *"jane"* ]]
}

@test "secret grep: no match prints nothing" {
    make-store
    run "$FOLIO" secret grep nothing-like-this
    [ -z "$output" ]
}

@test "secret grep --help: works without a store" {
    run "$FOLIO" secret grep --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret grep"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help secret grep
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret grep"* ]]
}

@test "secret grep: no store fails and creates nothing" {
    run "$FOLIO" secret grep web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

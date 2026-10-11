#!/usr/bin/env bats

# folio secret insert, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
}

@test "MANUAL: secret insert — pipe a secret in" {
    make-store
    run "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* ]]
    [ -f "$FOLIO_STORE_DIR/web/github.gpg" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) == *"web/github"* ]]
}

@test "MANUAL: secret insert — several lines" {
    make-store
    run "$FOLIO" secret insert -m note < <(printf 'line one\nline two\n')
    [ "$status" -eq 0 ]
    [ "$(pass show note)" = $'line one\nline two' ]
}

@test "secret insert: two different lines do not match, nothing is saved" {
    make-store
    run "$FOLIO" secret insert one < <(printf 'first\nsecond\n')
    [ "$status" -ne 0 ]
    [[ $output == *"do not match"* ]]
    [ ! -e "$FOLIO_STORE_DIR/one.gpg" ]
}

@test "secret insert: --force overwrites" {
    make-store
    "$FOLIO" secret insert -m dup < <(printf 'old\n')
    run "$FOLIO" secret insert -f -m dup < <(printf 'new\n')
    [ "$status" -eq 0 ]
    [ "$(pass show dup)" = "new" ]
}

@test "secret insert: --echo is refused, in any spelling" {
    make-store
    local arg
    for arg in --echo -e -fe -em; do
        run "$FOLIO" secret insert "$arg" x < <(printf 'x\n')
        [ "$status" -eq 1 ]
        [[ $output == *"--echo is not offered"* ]]
    done
    [ ! -e "$FOLIO_STORE_DIR/x.gpg" ]
}

@test "secret insert: a name after -- is not an option" {
    make-store
    run "$FOLIO" secret insert -m -- -e < <(printf 'x\n')
    [ "$status" -eq 0 ]
    [ "$(pass show -- -e)" = "x" ]
}

@test "secret insert: no store fails and creates nothing" {
    run "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio store init"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "secret insert: an unfinished store fails" {
    mkdir -p "$FOLIO_STORE_DIR"
    run "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]]
}

@test "secret insert: bad arguments get pass's usage" {
    make-store
    run "$FOLIO" secret insert < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
    run "$FOLIO" secret insert a b < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
}

@test "secret insert --help: works without a store" {
    run "$FOLIO" secret insert --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret insert"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

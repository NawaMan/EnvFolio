#!/usr/bin/env bats

# envfolio secret insert, through the real ./envfolio, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$ENVFOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
}

@test "MANUAL: secret insert — pipe a secret in" {
    make-store
    run "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* ]]
    [ -f "$ENVFOLIO_STORE_DIR/web/github.gpg" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [[ $(git -C "$ENVFOLIO_STORE_DIR" log -1 --format=%s) == *"web/github"* ]]
}

@test "MANUAL: secret insert — several lines" {
    make-store
    run "$ENVFOLIO" secret insert -m note < <(printf 'line one\nline two\n')
    [ "$status" -eq 0 ]
    [ "$(pass show note)" = $'line one\nline two' ]
}

@test "secret insert: two different lines do not match, nothing is saved" {
    make-store
    run "$ENVFOLIO" secret insert one < <(printf 'first\nsecond\n')
    [ "$status" -ne 0 ]
    [[ $output == *"do not match"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR/one.gpg" ]
}

@test "secret insert: --force overwrites" {
    make-store
    "$ENVFOLIO" secret insert -m dup < <(printf 'old\n')
    run "$ENVFOLIO" secret insert -f -m dup < <(printf 'new\n')
    [ "$status" -eq 0 ]
    [ "$(pass show dup)" = "new" ]
}

@test "secret insert: --echo is refused, in any spelling" {
    make-store
    local arg
    for arg in --echo -e -fe -em; do
        run "$ENVFOLIO" secret insert "$arg" x < <(printf 'x\n')
        [ "$status" -eq 1 ]
        [[ $output == *"--echo is not offered"* ]]
    done
    [ ! -e "$ENVFOLIO_STORE_DIR/x.gpg" ]
}

@test "secret insert: a name after -- is not an option" {
    make-store
    run "$ENVFOLIO" secret insert -m -- -e < <(printf 'x\n')
    [ "$status" -eq 0 ]
    [ "$(pass show -- -e)" = "x" ]
}

@test "secret insert: no store fails and creates nothing" {
    run "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "secret insert: an unfinished store fails" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    run "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]]
}

@test "secret insert: bad arguments get pass's usage" {
    make-store
    run "$ENVFOLIO" secret insert < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
    run "$ENVFOLIO" secret insert a b < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
}

@test "secret insert --help: works without a store" {
    run "$ENVFOLIO" secret insert --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio secret insert"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

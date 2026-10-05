#!/usr/bin/env bats

# keep secret insert, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
}

@test "MANUAL: secret insert — pipe a secret in" {
    make-store
    run "$KEEP" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* ]]
    [ -f "$KEEP_STORE_DIR/web/github.gpg" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [[ $(git -C "$KEEP_STORE_DIR" log -1 --format=%s) == *"web/github"* ]]
}

@test "MANUAL: secret insert — several lines" {
    make-store
    run "$KEEP" secret insert -m note < <(printf 'line one\nline two\n')
    [ "$status" -eq 0 ]
    [ "$(pass show note)" = $'line one\nline two' ]
}

@test "secret insert: two different lines do not match, nothing is saved" {
    make-store
    run "$KEEP" secret insert one < <(printf 'first\nsecond\n')
    [ "$status" -ne 0 ]
    [[ $output == *"do not match"* ]]
    [ ! -e "$KEEP_STORE_DIR/one.gpg" ]
}

@test "secret insert: --force overwrites" {
    make-store
    "$KEEP" secret insert -m dup < <(printf 'old\n')
    run "$KEEP" secret insert -f -m dup < <(printf 'new\n')
    [ "$status" -eq 0 ]
    [ "$(pass show dup)" = "new" ]
}

@test "secret insert: --echo is refused, in any spelling" {
    make-store
    local arg
    for arg in --echo -e -fe -em; do
        run "$KEEP" secret insert "$arg" x < <(printf 'x\n')
        [ "$status" -eq 1 ]
        [[ $output == *"--echo is not offered"* ]]
    done
    [ ! -e "$KEEP_STORE_DIR/x.gpg" ]
}

@test "secret insert: a name after -- is not an option" {
    make-store
    run "$KEEP" secret insert -m -- -e < <(printf 'x\n')
    [ "$status" -eq 0 ]
    [ "$(pass show -- -e)" = "x" ]
}

@test "secret insert: no store fails and creates nothing" {
    run "$KEEP" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "secret insert: an unfinished store fails" {
    mkdir -p "$KEEP_STORE_DIR"
    run "$KEEP" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"* ]]
}

@test "secret insert: bad arguments get pass's usage" {
    make-store
    run "$KEEP" secret insert < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
    run "$KEEP" secret insert a b < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]]
}

@test "secret insert --help: works without a store" {
    run "$KEEP" secret insert --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret insert"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

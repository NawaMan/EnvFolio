#!/usr/bin/env bats

# folio insert secret, through the real ./folio, against a throwaway GPG home and store.

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
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
}

@test "MANUAL: insert secret — pipe a secret in" {
    make-store
    run "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* ]] || false
    [ -f "$FOLIO_STORE_DIR/web/github.gpg" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) == *"web/github"* ]] || false
}

@test "MANUAL: insert secret — several lines" {
    make-store
    run "$FOLIO" insert secret -m note < <(printf 'line one\nline two\n')
    [ "$status" -eq 0 ]
    [ "$(pass show note)" = $'line one\nline two' ]
}

@test "insert secret: two different lines do not match, nothing is saved" {
    make-store
    run "$FOLIO" insert secret one < <(printf 'first\nsecond\n')
    [ "$status" -ne 0 ]
    [[ $output == *"do not match"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/one.gpg" ]
}

@test "insert secret: --force overwrites" {
    make-store
    "$FOLIO" insert secret -m dup < <(printf 'old\n')
    run "$FOLIO" insert secret -f -m dup < <(printf 'new\n')
    [ "$status" -eq 0 ]
    [ "$(pass show dup)" = "new" ]
}

@test "insert secret: --echo is refused, in any spelling" {
    make-store
    local arg
    for arg in --echo -e -fe -em; do
        run "$FOLIO" insert secret "$arg" x < <(printf 'x\n')
        [ "$status" -eq 1 ]
        [[ $output == *"--echo is not offered"* ]] || false
    done
    [ ! -e "$FOLIO_STORE_DIR/x.gpg" ]
}

@test "insert secret: a name after -- is not an option" {
    make-store
    run "$FOLIO" insert secret -m -- -e < <(printf 'x\n')
    [ "$status" -eq 0 ]
    [ "$(pass show -- -e)" = "x" ]
}

@test "insert secret: no store fails and creates nothing" {
    run "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "insert secret: an unfinished store fails" {
    mkdir -p "$FOLIO_STORE_DIR"
    run "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]] || false
}

@test "insert secret: bad arguments get pass's usage" {
    make-store
    run "$FOLIO" insert secret < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]] || false
    run "$FOLIO" insert secret a b < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"Usage:"*"insert"* ]] || false
}

@test "insert secret --help: works without a store" {
    run "$FOLIO" insert secret --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio insert secret"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

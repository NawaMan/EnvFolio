#!/usr/bin/env bats

# folio ls secret, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" insert secret -m note       < <(printf 'n0te\n')   >/dev/null
}

@test "MANUAL: ls secret — list every secret" {
    make-store
    run "$FOLIO" ls secret
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Secret Store" ]
    [[ $output != *"Password Store"* ]] || false
    [[ $output == *"web"*"github"* ]] || false
    [[ $output == *"note"* ]] || false
    [[ $output != *"s3cr3t"* && $output != *"n0te"* ]] || false
}

@test "MANUAL: ls secret — list one folder" {
    make-store
    run "$FOLIO" ls secret web
    [ "$status" -eq 0 ]
    [[ $output == *"github"* ]] || false
    [[ $output != *"note"* && $output != *"s3cr3t"* ]] || false
}

@test "ls secret: a secret's name is refused, its value never shown" {
    make-store
    run "$FOLIO" ls secret web/github
    [ "$status" -eq 1 ]
    [[ $output == *"not a folder"* ]] || false
    [[ $output != *"s3cr3t"* ]] || false
}

@test "ls secret: pass's options are refused" {
    make-store
    local arg
    for arg in -c --clip --qrcode -q; do
        run "$FOLIO" ls secret "$arg" web/github
        [ "$status" -eq 1 ]
        [[ $output != *"s3cr3t"* ]] || false
        run "$FOLIO" ls secret "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"not a folder"* ]] || false
    done
}

@test "ls secret: an unknown folder fails" {
    make-store
    run "$FOLIO" ls secret nope
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not a folder"* ]] || false
}

@test "ls secret: no store fails and creates nothing" {
    run "$FOLIO" ls secret
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "ls secret --help: works without a store" {
    run "$FOLIO" ls secret --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls secret"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help ls secret
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls secret"* ]] || false
}

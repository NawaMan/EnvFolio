#!/usr/bin/env bats

# keep secret ls, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$KEEP" secret insert -m note       < <(printf 'n0te\n')   >/dev/null
}

@test "MANUAL: secret ls — list every secret" {
    make-store
    run "$KEEP" secret ls
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Secret Store" ]
    [[ $output != *"Password Store"* ]]
    [[ $output == *"web"*"github"* ]]
    [[ $output == *"note"* ]]
    [[ $output != *"s3cr3t"* && $output != *"n0te"* ]]
}

@test "MANUAL: secret ls — list one folder" {
    make-store
    run "$KEEP" secret ls web
    [ "$status" -eq 0 ]
    [[ $output == *"github"* ]]
    [[ $output != *"note"* && $output != *"s3cr3t"* ]]
}

@test "secret ls: a secret's name is refused, its value never shown" {
    make-store
    run "$KEEP" secret ls web/github
    [ "$status" -eq 1 ]
    [[ $output == *"not a folder"* ]]
    [[ $output != *"s3cr3t"* ]]
}

@test "secret ls: pass's options are refused" {
    make-store
    local arg
    for arg in -c --clip --qrcode -q; do
        run "$KEEP" secret ls "$arg" web/github
        [ "$status" -eq 1 ]
        [[ $output != *"s3cr3t"* ]]
        run "$KEEP" secret ls "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"not a folder"* ]]
    done
}

@test "secret ls: an unknown folder fails" {
    make-store
    run "$KEEP" secret ls nope
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not a folder"* ]]
}

@test "secret ls: no store fails and creates nothing" {
    run "$KEEP" secret ls
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "secret ls --help: works without a store" {
    run "$KEEP" secret ls --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret ls"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret ls
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret ls"* ]]
}

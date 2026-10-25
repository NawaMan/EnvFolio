#!/usr/bin/env bats

# folio secret rm, through the real ./folio, against a throwaway GPG home and store.

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

@test "MANUAL: secret rm — remove a secret" {
    make-store
    run "$FOLIO" secret rm -f mail/work
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/mail/work.gpg" ]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) == "Remove mail/work"* ]] || false
}

@test "secret rm: --recursive removes a folder" {
    make-store
    run "$FOLIO" secret rm -rf web
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/web" ]
}

@test "secret rm: an unknown name fails" {
    make-store
    run "$FOLIO" secret rm -f nope
    [ "$status" -ne 0 ]
    [[ $output == *"not in the password store"* ]] || false
}

@test "secret rm --help: works without a store" {
    run "$FOLIO" secret rm --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret rm"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help secret rm
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret rm"* ]] || false
}

@test "secret rm: no store fails and creates nothing" {
    run "$FOLIO" secret rm web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

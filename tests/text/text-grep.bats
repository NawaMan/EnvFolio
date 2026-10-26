#!/usr/bin/env bats

# folio grep text, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store holding texts web/user, note (two lines) and web/home, and a secret web/github
# whose value also says "jane".
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t jane                  web/user < /dev/null
    "$FOLIO" insert text -m                       note     < <(printf 'call Jane\nbuy milk\n')
    "$FOLIO" insert text -t "https://example.com" web/home < /dev/null
    "$FOLIO" insert secret -m web/github < <(printf 'jane-s3cr3t\n') >/dev/null
}

# The output with the colours taken out (grep also writes \e[K next to them).
plain() { printf '%s\n' "$output" | sed -E $'s/\e\\[[0-9;]*[mK]//g' ; }

@test "MANUAL: grep text — find by value" {
    make-store
    run "$FOLIO" grep text jane
    [ "$status" -eq 0 ]
    [ "$(plain)" = "web/user:
jane" ]
}

@test "grep text: grep options go through, matching lines only" {
    make-store
    run "$FOLIO" grep text -i jane
    [ "$status" -eq 0 ]
    [[ $(plain) == *"web/user:"$'\n'"jane"* ]] || false
    [[ $(plain) == *"note:"$'\n'"call Jane"* ]] || false
    [[ $output != *"buy milk"* ]] || false
}

@test "grep text: texts without a match are left out" {
    make-store
    run "$FOLIO" grep text milk
    [ "$status" -eq 0 ]
    [ "$(plain)" = "note:
buy milk" ]
}

@test "grep text: secrets and signatures are never searched" {
    make-store
    run "$FOLIO" grep text -i -e s3cr3t -e github -e PGP -e sig
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "grep text: no match is not an error" {
    make-store
    run "$FOLIO" grep text nothing-like-this
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "grep text: no pattern gets the usage" {
    make-store
    run "$FOLIO" grep text
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio grep text"* ]] || false
}

@test "grep text: no store fails and creates nothing" {
    run "$FOLIO" grep text jane
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "grep text --help: works without a store" {
    run "$FOLIO" grep text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio grep text"* ]] || false
    run "$FOLIO" help grep text
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio grep text"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

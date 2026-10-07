#!/usr/bin/env bats

# envfolio text grep, through the real ./envfolio, against a throwaway GPG home and store.

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

# A ready store holding texts web/user, note (two lines) and web/home, and a secret web/github
# whose value also says "jane".
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t jane                  web/user < /dev/null
    "$ENVFOLIO" text insert -m                       note     < <(printf 'call Jane\nbuy milk\n')
    "$ENVFOLIO" text insert -t "https://example.com" web/home < /dev/null
    "$ENVFOLIO" secret insert -m web/github < <(printf 'jane-s3cr3t\n') >/dev/null
}

# The output with the colours taken out (grep also writes \e[K next to them).
plain() { printf '%s\n' "$output" | sed -E $'s/\e\\[[0-9;]*[mK]//g' ; }

@test "MANUAL: text grep — find by value" {
    make-store
    run "$ENVFOLIO" text grep jane
    [ "$status" -eq 0 ]
    [ "$(plain)" = "web/user:
jane" ]
}

@test "text grep: grep options go through, matching lines only" {
    make-store
    run "$ENVFOLIO" text grep -i jane
    [ "$status" -eq 0 ]
    [[ $(plain) == *"web/user:"$'\n'"jane"* ]]
    [[ $(plain) == *"note:"$'\n'"call Jane"* ]]
    [[ $output != *"buy milk"* ]]
}

@test "text grep: texts without a match are left out" {
    make-store
    run "$ENVFOLIO" text grep milk
    [ "$status" -eq 0 ]
    [ "$(plain)" = "note:
buy milk" ]
}

@test "text grep: secrets and signatures are never searched" {
    make-store
    run "$ENVFOLIO" text grep -i -e s3cr3t -e github -e PGP -e sig
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "text grep: no match is not an error" {
    make-store
    run "$ENVFOLIO" text grep nothing-like-this
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "text grep: no pattern gets the usage" {
    make-store
    run "$ENVFOLIO" text grep
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio text grep"* ]]
}

@test "text grep: no store fails and creates nothing" {
    run "$ENVFOLIO" text grep jane
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "text grep --help: works without a store" {
    run "$ENVFOLIO" text grep --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text grep"* ]]
    run "$ENVFOLIO" help text grep
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text grep"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

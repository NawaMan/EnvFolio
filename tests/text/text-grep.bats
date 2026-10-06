#!/usr/bin/env bats

# keep text grep, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store holding texts web/user, note (two lines) and web/home, and a secret web/github
# whose value also says "jane".
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t jane                  web/user < /dev/null
    "$KEEP" text insert -m                       note     < <(printf 'call Jane\nbuy milk\n')
    "$KEEP" text insert -t "https://example.com" web/home < /dev/null
    "$KEEP" secret insert -m web/github < <(printf 'jane-s3cr3t\n') >/dev/null
}

# The output with the colours taken out (grep also writes \e[K next to them).
plain() { printf '%s\n' "$output" | sed -E $'s/\e\\[[0-9;]*[mK]//g' ; }

@test "MANUAL: text grep — find by value" {
    make-store
    run "$KEEP" text grep jane
    [ "$status" -eq 0 ]
    [ "$(plain)" = "web/user:
jane" ]
}

@test "text grep: grep options go through, matching lines only" {
    make-store
    run "$KEEP" text grep -i jane
    [ "$status" -eq 0 ]
    [[ $(plain) == *"web/user:"$'\n'"jane"* ]]
    [[ $(plain) == *"note:"$'\n'"call Jane"* ]]
    [[ $output != *"buy milk"* ]]
}

@test "text grep: texts without a match are left out" {
    make-store
    run "$KEEP" text grep milk
    [ "$status" -eq 0 ]
    [ "$(plain)" = "note:
buy milk" ]
}

@test "text grep: secrets and signatures are never searched" {
    make-store
    run "$KEEP" text grep -i -e s3cr3t -e github -e PGP -e sig
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "text grep: no match is not an error" {
    make-store
    run "$KEEP" text grep nothing-like-this
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "text grep: no pattern gets the usage" {
    make-store
    run "$KEEP" text grep
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text grep"* ]]
}

@test "text grep: no store fails and creates nothing" {
    run "$KEEP" text grep jane
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text grep --help: works without a store" {
    run "$KEEP" text grep --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text grep"* ]]
    run "$KEEP" help text grep
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text grep"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

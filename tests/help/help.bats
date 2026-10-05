#!/usr/bin/env bats

# Help text, through the real ./keep. Help must never touch the store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    KEEP="$BATS_TEST_DIRNAME/../../keep"
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "MANUAL: help — list the commands" {
    run "$KEEP" help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep <command>"* ]]
    [[ $output == *"store init"* ]]
}

@test "keep help: unknown topic fails" {
    run "$KEEP" help nope
    [ "$status" -eq 1 ]
    [[ $output == *"no help for 'nope'"* ]]
}

@test "store init --help: shows help, exits 0, makes no store" {
    run "$KEEP" store init --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep store init"* ]]
    [[ $output == *"--passphrase-stdin"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "store init -h: same as --help, even after other options" {
    run "$KEEP" store init --help
    local long=$output
    run "$KEEP" store init --key someone -h < /dev/null
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "MANUAL: help — help for one command" {
    run "$KEEP" store init --help
    local long=$output
    run "$KEEP" help store init
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
}

@test "store init: an unknown option shows the usage" {
    run "$KEEP" store init --nope < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [[ $output == *"Usage: keep store init"* ]]
}

@test "keep help secret insert: shows help without a store" {
    run "$KEEP" help secret insert < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret insert"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

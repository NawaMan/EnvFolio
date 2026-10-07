#!/usr/bin/env bats

# Help text, through the real ./envfolio. Help must never touch the store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "MANUAL: help — list the commands" {
    run "$ENVFOLIO" help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio <command>"* ]]
    [[ $output == *"store init"* ]]
}

@test "envfolio help: unknown topic fails" {
    run "$ENVFOLIO" help nope
    [ "$status" -eq 1 ]
    [[ $output == *"no help for 'nope'"* ]]
}

@test "store init --help: shows help, exits 0, makes no store" {
    run "$ENVFOLIO" store init --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio store init"* ]]
    [[ $output == *"--passphrase-stdin"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store init -h: same as --help, even after other options" {
    run "$ENVFOLIO" store init --help
    local long=$output
    run "$ENVFOLIO" store init --key someone -h < /dev/null
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "MANUAL: help — help for one command" {
    run "$ENVFOLIO" store init --help
    local long=$output
    run "$ENVFOLIO" help store init
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
}

@test "store init: an unknown option shows the usage" {
    run "$ENVFOLIO" store init --nope < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [[ $output == *"Usage: envfolio store init"* ]]
}

@test "MANUAL: store path — print the store's folder" {
    run "$ENVFOLIO" store path
    [ "$status" -eq 0 ]
    [ "$output" = "$ENVFOLIO_STORE_DIR" ]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store path --help: the same as envfolio help store path, without a store" {
    run "$ENVFOLIO" store path --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio store path"* ]]
    local long=$output
    run "$ENVFOLIO" help store path
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    run "$ENVFOLIO" store path extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio store path"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "envfolio help secret insert: shows help without a store" {
    run "$ENVFOLIO" help secret insert < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio secret insert"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

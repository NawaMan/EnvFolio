#!/usr/bin/env bats

# Help text, through the real ./folio. Help must never touch the store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "MANUAL: help — list the commands" {
    run "$FOLIO" help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio <command>"* ]]
    [[ $output == *"store init"* ]]
}

@test "folio help: unknown topic fails" {
    run "$FOLIO" help nope
    [ "$status" -eq 1 ]
    [[ $output == *"no help for 'nope'"* ]]
}

@test "store init --help: shows help, exits 0, makes no store" {
    run "$FOLIO" store init --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio store init"* ]]
    [[ $output == *"--passphrase-stdin"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "store init -h: same as --help, even after other options" {
    run "$FOLIO" store init --help
    local long=$output
    run "$FOLIO" store init --key someone -h < /dev/null
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "MANUAL: help — help for one command" {
    run "$FOLIO" store init --help
    local long=$output
    run "$FOLIO" help store init
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
}

@test "store init: an unknown option shows the usage" {
    run "$FOLIO" store init --nope < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [[ $output == *"Usage: folio store init"* ]]
}

@test "MANUAL: store path — print the store's folder" {
    run "$FOLIO" store path
    [ "$status" -eq 0 ]
    [ "$output" = "$FOLIO_STORE_DIR" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "store path --help: the same as folio help store path, without a store" {
    run "$FOLIO" store path --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio store path"* ]]
    local long=$output
    run "$FOLIO" help store path
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    run "$FOLIO" store path extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio store path"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "folio help secret insert: shows help without a store" {
    run "$FOLIO" help secret insert < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret insert"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

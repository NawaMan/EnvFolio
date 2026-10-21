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
    [[ $output == *"  init "* ]]
}

@test "folio help: unknown topic fails" {
    run "$FOLIO" help nope
    [ "$status" -eq 1 ]
    [[ $output == *"no help for 'nope'"* ]]
}

@test "init --help: shows help, exits 0, makes no store" {
    run "$FOLIO" init --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio init"* ]]
    [[ $output == *"--store-passphrase-stdin"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "init -h: same as --help, even after other options" {
    run "$FOLIO" init --help
    local long=$output
    run "$FOLIO" init --key someone -h < /dev/null
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "MANUAL: help — help for one command" {
    run "$FOLIO" init --help
    local long=$output
    run "$FOLIO" help init
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
}

@test "init: an unknown option shows the usage" {
    run "$FOLIO" init --nope < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [[ $output == *"Usage: folio init"* ]]
}

@test "MANUAL: path — print the store's folder" {
    run "$FOLIO" path
    [ "$status" -eq 0 ]
    [ "$output" = "$FOLIO_STORE_DIR" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "path --help: the same as folio help path, without a store" {
    run "$FOLIO" path --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio path"* ]]
    local long=$output
    run "$FOLIO" help path
    [ "$status" -eq 0 ]
    [ "$output" = "$long" ]
    run "$FOLIO" path extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio path"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "folio help secret insert: shows help without a store" {
    run "$FOLIO" help secret insert < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret insert"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "folio store <command>: gone since 0.5.0 — says what to run instead, touches nothing" {
    run "$FOLIO" store init
    [ "$status" -eq 1 ]
    [[ $output == *'there is no `folio store` any more: run `folio init`.'* ]]
    run "$FOLIO" store
    [ "$status" -eq 1 ]
    [[ $output == *'its commands are `folio init`'* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

#!/usr/bin/env bats

# store-exists only looks at files, so no pass or GPG is needed — just a throwaway folder.

setup() {
    SANDBOX=$(mktemp -d)
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    # shellcheck source=SCRIPTDIR/../../envfolio
    source "$BATS_TEST_DIRNAME/../../envfolio"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "store-path: a relative ENVFOLIO_STORE_DIR becomes absolute" {
    cd "$SANDBOX"
    ENVFOLIO_STORE_DIR=rel/store source "$BATS_TEST_DIRNAME/../../envfolio"
    [ "$STORE_PATH" = "$SANDBOX/rel/store" ]
    [ "$PASSWORD_STORE_DIR" = "$SANDBOX/rel/store" ]
    [ "$(store-path)" = "$SANDBOX/rel/store" ]
}

@test "store-exists: no folder returns 1" {
    run store-exists
    [ "$status" -eq 1 ]
    [ -z "$output" ]
}

@test "store-exists: folder without .gpg-id returns 2" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: empty .gpg-id returns 2" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    : > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: .gpg-id without a git history returns 2" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: folder with .gpg-id and a git history returns 0" {
    mkdir -p "$ENVFOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 0 ]
}

@test "store-init: refuses when the store already exists" {
    mkdir -p "$ENVFOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]]
}

@test "store-init: refuses a non-empty folder that is not a store" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    echo "someone else's file" > "$ENVFOLIO_STORE_DIR/notes.txt"
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
}

@test "store-init: refuses an unfinished store (no git history)" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
}

@test "store-init: refuses an empty folder" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
    [ -z "$(ls -A "$ENVFOLIO_STORE_DIR")" ]
}

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
    [ "$(StorePath)" = "$SANDBOX/rel/store" ]
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
    run StoreInit
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]]
}

@test "store-init: refuses a non-empty folder that is not a store" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    echo "someone else's file" > "$ENVFOLIO_STORE_DIR/notes.txt"
    run StoreInit
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
}

@test "store-init: refuses an unfinished store (no git history)" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    run StoreInit
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
}

@test "store-init: refuses a folder with only a hidden file" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    : > "$ENVFOLIO_STORE_DIR/.keep"
    run StoreInit
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]]
    [ "$(ls -A "$ENVFOLIO_STORE_DIR")" = ".keep" ]
}

@test "is-empty-dir: an empty folder only" {
    run is-empty-dir "$ENVFOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    mkdir -p "$ENVFOLIO_STORE_DIR"
    is-empty-dir "$ENVFOLIO_STORE_DIR"
    : > "$ENVFOLIO_STORE_DIR/.keep"
    run is-empty-dir "$ENVFOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    : > "$SANDBOX/file"
    run is-empty-dir "$SANDBOX/file"
    [ "$status" -eq 1 ]
}

@test "is-private-dir: 700 is private; group or other bits are not; a link is followed" {
    mkdir -p "$ENVFOLIO_STORE_DIR"
    chmod 700 "$ENVFOLIO_STORE_DIR"
    is-private-dir "$ENVFOLIO_STORE_DIR"
    ln -s "$ENVFOLIO_STORE_DIR" "$SANDBOX/link"
    is-private-dir "$SANDBOX/link"
    chmod 750 "$ENVFOLIO_STORE_DIR"
    run is-private-dir "$ENVFOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    chmod 701 "$ENVFOLIO_STORE_DIR"
    run is-private-dir "$ENVFOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    run is-private-dir "$SANDBOX/missing"
    [ "$status" -eq 1 ]
}

@test "require-store: warns once when other users can get into the store" {
    mkdir -p "$ENVFOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$ENVFOLIO_STORE_DIR/.gpg-id"
    chmod 755 "$ENVFOLIO_STORE_DIR"
    run require-store
    [ "$status" -eq 0 ]
    [[ $output == *"warning: other users can get into $ENVFOLIO_STORE_DIR"*"chmod 700 $ENVFOLIO_STORE_DIR"* ]]
    run bash -c 'source "$1"; require-store; require-store' _ "$BATS_TEST_DIRNAME/../../envfolio"
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    chmod 700 "$ENVFOLIO_STORE_DIR"
    run require-store
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "warn-unsafe-store: warns when the folder belongs to someone else, and carries on" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 700 "$ENVFOLIO_STORE_DIR"
    is-own-dir() { return 1; }
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [[ $output == *"warning: $ENVFOLIO_STORE_DIR belongs to "*", not to you"* ]]
    [[ $output != *"other users can get into"* ]]
}

@test "warn-unsafe-store: both warnings" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    is-own-dir() { return 1; }
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [[ $output == *"belongs to "*"other users can get into"* ]]
}

@test "warn-unsafe-store: no folder yet, nothing to say" {
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "accept-unsafe-store: a safe folder, nothing asked" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 700 "$ENVFOLIO_STORE_DIR"
    run accept-unsafe-store 0 0 < /dev/null
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "accept-unsafe-store: an unsafe folder is warned about and asked; yes goes on, anything else stops" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run accept-unsafe-store 0 0 < <(echo y)
    [ "$status" -eq 0 ]
    [[ $output == *"other users can get into"*"anyway? [y/N]"* ]]
    run accept-unsafe-store 0 0 < <(echo n)
    [ "$status" -eq 1 ]
    [[ $output == *"Not using $ENVFOLIO_STORE_DIR. Nothing changed. Add --allow-unsafe-folder"* ]]
    run accept-unsafe-store 0 0 < /dev/null
    [ "$status" -eq 1 ]
}

@test "accept-unsafe-store: allowed goes on without asking, still warning" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run accept-unsafe-store 1 0 < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"other users can get into"* && $output != *"[y/N]"* ]]
}

@test "accept-unsafe-store: stdin carrying a passphrase cannot answer: stops unless allowed" {
    mkdir -p "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run accept-unsafe-store 0 1 < <(echo y)
    [ "$status" -eq 1 ]
    [[ $output == *"stdin carries the passphrase"*"--allow-unsafe-folder"* && $output != *"[y/N]"* ]]
    run accept-unsafe-store 1 1 < <(echo y)
    [ "$status" -eq 0 ]
}

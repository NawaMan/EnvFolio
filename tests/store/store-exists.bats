#!/usr/bin/env bats

# store-exists only looks at files, so no pass or GPG is needed — just a throwaway folder.

setup() {
    SANDBOX=$(mktemp -d)
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    # shellcheck source=SCRIPTDIR/../../folio
    source "$BATS_TEST_DIRNAME/../../folio"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "store-path: a relative FOLIO_STORE_DIR becomes absolute" {
    cd "$SANDBOX"
    FOLIO_STORE_DIR=rel/store source "$BATS_TEST_DIRNAME/../../folio"
    [ "$STORE_PATH" = "$SANDBOX/rel/store" ]
    [ "$PASSWORD_STORE_DIR" = "$SANDBOX/rel/store" ]
    [ "$(Path)" = "$SANDBOX/rel/store" ]
}

@test "store-exists: no folder returns 1" {
    run store-exists
    [ "$status" -eq 1 ]
    [ -z "$output" ]
}

@test "store-exists: folder without .gpg-id returns 2" {
    mkdir -p "$FOLIO_STORE_DIR"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: empty .gpg-id returns 2" {
    mkdir -p "$FOLIO_STORE_DIR"
    : > "$FOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: .gpg-id without a git history returns 2" {
    mkdir -p "$FOLIO_STORE_DIR"
    echo "0123456789ABCDEF" > "$FOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 2 ]
}

@test "store-exists: folder with .gpg-id and a git history returns 0" {
    mkdir -p "$FOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$FOLIO_STORE_DIR/.gpg-id"
    run store-exists
    [ "$status" -eq 0 ]
}

@test "store-init: refuses when the store already exists" {
    mkdir -p "$FOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$FOLIO_STORE_DIR/.gpg-id"
    run Init
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]] || false
}

@test "store-init: refuses a non-empty folder that is not a store" {
    mkdir -p "$FOLIO_STORE_DIR"
    echo "someone else's file" > "$FOLIO_STORE_DIR/notes.txt"
    run Init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]] || false
}

@test "store-init: refuses an unfinished store (no git history)" {
    mkdir -p "$FOLIO_STORE_DIR"
    echo "0123456789ABCDEF" > "$FOLIO_STORE_DIR/.gpg-id"
    run Init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]] || false
}

@test "store-init: refuses a folder with only a hidden file" {
    mkdir -p "$FOLIO_STORE_DIR"
    : > "$FOLIO_STORE_DIR/.keep"
    run Init
    [ "$status" -eq 1 ]
    [[ $output == *"not a ready EnvFolio store"* ]] || false
    [ "$(ls -A "$FOLIO_STORE_DIR")" = ".keep" ]
}

@test "is-empty-dir: an empty folder only" {
    run is-empty-dir "$FOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    mkdir -p "$FOLIO_STORE_DIR"
    is-empty-dir "$FOLIO_STORE_DIR"
    : > "$FOLIO_STORE_DIR/.keep"
    run is-empty-dir "$FOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    : > "$SANDBOX/file"
    run is-empty-dir "$SANDBOX/file"
    [ "$status" -eq 1 ]
}

@test "is-private-dir: 700 is private; group or other bits are not; a link is followed" {
    mkdir -p "$FOLIO_STORE_DIR"
    chmod 700 "$FOLIO_STORE_DIR"
    is-private-dir "$FOLIO_STORE_DIR"
    ln -s "$FOLIO_STORE_DIR" "$SANDBOX/link"
    is-private-dir "$SANDBOX/link"
    chmod 750 "$FOLIO_STORE_DIR"
    run is-private-dir "$FOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    chmod 701 "$FOLIO_STORE_DIR"
    run is-private-dir "$FOLIO_STORE_DIR"
    [ "$status" -eq 1 ]
    run is-private-dir "$SANDBOX/missing"
    [ "$status" -eq 1 ]
}

@test "require-store: warns once when other users can get into the store" {
    mkdir -p "$FOLIO_STORE_DIR/.git"
    echo "0123456789ABCDEF" > "$FOLIO_STORE_DIR/.gpg-id"
    chmod 755 "$FOLIO_STORE_DIR"
    run require-store
    [ "$status" -eq 0 ]
    [[ $output == *"warning: other users can get into $FOLIO_STORE_DIR"*"chmod 700 $FOLIO_STORE_DIR"* ]] || false
    run bash -c 'source "$1"; require-store; require-store' _ "$BATS_TEST_DIRNAME/../../folio"
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    chmod 700 "$FOLIO_STORE_DIR"
    run require-store
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "warn-unsafe-store: warns when the folder belongs to someone else, and carries on" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 700 "$FOLIO_STORE_DIR"
    is-own-dir() { return 1; }
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [[ $output == *"warning: $FOLIO_STORE_DIR belongs to "*", not to you"* ]] || false
    [[ $output != *"other users can get into"* ]] || false
}

@test "warn-unsafe-store: both warnings" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 755 "$FOLIO_STORE_DIR"
    is-own-dir() { return 1; }
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [[ $output == *"belongs to "*"other users can get into"* ]] || false
}

@test "warn-unsafe-store: no folder yet, nothing to say" {
    run warn-unsafe-store
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "accept-unsafe-store: a safe folder, nothing asked" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 700 "$FOLIO_STORE_DIR"
    run accept-unsafe-store 0 0 < /dev/null
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "accept-unsafe-store: an unsafe folder is warned about and asked; yes goes on, anything else stops" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 755 "$FOLIO_STORE_DIR"
    run accept-unsafe-store 0 0 < <(echo y)
    [ "$status" -eq 0 ]
    [[ $output == *"other users can get into"*"anyway? [y/N]"* ]] || false
    run accept-unsafe-store 0 0 < <(echo n)
    [ "$status" -eq 1 ]
    [[ $output == *"Not using $FOLIO_STORE_DIR. Nothing changed. Add --allow-unsafe-folder"* ]] || false
    run accept-unsafe-store 0 0 < /dev/null
    [ "$status" -eq 1 ]
}

@test "accept-unsafe-store: allowed goes on without asking, still warning" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 755 "$FOLIO_STORE_DIR"
    run accept-unsafe-store 1 0 < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"other users can get into"* && $output != *"[y/N]"* ]] || false
}

@test "accept-unsafe-store: stdin carrying a passphrase cannot answer: stops unless allowed" {
    mkdir -p "$FOLIO_STORE_DIR" && chmod 755 "$FOLIO_STORE_DIR"
    run accept-unsafe-store 0 1 < <(echo y)
    [ "$status" -eq 1 ]
    [[ $output == *"stdin carries the passphrase"*"--allow-unsafe-folder"* && $output != *"[y/N]"* ]] || false
    run accept-unsafe-store 1 1 < <(echo y)
    [ "$status" -eq 0 ]
}

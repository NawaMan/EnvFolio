#!/usr/bin/env bats

# keep text edit, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store holding text web/user.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t jane web/user < /dev/null
}

# An $EDITOR that writes <text> into the file it is given, and notes that it ran.
fake-editor() {
    # shellcheck disable=SC2016  # $1 is the editor script's own argument
    printf '#!/bin/sh\ntouch "%s/editor-ran"\nprintf "%%s\\n" "%s" > "$1"\n' "$SANDBOX" "$1" > "$SANDBOX/editor"
    chmod +x "$SANDBOX/editor"
    export EDITOR="$SANDBOX/editor"
}

@test "MANUAL: text edit — edit a text" {
    make-store
    fake-editor "jane doe"
    run "$KEEP" text edit web/user
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show web/user)" = "jane doe" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Edit text for web/user using $EDITOR." ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
}

@test "text edit: the editor gets the current text" {
    make-store
    # shellcheck disable=SC2016  # $1 is the editor script's own argument
    printf '#!/bin/sh\ncp "$1" "%s/seen"\n' "$SANDBOX" > "$SANDBOX/editor"
    chmod +x "$SANDBOX/editor"
    EDITOR="$SANDBOX/editor" run "$KEEP" text edit web/user
    [ "$(cat "$SANDBOX/seen")" = "jane" ]
}

@test "text edit: a new name adds the text" {
    make-store
    fake-editor "fresh"
    run "$KEEP" text edit new/one
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show new/one)" = "fresh" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Add text for new/one using $EDITOR." ]
}

@test "text edit: an unchanged text is not saved again" {
    make-store
    local before ; before=$(git -C "$KEEP_STORE_DIR" rev-parse HEAD)
    EDITOR=true run "$KEEP" text edit web/user
    [ "$status" -eq 1 ]
    [[ $output == *"Text unchanged."* ]]
    [ "$(git -C "$KEEP_STORE_DIR" rev-parse HEAD)" = "$before" ]
}

@test "text edit: a new name not saved in the editor adds nothing" {
    make-store
    EDITOR=true run "$KEEP" text edit new/one
    [ "$status" -eq 1 ]
    [[ $output == *"Text not saved."* ]]
    [ ! -e "$KEEP_STORE_DIR/new/one.txt" ]
}

@test "text edit: a text changed outside Keep is not opened or re-signed" {
    make-store
    fake-editor "whatever"
    printf 'mallory\n' > "$KEEP_STORE_DIR/web/user.txt"
    run "$KEEP" text edit web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [ ! -e "$SANDBOX/editor-ran" ]
    [ "$(cat "$KEEP_STORE_DIR/web/user.txt")" = "mallory" ]
}

@test "text edit: the temporary copy is removed" {
    make-store
    export TMPDIR="$SANDBOX/tmp" ; mkdir "$TMPDIR"
    fake-editor "jane doe"
    run "$KEEP" text edit web/user
    [ "$status" -eq 0 ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "text edit: a name leaving the store, or bad arguments, are refused" {
    make-store
    fake-editor "x"
    local name
    for name in ../out a/../../out -c; do
        run "$KEEP" text edit "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
    done
    [ ! -e "$SANDBOX/editor-ran" ]
    run "$KEEP" text edit a b
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text edit"* ]]
}

@test "text edit: no store fails and creates nothing" {
    fake-editor "x"
    run "$KEEP" text edit web/user
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text edit --help: works without a store" {
    run "$KEEP" text edit --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text edit"* ]]
    run "$KEEP" help text edit
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text edit"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

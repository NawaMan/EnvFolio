#!/usr/bin/env bats

# keep secret edit, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$KEEP" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
}

# An $EDITOR that writes <text> into the file it is given.
fake-editor() {
    printf '#!/bin/sh\nprintf "%%s\\n" "%s" > "$1"\n' "$1" > "$SANDBOX/editor"
    chmod +x "$SANDBOX/editor"
    export EDITOR="$SANDBOX/editor"
}

@test "MANUAL: secret edit — edit a secret" {
    make-store
    fake-editor "n3w"
    run "$KEEP" secret edit web/github
    [ "$status" -eq 0 ]
    [ "$(pass show web/github)" = "n3w" ]
    [[ $(git -C "$KEEP_STORE_DIR" log -1 --format=%s) == "Edit password for web/github"* ]]
}

@test "secret edit: a new name adds the secret" {
    make-store
    fake-editor "fresh"
    run "$KEEP" secret edit new/one
    [ "$status" -eq 0 ]
    [ "$(pass show new/one)" = "fresh" ]
}

@test "secret edit: an unchanged secret is not saved again" {
    make-store
    export EDITOR=true
    run "$KEEP" secret edit web/github
    [ "$status" -ne 0 ]
    [[ $output == *"unchanged"* ]]
    [[ $(git -C "$KEEP_STORE_DIR" log -1 --format=%s) != "Edit"* ]]
}

@test "secret edit --help: works without a store" {
    run "$KEEP" secret edit --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret edit"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret edit
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret edit"* ]]
}

@test "secret edit: no store fails and creates nothing" {
    run "$KEEP" secret edit web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

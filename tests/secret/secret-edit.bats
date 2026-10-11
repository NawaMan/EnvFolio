#!/usr/bin/env bats

# folio secret edit, through the real ./folio, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$FOLIO" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
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
    run "$FOLIO" secret edit web/github
    [ "$status" -eq 0 ]
    [ "$(pass show web/github)" = "n3w" ]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) == "Edit password for web/github"* ]]
}

@test "secret edit: a new name adds the secret" {
    make-store
    fake-editor "fresh"
    run "$FOLIO" secret edit new/one
    [ "$status" -eq 0 ]
    [ "$(pass show new/one)" = "fresh" ]
}

@test "secret edit: an unchanged secret is not saved again" {
    make-store
    export EDITOR=true
    run "$FOLIO" secret edit web/github
    [ "$status" -ne 0 ]
    [[ $output == *"unchanged"* ]]
    [[ $(git -C "$FOLIO_STORE_DIR" log -1 --format=%s) != "Edit"* ]]
}

@test "secret edit --help: works without a store" {
    run "$FOLIO" secret edit --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret edit"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help secret edit
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret edit"* ]]
}

@test "secret edit: no store fails and creates nothing" {
    run "$FOLIO" secret edit web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio store init"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

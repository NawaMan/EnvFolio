#!/usr/bin/env bats

# tools/x-ray.sh, against a throwaway store, backup and exports: it tells how each is locked and
# what it holds, and never shows a secret value or a text's contents.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$KEEP_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$TMPDIR" "$SANDBOX/out" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there"
    [[ $KEEP_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    KEEP="$BATS_TEST_DIRNAME/../../keep"
    XRAY="$BATS_TEST_DIRNAME/../../tools/x-ray.sh"

    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "VISIBLE-TEXT" web/home < /dev/null >/dev/null
    "$KEEP" secret insert web/github < <(printf 'TOPSECRET\nTOPSECRET\n') >/dev/null
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# Nothing secret on screen, and nothing left behind.
shows-nothing-secret() {
    [[ $output != *TOPSECRET* && $output != *VISIBLE-TEXT* ]]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "x-ray: a store folder — each secret's key, each text's signer, never a value" {
    run "$XRAY" "$KEEP_STORE_DIR"
    [ "$status" -eq 0 ]
    [[ $output == *"(S) web/github"*"encrypted to "*"Test User <test@example.com>"* ]]
    [[ $output == *"(T) web/home"*"signed by "*"Test User <test@example.com>"*", verifies"* ]]
    shows-nothing-secret
}

@test "x-ray: a changed text does not verify" {
    echo "changed" > "$KEEP_STORE_DIR/web/home.txt"
    run "$XRAY" "$KEEP_STORE_DIR/web/home.txt.sig"
    [ "$status" -eq 0 ]
    [[ $output == *"DOES NOT VERIFY"* ]]
}

@test "x-ray: a backup — manifest, key, store" {
    "$KEEP" store backup "$SANDBOX/out" >/dev/null 2>&1
    run "$XRAY" "$SANDBOX"/out/*--keep.tar.gz
    [ "$status" -eq 0 ]
    [[ $output == *"keep-backup 1"* && $output == *"key.asc (a secret key; not shown)"* ]]
    [[ $output == *"(S) web/github"* && $output == *", verifies"* ]]
    [[ $output != *"BEGIN PGP"* ]]
    shows-nothing-secret
}

@test "x-ray: an export with a passphrase — locked, not opened without --open" {
    "$KEEP" store export -o "$SANDBOX/out/pw" --passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    run "$XRAY" "$SANDBOX/out/pw.keep"
    [ "$status" -eq 0 ]
    [[ $output == *"locked with a passphrase (AES256)"* && $output == *"--open to unlock it"* ]]
    [[ $output != *"keep-export 1"* ]]
    shows-nothing-secret
}

@test "x-ray: an export locked --to the server — opened there, with the export's own key inside" {
    GNUPGHOME="$SANDBOX/there" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    "$KEEP" store export -o "$SANDBOX/out/to" --secrets --to "$SANDBOX/server.asc" web < /dev/null >/dev/null 2>&1
    GNUPGHOME="$SANDBOX/there" run "$XRAY" --open "$SANDBOX/out/to.keep"
    [ "$status" -eq 0 ]
    [[ $output == *"encrypted to "*"Server <server@example.com>"* && $output == *"keep-export 1"* ]]
    [[ $output == *"(S) web/github"*"encrypted to "*"Keep export "* ]]
    [[ $output == *"(T) web/home"*"Keep export "*", verifies"* ]]
    shows-nothing-secret
    # Here, without the server's key, it cannot be opened.
    run "$XRAY" --open "$SANDBOX/out/to.keep"
    [ "$status" -eq 1 ]
    [[ $output == *"could not unlock it"* ]]
}

@test "x-ray: no file, an unknown kind, an unknown option" {
    run "$XRAY" "$SANDBOX/nope.gpg"
    [ "$status" -eq 1 ]
    [[ $output == *"no such file"* ]]
    echo hi > "$SANDBOX/x.zip"
    run "$XRAY" "$SANDBOX/x.zip"
    [ "$status" -eq 1 ]
    [[ $output == *"not a file x-ray knows"* ]]
    run "$XRAY" --nope
    [ "$status" -eq 1 ]
    run "$XRAY"
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: tools/x-ray.sh"* ]]
}

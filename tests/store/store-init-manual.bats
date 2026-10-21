#!/usr/bin/env bats

# The examples in MANUAL.md, `folio init` section — run through the real ./folio, in a
# throwaway GPG home and store. stdin is never a terminal here, so any prompt fails instead of
# waiting; the timeout turns a hang into a failure.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # shellcheck source=SCRIPTDIR/../../folio
    source "$FOLIO"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]

    gpg --batch --passphrase '' --quick-generate-key "Jane Doe <jane@example.com>" default default never 2>/dev/null
    JANE_FPR=$(list-secret-keys | cut -f1)
    [[ -n $JANE_FPR ]]
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

@test "MANUAL: init — use an existing key, no prompts" {
    run timeout 60 "$FOLIO" init --key jane@example.com < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/.gpg-id")" = "$JANE_FPR" ]
}

@test "MANUAL: init — create a new key, no prompts" {
    (umask 077; printf 'correct horse\n' > "$SANDBOX/passphrase-file")
    run timeout 120 "$FOLIO" init --name "Jane Doe" --email jane@example.com \
        --store-passphrase-stdin < "$SANDBOX/passphrase-file"
    [ "$status" -eq 0 ]
    local fpr
    fpr=$(cat "$FOLIO_STORE_DIR/.gpg-id")
    [ "$fpr" != "$JANE_FPR" ]
    [ "$(key-uid "$fpr")" = "Jane Doe <jane@example.com>" ]
    echo x | gpg --batch --pinentry-mode loopback --passphrase-file "$SANDBOX/passphrase-file" \
        --local-user "$fpr" --sign >/dev/null 2>&1
}

@test "MANUAL: init — use another store folder" {
    run timeout 60 env FOLIO_STORE_DIR="$SANDBOX/work-folio" "$FOLIO" init --key jane@example.com < /dev/null
    [ "$status" -eq 0 ]
    [ -s "$SANDBOX/work-folio/.gpg-id" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

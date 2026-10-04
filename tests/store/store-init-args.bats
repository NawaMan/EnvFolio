#!/usr/bin/env bats

# store-init's arguments, against a throwaway GPG home and store. No prompt may be reached: ask-text
# and select-key are replaced by stubs that fail.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"

    # shellcheck source=SCRIPTDIR/../../keep
    source "$BATS_TEST_DIRNAME/../../keep"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]

    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    TEST_FPR=$(list-secret-keys | cut -f1)
    [[ -n $TEST_FPR ]]

    # shellcheck disable=SC2317  # called by store-init
    ask-text()   { echo "unexpected prompt: $1" >&2; exit 1; }
    select-key() { echo "unexpected key menu"   >&2; exit 1; }
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

@test "store-init: an unknown option fails" {
    run store-init --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
}

@test "store-init: --key without a value fails" {
    run store-init --key
    [ "$status" -eq 1 ]
    [[ $output == *"--key needs a value"* ]]
}

@test "store-init: --key cannot go with new-key options" {
    run store-init --key "$TEST_FPR" --name Someone
    [ "$status" -eq 1 ]
    [[ $output == *"--key cannot be used"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "store-init: --passphrase-stdin needs --name and --email" {
    run store-init --passphrase-stdin --name Someone
    [ "$status" -eq 1 ]
    [[ $output == *"needs --name and --email"* ]]
}

@test "store-init: --key with no match fails" {
    run store-init --key nobody@nowhere.invalid
    [ "$status" -eq 1 ]
    [[ $output == *"No secret key matches"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "store-init: --key matching several keys fails" {
    gpg --batch --passphrase '' --quick-generate-key "Other User <other@example.com>" default default never 2>/dev/null
    run store-init --key example.com
    [ "$status" -eq 1 ]
    [[ $output == *"More than one secret key matches"* ]]
}

@test "store-init: --key=<email> uses that key without asking" {
    run store-init --key=test@example.com
    [ "$status" -eq 0 ]
    [ "$(cat "$KEEP_STORE_DIR/.gpg-id")" = "$TEST_FPR" ]
}

@test "store-init: a new key from --name, --email and --passphrase-stdin" {
    run store-init --name "New User" --email new@example.com --passphrase-stdin <<< "correct horse"
    [ "$status" -eq 0 ]
    local fpr
    fpr=$(cat "$KEEP_STORE_DIR/.gpg-id")
    [ "$fpr" != "$TEST_FPR" ]
    [ "$(key-uid "$fpr")" = "New User <new@example.com>" ]
    # The key is protected: a wrong passphrase cannot sign with it.
    if echo x | gpg --batch --pinentry-mode loopback --passphrase wrong --local-user "$fpr" --sign >/dev/null 2>&1; then
        false
    fi
    echo x | gpg --batch --pinentry-mode loopback --passphrase "correct horse" --local-user "$fpr" --sign >/dev/null 2>&1
}

@test "store-init: an empty passphrase on stdin fails" {
    run store-init --name "New User" --email new@example.com --passphrase-stdin < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase on stdin"* ]]
    [ ! -e "$KEEP_STORE_DIR/.gpg-id" ]
}

#!/usr/bin/env bats

# store-init's git history, against a throwaway GPG home and store, with no global git identity.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"                      # no ~/.gitconfig → no global identity
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

    # The real select-key is interactive; pick the throwaway key instead.
    eval "select-key() { printf '%s\n' '$TEST_FPR'; }"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

@test "key-uid: finds the user id of a fingerprint" {
    run key-uid "$TEST_FPR"
    [ "$status" -eq 0 ]
    [ "$output" = "Test User <test@example.com>" ]
}

@test "key-expiry: nothing for a key that never expires" {
    run key-expiry "$TEST_FPR"
    [ "$status" -eq 0 ]
    [ -z "$output" ]
}

@test "key-expiry: the date of a key that expires" {
    gpg --batch --passphrase '' --quick-generate-key "Expiring <exp@example.com>" default default 2030-01-15 2>/dev/null
    local fpr
    fpr=$(list-secret-keys | awk -F'\t' '$2 ~ /Expiring/ { print $1 }')
    run key-expiry "$fpr"
    [ "$status" -eq 0 ]
    [[ $output == 2030-01-1[45] ]]   # gpg may store the end of the previous day in UTC
}

@test "store-init: starts a git history authored from the key" {
    run store-init
    [ "$status" -eq 0 ]
    store-exists

    [ "$(git -C "$KEEP_STORE_DIR" log --format='%an <%ae>' | sort -u)" = "Test User <test@example.com>" ]
    git -C "$KEEP_STORE_DIR" ls-files --error-unmatch .gpg-id .gitattributes
}

@test "store-init: a relative KEEP_STORE_DIR does not hang pass init" {
    cd "$SANDBOX"
    # A fresh bash under a timeout, so a hang fails the test instead of stalling the suite.
    run timeout 20 env KEEP_STORE_DIR=rel-store bash -c '
        fpr=$2
        source "$1"
        select-key() { printf "%s\n" "$fpr"; }
        store-init
    ' _ "$BATS_TEST_DIRNAME/../../keep" "$TEST_FPR"
    [ "$status" -eq 0 ]
    [ -s "$SANDBOX/rel-store/.gpg-id" ]
}

@test "store-init: later pass changes are committed automatically" {
    store-init
    local before
    before=$(git -C "$KEEP_STORE_DIR" rev-list --count HEAD)
    printf 'not-a-real-secret\n' | pass insert -e test/entry >/dev/null

    [ "$(git -C "$KEEP_STORE_DIR" rev-list --count HEAD)" -eq $(( before + 1 )) ]
    git -C "$KEEP_STORE_DIR" ls-files --error-unmatch test/entry.gpg
}

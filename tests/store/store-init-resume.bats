#!/usr/bin/env bats

# An init that was cut short, then run again: continue, start over, cancel, or fail.
# Throwaway GPG home and store. The menus (can-ask, ask-unfinished-init, confirm) are stubbed.

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
    KEEP="$BATS_TEST_DIRNAME/../../keep"

    # shellcheck source=SCRIPTDIR/../../keep
    source "$KEEP"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]

    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    TEST_FPR=$(list-secret-keys | cut -f1)
    [[ -n $TEST_FPR ]]
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# Run init with the git-history step failing, leaving an unfinished store.
cut-short-at-history() {
    # shellcheck disable=SC2317  # called by store-init
    start-store-history() { die "boom"; }
    run store-init --key "$TEST_FPR"
    [ "$status" -eq 1 ]
    # shellcheck source=SCRIPTDIR/../../keep
    source "$KEEP"     # the real start-store-history again
}

# The menu's answer, and a terminal to ask on.
answer() {
    eval "ask-unfinished-init() { echo $1; }"
    can-ask() { true; }
    confirm() { true; }
}

@test "store-exists: an unfinished init returns 3" {
    cut-short-at-history
    run store-exists
    [ "$status" -eq 3 ]
    [ "$(cat "$(init-progress-file)")" = "key $TEST_FPR"$'\n'"pass-init" ]
}

@test "MANUAL: store init — resume an interrupted init" {
    cut-short-at-history
    answer continue
    run store-init
    [ "$status" -eq 0 ]
    store-exists
    [ ! -e "$KEEP_STORE_DIR/.keep-init" ]
    [ "$(git -C "$KEEP_STORE_DIR" log --format='%an <%ae>' | sort -u)" = "Test User <test@example.com>" ]
    run git -C "$KEEP_STORE_DIR" log --all --name-only --format=
    [[ $output != *keep-init* ]]
}

@test "store init: continue redoes a step that was cut off midway" {
    # Cut off inside the git step: the repo exists, but pass git init never ran.
    mkdir -p "$KEEP_STORE_DIR"
    printf 'key %s\npass-init\n' "$TEST_FPR" > "$(init-progress-file)"
    pass init "$TEST_FPR" >/dev/null
    git -C "$KEEP_STORE_DIR" init --quiet
    answer continue
    run store-init
    [ "$status" -eq 0 ]
    store-exists
    git -C "$KEEP_STORE_DIR" ls-files --error-unmatch .gpg-id .gitattributes
}

@test "store init: start over replaces the unfinished store" {
    cut-short-at-history
    echo leftover > "$KEEP_STORE_DIR/leftover"
    answer start-over
    # shellcheck disable=SC2317  # called by store-init
    select-key() { printf '%s\n' "$TEST_FPR"; }
    run store-init
    [ "$status" -eq 0 ]
    store-exists
    [ ! -e "$KEEP_STORE_DIR/leftover" ]
}

@test "store init: cancel leaves the unfinished store alone" {
    cut-short-at-history
    answer cancel
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"Cancelled"* ]]
    run store-exists
    [ "$status" -eq 3 ]
}

@test "store init: an unfinished store with no terminal fails" {
    cut-short-at-history
    run timeout 60 "$KEEP" store init < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"did not finish"* ]]
    [ -e "$KEEP_STORE_DIR/.keep-init" ]
}

@test "store init: continue fails when the key is gone" {
    mkdir -p "$KEEP_STORE_DIR"
    echo "key 0000000000000000000000000000000000000000" > "$(init-progress-file)"
    answer continue
    run store-init
    [ "$status" -eq 1 ]
    [[ $output == *"no longer in your keyring"* ]]
}

@test "store init: --key other than the unfinished one fails" {
    cut-short-at-history
    gpg --batch --passphrase '' --quick-generate-key "Other <other@example.com>" default default never 2>/dev/null
    answer continue
    run store-init --key other@example.com
    [ "$status" -eq 1 ]
    [[ $output == *"unfinished init"* ]]
}

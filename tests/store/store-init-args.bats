#!/usr/bin/env bats

# StoreInit's arguments, against a throwaway GPG home and store. No prompt may be reached: ask-text
# and select-key are replaced by stubs that fail.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"

    # shellcheck source=SCRIPTDIR/../../envfolio
    source "$BATS_TEST_DIRNAME/../../envfolio"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]

    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    TEST_FPR=$(list-secret-keys | cut -f1)
    [[ -n $TEST_FPR ]]

    # shellcheck disable=SC2317  # called by StoreInit
    ask-text()   { echo "unexpected prompt: $1" >&2; exit 1; }
    select-key() { echo "unexpected key menu"   >&2; exit 1; }
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

@test "store-init: an unknown option fails" {
    run StoreInit --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
}

@test "store-init: --key without a value fails" {
    run StoreInit --key
    [ "$status" -eq 1 ]
    [[ $output == *"--key needs a value"* ]]
}

@test "store-init: --key cannot go with new-key options" {
    run StoreInit --key "$TEST_FPR" --name Someone
    [ "$status" -eq 1 ]
    [[ $output == *"--key cannot be used"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store-init: --passphrase-stdin needs --name and --email" {
    run StoreInit --passphrase-stdin --name Someone
    [ "$status" -eq 1 ]
    [[ $output == *"needs --name and --email"* ]]
}

@test "store-init: --key with no match fails" {
    run StoreInit --key nobody@nowhere.invalid
    [ "$status" -eq 1 ]
    [[ $output == *"No secret key matches"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store-init: --key matching several keys fails" {
    gpg --batch --passphrase '' --quick-generate-key "Other User <other@example.com>" default default never 2>/dev/null
    run StoreInit --key example.com
    [ "$status" -eq 1 ]
    [[ $output == *"More than one secret key matches"* ]]
}

@test "store-init: --key=<email> uses that key without asking" {
    run StoreInit --key=test@example.com
    [ "$status" -eq 0 ]
    [ "$(cat "$ENVFOLIO_STORE_DIR/.gpg-id")" = "$TEST_FPR" ]
}

@test "store-init: a new key from --name, --email and --passphrase-stdin" {
    run StoreInit --name "New User" --email new@example.com --passphrase-stdin <<< "correct horse"
    [ "$status" -eq 0 ]
    local fpr
    fpr=$(cat "$ENVFOLIO_STORE_DIR/.gpg-id")
    [ "$fpr" != "$TEST_FPR" ]
    [ "$(key-uid "$fpr")" = "New User <new@example.com>" ]
    # The key is protected: a wrong passphrase cannot sign with it.
    if echo x | gpg --batch --pinentry-mode loopback --passphrase wrong --local-user "$fpr" --sign >/dev/null 2>&1; then
        false
    fi
    echo x | gpg --batch --pinentry-mode loopback --passphrase "correct horse" --local-user "$fpr" --sign >/dev/null 2>&1
}

@test "store-init: an empty passphrase on stdin fails" {
    run StoreInit --name "New User" --email new@example.com --passphrase-stdin < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase on stdin"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR/.gpg-id" ]
}

# The store folder's mode, on Linux and macOS.
dir-mode() { stat -c %a "$1" 2>/dev/null || stat -f %Lp "$1"; }

@test "store-init: makes the store private (700), its git history too" {
    umask 022
    run StoreInit --key "$TEST_FPR"
    [ "$status" -eq 0 ]
    store-exists
    [ "$(dir-mode "$ENVFOLIO_STORE_DIR")" = "700" ]
    [ "$(dir-mode "$ENVFOLIO_STORE_DIR/.git")" = "700" ]
}

@test "store-init: an open existing empty folder is warned about and asked; no answer, nothing made" {
    mkdir "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run StoreInit --key "$TEST_FPR" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"other users can get into $ENVFOLIO_STORE_DIR"*"anyway? [y/N]"*"Nothing changed"* ]]
    [ -z "$(ls -A "$ENVFOLIO_STORE_DIR")" ]
}

@test "store-init: an open existing empty folder, yes: used as it is" {
    mkdir "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run StoreInit --key "$TEST_FPR" < <(echo y)
    [ "$status" -eq 0 ]
    store-exists
    [ "$(dir-mode "$ENVFOLIO_STORE_DIR")" = "755" ]
}

@test "store-init: --allow-unsafe-folder, not asked, still warned" {
    mkdir "$ENVFOLIO_STORE_DIR" && chmod 755 "$ENVFOLIO_STORE_DIR"
    run StoreInit --key "$TEST_FPR" --allow-unsafe-folder < /dev/null
    [ "$status" -eq 0 ]
    store-exists
    [[ $output == *"other users can get into"* && $output != *"[y/N]"* ]]
}

@test "store-init: an empty folder of someone else's is warned about and asked" {
    mkdir "$ENVFOLIO_STORE_DIR" && chmod 700 "$ENVFOLIO_STORE_DIR"
    is-own-dir() { return 1; }
    run StoreInit --key "$TEST_FPR" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"belongs to "*", not to you"*"anyway? [y/N]"* ]]
    [ -z "$(ls -A "$ENVFOLIO_STORE_DIR")" ]
}

@test "store-init: an existing private empty folder of your own, nothing asked" {
    mkdir "$ENVFOLIO_STORE_DIR" && chmod 700 "$ENVFOLIO_STORE_DIR"
    run StoreInit --key "$TEST_FPR" < /dev/null
    [ "$status" -eq 0 ]
    store-exists
    [[ $output != *warning* && $output != *"[y/N]"* ]]
}

@test "store-init: an empty folder reached through a link works too" {
    mkdir -p "$SANDBOX/mnt" && chmod 700 "$SANDBOX/mnt"
    ln -s "$SANDBOX/mnt" "$ENVFOLIO_STORE_DIR"
    run StoreInit --key "$TEST_FPR" < /dev/null
    [ "$status" -eq 0 ]
    [ -L "$ENVFOLIO_STORE_DIR" ]
    [ -s "$SANDBOX/mnt/.gpg-id" ]
}

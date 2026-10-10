#!/usr/bin/env bats

# `envfolio store init` end to end, with the answers to its prompts piped in. The tests climb a
# ladder: each gives one more input as an option, and answers only the prompts that are left.
# Runs the real script against a throwaway GPG home and store. gpg's own passphrase prompt is a
# fake pinentry (use-pinentry) that answers with a set passphrase.

load fake-pinentry

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
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $GNUPGHOME == "$SANDBOX"/* && $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $HOME == "$SANDBOX"/* ]]

    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# --- Helpers ------------------------------------------------------------------

# init-answering [<answer>...] -- [<option>...]: run `envfolio store init <option>...` with the
# answers on stdin, one per line (stdin is empty when there are none).
init-answering() {
    local answers=()
    while (( $# > 0 )) && [[ $1 != -- ]]; do answers+=("$1") ; shift ; done
    (( $# > 0 )) && shift
    if (( ${#answers[@]} > 0 )); then
        run "$ENVFOLIO" store init "$@" < <(printf '%s\n' "${answers[@]}")
    else
        run "$ENVFOLIO" store init "$@" < /dev/null
    fi
}

add-existing-key() {
    gpg --batch --passphrase '' --quick-generate-key "Old Key <old@example.com>" default default never 2>/dev/null
    OLD_FPR=$(gpg --list-secret-keys --with-colons | awk -F: '$1 == "fpr" { print $10 ; exit }')
    [[ -n $OLD_FPR ]]
}

secret-key-count() {
    gpg --list-secret-keys --with-colons 2>/dev/null | grep -c '^sec' || true
}

store-fpr() { cat "$ENVFOLIO_STORE_DIR/.gpg-id" ; }

key-uid-of() {
    gpg --list-keys --with-colons "$1" | awk -F: '$1 == "uid" { print $10 ; exit }'
}

# Whether <passphrase> unlocks the key <fpr>: sign with it, the agent's cache emptied first.
unlocks() {
    gpgconf --kill gpg-agent
    echo test | gpg --batch --pinentry-mode loopback --passphrase "$2" --local-user "$1" \
                    --sign --output /dev/null 2>/dev/null
}

# The store is ready, encrypted to <fpr>, and its git author is <uid>.
assert-store() {
    local fpr=$1 uid=$2
    [ "$status" -eq 0 ]
    [ "$(store-fpr)" = "$fpr" ]
    [ "$(git -C "$ENVFOLIO_STORE_DIR" log -1 --format='%an <%ae>')" = "$uid" ]
}

# A new key "<name> <email>" is the store's key, and <passphrase> (only that) unlocks it.
assert-new-key-store() {
    local name=$1 email=$2 passphrase=$3 fpr
    [ "$status" -eq 0 ]
    fpr=$(store-fpr)
    [ -n "$fpr" ]
    [ "$(key-uid-of "$fpr")" = "$name <$email>" ]
    assert-store "$fpr" "$name <$email>"
    unlocks "$fpr" "$passphrase"
    ! unlocks "$fpr" "not-$passphrase"
}

# Nothing was made: no store folder, and the keyring has <count> secret keys.
assert-nothing-made() {
    [ "$status" -ne 0 ]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
    [ "$(secret-key-count)" -eq "$1" ]
}

# --- No key in the keyring: one more option per step ---------------------------

@test "store init flow 1: nothing given — asks name, email; gpg asks the passphrase (no picker)" {
    use-pinentry pw-one
    init-answering "Jane Doe" jane@example.com "" --
    [[ $output == *"Your name"* && $output == *"Your email"* && $output == *"Next, gpg asks you to choose the new key's passphrase"* ]]
    [[ $output != *"Which GPG key"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-one
}

@test "store init flow 2: --name — asks email; gpg asks the passphrase" {
    use-pinentry pw-two
    init-answering jane@example.com "" -- --name "Jane Doe"
    [[ $output != *"Your name"* ]]
    [[ $output == *"Your email"* && $output == *"Next, gpg asks you to choose the new key's passphrase"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-two
}

@test "store init flow 3: --name --email — only gpg asks, for the passphrase" {
    use-pinentry pw-three
    init-answering "" -- --name "Jane Doe" --email jane@example.com
    [[ $output != *"Your name"* && $output != *"Your email"* ]]
    [[ $output == *"Next, gpg asks you to choose the new key's passphrase"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-three
}

@test "store init flow 4: --name --email --passphrase-fd — asks nothing" {
    # bats keeps fd 3 for itself: fd 5 carries the passphrase.
    run "$ENVFOLIO" store init --name "Jane Doe" --email jane@example.com --passphrase-fd 5 \
        < /dev/null 5< <(printf '%s\n' pw-four)
    [[ $output != *"Your name"* && $output != *"Your email"* && $output != *"Next, gpg asks you to choose the new key's passphrase"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-four
}

@test "store init flow 5: --name --email --passphrase-stdin — asks nothing" {
    init-answering pw-five -- --name "Jane Doe" --email jane@example.com --passphrase-stdin
    [[ $output != *"Your name"* && $output != *"Your email"* && $output != *"Next, gpg asks you to choose the new key's passphrase"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-five
}

# --- One key in the keyring: one more option per step --------------------------

@test "store init flow 6: an existing key, nothing given — the picker, pick that key" {
    add-existing-key
    init-answering 1 --
    [[ $output == *"Which GPG key"* ]]
    [[ $output != *"Your name"* && $output != *"Next, gpg asks you to choose the new key's passphrase"* ]]
    assert-store "$OLD_FPR" "Old Key <old@example.com>"
    [ "$(secret-key-count)" -eq 1 ]
}

@test "store init flow 7: an existing key, nothing given — the picker, then a new key" {
    add-existing-key
    use-pinentry pw-seven
    init-answering 2 "Jane Doe" jane@example.com "" --
    [[ $output == *"Which GPG key"* && $output == *"Your name"* && $output == *"Your email"* ]]
    assert-new-key-store "Jane Doe" jane@example.com pw-seven
    [ "$(store-fpr)" != "$OLD_FPR" ]
    [ "$(secret-key-count)" -eq 2 ]
}

@test "store init flow 8: an existing key, --key — asks nothing" {
    add-existing-key
    init-answering -- --key old@example.com
    [[ $output != *"Which GPG key"* && $output != *"Your name"* ]]
    assert-store "$OLD_FPR" "Old Key <old@example.com>"
    [ "$(secret-key-count)" -eq 1 ]
}

# --- Failures leave nothing behind ---------------------------------------------

@test "store init flow: gpg's passphrase prompt cancelled — nothing made" {
    use-pinentry --cancel
    init-answering "" -- --name "Jane Doe" --email jane@example.com
    [[ $output == *"Creating the key failed"* || $output == *"no key was created"* ]]
    assert-nothing-made 0
}

@test "store init flow: an empty passphrase on stdin — nothing made" {
    init-answering "" -- --name "Jane Doe" --email jane@example.com --passphrase-stdin
    [[ $output == *"No passphrase on stdin"* ]]
    assert-nothing-made 0
}

@test "store init flow: input ends at the name — nothing made" {
    init-answering --
    [[ $output == *"Cancelled"* ]]
    assert-nothing-made 0
}

@test "store init flow: --passphrase-fd on a closed fd — nothing made" {
    init-answering -- --name "Jane Doe" --email jane@example.com --passphrase-fd 7
    [[ $output == *"no such file descriptor"* ]]
    assert-nothing-made 0
}

@test "store init flow: input ends before gpg asks the new key's passphrase — nothing made" {
    use-pinentry pw
    init-answering -- --name "Jane Doe" --email jane@example.com
    [[ $output == *"Next, gpg asks you to choose the new key's passphrase"* && $output == *"Cancelled"* ]]
    assert-nothing-made 0
}

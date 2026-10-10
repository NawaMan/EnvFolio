#!/usr/bin/env bats

# `envfolio store export` end to end, with the answers to its prompts piped in. The tests climb a
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
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $GNUPGHOME == "$SANDBOX"/* && $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $HOME == "$SANDBOX"/* ]]

    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
    make-store
    make-server-key
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# --- Helpers ------------------------------------------------------------------

# A store with two texts and two secrets, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$ENVFOLIO" text insert -t "jane" web/user < /dev/null >/dev/null
    "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    "$ENVFOLIO" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
}

# The server's key, in its own GPG home; its public part in $SANDBOX/server.asc.
make-server-key() {
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
}

# export-answering [<answer>...] -- [<option>...]: run `envfolio store export <option>...` with the
# answers on stdin, one per line (stdin is empty when there are none).
export-answering() {
    local answers=()
    while (( $# > 0 )) && [[ $1 != -- ]]; do answers+=("$1") ; shift ; done
    (( $# > 0 )) && shift
    if (( ${#answers[@]} > 0 )); then
        run "$ENVFOLIO" store export "$@" < <(printf '%s\n' "${answers[@]}")
    else
        run "$ENVFOLIO" store export "$@" < /dev/null
    fi
}

# The one export file in <folder>.
export-file-in() {
    local files=("$1"/*.envfolio)
    [ "${#files[@]}" -eq 1 ] && [ -f "${files[0]}" ] && printf '%s\n' "${files[0]}"
}

# The items in export <file>, one per line, sorted. Opened with <passphrase>, or --server for the
# server's key. Nothing cached: a wrong passphrase must fail.
items-in() {
    local file=$1 how=$2
    gpgconf --kill gpg-agent
    if [[ $how == --server ]]; then
        GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --quiet --decrypt "$file" 2>/dev/null
    else
        gpg --batch --quiet --no-symkey-cache --pinentry-mode loopback --passphrase "$how" \
            --decrypt "$file" 2>/dev/null
    fi | tar -tzf - | awk '/^store\/.*\.(txt|gpg)$/ { sub(/^store\//, "") ; print }' | sort
}

# The export is <file>, it opens with <how> (and not with a wrong passphrase), and holds <item>....
assert-export() {
    local file=$1 how=$2 ; shift 2
    [ "$status" -eq 0 ]
    [ -f "$file" ]
    [ "$(items-in "$file" "$how")" = "$(printf '%s\n' "$@" | sort)" ]
    if [[ $how != --server ]]; then
        [ -z "$(items-in "$file" "not-$how")" ]
    fi
}

# Nothing written: no export in $SANDBOX/out or the current folder, nothing left in TMPDIR.
assert-nothing-made() {
    [ "$status" -ne 0 ]
    [ -z "$(ls -A "$SANDBOX/out")" ]
    [ -z "$(ls "$PWD"/*.envfolio 2>/dev/null)" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

ALL=(aws/key.gpg web/github.gpg web/home.txt web/user.txt)

# --- One more option per step ---------------------------------------------------

@test "store export flow 1: nothing given — picks items, asks the file and the lock; gpg asks the passphrase" {
    use-pinentry pw-one
    cd "$SANDBOX/out"
    export-answering all "" 1 "" --
    [[ $output == *"Which items?"* && $output == *"File (or a folder)"* && $output == *"How should the file be locked?"* ]]
    [[ $output == *"gpg asks for it when it locks the file"* ]]
    assert-export "$(export-file-in "$SANDBOX/out")" pw-one "${ALL[@]}"
}

@test "store export flow 2: <name> — asks the file and the lock" {
    use-pinentry pw-two
    cd "$SANDBOX/out"
    export-answering "" 1 "" -- web
    [[ $output != *"Which items?"* && $output == *"File (or a folder)"* && $output == *"How should the file be locked?"* ]]
    [[ $output == *"left out 1 secret(s) under 'web'"* ]]
    assert-export "$(export-file-in "$SANDBOX/out")" pw-two web/home.txt web/user.txt
}

@test "store export flow 3: <name> --secrets — the folder's secrets too" {
    use-pinentry pw-three
    cd "$SANDBOX/out"
    export-answering "" 1 "" -- --secrets web
    [[ $output != *"Which items?"* ]]
    assert-export "$(export-file-in "$SANDBOX/out")" pw-three web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 3b: the file typed at the prompt — written there, .envfolio added" {
    use-pinentry pw-three-b
    export-answering "$SANDBOX/out/typed" 1 "" -- --secrets web
    [[ $output == *"File (or a folder)"* ]]
    assert-export "$SANDBOX/out/typed.envfolio" pw-three-b web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 4: + -o <file> — written there, .envfolio added, not asked" {
    use-pinentry pw-four
    export-answering 1 "" -- --secrets -o "$SANDBOX/out/to-server" web
    [[ $output != *"Which items?"* && $output != *"File (or a folder)"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" pw-four web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 5: + --passphrase-fd — asks nothing" {
    # bats keeps fd 3 for itself: fd 5 carries the passphrase.
    run "$ENVFOLIO" store export --secrets -o "$SANDBOX/out/to-server" --passphrase-fd 5 web \
        < /dev/null 5< <(printf '%s\n' pw-five)
    [[ $output != *"Which items?"* && $output != *"How should the file be locked?"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" pw-five web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 5b: --passphrase-fd leaves stdin free for picking the items" {
    run "$ENVFOLIO" store export -o "$SANDBOX/out/to-server" --passphrase-fd 5 \
        < <(printf '%s\n' "1 3") 5< <(printf '%s\n' pw-five-b)
    [[ $output == *"Which items?"* && $output != *"How should the file be locked?"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" pw-five-b aws/key.gpg web/home.txt
}

@test "store export flow 6: --passphrase-stdin instead — asks nothing" {
    export-answering pw-six -- --secrets -o "$SANDBOX/out/to-server" --passphrase-stdin web
    [[ $output != *"Which items?"* && $output != *"How should the file be locked?"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" pw-six web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 7: a public key from the keyring, picked from the list" {
    gpg --batch --quiet --import "$SANDBOX/server.asc" 2>/dev/null
    # The list: 1) Test User (the store's key), 2) Server, 3) a key file or another id.
    export-answering 2 2 -- --secrets -o "$SANDBOX/out/to-server" web
    [[ $output == *"Which public key?"* && $output == *"Server <server@example.com>"* ]]
    [[ $output != *"Public key ["* ]]
    [[ $output == *"Lock: to "*"Server <server@example.com>"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" --server web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 7b: a key file, through the list's last choice" {
    # The list: 1) Test User (the store's key), 2) a key file or another id.
    export-answering 2 2 "$SANDBOX/server.asc" -- --secrets -o "$SANDBOX/out/to-server" web
    [[ $output == *"Which public key?"* && $output == *"Public key ["* ]]
    [[ $output == *"Lock: to "*"Server <server@example.com>"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" --server web/github.gpg web/home.txt web/user.txt
}

@test "store export flow 7c: no usable public key in the keyring — straight to the key file" {
    # Test User's key disabled: nothing left to list.
    printf 'disable\nsave\n' | gpg --batch --command-fd 0 --edit-key test@example.com 2>/dev/null
    run bash -c 'source "$1" ; list-public-keys' _ "$ENVFOLIO"
    [ -z "$output" ]
    export-answering 2 "$SANDBOX/server.asc" -- --secrets -o "$SANDBOX/out/to-server" web
    [[ $output != *"Which public key?"* && $output == *"Public key ["* ]]
}

@test "store export flow 8: --to <key> instead — asks nothing" {
    export-answering -- --secrets -o "$SANDBOX/out/to-server" --to "$SANDBOX/server.asc" web
    [[ $output != *"Which items?"* && $output != *"How should the file be locked?"* ]]
    assert-export "$SANDBOX/out/to-server.envfolio" --server web/github.gpg web/home.txt web/user.txt
}

# --- Failures leave nothing behind ---------------------------------------------

@test "store export flow: a --to that matches no key — fails before the export's key is made" {
    export-answering -- -o "$SANDBOX/out" --to nobody@example.com web
    [[ $output == *"No public key"* && $output != *"Make the export's own key"* ]]
    assert-nothing-made
}

@test "store export flow: a public key asked for that matches none — nothing made" {
    export-answering 2 2 nobody@example.com -- -o "$SANDBOX/out" web
    [[ $output == *"No public key"* ]]
    assert-nothing-made
}

@test "store export flow: input ends at the lock question — nothing made" {
    export-answering -- -o "$SANDBOX/out" web
    [[ $output == *"Cancelled"* ]]
    assert-nothing-made
}

@test "store export flow: gpg's passphrase prompt cancelled — nothing made" {
    use-pinentry --cancel
    export-answering 1 "" -- -o "$SANDBOX/out" web
    [[ $output == *"Packing the export failed"* ]]
    assert-nothing-made
}

@test "store export flow: the file already exists — fails before asking the lock" {
    touch "$SANDBOX/out/taken.envfolio"
    export-answering -- -o "$SANDBOX/out/taken" web
    [[ $output == *"already exists"* && $output != *"How should the file be locked?"* ]]
    [ "$(ls -A "$SANDBOX/out")" = taken.envfolio ]
}

@test "store export flow: --passphrase-fd on a closed fd — nothing made" {
    export-answering -- -o "$SANDBOX/out" --passphrase-fd 7 web
    [[ $output == *"no such file descriptor"* ]]
    assert-nothing-made
}

@test "store export flow: told before gpg asks the file's passphrase; input ends there — nothing made" {
    use-pinentry pw
    export-answering 1 -- -o "$SANDBOX/out" web
    [[ $output == *"Next, gpg asks you to choose a passphrase for the export file"* && $output == *"Cancelled"* ]]
    assert-nothing-made
}

@test "store export flow: locked to a key — no word about a passphrase" {
    export-answering -- -o "$SANDBOX/out" --to "$SANDBOX/server.asc" web
    [ "$status" -eq 0 ]
    [[ $output != *"Next, gpg asks"* ]]
}

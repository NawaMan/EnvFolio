#!/usr/bin/env bats

# `envfolio store import` end to end, with the answers to its prompts piped in. The tests climb a
# ladder: each gives one more input as an option, and answers only the prompts that are left.
# "Here" makes the export (locked with a passphrase); "there" — another GPG home and store, with a
# key of its own — imports it. gpg's own passphrase prompt is a fake pinentry (use-pinentry).

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
    EXPORT="$SANDBOX/out/items.envfolio"
    make-export
    go-there
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# --- Helpers ------------------------------------------------------------------

# Here: a store with two texts and two secrets, exported whole to $EXPORT with the passphrase "pw".
make-export() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$ENVFOLIO" text insert -t "jane" web/user < /dev/null >/dev/null
    "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    "$ENVFOLIO" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
    "$ENVFOLIO" store export -o "$EXPORT" --passphrase-stdin --secrets web aws < <(printf 'pw\n') >/dev/null 2>&1
    [ -f "$EXPORT" ]
}

# Switch to "there": its own GPG home with the server's key (no passphrase), and no store yet.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/there"
    gpg --batch --passphrase '' --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    SERVER_FPR=$(gpg --list-secret-keys --with-colons | awk -F: '$1 == "fpr" { print $10 ; exit }')
}

# There: a store, with the server's key, holding web/user = "old".
make-there-store() {
    "$ENVFOLIO" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "old" web/user < /dev/null >/dev/null
}

# import-answering [<answer>...] -- [<option>...]: run `envfolio store import <option>...` with the
# answers on stdin, one per line (stdin is empty when there are none).
import-answering() {
    local answers=()
    while (( $# > 0 )) && [[ $1 != -- ]]; do answers+=("$1") ; shift ; done
    (( $# > 0 )) && shift
    if (( ${#answers[@]} > 0 )); then
        run "$ENVFOLIO" store import "$@" < <(printf '%s\n' "${answers[@]}")
    else
        run "$ENVFOLIO" store import "$@" < /dev/null
    fi
}

# The items in the store there, one per line, sorted.
store-items() {
    (cd "$ENVFOLIO_STORE_DIR" && find . -name '*.txt' -o -name '*.gpg' | sed 's|^\./||' | sort)
}

# The import worked, and the store holds exactly <item>... (web/user possibly "old" from before).
assert-imported() {
    [ "$status" -eq 0 ]
    [ "$(store-items)" = "$(printf '%s\n' "$@" | sort)" ]
    local item
    for item in "$@"; do
        case $item in
            web/home.txt)   [ "$("$ENVFOLIO" text show web/home)" = "https://example.com" ] ;;
            web/github.gpg) [ "$("$ENVFOLIO" secret show web/github)" = "s3cr3t" ] ;;
            aws/key.gpg)    [ "$("$ENVFOLIO" secret show aws/key)" = "AKIA" ] ;;
        esac
    done
    [ -z "$(git -C "$ENVFOLIO_STORE_DIR" status --porcelain)" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

ALL=(aws/key.gpg web/github.gpg web/home.txt web/user.txt)

# --- Into a store there is: one more option per step -----------------------------

@test "store import flow 1: nothing given — asks the file, gpg the passphrase, then the items" {
    make-there-store
    use-pinentry pw
    import-answering "$EXPORT" "" all 2 --
    [[ $output == *"Export file"* && $output == *"Which items?"* && $output == *"What to do with these 1?"* ]]
    assert-imported "${ALL[@]}"
    [ "$("$ENVFOLIO" text show web/user)" = "old" ]
}

@test "store import flow 2: <file> — asks the items only" {
    make-there-store
    use-pinentry pw
    # 1) aws/key 2) web/github 3) web/home 4) web/user
    import-answering "" "1 3" -- "$EXPORT"
    [[ $output != *"Export file"* && $output == *"Which items?"* && $output != *"What to do with these"* ]]
    assert-imported aws/key.gpg web/home.txt web/user.txt
}

@test "store import flow 3: <file> <name>... — asks nothing more" {
    make-there-store
    use-pinentry pw
    import-answering "" -- "$EXPORT" aws web/home
    [[ $output != *"Export file"* && $output != *"Which items?"* ]]
    assert-imported aws/key.gpg web/home.txt web/user.txt
}

@test "store import flow 4: + --passphrase-fd — gpg asks nothing either" {
    make-there-store
    use-pinentry --cancel
    run "$ENVFOLIO" store import --passphrase-fd 5 "$EXPORT" aws web/home < /dev/null 5< <(printf 'pw\n')
    assert-imported aws/key.gpg web/home.txt web/user.txt
}

@test "store import flow 5: --all instead of names — a clash is asked; skip keeps what is there" {
    make-there-store
    import-answering 2 -- --passphrase-fd 5 --all "$EXPORT" 5< <(printf 'pw\n')
    [[ $output == *"Already in the store:"*"(T) web/user"* && $output == *"What to do with these 1?"* ]]
    assert-imported "${ALL[@]}"
    [ "$("$ENVFOLIO" text show web/user)" = "old" ]
}

@test "store import flow 6: + --overwrite — not asked, replaced" {
    make-there-store
    import-answering -- --passphrase-fd 5 --all --overwrite "$EXPORT" 5< <(printf 'pw\n')
    [[ $output != *"What to do with these"* && $output == *"Already in the store: 1: overwritten"* ]]
    assert-imported "${ALL[@]}"
    [ "$("$ENVFOLIO" text show web/user)" = "jane" ]
}

@test "store import flow 6b: --skip-existing instead — not asked, kept" {
    make-there-store
    import-answering -- --passphrase-fd 5 --all --skip-existing "$EXPORT" 5< <(printf 'pw\n')
    [[ $output != *"What to do with these"* && $output == *"Already in the store: 1: skipped"* ]]
    assert-imported "${ALL[@]}"
    [ "$("$ENVFOLIO" text show web/user)" = "old" ]
}

@test "store import flow 7: --passphrase-stdin instead of the fd — asks nothing" {
    make-there-store
    import-answering pw -- --passphrase-stdin --all --overwrite "$EXPORT"
    [[ $output != *"Which items?"* && $output != *"What to do with these"* ]]
    assert-imported "${ALL[@]}"
}

# --- No store yet: its key is asked for first ------------------------------------

@test "store import flow 8: no store, nothing given — the file, the items, then the key picker" {
    # Key picker: 1) Server 2) Create a new key
    import-answering "$EXPORT" all 1 -- --passphrase-fd 5 5< <(printf 'pw\n')
    [[ $output == *"no store yet"* && $output == *"Which GPG key should encrypt the store?"* ]]
    [[ $output == *"Store key: $SERVER_FPR"* ]]
    assert-imported "${ALL[@]}"
    [ "$(cat "$ENVFOLIO_STORE_DIR/.gpg-id")" = "$SERVER_FPR" ]
}

@test "store import flow 9: no store, a new key picked — asks name and email; gpg its passphrase" {
    use-pinentry pw
    import-answering 2 "Jane Doe" jane@example.com "" -- --passphrase-fd 5 --all "$EXPORT" 5< <(printf 'pw\n')
    [[ $output == *"Your name"* && $output == *"Your email"* ]]
    [[ $output == *"a new one for Jane Doe <jane@example.com>"* ]]
    assert-imported "${ALL[@]}"
    [ "$(gpg --list-keys --with-colons "$(cat "$ENVFOLIO_STORE_DIR/.gpg-id")" \
            | awk -F: '$1 == "uid" { print $10 ; exit }')" = "Jane Doe <jane@example.com>" ]
}

@test "store import flow 10: no store, --key — asks no key question" {
    import-answering -- --key server@example.com --passphrase-fd 5 --all "$EXPORT" 5< <(printf 'pw\n')
    [[ $output != *"Which GPG key"* && $output == *"Store key: $SERVER_FPR"* ]]
    assert-imported "${ALL[@]}"
}

# --- Failures leave nothing behind ---------------------------------------------

@test "store import flow: no store, --passphrase-stdin without --key — refused, nothing made" {
    import-answering pw -- --passphrase-stdin --all "$EXPORT"
    [ "$status" -eq 1 ]
    [[ $output == *"needs --key"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store import flow: a wrong passphrase — nothing made" {
    import-answering -- --key server@example.com --passphrase-fd 5 --all "$EXPORT" 5< <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [[ $output == *"Opening $EXPORT failed"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "store import flow: input ends at the file question — nothing made" {
    make-there-store
    import-answering --
    [ "$status" -eq 1 ]
    [[ $output == *"Cancelled"* ]]
    [ "$(store-items)" = "web/user.txt" ]
}

@test "store import flow: input ends at the clash question — nothing imported" {
    make-there-store
    import-answering -- --passphrase-fd 5 --all "$EXPORT" 5< <(printf 'pw\n')
    [ "$status" -eq 1 ]
    [[ $output == *"Cancelled"* && $output != *"Importing now"* ]]
    [ "$(store-items)" = "web/user.txt" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "store import flow: --passphrase-fd on a closed fd — nothing made" {
    import-answering -- --key server@example.com --passphrase-fd 7 --all "$EXPORT"
    [ "$status" -eq 1 ]
    [[ $output == *"no such file descriptor"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store import flow: told before gpg asks the file's passphrase; input ends there — nothing imported" {
    make-there-store
    use-pinentry pw
    import-answering -- "$EXPORT" aws
    [[ $output == *"Next, gpg asks for the export file's passphrase"* && $output == *"Cancelled"* ]]
    [ "$(store-items)" = "web/user.txt" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "is-passphrase-locked: an export locked with a passphrase, not one locked to a key" {
    run bash -c 'source "$1" ; is-passphrase-locked "$2"' _ "$ENVFOLIO" "$EXPORT"
    [ "$status" -eq 0 ]
    gpg --batch --quiet --trust-model always --recipient server@example.com --encrypt \
        --output "$SANDBOX/to-key.envfolio" "$ENVFOLIO"
    run bash -c 'source "$1" ; is-passphrase-locked "$2"' _ "$ENVFOLIO" "$SANDBOX/to-key.envfolio"
    [ "$status" -eq 1 ]
}

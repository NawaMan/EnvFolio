#!/usr/bin/env bats

# folio info, through the real ./folio, against a throwaway GPG home and store.

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
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]] || false
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding text gh/user (two lines) and secret gh/token.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    printf 'jane\ndoe\n' | "$FOLIO" insert text -m gh/user
    printf 'S3CR3T-VALUE\n' | "$FOLIO" insert secret -m gh/token >/dev/null
}

# The value of line <label> in the output, e.g. `field Variable:` -> GH_TOKEN.
# Values start at column 17: two spaces, then the label padded to 14.
field() { printf '%s\n' "$output" | awk -v l="$1" 'index($0, "  " l " ") == 1 { print substr($0, 17); exit }' ; }

@test "MANUAL: info — show a text's metadata" {
    make-store
    run "$FOLIO" info gh/user
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "gh/user  (text)" ]
    [[ $(field File:) == */store/gh/user.txt ]] || false
    [ "$(field Size:)" = "9 bytes, 2 lines" ]
    [ "$(field Variable:)" = "GH_USER" ]
    [[ $(field Created:) =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}\ [0-9]{2}:[0-9]{2}\ \ \([0-9a-f]+\ \ .*gh/user ]] || false
    [ "$(field Changes:)" = "1 commit" ]
    [ "$(field Uncommitted:)" = "no" ]
    [[ $(field "Signed by:") == "Test User <test@example.com>, "*" — valid" ]] || false
    # A text's contents are not shown.
    [[ $output != *jane* ]] || false
}

@test "MANUAL: info — show a secret's metadata (its key, never its value; no passphrase asked)" {
    make-store
    run "$FOLIO" info gh/token < /dev/null
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "gh/token  (secret)" ]
    [[ $(field File:) == */store/gh/token.gpg"   ("*" bytes, encrypted)" ]] || false
    [ "$(field Variable:)" = "GH_TOKEN" ]
    [[ $(field "Encrypted to:") == [0-9A-F]*" Test User <test@example.com>   (the store's key; never expires)" ]] || false
    [[ $output != *S3CR3T* ]] || false
}

@test "info: a name that is both a text and a secret shows both" {
    make-store
    "$FOLIO" insert text -t plain gh/token < /dev/null
    run "$FOLIO" info gh/token
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "gh/token  (text)" ]
    [[ $output == *$'\n\ngh/token  (secret)\n'* ]] || false
    [[ $output != *S3CR3T* ]] || false
}

@test "info: a missing name, a folder and a bad name fail" {
    make-store
    run "$FOLIO" info nope
    [ "$status" -ne 0 ]
    [ "$output" = "folio: info: 'nope' is not a text or a secret in the store." ]
    run "$FOLIO" info gh
    [ "$status" -ne 0 ]
    run "$FOLIO" info ../x
    [ "$status" -ne 0 ]
    [[ $output == *"not a valid name"* ]] || false
    run "$FOLIO" info
    [ "$status" -ne 0 ]
    [[ $output == *"Usage: folio info <name>"* ]] || false
}

@test "info: a changed text — its signature reported invalid, the command still works" {
    make-store
    echo changed >> "$FOLIO_STORE_DIR/gh/user.txt"
    run "$FOLIO" info gh/user
    [ "$status" -eq 0 ]
    [[ $(field "Signed by:") == *"does NOT verify"* ]] || false
    [[ $(field Uncommitted:) == yes* ]] || false
    rm "$FOLIO_STORE_DIR/gh/user.txt.sig"
    run "$FOLIO" info gh/user
    [ "$status" -eq 0 ]
    [[ $(field "Signed by:") == "no signature"* ]] || false
}

@test "info: after mv, the history goes back to the earlier name" {
    make-store
    "$FOLIO" mv secret gh/token github/token >/dev/null
    "$FOLIO" mv text gh/user github/user
    run "$FOLIO" info github/token
    [ "$status" -eq 0 ]
    [ "$(field Changes:)" = "2 commits;  was named: gh/token" ]
    [[ $(field Modified:) == *"Rename gh/token to github/token"* ]] || false
    run "$FOLIO" info github/user
    [ "$(field Changes:)" = "2 commits;  was named: gh/user" ]
    [ "$(field Variable:)" = "GITHUB_USER" ]
}

@test "info: a secret encrypted to a key no longer in .gpg-id is STALE" {
    make-store
    gpg --batch --passphrase '' --quick-generate-key "Other <other@example.com>" default default never 2>/dev/null
    echo other@example.com > "$FOLIO_STORE_DIR/.gpg-id"
    run "$FOLIO" info gh/token
    [ "$status" -eq 0 ]
    [[ $(field "Encrypted to:") == *"Test User <test@example.com>   (STALE, not in "*"/.gpg-id; never expires)" ]] || false
}

# The primary fingerprint of the key <email> (the first, when several match).
fpr-of() { gpg --list-keys --with-colons "$1" | awk -F: '$1 == "fpr" { print $10 ; exit }' ; }

@test "info: a store key that has expired, or is revoked, says so" {
    make-store
    local fpr ; fpr=$(fpr-of test@example.com)
    gpg --batch --passphrase '' --pinentry-mode loopback --quick-set-expire "$fpr" seconds=1 2>/dev/null
    gpg --batch --passphrase '' --pinentry-mode loopback --quick-set-expire "$fpr" seconds=1 '*' 2>/dev/null
    sleep 2
    run "$FOLIO" info gh/token
    [ "$status" -eq 0 ]
    [[ $(field "Encrypted to:") == *"(the store's key; expired $(date -u +%F))" ]] || false
    # gpg made a revocation certificate with the key; its lines start with ':' so it is not imported by
    # mistake.
    sed 's/^://' "$GNUPGHOME/openpgp-revocs.d/$fpr.rev" | gpg --batch --import 2>/dev/null
    run "$FOLIO" info gh/token
    [[ $(field "Encrypted to:") == *"(the store's key; revoked)" ]] || false
}

@test "info: a recipient not in your keyring is not called STALE" {
    make-store
    local fpr keyid ; fpr=$(fpr-of test@example.com)
    gpg --batch --yes --delete-secret-and-public-key "$fpr" 2>/dev/null
    run "$FOLIO" info gh/token
    [ "$status" -eq 0 ]
    [[ $(field "Encrypted to:") == *"(not in your keyring, so not known to be the store's key)" ]] || false
    [[ $output != *STALE* ]] || false
    # When .gpg-id names that very key id, it is the store's key even without the key.
    keyid=$(field "Encrypted to:") ; keyid=${keyid%% *}
    echo "$keyid" > "$FOLIO_STORE_DIR/.gpg-id"
    run "$FOLIO" info gh/token
    [[ $(field "Encrypted to:") == "$keyid  (the store's key, but not in your keyring)" ]] || false
}

@test "info: an email in .gpg-id stands for every key it matches" {
    make-store
    # --yes: gpg will not make a second key for a user id it has otherwise.
    gpg --batch --yes --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    # The second key with that email: the one made just now.
    local new ; new=$(gpg --list-keys --with-colons test@example.com | awk -F: '$1 == "pub" { n++ ; want = (n == 2) } $1 == "fpr" && want { print $10 ; want = 0 }')
    [ "$new" != "$(fpr-of test@example.com)" ]
    printf 'other\n' | gpg --batch --trust-model always --encrypt --recipient "$new" --output "$FOLIO_STORE_DIR/gh/other.gpg"
    # init writes the key's fingerprint; a .gpg-id written by hand may name the email instead.
    echo test@example.com > "$FOLIO_STORE_DIR/.gpg-id"
    run "$FOLIO" info gh/other
    [ "$status" -eq 0 ]
    [[ $(field "Encrypted to:") == *"(the store's key; never expires)" ]] || false
}

@test "info: .gpg-id read as pass does — no final newline, a comment, spaces" {
    make-store
    printf 'test@example.com' > "$FOLIO_STORE_DIR/.gpg-id"
    run "$FOLIO" info gh/token
    [[ $(field "Encrypted to:") == *"(the store's key; never expires)" ]] || false
    printf '  test@example.com   # the store key\n' > "$FOLIO_STORE_DIR/.gpg-id"
    run "$FOLIO" info gh/token
    [[ $(field "Encrypted to:") == *"(the store's key; never expires)" ]] || false
}

@test "info: the variable of a namespaced entry, and of one that has none" {
    make-store
    "$FOLIO" insert text -t x @app/db-host.name < /dev/null
    "$FOLIO" insert text -t x 1st < /dev/null
    run "$FOLIO" info @app/db-host.name
    [ "$(field Variable:)" = "DB_HOST_NAME" ]
    run "$FOLIO" info 1st
    [ "$(field Variable:)" = "none: 1ST is not a valid variable name; use VAR=1st" ]
}

@test "info: --help, and help info" {
    run "$FOLIO" info --help
    [ "$status" -eq 0 ]
    [[ ${lines[0]} == "Usage: folio info <name>" ]] || false
    run "$FOLIO" help info
    [ "$status" -eq 0 ]
    [[ ${lines[0]} == "Usage: folio info <name>" ]] || false
}

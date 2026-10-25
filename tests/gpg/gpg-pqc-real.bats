#!/usr/bin/env bats

# A post-quantum key with the real gpg, nothing faked: backup → restore on a new machine, and
# export --to → import. Through the real ./folio, against throwaway GPG homes and stores.
# Skipped unless this gpg can make one (gpg-has-pqc) — so in the booth and on gpg 2.4 they skip;
# CI runs them on macOS with Homebrew's gpg (check.yml: test-macos-homebrew-gpg).

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # shellcheck disable=SC1090  # folio, sourced only to ask gpg-has-pqc
    bash -c 'source "$1" && gpg-has-pqc' _ "$FOLIO" \
        || skip "this gpg ($(gpg --version | head -n 1)) cannot make a post-quantum key"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# make-pqc-key <uid>: a throwaway no-passphrase post-quantum key in $GNUPGHOME.
make-pqc-key() {
    gpg --batch --passphrase '' --quick-generate-key "$1" pqc default never 2>/dev/null
}

# A ready store with a text and a secret, encrypted to a throwaway post-quantum key.
make-store() {
    make-pqc-key "Test User <test@example.com>"
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
}

@test "real gpg: the store's key is post-quantum" {
    make-store
    [[ $(bash -c 'source "$1" && key-kind "$2"' _ "$FOLIO" "$(cat "$FOLIO_STORE_DIR/.gpg-id")") == "post-quantum ("* ]]
}

@test "real gpg: backup of a post-quantum key, restored on a new machine" {
    make-store
    run "$FOLIO" backup "$SANDBOX/out"
    [ "$status" -eq 0 ]
    [[ $output == *"gpg 2.5.21 or later (the key is post-quantum)"* ]]
    local file=("$SANDBOX"/out/*)

    gpgconf --kill all 2>/dev/null || true
    rm -rf "$FOLIO_STORE_DIR" "$GNUPGHOME" && mkdir -m 700 "$GNUPGHOME"
    run "$FOLIO" restore "${file[0]}" < /dev/null
    echo "$output"
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$FOLIO" secret show web/github)" = "s3cr3t" ]
}

@test "real gpg: export --to a post-quantum key, imported there" {
    make-store
    GNUPGHOME="$SANDBOX/there-gnupg" && mkdir -m 700 "$GNUPGHOME"
    make-pqc-key "Server <server@example.com>"
    gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    GNUPGHOME="$SANDBOX/gnupg"
    run "$FOLIO" export -o "$SANDBOX/out/to-server" --secrets --to "$SANDBOX/server.asc" web < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"gpg 2.5.21 or later (the key is post-quantum)"* ]]

    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" FOLIO_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    run "$FOLIO" import --key server@example.com "$SANDBOX/out/to-server.folio" web/github web/home < /dev/null
    echo "$output"
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$FOLIO" secret show web/github)" = "s3cr3t" ]
}

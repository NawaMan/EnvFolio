#!/usr/bin/env bats

# warn-if-gpg-cannot-import: a warning for a gpg known to import secret keys it cannot then use.
# No store or key is touched; `gpg --version` is faked as a function.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME"

    # shellcheck source=SCRIPTDIR/../../folio
    source "$BATS_TEST_DIRNAME/../../folio"
    [[ $STORE_PATH == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

fake-gpg-version() {
    eval "gpg() { printf 'gpg (GnuPG) %s\nlibgcrypt 1.11.0\n' '$1' ; }"
}

@test "gpg 2.5.24: warned on stderr, and the command carries on" {
    fake-gpg-version 2.5.24
    run --separate-stderr warn-if-gpg-cannot-import restore
    [ "$status" -eq 0 ]
    [ -z "$output" ]
    [[ $stderr == "folio restore: warning: gpg 2.5.24 has a bug: a secret key it imports cannot decrypt"* ]]
    [[ $stderr == *"Use another gpg, e.g. 2.4." ]]
}

@test "any other gpg: no warning" {
    local version
    for version in 2.4.4 2.4.7 2.5.22 2.5.240; do
        fake-gpg-version "$version"
        run --separate-stderr warn-if-gpg-cannot-import import
        [ "$status" -eq 0 ]
        [ -z "$output" ]
        [ -z "$stderr" ]
    done
}

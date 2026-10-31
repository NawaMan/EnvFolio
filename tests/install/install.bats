#!/usr/bin/env bats

# install.sh, against a fake releases folder (file://): it installs a folio that matches
# SHA256SUMS, refuses one that does not, and finds a release by FOLIO_VERSION.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$TMPDIR"
    INSTALL="$BATS_TEST_DIRNAME/../../install.sh"

    RELEASES="$SANDBOX/releases"
    export FOLIO_DOWNLOAD_URL="file://$RELEASES"
    fake-release latest/download "EnvFolio 9.9.9"
    fake-release download/v1.2.3 "EnvFolio 1.2.3"
}

teardown() {
    rm -rf "$SANDBOX"
}

# fake-release <folder> <version line>: a folio that prints the line, and its SHA256SUMS.
fake-release() {
    mkdir -p "$RELEASES/$1"
    printf '#!/usr/bin/env bash\necho "%s"\n' "$2" > "$RELEASES/$1/folio"
    (cd "$RELEASES/$1" && sha256sum folio > SHA256SUMS)
}

@test "install.sh: puts the latest folio in ~/.local/bin, runnable, and leaves no temp files" {
    run bash "$INSTALL"
    [ "$status" -eq 0 ]
    [ -x "$HOME/.local/bin/folio" ]
    [ "$("$HOME/.local/bin/folio")" = "EnvFolio 9.9.9" ]
    [[ $output == *"EnvFolio 9.9.9"* ]] || false
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "install.sh: FOLIO_VERSION picks that release, FOLIO_INSTALL_DIR the folder" {
    FOLIO_VERSION=1.2.3 FOLIO_INSTALL_DIR="$SANDBOX/bin" run bash "$INSTALL"
    [ "$status" -eq 0 ]
    [ "$("$SANDBOX/bin/folio")" = "EnvFolio 1.2.3" ]
    [ ! -e "$HOME/.local/bin/folio" ]
}

@test "install.sh: a folio that does not match SHA256SUMS is not installed" {
    echo 'echo tampered' >> "$RELEASES/latest/download/folio"
    run bash "$INSTALL"
    [ "$status" -ne 0 ]
    [[ $output == *"does not match SHA256SUMS"* ]] || false
    [ ! -e "$HOME/.local/bin/folio" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "install.sh: a missing release fails and installs nothing" {
    FOLIO_VERSION=0.0.1 run bash "$INSTALL"
    [ "$status" -ne 0 ]
    [[ $output == *"could not download"* ]] || false
    [ ! -e "$HOME/.local/bin/folio" ]
}

@test "install.sh: says how to add the folder to PATH when it is not on it" {
    run bash "$INSTALL"
    [ "$status" -eq 0 ]
    [[ $output == *"is not on your PATH"* ]] || false
    PATH="$HOME/.local/bin:$PATH" run bash "$INSTALL"
    [ "$status" -eq 0 ]
    [[ $output != *"is not on your PATH"* ]] || false
}

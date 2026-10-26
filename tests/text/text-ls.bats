#!/usr/bin/env bats

# folio ls text, through the real ./folio, against a throwaway GPG home and store.

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
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding texts web/home, web/user and note, a secret web/github, and a folder
# holding only a secret (vault/key).
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "https://example.com" web/home < /dev/null
    "$FOLIO" insert text -t jane                  web/user < /dev/null
    "$FOLIO" insert text -t hello                 note     < /dev/null
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" insert secret -m vault/key  < <(printf 'k3y\n')    >/dev/null
}

@test "MANUAL: ls text — list every text" {
    make-store
    run "$FOLIO" ls text
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Text Store" ]
    [[ $output == *"note"* && $output == *"web"*"home"* && $output == *"user"* ]] || false
    [[ $output != *"example.com"* && $output != *"jane"* ]] || false
}

@test "MANUAL: ls text — list one folder" {
    make-store
    run "$FOLIO" ls text web
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Text Store" ]
    [ "${lines[1]}" = "web" ]
    [[ $output == *"home"* && $output == *"user"* && $output != *"note"* ]] || false
}

@test "ls text: secrets, signatures and extensions never show; folders of only secrets are left out" {
    make-store
    run "$FOLIO" ls text
    [ "$status" -eq 0 ]
    [[ $output != *"github"* && $output != *"vault"* ]] || false
    [[ $output != *".txt"* && $output != *".sig"* && $output != *".gpg"* ]] || false
}

@test "ls text: ls secret still shows the secrets only" {
    make-store
    run "$FOLIO" ls secret
    [ "$status" -eq 0 ]
    [[ $output == *"github"* && $output == *"vault"* ]] || false
    [[ $output != *"home"* && $output != *"note"* && $output != *".txt"* ]] || false
}

@test "ls text: a text's name, an option, .. or an unknown folder is refused" {
    make-store
    local arg
    for arg in web/home note -c .. web/../.. nope; do
        run "$FOLIO" ls text "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"'$arg' is not a folder"* ]] || false
    done
    run "$FOLIO" ls text web note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio ls text"* ]] || false
}

@test "ls text: no store fails and creates nothing" {
    run "$FOLIO" ls text
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "ls text --help: works without a store" {
    run "$FOLIO" ls text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls text"* ]] || false
    run "$FOLIO" help ls text
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls text"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

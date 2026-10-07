#!/usr/bin/env bats

# envfolio text ls, through the real ./envfolio, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$ENVFOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding texts web/home, web/user and note, a secret web/github, and a folder
# holding only a secret (vault/key).
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "https://example.com" web/home < /dev/null
    "$ENVFOLIO" text insert -t jane                  web/user < /dev/null
    "$ENVFOLIO" text insert -t hello                 note     < /dev/null
    "$ENVFOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$ENVFOLIO" secret insert -m vault/key  < <(printf 'k3y\n')    >/dev/null
}

@test "MANUAL: text ls — list every text" {
    make-store
    run "$ENVFOLIO" text ls
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Text Store" ]
    [[ $output == *"note"* && $output == *"web"*"home"* && $output == *"user"* ]]
    [[ $output != *"example.com"* && $output != *"jane"* ]]
}

@test "MANUAL: text ls — list one folder" {
    make-store
    run "$ENVFOLIO" text ls web
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Text Store" ]
    [ "${lines[1]}" = "web" ]
    [[ $output == *"home"* && $output == *"user"* && $output != *"note"* ]]
}

@test "text ls: secrets, signatures and extensions never show; folders of only secrets are left out" {
    make-store
    run "$ENVFOLIO" text ls
    [ "$status" -eq 0 ]
    [[ $output != *"github"* && $output != *"vault"* ]]
    [[ $output != *".txt"* && $output != *".sig"* && $output != *".gpg"* ]]
}

@test "text ls: secret ls still shows the secrets only" {
    make-store
    run "$ENVFOLIO" secret ls
    [ "$status" -eq 0 ]
    [[ $output == *"github"* && $output == *"vault"* ]]
    [[ $output != *"home"* && $output != *"note"* && $output != *".txt"* ]]
}

@test "text ls: a text's name, an option, .. or an unknown folder is refused" {
    make-store
    local arg
    for arg in web/home note -c .. web/../.. nope; do
        run "$ENVFOLIO" text ls "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"'$arg' is not a folder"* ]]
    done
    run "$ENVFOLIO" text ls web note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio text ls"* ]]
}

@test "text ls: no store fails and creates nothing" {
    run "$ENVFOLIO" text ls
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "text ls --help: works without a store" {
    run "$ENVFOLIO" text ls --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text ls"* ]]
    run "$ENVFOLIO" help text ls
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text ls"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

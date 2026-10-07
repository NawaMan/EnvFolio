#!/usr/bin/env bats

# envfolio ls, through the real ./envfolio, against a throwaway GPG home and store.

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

# A ready store holding text note, secret web/github, text web/github and text web/home.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t hello                 note       < /dev/null
    "$ENVFOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$ENVFOLIO" text insert -t jane                  web/github < /dev/null
    "$ENVFOLIO" text insert -t "https://example.com" web/home   < /dev/null
}

# The output with tree's colours taken out.
plain() { printf '%s\n' "$output" | sed $'s/\e\\[[0-9;]*m//g' ; }

@test "MANUAL: ls — list everything" {
    make-store
    run "$ENVFOLIO" ls
    [ "$status" -eq 0 ]
    [ "$(plain)" = "EnvFolio Store
├── (T) note
└── web
    ├── (S) github
    ├── (T) github
    └── (T) home" ]
}

@test "MANUAL: ls — list one folder" {
    make-store
    run "$ENVFOLIO" ls web
    [ "$status" -eq 0 ]
    [ "$(plain)" = "EnvFolio Store
web
├── (S) github
├── (T) github
└── (T) home" ]
}

@test "MANUAL: ls — list flat" {
    make-store
    run "$ENVFOLIO" ls --flat
    [ "$status" -eq 0 ]
    [ "$output" = "(T) note
(S) web/github
(T) web/github
(T) web/home" ]
}

@test "ls --flat: one folder, full names, either place; text ls and secret ls too" {
    make-store
    run "$ENVFOLIO" ls web/ --flat
    [ "$output" = $'(S) web/github\n(T) web/github\n(T) web/home' ]
    run "$ENVFOLIO" text ls --flat
    [ "$output" = $'note\nweb/github\nweb/home' ]
    run "$ENVFOLIO" secret ls --flat web
    [ "$output" = "web/github" ]
    # No values, signatures, or the store's own files.
    run "$ENVFOLIO" ls --flat
    [[ $output != *"s3cr3t"* && $output != *".sig"* && $output != *".gpg-id"* && $output != *".git"* ]]
    run "$ENVFOLIO" ls --flat web extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio ls [--flat] [<subfolder>]"* ]]
}

@test "ls: never shows values, signatures or extensions" {
    make-store
    run "$ENVFOLIO" ls
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* && $output != *"jane"* && $output != *"hello"* ]]
    [[ $output != *".sig"* && $output != *".txt"* && $output != *".gpg"* ]]
}

@test "ls: outside UTF-8, the ASCII tree is marked too" {
    make-store
    LC_ALL=C run "$ENVFOLIO" ls web
    [ "$status" -eq 0 ]
    [[ $(plain) == *"-- (S) github"*"-- (T) github"*"-- (T) home"* ]]
}

@test "ls: an entry's name, an option, .. or an unknown folder is refused" {
    make-store
    local arg
    for arg in note web/github -c .. web/../.. nope; do
        run "$ENVFOLIO" ls "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"'$arg' is not a folder"* ]]
    done
    run "$ENVFOLIO" ls web note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio ls"* ]]
}

@test "ls: no store fails and creates nothing" {
    run "$ENVFOLIO" ls
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "ls --help: works without a store" {
    run "$ENVFOLIO" ls --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio ls"* ]]
    run "$ENVFOLIO" help ls
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio ls"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

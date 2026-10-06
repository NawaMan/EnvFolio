#!/usr/bin/env bats

# keep ls, through the real ./keep, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$KEEP_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $KEEP_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    KEEP="$BATS_TEST_DIRNAME/../../keep"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding text note, secret web/github, text web/github and text web/home.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t hello                 note       < /dev/null
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$KEEP" text insert -t jane                  web/github < /dev/null
    "$KEEP" text insert -t "https://example.com" web/home   < /dev/null
}

# The output with tree's colours taken out.
plain() { printf '%s\n' "$output" | sed $'s/\e\\[[0-9;]*m//g' ; }

@test "MANUAL: ls — list everything" {
    make-store
    run "$KEEP" ls
    [ "$status" -eq 0 ]
    [ "$(plain)" = "Keep Store
├── (T) note
└── web
    ├── (S) github
    ├── (T) github
    └── (T) home" ]
}

@test "MANUAL: ls — list one folder" {
    make-store
    run "$KEEP" ls web
    [ "$status" -eq 0 ]
    [ "$(plain)" = "Keep Store
web
├── (S) github
├── (T) github
└── (T) home" ]
}

@test "MANUAL: ls — list flat" {
    make-store
    run "$KEEP" ls --flat
    [ "$status" -eq 0 ]
    [ "$output" = "(T) note
(S) web/github
(T) web/github
(T) web/home" ]
}

@test "ls --flat: one folder, full names, either place; text ls and secret ls too" {
    make-store
    run "$KEEP" ls web/ --flat
    [ "$output" = $'(S) web/github\n(T) web/github\n(T) web/home' ]
    run "$KEEP" text ls --flat
    [ "$output" = $'note\nweb/github\nweb/home' ]
    run "$KEEP" secret ls --flat web
    [ "$output" = "web/github" ]
    # No values, signatures, or the store's own files.
    run "$KEEP" ls --flat
    [[ $output != *"s3cr3t"* && $output != *".sig"* && $output != *".gpg-id"* && $output != *".git"* ]]
    run "$KEEP" ls --flat web extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep ls [--flat] [<subfolder>]"* ]]
}

@test "ls: never shows values, signatures or extensions" {
    make-store
    run "$KEEP" ls
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* && $output != *"jane"* && $output != *"hello"* ]]
    [[ $output != *".sig"* && $output != *".txt"* && $output != *".gpg"* ]]
}

@test "ls: outside UTF-8, the ASCII tree is marked too" {
    make-store
    LC_ALL=C run "$KEEP" ls web
    [ "$status" -eq 0 ]
    [[ $(plain) == *"-- (S) github"*"-- (T) github"*"-- (T) home"* ]]
}

@test "ls: an entry's name, an option, .. or an unknown folder is refused" {
    make-store
    local arg
    for arg in note web/github -c .. web/../.. nope; do
        run "$KEEP" ls "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"'$arg' is not a folder"* ]]
    done
    run "$KEEP" ls web note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep ls"* ]]
}

@test "ls: no store fails and creates nothing" {
    run "$KEEP" ls
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "ls --help: works without a store" {
    run "$KEEP" ls --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep ls"* ]]
    run "$KEEP" help ls
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep ls"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

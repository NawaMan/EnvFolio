#!/usr/bin/env bats

# folio find text, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store holding texts web/home, web/user and mail/work, and secrets web/github and
# web/homebank.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "https://example.com" web/home  < /dev/null
    "$FOLIO" insert text -t jane                  web/user  < /dev/null
    "$FOLIO" insert text -t "jane@work"           mail/work < /dev/null
    "$FOLIO" insert secret -m web/github   < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" insert secret -m web/homebank < <(printf 'b4nk\n')   >/dev/null
}

# The output with tree's colours taken out.
plain() { printf '%s\n' "$output" | sed $'s/\e\\[[0-9;]*m//g' ; }

@test "MANUAL: find text — find by name" {
    make-store
    run "$FOLIO" find text home
    [ "$status" -eq 0 ]
    [ "$(plain)" = "Search Terms: home
└── web
    └── home" ]
}

@test "find text: any of several parts, ignoring case" {
    make-store
    run "$FOLIO" find text HOME work
    [ "$status" -eq 0 ]
    [[ $output == *"home"* && $output == *"work"* && $output != *"user"* ]] || false
}

@test "find text: a matching folder shows its texts" {
    make-store
    run "$FOLIO" find text mail
    [ "$status" -eq 0 ]
    [[ $output == *"mail"*"work"* ]] || false
}

@test "find text: secrets, signatures and extensions never show" {
    make-store
    run "$FOLIO" find text git home
    [ "$status" -eq 0 ]
    [[ $output != *"github"* && $output != *"homebank"* ]] || false
    [[ $output != *".txt"* && $output != *".sig"* && $output != *".gpg"* ]] || false
    [[ $output != *"example.com"* ]] || false
}

@test "find text: find secret still finds the secrets only" {
    make-store
    run "$FOLIO" find secret home
    [ "$status" -eq 0 ]
    [[ $output == *"homebank"* ]] || false
    [[ $(plain) != *"── home"$'\n'* && $(plain) != *"── home" ]] || false
}

@test "find text: no part gets the usage" {
    make-store
    run "$FOLIO" find text
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio find text"* ]] || false
}

@test "find text: no store fails and creates nothing" {
    run "$FOLIO" find text home
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "find text --help: works without a store" {
    run "$FOLIO" find text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio find text"* ]] || false
    run "$FOLIO" help find text
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio find text"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

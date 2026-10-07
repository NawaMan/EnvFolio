#!/usr/bin/env bats

# envfolio text find, through the real ./envfolio, against a throwaway GPG home and store.

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

# A ready store holding texts web/home, web/user and mail/work, and secrets web/github and
# web/homebank.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "https://example.com" web/home  < /dev/null
    "$ENVFOLIO" text insert -t jane                  web/user  < /dev/null
    "$ENVFOLIO" text insert -t "jane@work"           mail/work < /dev/null
    "$ENVFOLIO" secret insert -m web/github   < <(printf 's3cr3t\n') >/dev/null
    "$ENVFOLIO" secret insert -m web/homebank < <(printf 'b4nk\n')   >/dev/null
}

# The output with tree's colours taken out.
plain() { printf '%s\n' "$output" | sed $'s/\e\\[[0-9;]*m//g' ; }

@test "MANUAL: text find — find by name" {
    make-store
    run "$ENVFOLIO" text find home
    [ "$status" -eq 0 ]
    [ "$(plain)" = "Search Terms: home
└── web
    └── home" ]
}

@test "text find: any of several parts, ignoring case" {
    make-store
    run "$ENVFOLIO" text find HOME work
    [ "$status" -eq 0 ]
    [[ $output == *"home"* && $output == *"work"* && $output != *"user"* ]]
}

@test "text find: a matching folder shows its texts" {
    make-store
    run "$ENVFOLIO" text find mail
    [ "$status" -eq 0 ]
    [[ $output == *"mail"*"work"* ]]
}

@test "text find: secrets, signatures and extensions never show" {
    make-store
    run "$ENVFOLIO" text find git home
    [ "$status" -eq 0 ]
    [[ $output != *"github"* && $output != *"homebank"* ]]
    [[ $output != *".txt"* && $output != *".sig"* && $output != *".gpg"* ]]
    [[ $output != *"example.com"* ]]
}

@test "text find: secret find still finds the secrets only" {
    make-store
    run "$ENVFOLIO" secret find home
    [ "$status" -eq 0 ]
    [[ $output == *"homebank"* ]]
    [[ $(plain) != *"── home"$'\n'* && $(plain) != *"── home" ]]
}

@test "text find: no part gets the usage" {
    make-store
    run "$ENVFOLIO" text find
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio text find"* ]]
}

@test "text find: no store fails and creates nothing" {
    run "$ENVFOLIO" text find home
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "text find --help: works without a store" {
    run "$ENVFOLIO" text find --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text find"* ]]
    run "$ENVFOLIO" help text find
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text find"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

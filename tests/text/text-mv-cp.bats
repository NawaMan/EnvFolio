#!/usr/bin/env bats

# envfolio text mv and envfolio text cp, through the real ./envfolio, against a throwaway GPG home and store.

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

# A ready store: texts web/user, web/home, web/deep/x, mail/work; secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$ENVFOLIO" text insert -t "$name value" "$name" < /dev/null
    done
    "$ENVFOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
}

clean() { [ -z "$(git -C "$ENVFOLIO_STORE_DIR" status --porcelain)" ] ; }

@test "MANUAL: text mv — rename a text" {
    make-store
    run "$ENVFOLIO" text mv web/user web/login < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$ENVFOLIO_STORE_DIR/web/user.txt" ]
    [ "$("$ENVFOLIO" text show web/login)" = "web/user value" ]
    [ "$(git -C "$ENVFOLIO_STORE_DIR" log -1 --format=%s)" = "Rename web/user to web/login." ]
    clean
}

@test "text mv: into a folder, the text keeps its name; an emptied folder goes" {
    make-store
    run "$ENVFOLIO" text mv mail/work archive/ < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show archive/work)" = "mail/work value" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/mail" ]
    clean
}

@test "text mv: a folder moves its texts only; its secrets stay" {
    make-store
    run "$ENVFOLIO" text mv web site < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show site/user)" = "web/user value" ]
    [ "$("$ENVFOLIO" text show site/deep/x)" = "web/deep/x value" ]
    [ -z "$(find "$ENVFOLIO_STORE_DIR/web" -name '*.txt*')" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/site/github.gpg" ]
    clean
}

@test "text mv: piped in, an existing text is overwritten" {
    make-store
    run "$ENVFOLIO" text mv web/user web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show web/home)" = "web/user value" ]
    clean
}

@test "MANUAL: text cp — copy a text" {
    make-store
    run "$ENVFOLIO" text cp web/user web/user-copy < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show web/user)" = "web/user value" ]
    [ "$("$ENVFOLIO" text show web/user-copy)" = "web/user value" ]
    [ "$(git -C "$ENVFOLIO_STORE_DIR" log -1 --format=%s)" = "Copy web/user to web/user-copy." ]
    clean
}

@test "text cp: a folder copies its texts only" {
    make-store
    run "$ENVFOLIO" text cp web backup < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show backup/deep/x)" = "web/deep/x value" ]
    [ "$("$ENVFOLIO" text show web/deep/x)" = "web/deep/x value" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/backup/github.gpg" ]
    clean
}

@test "text mv/cp: a secret, an unknown name or a folder without texts is refused" {
    make-store
    "$ENVFOLIO" secret insert -m only/secret < <(printf 'k\n') >/dev/null
    local how
    for how in mv cp; do
        run "$ENVFOLIO" text "$how" web/github x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'web/github' is not in the store"* ]]
        run "$ENVFOLIO" text "$how" only x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'only' holds no texts"* ]]
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "text mv/cp: names leaving the store, or bad arguments, are refused" {
    make-store
    local how
    for how in mv cp; do
        run "$ENVFOLIO" text "$how" web/user ../out < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'../out' is not a valid name"* ]]
        run "$ENVFOLIO" text "$how" ../web/user x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
        run "$ENVFOLIO" text "$how" web/user < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"Usage: envfolio text $how"* ]]
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "text mv/cp: no store fails; --help works without one" {
    local how
    for how in mv cp; do
        run "$ENVFOLIO" text "$how" a b < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"No ready EnvFolio store"* ]]
        run "$ENVFOLIO" text "$how" --help
        [ "$status" -eq 0 ]
        [[ $output == *"Usage: envfolio text $how"* ]]
        run "$ENVFOLIO" help text "$how"
        [ "$status" -eq 0 ]
    done
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

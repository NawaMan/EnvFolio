#!/usr/bin/env bats

# keep text mv and keep text cp, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store: texts web/user, web/home, web/deep/x, mail/work; secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$KEEP" text insert -t "$name value" "$name" < /dev/null
    done
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
}

clean() { [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ] ; }

@test "MANUAL: text mv — rename a text" {
    make-store
    run "$KEEP" text mv web/user web/login < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR/web/user.txt" ]
    [ "$("$KEEP" text show web/login)" = "web/user value" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Rename web/user to web/login." ]
    clean
}

@test "text mv: into a folder, the text keeps its name; an emptied folder goes" {
    make-store
    run "$KEEP" text mv mail/work archive/ < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show archive/work)" = "mail/work value" ]
    [ ! -e "$KEEP_STORE_DIR/mail" ]
    clean
}

@test "text mv: a folder moves its texts only; its secrets stay" {
    make-store
    run "$KEEP" text mv web site < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show site/user)" = "web/user value" ]
    [ "$("$KEEP" text show site/deep/x)" = "web/deep/x value" ]
    [ -z "$(find "$KEEP_STORE_DIR/web" -name '*.txt*')" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ ! -e "$KEEP_STORE_DIR/site/github.gpg" ]
    clean
}

@test "text mv: piped in, an existing text is overwritten" {
    make-store
    run "$KEEP" text mv web/user web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show web/home)" = "web/user value" ]
    clean
}

@test "MANUAL: text cp — copy a text" {
    make-store
    run "$KEEP" text cp web/user web/user-copy < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show web/user)" = "web/user value" ]
    [ "$("$KEEP" text show web/user-copy)" = "web/user value" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Copy web/user to web/user-copy." ]
    clean
}

@test "text cp: a folder copies its texts only" {
    make-store
    run "$KEEP" text cp web backup < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show backup/deep/x)" = "web/deep/x value" ]
    [ "$("$KEEP" text show web/deep/x)" = "web/deep/x value" ]
    [ ! -e "$KEEP_STORE_DIR/backup/github.gpg" ]
    clean
}

@test "text mv/cp: a secret, an unknown name or a folder without texts is refused" {
    make-store
    "$KEEP" secret insert -m only/secret < <(printf 'k\n') >/dev/null
    local how
    for how in mv cp; do
        run "$KEEP" text "$how" web/github x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'web/github' is not in the store"* ]]
        run "$KEEP" text "$how" only x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'only' holds no texts"* ]]
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "text mv/cp: names leaving the store, or bad arguments, are refused" {
    make-store
    local how
    for how in mv cp; do
        run "$KEEP" text "$how" web/user ../out < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'../out' is not a valid name"* ]]
        run "$KEEP" text "$how" ../web/user x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
        run "$KEEP" text "$how" web/user < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"Usage: keep text $how"* ]]
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "text mv/cp: no store fails; --help works without one" {
    local how
    for how in mv cp; do
        run "$KEEP" text "$how" a b < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"No ready Keep store"* ]]
        run "$KEEP" text "$how" --help
        [ "$status" -eq 0 ]
        [[ $output == *"Usage: keep text $how"* ]]
        run "$KEEP" help text "$how"
        [ "$status" -eq 0 ]
    done
    [ ! -e "$KEEP_STORE_DIR" ]
}

#!/usr/bin/env bats

# folio mv text and folio cp text, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store: texts web/user, web/home, web/deep/x, mail/work; secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in web/user web/home web/deep/x mail/work; do
        "$FOLIO" insert text -t "$name value" "$name" < /dev/null
    done
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
}

clean() { [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ] ; }

@test "MANUAL: mv text — rename a text" {
    make-store
    run "$FOLIO" mv text web/user web/login < /dev/null
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
    [ "$("$FOLIO" show text web/login)" = "web/user value" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Rename web/user to web/login." ]
    clean
}

@test "mv text: into a folder, the text keeps its name; an emptied folder goes" {
    make-store
    run "$FOLIO" mv text mail/work archive/ < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text archive/work)" = "mail/work value" ]
    [ ! -e "$FOLIO_STORE_DIR/mail" ]
    clean
}

@test "mv text: a folder moves its texts only; its secrets stay" {
    make-store
    run "$FOLIO" mv text web site < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text site/user)" = "web/user value" ]
    [ "$("$FOLIO" show text site/deep/x)" = "web/deep/x value" ]
    [ -z "$(find "$FOLIO_STORE_DIR/web" -name '*.txt*')" ]
    [ "$(pass show web/github)" = "s3cr3t" ]
    [ ! -e "$FOLIO_STORE_DIR/site/github.gpg" ]
    clean
}

@test "mv text: piped in, an existing text is overwritten" {
    make-store
    run "$FOLIO" mv text web/user web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text web/home)" = "web/user value" ]
    clean
}

@test "MANUAL: cp text — copy a text" {
    make-store
    run "$FOLIO" cp text web/user web/user-copy < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text web/user)" = "web/user value" ]
    [ "$("$FOLIO" show text web/user-copy)" = "web/user value" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Copy web/user to web/user-copy." ]
    clean
}

@test "cp text: a folder copies its texts only" {
    make-store
    run "$FOLIO" cp text web backup < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text backup/deep/x)" = "web/deep/x value" ]
    [ "$("$FOLIO" show text web/deep/x)" = "web/deep/x value" ]
    [ ! -e "$FOLIO_STORE_DIR/backup/github.gpg" ]
    clean
}

@test "mv text/cp: a secret, an unknown name or a folder without texts is refused" {
    make-store
    "$FOLIO" insert secret -m only/secret < <(printf 'k\n') >/dev/null
    local how
    for how in mv cp; do
        run "$FOLIO" "$how" text web/github x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'web/github' is not in the store"* ]] || false
        run "$FOLIO" "$how" text only x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'only' holds no texts"* ]] || false
    done
    [ "$(pass show web/github)" = "s3cr3t" ]
}

@test "mv text/cp: names leaving the store, or bad arguments, are refused" {
    make-store
    local how
    for how in mv cp; do
        run "$FOLIO" "$how" text web/user ../out < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"'../out' is not a valid name"* ]] || false
        run "$FOLIO" "$how" text ../web/user x < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]] || false
        run "$FOLIO" "$how" text web/user < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"Usage: folio $how text"* ]] || false
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "mv text/cp: no store fails; --help works without one" {
    local how
    for how in mv cp; do
        run "$FOLIO" "$how" text a b < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"No ready EnvFolio store"* ]] || false
        run "$FOLIO" "$how" text --help
        [ "$status" -eq 0 ]
        [[ $output == *"Usage: folio $how text"* ]] || false
        run "$FOLIO" help "$how" text
        [ "$status" -eq 0 ]
    done
    [ ! -e "$FOLIO_STORE_DIR" ]
}

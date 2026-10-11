#!/usr/bin/env bats

# folio text generate, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store holding a two-line text note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -m note < <(printf 'old first\nkept second\n')
}

@test "MANUAL: text generate — generate a text" {
    make-store
    run "$FOLIO" text generate -n id/session 12 < /dev/null
    [ "$status" -eq 0 ]
    local text ; text=$(cat "$FOLIO_STORE_DIR/id/session.txt")
    [[ $text =~ ^[[:alnum:]]{12}$ ]]
    [ "${lines[0]}" = "The generated text for id/session is:" ]
    [ "${lines[1]}" = "$text" ]
    [ "$("$FOLIO" text show id/session)" = "$text" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add generated text for id/session." ]
}

@test "text generate: 25 characters by default, symbols allowed" {
    make-store
    run "$FOLIO" text generate token < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -m < "$FOLIO_STORE_DIR/token.txt" | tr -d ' ')" -eq 26 ]
}

@test "text generate: --in-place replaces the first line only" {
    make-store
    run "$FOLIO" text generate -i note 8 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(sed -n 2p "$FOLIO_STORE_DIR/note.txt")" = "kept second" ]
    [ "$(head -n 1 "$FOLIO_STORE_DIR/note.txt" | wc -m | tr -d ' ')" -eq 9 ]
    "$FOLIO" text show note >/dev/null
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Replace generated text for note." ]
}

@test "text generate: --in-place refuses a text changed outside EnvFolio" {
    make-store
    printf 'mallory\nrest\n' > "$FOLIO_STORE_DIR/note.txt"
    run "$FOLIO" text generate -i note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = $'mallory\nrest' ]
}

@test "text generate: piped in, an existing text is overwritten" {
    make-store
    run "$FOLIO" text generate note 5 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -l < "$FOLIO_STORE_DIR/note.txt" | tr -d ' ')" -eq 1 ]
}

@test "text generate: bad arguments are refused" {
    make-store
    local args
    for args in "" "-i -f x" "x 0" "x abc" "x 5 6" "-c x" "-q x"; do
        # shellcheck disable=SC2086  # split the arguments
        run "$FOLIO" text generate $args < /dev/null
        [ "$status" -eq 1 ]
    done
    run "$FOLIO" text generate ../out < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is not a valid name"* ]]
}

@test "text generate: no store fails and creates nothing" {
    run "$FOLIO" text generate x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "text generate --help: works without a store" {
    run "$FOLIO" text generate --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio text generate"* ]]
    run "$FOLIO" help text generate
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

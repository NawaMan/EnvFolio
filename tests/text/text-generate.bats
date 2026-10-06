#!/usr/bin/env bats

# keep text generate, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store holding a two-line text note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -m note < <(printf 'old first\nkept second\n')
}

@test "MANUAL: text generate — generate a text" {
    make-store
    run "$KEEP" text generate -n id/session 12 < /dev/null
    [ "$status" -eq 0 ]
    local text ; text=$(cat "$KEEP_STORE_DIR/id/session.txt")
    [[ $text =~ ^[[:alnum:]]{12}$ ]]
    [ "${lines[0]}" = "The generated text for id/session is:" ]
    [ "${lines[1]}" = "$text" ]
    [ "$("$KEEP" text show id/session)" = "$text" ]
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Add generated text for id/session." ]
}

@test "text generate: 25 characters by default, symbols allowed" {
    make-store
    run "$KEEP" text generate token < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -m < "$KEEP_STORE_DIR/token.txt" | tr -d ' ')" -eq 26 ]
}

@test "text generate: --in-place replaces the first line only" {
    make-store
    run "$KEEP" text generate -i note 8 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(sed -n 2p "$KEEP_STORE_DIR/note.txt")" = "kept second" ]
    [ "$(head -n 1 "$KEEP_STORE_DIR/note.txt" | wc -m | tr -d ' ')" -eq 9 ]
    "$KEEP" text show note >/dev/null
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Replace generated text for note." ]
}

@test "text generate: --in-place refuses a text changed outside Keep" {
    make-store
    printf 'mallory\nrest\n' > "$KEEP_STORE_DIR/note.txt"
    run "$KEEP" text generate -i note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [ "$(cat "$KEEP_STORE_DIR/note.txt")" = $'mallory\nrest' ]
}

@test "text generate: piped in, an existing text is overwritten" {
    make-store
    run "$KEEP" text generate note 5 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -l < "$KEEP_STORE_DIR/note.txt" | tr -d ' ')" -eq 1 ]
}

@test "text generate: bad arguments are refused" {
    make-store
    local args
    for args in "" "-i -f x" "x 0" "x abc" "x 5 6" "-c x" "-q x"; do
        # shellcheck disable=SC2086  # split the arguments
        run "$KEEP" text generate $args < /dev/null
        [ "$status" -eq 1 ]
    done
    run "$KEEP" text generate ../out < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is not a valid name"* ]]
}

@test "text generate: no store fails and creates nothing" {
    run "$KEEP" text generate x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text generate --help: works without a store" {
    run "$KEEP" text generate --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text generate"* ]]
    run "$KEEP" help text generate
    [ "$status" -eq 0 ]
    [ ! -e "$KEEP_STORE_DIR" ]
}

#!/usr/bin/env bats

# folio generate text, through the real ./folio, against a throwaway GPG home and store.

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
    "$FOLIO" insert text -m note < <(printf 'old first\nkept second\n')
}

@test "MANUAL: generate text — generate a text" {
    make-store
    run "$FOLIO" generate text -n id/session 12 < /dev/null
    [ "$status" -eq 0 ]
    local text ; text=$(cat "$FOLIO_STORE_DIR/id/session.txt")
    [[ $text =~ ^[[:alnum:]]{12}$ ]] || false
    [ "${lines[0]}" = "The generated text for id/session is:" ]
    [ "${lines[1]}" = "$text" ]
    [ "$("$FOLIO" show text id/session)" = "$text" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add generated text for id/session." ]
}

@test "generate text: 25 characters by default, symbols allowed" {
    make-store
    run "$FOLIO" generate text token < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -m < "$FOLIO_STORE_DIR/token.txt" | tr -d ' ')" -eq 26 ]
}

@test "generate text: --in-place replaces the first line only" {
    make-store
    run "$FOLIO" generate text -i note 8 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(sed -n 2p "$FOLIO_STORE_DIR/note.txt")" = "kept second" ]
    [ "$(head -n 1 "$FOLIO_STORE_DIR/note.txt" | wc -m | tr -d ' ')" -eq 9 ]
    "$FOLIO" show text note >/dev/null
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Replace generated text for note." ]
}

@test "generate text: --in-place refuses a text changed outside EnvFolio" {
    make-store
    printf 'mallory\nrest\n' > "$FOLIO_STORE_DIR/note.txt"
    run "$FOLIO" generate text -i note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]] || false
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = $'mallory\nrest' ]
}

@test "generate text: piped in, an existing text is overwritten" {
    make-store
    run "$FOLIO" generate text note 5 < /dev/null
    [ "$status" -eq 0 ]
    [ "$(wc -l < "$FOLIO_STORE_DIR/note.txt" | tr -d ' ')" -eq 1 ]
}

@test "generate text: bad arguments are refused" {
    make-store
    local args
    for args in "" "-i -f x" "x 0" "x abc" "x 5 6" "-c x" "-q x"; do
        # shellcheck disable=SC2086  # split the arguments
        run "$FOLIO" generate text $args < /dev/null
        [ "$status" -eq 1 ]
    done
    for args in "x 0" "x abc"; do
        # shellcheck disable=SC2086  # split the arguments
        run "$FOLIO" generate text $args < /dev/null
        [[ $output == *"the length must be a number above 0."* ]] || false
    done
    run "$FOLIO" generate text -q x < /dev/null
    [[ $output == *"generate text: unknown option: -q"* ]] || false
    run "$FOLIO" generate text ../out < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is not a valid name"* ]] || false
}

@test "generate text: no store fails and creates nothing" {
    run "$FOLIO" generate text x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "generate text --help: works without a store" {
    run "$FOLIO" generate text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio generate text"* ]] || false
    run "$FOLIO" help generate text
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

#!/usr/bin/env bats

# folio insert text, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store, encrypted to (and signing with) a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
}

# The text file is signed by the store's key.
is-signed() {
    gpg --verify "$FOLIO_STORE_DIR/$1.txt.sig" "$FOLIO_STORE_DIR/$1.txt" 2>/dev/null
}

@test "MANUAL: insert text — give the text" {
    make-store
    run "$FOLIO" insert text -t "https://example.com" web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/web/home.txt")" = "https://example.com" ]
    is-signed web/home
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add given text for web/home to store." ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "MANUAL: insert text — pipe a text in" {
    make-store
    run "$FOLIO" insert text web/user < <(printf 'jane\nignored\n')
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/web/user.txt")" = "jane" ]
    is-signed web/user
}

@test "MANUAL: insert text — several lines" {
    make-store
    run "$FOLIO" insert text -m notes/todo < <(printf 'one\ntwo\n\n')
    [ "$status" -eq 0 ]
    cmp <(printf 'one\ntwo\n\n') "$FOLIO_STORE_DIR/notes/todo.txt"
    is-signed notes/todo
}

@test "insert text: --text=<text> works too" {
    make-store
    run "$FOLIO" insert text --text=hello greeting < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/greeting.txt")" = "hello" ]
}

@test "insert text: piped in, an existing text is overwritten; the old one stays in history" {
    make-store
    "$FOLIO" insert text -t old note < /dev/null
    run "$FOLIO" insert text -t new note < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = "new" ]
    is-signed note
    [ "$(git -C "$FOLIO_STORE_DIR" show HEAD~1:note.txt)" = "old" ]
}

@test "insert text: the same text again succeeds, and the signature still matches" {
    make-store
    "$FOLIO" insert text -t same note < /dev/null
    run "$FOLIO" insert text -t same note < /dev/null
    [ "$status" -eq 0 ]
    # A new signature may differ (it holds the time), so only check that it matches.
    run "$FOLIO" show text note
    [ "$status" -eq 0 ]
    [ "$output" = "same" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "insert text: a failed signature keeps the old text and leaves nothing behind" {
    make-store
    "$FOLIO" insert text -t old note < /dev/null
    # A GPG home without the store's secret key: signing must fail.
    GNUPGHOME="$SANDBOX/no-key" ; mkdir -m 700 "$GNUPGHOME"
    run "$FOLIO" insert text -t new note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"signing failed; nothing was saved"* ]] || false
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = "old" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "insert text: texts do not show in ls secret or find secret" {
    make-store
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" insert text -t jane web/github < /dev/null
    "$FOLIO" insert text -t x only-texts/a < /dev/null
    run "$FOLIO" ls secret
    [ "$status" -eq 0 ]
    [[ $output == *"github"* ]] || false
    [[ $output != *".txt"* && $output != *"only-texts"* ]] || false
    run "$FOLIO" find secret git
    [ "$status" -eq 0 ]
    [[ $output == *"github"* && $output != *".txt"* ]] || false
}

@test "insert text: a name leaving the store is refused, nothing is written" {
    make-store
    local name
    for name in ../out a/../../out .. a/ ""; do
        run "$FOLIO" insert text -t x "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]] || false
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "insert text: bad arguments get the usage" {
    make-store
    run "$FOLIO" insert text -t x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio insert text"* ]] || false
    run "$FOLIO" insert text a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio insert text"* ]] || false
    run "$FOLIO" insert text --bogus a < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --bogus"* ]] || false
}

@test "insert text: no text on stdin is refused, nothing saved" {
    make-store
    run "$FOLIO" insert text web/empty < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"insert text: no text given."* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/web/empty.txt" ]
}

@test "insert text: no store fails and creates nothing" {
    run "$FOLIO" insert text -t x note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "insert text --help: works without a store" {
    run "$FOLIO" insert text --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio insert text"* ]] || false
    run "$FOLIO" help insert text
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio insert text"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

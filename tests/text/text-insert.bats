#!/usr/bin/env bats

# folio text insert, through the real ./folio, against a throwaway GPG home and store.

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

@test "MANUAL: text insert — give the text" {
    make-store
    run "$FOLIO" text insert -t "https://example.com" web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/web/home.txt")" = "https://example.com" ]
    is-signed web/home
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add given text for web/home to store." ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "MANUAL: text insert — pipe a text in" {
    make-store
    run "$FOLIO" text insert web/user < <(printf 'jane\nignored\n')
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/web/user.txt")" = "jane" ]
    is-signed web/user
}

@test "MANUAL: text insert — several lines" {
    make-store
    run "$FOLIO" text insert -m notes/todo < <(printf 'one\ntwo\n\n')
    [ "$status" -eq 0 ]
    cmp <(printf 'one\ntwo\n\n') "$FOLIO_STORE_DIR/notes/todo.txt"
    is-signed notes/todo
}

@test "text insert: --text=<text> works too" {
    make-store
    run "$FOLIO" text insert --text=hello greeting < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/greeting.txt")" = "hello" ]
}

@test "text insert: piped in, an existing text is overwritten; the old one stays in history" {
    make-store
    "$FOLIO" text insert -t old note < /dev/null
    run "$FOLIO" text insert -t new note < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = "new" ]
    is-signed note
    [ "$(git -C "$FOLIO_STORE_DIR" show HEAD~1:note.txt)" = "old" ]
}

@test "text insert: the same text again succeeds, and the signature still matches" {
    make-store
    "$FOLIO" text insert -t same note < /dev/null
    run "$FOLIO" text insert -t same note < /dev/null
    [ "$status" -eq 0 ]
    # A new signature may differ (it holds the time), so only check that it matches.
    run "$FOLIO" text show note
    [ "$status" -eq 0 ]
    [ "$output" = "same" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "text insert: a failed signature keeps the old text and leaves nothing behind" {
    make-store
    "$FOLIO" text insert -t old note < /dev/null
    # A GPG home without the store's secret key: signing must fail.
    GNUPGHOME="$SANDBOX/no-key" ; mkdir -m 700 "$GNUPGHOME"
    run "$FOLIO" text insert -t new note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"signing failed; nothing was saved"* ]]
    [ "$(cat "$FOLIO_STORE_DIR/note.txt")" = "old" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "text insert: texts do not show in secret ls or secret find" {
    make-store
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" text insert -t jane web/github < /dev/null
    "$FOLIO" text insert -t x only-texts/a < /dev/null
    run "$FOLIO" secret ls
    [ "$status" -eq 0 ]
    [[ $output == *"github"* ]]
    [[ $output != *".txt"* && $output != *"only-texts"* ]]
    run "$FOLIO" secret find git
    [ "$status" -eq 0 ]
    [[ $output == *"github"* && $output != *".txt"* ]]
}

@test "text insert: a name leaving the store is refused, nothing is written" {
    make-store
    local name
    for name in ../out a/../../out .. a/ ""; do
        run "$FOLIO" text insert -t x "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "text insert: bad arguments get the usage" {
    make-store
    run "$FOLIO" text insert -t x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio text insert"* ]]
    run "$FOLIO" text insert a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio text insert"* ]]
    run "$FOLIO" text insert --bogus a < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --bogus"* ]]
}

@test "text insert: no store fails and creates nothing" {
    run "$FOLIO" text insert -t x note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "text insert --help: works without a store" {
    run "$FOLIO" text insert --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio text insert"* ]]
    run "$FOLIO" help text insert
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio text insert"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

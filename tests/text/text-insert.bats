#!/usr/bin/env bats

# keep text insert, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to (and signing with) a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
}

# The text file is signed by the store's key.
is-signed() {
    gpg --verify "$KEEP_STORE_DIR/$1.txt.sig" "$KEEP_STORE_DIR/$1.txt" 2>/dev/null
}

@test "MANUAL: text insert — give the text" {
    make-store
    run "$KEEP" text insert -t "https://example.com" web/home < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$KEEP_STORE_DIR/web/home.txt")" = "https://example.com" ]
    is-signed web/home
    [ "$(git -C "$KEEP_STORE_DIR" log -1 --format=%s)" = "Add given text for web/home to store." ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
}

@test "MANUAL: text insert — pipe a text in" {
    make-store
    run "$KEEP" text insert web/user < <(printf 'jane\nignored\n')
    [ "$status" -eq 0 ]
    [ "$(cat "$KEEP_STORE_DIR/web/user.txt")" = "jane" ]
    is-signed web/user
}

@test "MANUAL: text insert — several lines" {
    make-store
    run "$KEEP" text insert -m notes/todo < <(printf 'one\ntwo\n\n')
    [ "$status" -eq 0 ]
    cmp <(printf 'one\ntwo\n\n') "$KEEP_STORE_DIR/notes/todo.txt"
    is-signed notes/todo
}

@test "text insert: --text=<text> works too" {
    make-store
    run "$KEEP" text insert --text=hello greeting < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$KEEP_STORE_DIR/greeting.txt")" = "hello" ]
}

@test "text insert: piped in, an existing text is overwritten; the old one stays in history" {
    make-store
    "$KEEP" text insert -t old note < /dev/null
    run "$KEEP" text insert -t new note < /dev/null
    [ "$status" -eq 0 ]
    [ "$(cat "$KEEP_STORE_DIR/note.txt")" = "new" ]
    is-signed note
    [ "$(git -C "$KEEP_STORE_DIR" show HEAD~1:note.txt)" = "old" ]
}

@test "text insert: the same text again succeeds, and the signature still matches" {
    make-store
    "$KEEP" text insert -t same note < /dev/null
    run "$KEEP" text insert -t same note < /dev/null
    [ "$status" -eq 0 ]
    # A new signature may differ (it holds the time), so only check that it matches.
    run "$KEEP" text show note
    [ "$status" -eq 0 ]
    [ "$output" = "same" ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
}

@test "text insert: a failed signature keeps the old text and leaves nothing behind" {
    make-store
    "$KEEP" text insert -t old note < /dev/null
    # A GPG home without the store's secret key: signing must fail.
    GNUPGHOME="$SANDBOX/no-key" ; mkdir -m 700 "$GNUPGHOME"
    run "$KEEP" text insert -t new note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"signing failed; nothing was saved"* ]]
    [ "$(cat "$KEEP_STORE_DIR/note.txt")" = "old" ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
}

@test "text insert: texts do not show in secret ls or secret find" {
    make-store
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$KEEP" text insert -t jane web/github < /dev/null
    "$KEEP" text insert -t x only-texts/a < /dev/null
    run "$KEEP" secret ls
    [ "$status" -eq 0 ]
    [[ $output == *"github"* ]]
    [[ $output != *".txt"* && $output != *"only-texts"* ]]
    run "$KEEP" secret find git
    [ "$status" -eq 0 ]
    [[ $output == *"github"* && $output != *".txt"* ]]
}

@test "text insert: a name leaving the store is refused, nothing is written" {
    make-store
    local name
    for name in ../out a/../../out .. a/ ""; do
        run "$KEEP" text insert -t x "$name" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"is not a valid name"* ]]
    done
    [ ! -e "$SANDBOX/out.txt" ]
}

@test "text insert: bad arguments get the usage" {
    make-store
    run "$KEEP" text insert -t x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text insert"* ]]
    run "$KEEP" text insert a b < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text insert"* ]]
    run "$KEEP" text insert --bogus a < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --bogus"* ]]
}

@test "text insert: no store fails and creates nothing" {
    run "$KEEP" text insert -t x note < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text insert --help: works without a store" {
    run "$KEEP" text insert --help < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text insert"* ]]
    run "$KEEP" help text insert
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text insert"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

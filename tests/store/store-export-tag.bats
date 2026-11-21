#!/usr/bin/env bats

# folio export --tag: every item that carries the tag, wherever it is in the store, added to what
# the names take — through the real ./folio, against a throwaway GPG home and store.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    FILE="$SANDBOX/items.folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with some items tagged:
#   gh/user            #work        gh/note    (no tag)     gh/token (S)  #work
#   web/home           #work #public           web/user     #public
#   @prod/server/user  #work        @prod/server/db  (no tag)
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t me          gh/user            < /dev/null
    "$FOLIO" insert text -t hello       gh/note            < /dev/null
    "$FOLIO" insert text -t example.com web/home           < /dev/null
    "$FOLIO" insert text -t www         web/user           < /dev/null
    "$FOLIO" insert text -t deploy      @prod/server/user  < /dev/null
    "$FOLIO" insert text -t db.prod     @prod/server/db    < /dev/null
    "$FOLIO" insert secret -m gh/token < <(printf 't-secret\n') >/dev/null
    "$FOLIO" tag add gh/user work            < /dev/null >/dev/null
    "$FOLIO" tag add gh/token work           < /dev/null >/dev/null
    "$FOLIO" tag add web/home work public    < /dev/null >/dev/null
    "$FOLIO" tag add web/user public         < /dev/null >/dev/null
    "$FOLIO" tag add @prod/server/user work  < /dev/null >/dev/null
}

# in-file: what the export holds, full names one per line, (S) or (T) in front.
in-file() { "$FOLIO" ls --flat --plain --from "$FILE" --file-passphrase-fd 3 3< <(printf 'p\n') 2>/dev/null ; }

@test "MANUAL: export — every item with a tag: wherever it is, not asked" {
    make-store
    # stdin has only the passphrase: nothing is asked.
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag work < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $stderr != *"Which items?"* ]] || false
    [[ $stderr == *"✓ Tags: work"* ]] || false
    [[ $stderr == *"left out 1 secret(s) with tag work; add --secrets to take them."* ]] || false
    [[ $stderr == *"Items: 3 (texts: 3, secrets: 0)"* ]] || false
    [ "$(in-file)" = "(T)@prod/server/user
(T)gh/user
(T)web/home" ]
    # The tags go with the items.
    run "$FOLIO" ls --flat --plain --tag public --from "$FILE" --file-passphrase-fd 3 3< <(printf 'p\n')
    [ "$output" = "(T)web/home" ]
}

@test "export --tag: secrets with --secrets; given more than once, those that carry any of them" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin -s --tag '#work' < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 4 (texts: 3, secrets: 1)"* ]] || false
    rm "$FILE"
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag work --tag=public < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"✓ Tags: work public"* ]] || false
    [ "$(in-file)" = "(T)@prod/server/user
(T)gh/user
(T)web/home
(T)web/user" ]
    # Only secrets carry the tag: that is the error.
    "$FOLIO" tag add gh/token hidden < /dev/null >/dev/null
    run --separate-stderr "$FOLIO" export -o "$SANDBOX/no.folio" --file-passphrase-stdin --tag hidden < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"export: only secrets with tag hidden (1); add --secrets to take them."* ]] || false
    [ ! -e "$SANDBOX/no.folio" ]
}

@test "MANUAL: export — every item with a tag: added to the names typed, not narrowing them" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag public gh < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"left out 1 secret(s) under 'gh'; add --secrets to take them."* ]] || false
    [ "$(in-file)" = "(T)gh/note
(T)gh/user
(T)web/home
(T)web/user" ]
}

@test "export --tag: with --use, the tagged items and the namespace's, named without it" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --use @prod --tag public < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$(in-file)" = "(T)server/db
(T)server/user
(T)web/home
(T)web/user" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "export --tag: not a tag, or nothing carries it — no file is written" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag 'x y' gh < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"export: 'x y' is not a tag."* ]] || false
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag nope gh < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"export: there are no items with tag nope."* ]] || false
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --tag nope < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"export: there are no items with tag nope."* ]] || false
    [ ! -e "$FILE" ]
}

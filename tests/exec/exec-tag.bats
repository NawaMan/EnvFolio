#!/usr/bin/env bats

# folio exec/shell --tag: every entry outside the namespaces that carries the tag, laid among the
# entries in the order typed — through the real ./folio, against a throwaway GPG home and store.

# shellcheck disable=SC2016  # the '$VAR's are for the command Folio runs to expand, not this file
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
    mkdir -p "$HOME" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    FILE="$SANDBOX/items.folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with some items tagged:
#   gh/user            me          #work
#   gh/note            hello       (no tag)
#   gh/token (S)       t-secret    #work
#   web/home           example.com #work #public
#   web/user           www         #public
#   @prod/server/user  deploy      #work
#   @prod/server/db    db.prod     (no tag)
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

# Switch to "there": its own empty GPG home, and no store.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
}

# show <VAR>...: a command printing VAR=[value] for each.
show() { local v out="" ; for v in "$@"; do out+="echo \"$v=[\$$v]\" ; " ; done ; echo "$out" ; }

ALL_VARS="GH_USER GH_NOTE GH_TOKEN WEB_HOME WEB_USER SERVER_USER SERVER_DB"

@test "MANUAL: exec — every entry with a tag: --tag is --all, with only those" {
    make-store
    # shellcheck disable=SC2086  # the names, one word each
    run --separate-stderr "$FOLIO" exec --tag work -- sh -c "$(show $ALL_VARS)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[me]
GH_NOTE=[]
GH_TOKEN=[]
WEB_HOME=[example.com]
WEB_USER=[]
SERVER_USER=[]
SERVER_DB=[]" ]
    [[ $stderr == *"left out 1 secret(s) with tag work in the store; add --secrets to load them."* ]] || false
    [ -z "$(ls -A "$TMPDIR")" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "exec --tag: a # in front and --tag=<tag> are the same" {
    make-store
    run --separate-stderr "$FOLIO" exec --names --plain --tag work
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER  <- gh/user(T)
WEB_HOME <- web/home(T)" ]
    local alone=$output
    run --separate-stderr "$FOLIO" exec --names --plain --tag '#work'
    [ "$output" = "$alone" ]
    run --separate-stderr "$FOLIO" exec --names --plain --tag=work
    [ "$output" = "$alone" ]
}

@test "MANUAL: exec — every entry with a tag: added to the entries typed, not narrowing them" {
    make-store
    run --separate-stderr "$FOLIO" exec gh --tag public -- sh -c "$(show GH_USER GH_NOTE GH_TOKEN WEB_HOME WEB_USER)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[me]
GH_NOTE=[hello]
GH_TOKEN=[]
WEB_HOME=[example.com]
WEB_USER=[www]" ]
    [[ $stderr == *"left out 1 secret(s) under 'gh'; add --secrets to load them."* ]] || false
    run --separate-stderr "$FOLIO" exec --tag public gh/note NOTE=gh/note -- sh -c "$(show GH_USER GH_NOTE NOTE WEB_USER)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[]
GH_NOTE=[hello]
NOTE=[hello]
WEB_USER=[www]" ]
    # With --all, it adds nothing --all does not take already.
    run --separate-stderr "$FOLIO" exec --names --plain --all --tag work
    [ "$output" = "GH_NOTE  <- gh/note(T)
GH_USER  <- gh/user(T)
WEB_HOME <- web/home(T)
WEB_USER <- web/user(T)" ]
}

@test "MANUAL: exec — every entry with a tag: given more than once, those that carry any of them" {
    make-store
    # shellcheck disable=SC2086  # the names, one word each
    run --separate-stderr "$FOLIO" exec --tag work --tag public -- sh -c "$(show $ALL_VARS)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[me]
GH_NOTE=[]
GH_TOKEN=[]
WEB_HOME=[example.com]
WEB_USER=[www]
SERVER_USER=[]
SERVER_DB=[]" ]
}

@test "exec --tag: secrets only with --secrets; only the tagged ones are counted as left out" {
    make-store
    "$FOLIO" insert secret -m gh/other < <(printf 'o-secret\n') >/dev/null
    run --separate-stderr "$FOLIO" exec -s --tag work -- sh -c "$(show GH_USER GH_TOKEN GH_OTHER)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[me]
GH_TOKEN=[t-secret]
GH_OTHER=[]" ]
    [[ $stderr != *"left out"* ]] || false
    # Only secrets carry the tag: that is the error, and nothing runs.
    "$FOLIO" tag add gh/other hidden < /dev/null >/dev/null
    run --separate-stderr "$FOLIO" exec --tag hidden -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"only secrets with tag hidden in the store (1); add --secrets to load them."* ]] || false
    [ ! -e "$SANDBOX/ran" ]
}

@test "MANUAL: exec — every entry with a tag: outside the namespaces, and with --use, in the order typed" {
    make-store
    "$FOLIO" insert text -t local server/user < /dev/null
    "$FOLIO" tag add server/user work < /dev/null >/dev/null
    # @prod/server/user carries the tag too, but --tag stays outside the namespaces, as --all does.
    run --separate-stderr "$FOLIO" exec --tag work -- sh -c "$(show SERVER_USER SERVER_DB)"
    [ "$output" = "SERVER_USER=[local]
SERVER_DB=[]" ]
    run --separate-stderr "$FOLIO" exec --tag work --use @prod -- sh -c "$(show SERVER_USER SERVER_DB GH_USER GH_NOTE)"
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_USER=[deploy]
SERVER_DB=[db.prod]
GH_USER=[me]
GH_NOTE=[]" ]
    run --separate-stderr "$FOLIO" exec --use @prod --tag work -- sh -c "$(show SERVER_USER SERVER_DB GH_USER)"
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_USER=[local]
SERVER_DB=[db.prod]
GH_USER=[me]" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "exec --tag: not a tag, or nothing carries it — nothing runs" {
    make-store
    run --separate-stderr "$FOLIO" exec --tag 'x y' -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"exec: 'x y' is not a tag."* ]] || false
    run --separate-stderr "$FOLIO" exec --tag nope -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"exec: the store has no entries with tag nope to load."* ]] || false
    run --separate-stderr "$FOLIO" exec gh --tag=nope -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"exec: the store has no entries with tag nope to load."* ]] || false
    run --separate-stderr "$FOLIO" exec --tag -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec --tag: with a vars file, the tagged entries only feed it" {
    make-store
    printf 'HOME_URL=https://${WEB_HOME}\n@{gh/note}\n' > "$SANDBOX/app.vars"
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/app.vars" --tag work -- sh -c "$(show HOME_URL GH_NOTE GH_USER WEB_HOME)"
    [ "$status" -eq 0 ]
    [ "$output" = "HOME_URL=[https://example.com]
GH_NOTE=[hello]
GH_USER=[]
WEB_HOME=[]" ]
}

@test "exec --from --tag: the tags an export carries, with no store" {
    make-store
    "$FOLIO" export -o "$FILE" --file-passphrase-stdin gh web < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 --tag public -- \
        sh -c "$(show GH_USER WEB_HOME WEB_USER)" 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER=[]
WEB_HOME=[example.com]
WEB_USER=[www]" ]
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 --tag nope -- \
        touch "$SANDBOX/ran" 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"exec: the export has no entries with tag nope to load."* ]] || false
    [ ! -e "$SANDBOX/ran" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "shell --tag: as exec — --names shows the tagged entries, and no shell starts" {
    make-store
    run --separate-stderr "$FOLIO" shell --names --plain -s --tag work
    [ "$status" -eq 0 ]
    [ "$output" = "GH_TOKEN <- gh/token(S)
GH_USER  <- gh/user(T)
WEB_HOME <- web/home(T)" ]
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --tag public < <(printf 'echo "home=[$WEB_HOME] gh=[$GH_USER]"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "home=[example.com] gh=[]" ]
    [[ $stderr == *"folio shell: loaded WEB_HOME, WEB_USER (texts: 2, secrets: 0)."* ]] || false
}

@test "tag add <folder>: still every item under it, tagged or not" {
    make-store
    run "$FOLIO" tag add gh extra < /dev/null
    [ "$status" -eq 0 ]
    run --separate-stderr "$FOLIO" exec --names --plain -s --tag extra
    [ "$output" = "GH_NOTE  <- gh/note(T)
GH_TOKEN <- gh/token(S)
GH_USER  <- gh/user(T)" ]
}

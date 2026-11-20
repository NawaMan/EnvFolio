#!/usr/bin/env bats

# folio tag add / rm / ls, and the tags going with their item (mv, cp, rm, export, import, backup),
# through the real ./folio, against throwaway GPG homes and stores.

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
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]] || false
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store: texts gh/user, web/home, web/deep/x; secrets gh/token, web/github; and gh/both,
# which is a text and a secret.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    local name
    for name in gh/user web/home web/deep/x gh/both; do
        "$FOLIO" insert text -t "$name value" "$name" < /dev/null
    done
    for name in gh/token web/github gh/both; do
        printf 'S3CR3T-%s\n' "$name" | "$FOLIO" insert secret -m "$name" >/dev/null
    done
}

# Switch to "there": its own GPG home, with a key of its own, and its own store folder.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    gpg --batch --passphrase '' --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
}

clean() { [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ] ; }

# The tags of <name>, as its file holds them, on one line.
tags() { paste -s -d ' ' "$FOLIO_STORE_DIR/$1.tags" ; }

# The Tags: line of `folio info <name>` (the first, when the name is both kinds).
info-tags() { "$FOLIO" info "$1" | awk 'index($0, "  Tags: ") == 1 { print substr($0, 17) ; exit }' ; }

# --- add ------------------------------------------------------------------------

@test "MANUAL: tag add — tag an item" {
    make-store
    run "$FOLIO" tag add gh/token work rotate-2027
    [ "$status" -eq 0 ]
    [ -z "$output" ]
    [ "$(tags gh/token)" = "rotate-2027 work" ]
    [ "$(info-tags gh/token)" = "rotate-2027, work" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add tags to gh/token." ]
    clean
    # Nothing of the secret is read: its tags are plain, its value is not among them.
    [[ $(cat "$FOLIO_STORE_DIR/gh/token.tags") != *S3CR3T* ]] || false
}

@test "tag add: a # in front is dropped; one it has already is kept once; sorted" {
    make-store
    "$FOLIO" tag add gh/user '#zeta' beta
    run "$FOLIO" tag add gh/user beta '#alpha' v1.2_x
    [ "$status" -eq 0 ]
    [ "$(tags gh/user)" = "alpha beta v1.2_x zeta" ]
    clean
}

@test "tag add: an item with no tags says none in info" {
    make-store
    [ "$(info-tags gh/user)" = "none" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/user.tags" ]
}

@test "tag add: a text and a secret of the same name share their tags" {
    make-store
    "$FOLIO" tag add gh/both shared
    run "$FOLIO" info gh/both
    [ "$status" -eq 0 ]
    [ "$(printf '%s\n' "$output" | grep -c '^  Tags:         shared$')" -eq 2 ]
}

@test "tag add: a bad tag, a missing item, too few words and an unknown option change nothing" {
    make-store
    local bad
    for bad in 'two words' 'a/b' '-x' '.hidden' '#' 'a,b'; do
        run "$FOLIO" tag add gh/user ok -- "$bad"
        [ "$status" -eq 1 ]
        [[ $output == *"is not a tag"* ]] || false
    done
    run "$FOLIO" tag add nope work
    [ "$status" -eq 1 ]
    [ "$output" = "folio: tag add: 'nope' is not a text or a secret in the store." ]
    run "$FOLIO" tag add gh work
    [ "$status" -eq 1 ]
    run "$FOLIO" tag add gh/user
    [ "$status" -eq 1 ]
    [ "$output" = "folio: Usage: folio tag add <name> <tag>..." ]
    run "$FOLIO" tag add --nope gh/user work
    [ "$status" -eq 1 ]
    [ "$output" = "folio: tag add: unknown option: --nope" ]
    run "$FOLIO" tag add ../x work
    [ "$status" -eq 1 ]
    [ ! -e "$FOLIO_STORE_DIR/gh/user.tags" ]
    clean
}

@test "tag: no command, an unknown one, and --help without a store" {
    run "$FOLIO" tag
    [ "$status" -eq 1 ]
    [ "$output" = "Usage: folio tag <add|rm|ls> [args...]" ]
    run "$FOLIO" tag nope
    [ "$status" -eq 1 ]
    run "$FOLIO" tag --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio tag add"* && $output == *"Usage: folio tag rm"* && $output == *"Usage: folio tag ls"* ]] || false
    [ "$("$FOLIO" tag add --help)" = "$("$FOLIO" help tag add)" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

# --- rm -------------------------------------------------------------------------

@test "MANUAL: tag rm — take a tag off" {
    make-store
    "$FOLIO" tag add gh/token work rotate-2027 old
    run "$FOLIO" tag rm gh/token old '#work'
    [ "$status" -eq 0 ]
    [ "$(tags gh/token)" = "rotate-2027" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Remove tags from gh/token." ]
    clean
}

@test "tag rm: the last tag taken off removes the file; one it does not have changes nothing" {
    make-store
    "$FOLIO" tag add gh/token work old
    run "$FOLIO" tag rm gh/token old nope
    [ "$status" -eq 1 ]
    [ "$output" = "folio: tag rm: 'gh/token' has no tag 'nope'." ]
    [ "$(tags gh/token)" = "old work" ]
    "$FOLIO" tag rm gh/token old work
    [ ! -e "$FOLIO_STORE_DIR/gh/token.tags" ]
    [ "$(info-tags gh/token)" = "none" ]
    clean
}

# --- ls -------------------------------------------------------------------------

@test "MANUAL: tag ls — list the tags" {
    make-store
    "$FOLIO" tag add gh/token work rotate-2027
    "$FOLIO" tag add gh/user work
    "$FOLIO" tag add gh/both work
    run "$FOLIO" tag ls
    [ "$status" -eq 0 ]
    [ "$output" = "rotate-2027 (1)"$'\n'"work (3)" ]
}

@test "MANUAL: tag ls — list the items with a tag" {
    make-store
    "$FOLIO" tag add gh/token work rotate-2027
    "$FOLIO" tag add gh/user work
    "$FOLIO" tag add gh/both work
    run "$FOLIO" tag ls work
    [ "$status" -eq 0 ]
    [ "$output" = "(T)gh/both"$'\n'"(S)gh/both"$'\n'"(S)gh/token"$'\n'"(T)gh/user" ]
    [ "$("$FOLIO" tag ls '#rotate-2027')" = "(S)gh/token" ]
}

@test "tag ls: no tags lists nothing; a tag no item has fails" {
    make-store
    run "$FOLIO" tag ls
    [ "$status" -eq 0 ]
    [ -z "$output" ]
    run "$FOLIO" tag ls nope
    [ "$status" -eq 1 ]
    [ "$output" = "folio: tag ls: no item has the tag 'nope'." ]
    run "$FOLIO" tag ls a b
    [ "$status" -eq 1 ]
}

@test "tags: ls, ls text, ls secret and find never show the .tags files" {
    make-store
    "$FOLIO" tag add gh/token work
    "$FOLIO" tag add gh/user work
    local out
    out="$("$FOLIO" ls)$("$FOLIO" ls --flat)$("$FOLIO" ls text)$("$FOLIO" ls secret)$("$FOLIO" find text gh)$("$FOLIO" find secret gh)"
    [[ $out == *gh* && $out != *tags* ]] || false
}

@test "tags: lines that are not tags, written outside Folio, are not shown" {
    make-store
    "$FOLIO" tag add gh/user work
    printf 'work\ntwo words\n\n\033[31mred\n' > "$FOLIO_STORE_DIR/gh/user.tags"
    [ "$(info-tags gh/user)" = "work" ]
    [ "$("$FOLIO" tag ls)" = "work (1)" ]
}

# --- The tags go with the item ----------------------------------------------------

@test "mv text: the tags go with the text, in the same commit" {
    make-store
    "$FOLIO" tag add gh/user work
    run "$FOLIO" mv text gh/user gh/login < /dev/null
    [ "$status" -eq 0 ]
    [ "$(tags gh/login)" = "work" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/user.tags" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Rename gh/user to gh/login." ]
    clean
}

@test "mv text: a secret of the same name stays, and keeps the tags too" {
    make-store
    "$FOLIO" tag add gh/both shared
    "$FOLIO" mv text gh/both gh/moved < /dev/null
    [ "$(tags gh/moved)" = "shared" ]
    [ "$(tags gh/both)" = "shared" ]
    clean
}

@test "mv text: a folder's texts take their tags; an emptied folder goes" {
    make-store
    "$FOLIO" tag add web/home site
    "$FOLIO" tag add web/deep/x deep
    "$FOLIO" tag add web/github code
    "$FOLIO" mv text web site < /dev/null
    [ "$(tags site/home)" = "site" ]
    [ "$(tags site/deep/x)" = "deep" ]
    [ ! -e "$FOLIO_STORE_DIR/web/home.tags" ]
    [ ! -e "$FOLIO_STORE_DIR/web/deep" ]
    # The secret stayed, with its tags.
    [ "$(tags web/github)" = "code" ]
    clean
}

@test "cp text: the copy gets the tags, added to those it had; the old one keeps them" {
    make-store
    "$FOLIO" tag add gh/user work
    "$FOLIO" tag add web/home site
    "$FOLIO" cp text -f gh/user web/home < /dev/null
    [ "$(tags web/home)" = "site work" ]
    [ "$(tags gh/user)" = "work" ]
    clean
}

@test "rm text: its tags go — unless a secret of the same name is left" {
    make-store
    "$FOLIO" tag add gh/user work
    "$FOLIO" tag add gh/both shared
    "$FOLIO" rm text -f gh/user
    "$FOLIO" rm text -f gh/both
    [ ! -e "$FOLIO_STORE_DIR/gh/user.tags" ]
    [ "$(tags gh/both)" = "shared" ]
    clean
}

@test "rm text -r: a folder's texts lose their tags; its secrets keep theirs" {
    make-store
    "$FOLIO" tag add web/home site
    "$FOLIO" tag add web/deep/x deep
    "$FOLIO" tag add web/github code
    "$FOLIO" rm text -r -f web
    [ ! -e "$FOLIO_STORE_DIR/web/home.tags" ]
    [ ! -e "$FOLIO_STORE_DIR/web/deep" ]
    [ "$(tags web/github)" = "code" ]
    clean
}

@test "mv secret: the tags go with the secret, also into a folder" {
    make-store
    "$FOLIO" tag add gh/token work
    run "$FOLIO" mv secret gh/token gh/pat
    [ "$status" -eq 0 ]
    [ "$(tags gh/pat)" = "work" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/token.tags" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Carry the tags of gh/token to gh/pat." ]
    "$FOLIO" mv secret gh/pat web/
    [ "$(tags web/pat)" = "work" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/pat.tags" ]
    clean
}

@test "mv secret: a whole folder moves with its tags" {
    make-store
    "$FOLIO" tag add web/github code
    "$FOLIO" mv secret web site
    [ "$(tags site/github)" = "code" ]
    [ ! -e "$FOLIO_STORE_DIR/web" ]
    clean
}

@test "cp secret: the copy gets the tags; the old one keeps them" {
    make-store
    "$FOLIO" tag add gh/token work
    "$FOLIO" cp secret gh/token gh/copy
    [ "$(tags gh/copy)" = "work" ]
    [ "$(tags gh/token)" = "work" ]
    clean
}

@test "rm secret: its tags go — unless a text of the same name is left" {
    make-store
    "$FOLIO" tag add gh/token work
    "$FOLIO" tag add gh/both shared
    "$FOLIO" rm secret -f gh/token
    "$FOLIO" rm secret -f gh/both
    [ ! -e "$FOLIO_STORE_DIR/gh/token.tags" ]
    [ "$(tags gh/both)" = "shared" ]
    clean
}

@test "MANUAL: tag add — the tags go into an export, and come back with import" {
    make-store
    "$FOLIO" tag add gh/token work rotate-2027
    "$FOLIO" tag add gh/user work
    "$FOLIO" tag add web/home not-exported
    "$FOLIO" export -o "$SANDBOX/out/items.folio" --secrets --file-passphrase-stdin gh \
        < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/out/items.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$(tags gh/token)" = "rotate-2027 work" ]
    [ "$(tags gh/user)" = "work" ]
    [ ! -e "$FOLIO_STORE_DIR/web" ]
    [ "$("$FOLIO" tag ls work)" = "(S)gh/token"$'\n'"(T)gh/user" ]
    clean
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "import: the export's tags are added to those the item has in the store" {
    make-store
    "$FOLIO" tag add gh/user work
    "$FOLIO" export -o "$SANDBOX/out/items.folio" --file-passphrase-stdin gh/user \
        < <(printf 'export pass\n') >/dev/null 2>&1
    "$FOLIO" tag rm gh/user work
    "$FOLIO" tag add gh/user mine
    run "$FOLIO" import --all --overwrite --file-passphrase-stdin "$SANDBOX/out/items.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$(tags gh/user)" = "mine work" ]
    clean
}

@test "export --use: the tags go under the name without the namespace" {
    make-store
    "$FOLIO" insert text -t "prod-db" @prod/db/host < /dev/null
    "$FOLIO" tag add @prod/db/host live
    "$FOLIO" export -o "$SANDBOX/out/prod.folio" --file-passphrase-stdin --use @prod \
        < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/out/prod.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$(tags db/host)" = "live" ]
}

@test "MANUAL: tag add — the tags are in a backup, and come back with restore" {
    make-store
    "$FOLIO" tag add gh/token work
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    local files=("$SANDBOX"/out/*)
    rm -rf "$FOLIO_STORE_DIR"
    run "$FOLIO" restore "${files[0]}" < /dev/null
    [ "$status" -eq 0 ]
    [ "$(tags gh/token)" = "work" ]
    [ "$(info-tags gh/token)" = "work" ]
    git -C "$FOLIO_STORE_DIR" ls-files --error-unmatch gh/token.tags >/dev/null
}

# --- Tab completion ---------------------------------------------------------------

# The words `folio __complete <word>...` offers, on one line.
words() { "$FOLIO" __complete "$@" | tail -n +2 | cut -f1 | paste -s -d ' ' - ; }

@test "completion: tag, its commands, then a name, then the tags there are" {
    make-store
    "$FOLIO" tag add gh/token work rotate-2027
    [ "$(words ta)" = "tag" ]
    [ "$(words tag "")" = "add rm ls" ]
    [ "$(words tag add gh/t)" = "gh/token" ]
    [ "$(words tag rm gh/token "")" = "rotate-2027 work" ]
    [ "$(words tag rm gh/token work r)" = "rotate-2027" ]
    [ "$(words tag ls w)" = "work" ]
    [ "$(words tag ls --p)" = "--plain" ]
    # tag is not a kind of the actions: `folio rm <Tab>` and `folio ls <Tab>` do not offer it.
    [[ " $(words rm "") " != *" tag "* ]] || false
    [[ " $(words ls "") " != *" tag "* ]] || false
    [[ " $(words "") " != *" add "* ]] || false
    [ "$(words help tag "")" = "add rm ls" ]
}

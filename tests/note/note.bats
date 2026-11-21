#!/usr/bin/env bats

# folio note set / edit / show / rm / ls, and the note going with its item (mv, cp, rm, export,
# import, backup), through the real ./folio, against throwaway GPG homes and stores.

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

# The note of <name>, as its file holds it.
note-file() { cat "$FOLIO_STORE_DIR/$1.note" ; }

# The Note: line of `folio info <name>` (the first, when the name is both kinds).
info-note() { "$FOLIO" info "$1" | awk 'index($0, "  Note: ") == 1 { print substr($0, 17) ; exit }' ; }

# An $EDITOR that writes its stdin-free <text> into the file it is given.
make-editor() {
    printf '#!/usr/bin/env bash\nprintf "%%b" %q > "$1"\n' "$1" > "$SANDBOX/editor"
    chmod +x "$SANDBOX/editor"
    export EDITOR="$SANDBOX/editor"
}

# --- set ------------------------------------------------------------------------

@test "MANUAL: note set — put a note on an item" {
    make-store
    run "$FOLIO" note set gh/token -m "Renew before March 2027"
    [ "$status" -eq 0 ]
    [ -z "$output" ]
    [ "$(note-file gh/token)" = "Renew before March 2027" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Set the note of gh/token." ]
    run "$FOLIO" info gh/token
    [[ $output == *"  Note:         Renew before March 2027"* ]] || false
    clean
}

@test "MANUAL: note set — a first line, then the rest in Markdown" {
    make-store
    run "$FOLIO" note set gh/token < <(printf '%s\n' "Renew before March 2027" "" \
        "1. Open **Settings → Developer settings → Tokens**." "2. Regenerate, scope \`repo\`." "" \
        "Ask Ana when it fails.")
    [ "$status" -eq 0 ]
    run "$FOLIO" note show gh/token
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "Renew before March 2027" ]
    [ "${lines[1]}" = "1. Open **Settings → Developer settings → Tokens**." ]
    [ "$(note-file gh/token | sed -n 2p)" = "" ]
    [ "$(note-file gh/token | wc -l | tr -d ' ')" = "6" ]
    [ "$(info-note gh/token)" = "Renew before March 2027  (+4 lines: folio note show gh/token)" ]
    clean
}

@test "note set: several -m are the first line and paragraphs; --message= too" {
    make-store
    "$FOLIO" note set -m "The site's address" --message="Changed in *2026*." -m "See the wiki." web/home
    [ "$(note-file web/home)" = "The site's address"$'\n\n'"Changed in *2026*."$'\n\n'"See the wiki." ]
    [ "$(info-note web/home)" = "The site's address  (+3 lines: folio note show web/home)" ]
}

@test "note set: the note it had is replaced; an item with none says none in info" {
    make-store
    [ "$(info-note gh/user)" = "none" ]
    "$FOLIO" note set gh/user -m "One" -m "more"
    "$FOLIO" note set gh/user -m "Two"
    [ "$(note-file gh/user)" = "Two" ]
    [ "$(info-note gh/user)" = "Two" ]
    clean
}

@test "note set: cleaned — empty lines around dropped, an empty line put after the first line" {
    make-store
    printf '\n\n  \nFirst line   \r\nright after\n\n\n\nlast\n\n\n' | "$FOLIO" note set gh/user
    [ "$(note-file gh/user)" = "First line"$'\n\n'"right after"$'\n\n\n\n'"last" ]
    [ "$(tail -c 1 "$FOLIO_STORE_DIR/gh/user.note" | od -An -c | tr -d ' ')" = '\n' ]
}

@test "note set: the first line is 80 characters at most; the rest is not limited" {
    make-store
    local eighty long
    eighty=$(printf '%080d' 0) long=$(printf '%0500d' 0)
    run "$FOLIO" note set gh/user -m "${eighty}1"
    [ "$status" -ne 0 ]
    [[ $output == *"first line is 81 characters; it can be 80 at most"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/gh/user.note" ]
    "$FOLIO" note set gh/user -m "$eighty" -m "$long"
    [ "$(note-file gh/user)" = "$eighty"$'\n\n'"$long" ]
    clean
}

@test "note set: an empty note, a tab in the first line, a missing item and bad arguments change nothing" {
    make-store
    local before
    before=$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)
    run "$FOLIO" note set gh/user < /dev/null
    [ "$status" -ne 0 ] ; [[ $output == *"the note is empty"* ]] || false
    run "$FOLIO" note set gh/user -m "   "
    [ "$status" -ne 0 ] ; [[ $output == *"the note is empty"* ]] || false
    run "$FOLIO" note set gh/user -m "a"$'\t'"b"
    [ "$status" -ne 0 ] ; [[ $output == *"must be plain text"* ]] || false
    run "$FOLIO" note set gh/nope -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"'gh/nope' is not a text or a secret in the store."* ]] || false
    run "$FOLIO" note set gh -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"'gh' is not a text or a secret in the store."* ]] || false
    run "$FOLIO" note set ../x -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"not a valid name"* ]] || false
    run "$FOLIO" note set -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"Usage: folio note set [-m|--message <text>]... <name>"* ]] || false
    run "$FOLIO" note set gh/user web/home -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"Usage: folio note set"* ]] || false
    run "$FOLIO" note set gh/user -m
    [ "$status" -ne 0 ] ; [[ $output == *"-m needs a value"* ]] || false
    run "$FOLIO" note set --nope gh/user -m "x"
    [ "$status" -ne 0 ] ; [[ $output == *"unknown option: --nope"* ]] || false
    [ -z "$(find "$FOLIO_STORE_DIR" -name '*.note')" ]
    [ "$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)" = "$before" ]
    clean
}

@test "note set: a text and a secret of the same name share their note" {
    make-store
    "$FOLIO" note set gh/both -m "Both of them"
    run "$FOLIO" info gh/both
    [ "$(grep -c '^  Note:         Both of them$' <<< "$output")" -eq 2 ]
}

@test "note: no command, an unknown one, and --help without a store" {
    run "$FOLIO" note
    [ "$status" -ne 0 ] ; [[ $output == *"Usage: folio note <set|edit|show|rm|ls> [args...]"* ]] || false
    run "$FOLIO" note nope
    [ "$status" -ne 0 ] ; [[ $output == *"folio note: unknown command: nope"* ]] || false
    local command
    for command in set edit show rm ls; do
        run "$FOLIO" note "$command" --help
        [ "$status" -eq 0 ] ; [[ $output == "Usage: folio note $command"* ]] || false
        run "$FOLIO" help note "$command"
        [ "$status" -eq 0 ] ; [[ $output == "Usage: folio note $command"* ]] || false
    done
    run "$FOLIO" note --help
    [ "$status" -eq 0 ] ; [[ $output == *"Usage: folio note set"*"Usage: folio note ls"* ]] || false
    run "$FOLIO" help note
    [ "$status" -eq 0 ] ; [[ $output == *"Usage: folio note edit"* ]] || false
    run "$FOLIO" note set gh/user -m x
    [ "$status" -ne 0 ] ; [[ $output == *"No ready Folio store"* ]] || false
}

# --- edit -----------------------------------------------------------------------

@test "MANUAL: note edit — write or change a note in your editor" {
    make-store
    make-editor 'Renew before March 2027\n\nSee the **wiki**.\n'
    run "$FOLIO" note edit gh/token
    [ "$status" -eq 0 ]
    [ "$(note-file gh/token)" = "Renew before March 2027"$'\n\n'"See the **wiki**." ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Edit the note of gh/token using $EDITOR." ]
    clean
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "note edit: the editor is given the note there is" {
    make-store
    "$FOLIO" note set gh/token -m "Old" -m "body"
    printf '#!/usr/bin/env bash\ncp "$1" %q\nprintf "New\\n" > "$1"\n' "$SANDBOX/seen" > "$SANDBOX/editor"
    chmod +x "$SANDBOX/editor"
    EDITOR="$SANDBOX/editor" run "$FOLIO" note edit gh/token
    [ "$status" -eq 0 ]
    [ "$(cat "$SANDBOX/seen")" = "Old"$'\n\n'"body" ]
    [ "$(note-file gh/token)" = "New" ]
}

@test "note edit: unchanged, saved empty, or a first line too long — the note stays as it was" {
    make-store
    "$FOLIO" note set gh/token -m "Old"
    local before
    before=$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)
    EDITOR=true run "$FOLIO" note edit gh/token
    [ "$status" -ne 0 ] ; [[ $output == *"Note unchanged."* ]] || false
    make-editor ''
    run "$FOLIO" note edit gh/token < /dev/null
    [ "$status" -ne 0 ] ; [[ $output == *"Note empty: nothing was changed."* ]] || false
    make-editor "$(printf '%081d' 0)\n"
    run "$FOLIO" note edit gh/token < /dev/null
    [ "$status" -ne 0 ]
    [[ $output == *"first line is 81 characters"* && $output == *"Note not saved."* ]] || false
    EDITOR=true run "$FOLIO" note edit gh/user
    [ "$status" -ne 0 ] ; [[ $output == *"Note not saved."* ]] || false
    [ "$(note-file gh/token)" = "Old" ]
    [ "$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)" = "$before" ]
    clean
    [ -z "$(ls -A "$TMPDIR")" ]
}

# --- show -----------------------------------------------------------------------

@test "MANUAL: note show — show a note" {
    make-store
    local text
    text=$(printf '%s\n' "Renew before March 2027" "" "1. Open **Settings → Developer settings → Tokens**." \
        "2. Regenerate, scope \`repo\`." "" "Ask Ana when it fails.")
    "$FOLIO" note set gh/token <<< "$text"
    run "$FOLIO" note show gh/token
    [ "$status" -eq 0 ]
    [ "$output" = "$text" ]
}

@test "note show: an item with no note, and one that is not there, are refused" {
    make-store
    run "$FOLIO" note show gh/token
    [ "$status" -ne 0 ] ; [[ $output == *"note show: 'gh/token' has no note."* ]] || false
    run "$FOLIO" note show gh/nope
    [ "$status" -ne 0 ] ; [[ $output == *"is not a text or a secret"* ]] || false
    run "$FOLIO" note show
    [ "$status" -ne 0 ] ; [[ $output == *"Usage: folio note show <name>"* ]] || false
}

# --- rm -------------------------------------------------------------------------

@test "MANUAL: note rm — take a note off" {
    make-store
    "$FOLIO" note set gh/token -m "Renew before March 2027"
    run "$FOLIO" note rm gh/token
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/gh/token.note" ]
    [ "$(info-note gh/token)" = "none" ]
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Remove the note of gh/token." ]
    clean
    run "$FOLIO" note rm gh/token
    [ "$status" -ne 0 ] ; [[ $output == *"note rm: 'gh/token' has no note."* ]] || false
}

# --- ls -------------------------------------------------------------------------

@test "MANUAL: note ls — list the notes" {
    make-store
    run "$FOLIO" note ls
    [ "$status" -eq 0 ] ; [ -z "$output" ]
    "$FOLIO" note set web/home -m "The site's address"
    "$FOLIO" note set gh/token -m "Renew before March 2027" -m "More."
    run "$FOLIO" note ls
    [ "$status" -eq 0 ]
    [ "$output" = "gh/token: Renew before March 2027"$'\n'"web/home: The site's address" ]
    run "$FOLIO" note ls gh/token
    [ "$status" -ne 0 ] ; [[ $output == *"folio note show gh/token"* ]] || false
}

@test "notes: ls, ls text, ls secret and find never show the .note files" {
    make-store
    "$FOLIO" note set gh/token -m "A note"
    "$FOLIO" note set gh/user -m "A note"
    local command
    for command in "ls" "ls --flat" "ls text" "ls secret" "ls text --flat" "find text gh" "find secret gh"; do
        # shellcheck disable=SC2086
        run "$FOLIO" $command
        [ "$status" -eq 0 ]
        [[ $output != *.note* ]] || false
    done
}

@test "notes: a file changed outside Folio is shown cut to a first line; an orphan is not listed" {
    make-store
    printf '\n\e[31m%0100d\nbody\n' 0 > "$FOLIO_STORE_DIR/gh/token.note"
    printf 'orphan\n' > "$FOLIO_STORE_DIR/gh/gone.note"
    : > "$FOLIO_STORE_DIR/gh/user.note"
    [ "$(info-note gh/token)" = "[31m$(printf '%076d' 0)  (+1 line: folio note show gh/token)" ]
    [ "$(info-note gh/user)" = "none" ]
    run "$FOLIO" note ls
    [ "$output" = "gh/token: [31m$(printf '%076d' 0)" ]
}

# --- The note goes with its item --------------------------------------------------

@test "mv text: the note goes with the text, in the same commit" {
    make-store
    "$FOLIO" note set gh/user -m "The login"
    local before
    before=$(git -C "$FOLIO_STORE_DIR" rev-list --count HEAD)
    "$FOLIO" mv text gh/user gh/login
    [ "$(note-file gh/login)" = "The login" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/user.note" ]
    [ "$(git -C "$FOLIO_STORE_DIR" rev-list --count HEAD)" -eq $(( before + 1 )) ]
    clean
}

@test "mv text: a secret of the same name stays, and keeps the note too" {
    make-store
    "$FOLIO" note set gh/both -m "Shared"
    "$FOLIO" mv text gh/both gh/moved
    [ "$(note-file gh/moved)" = "Shared" ]
    [ "$(note-file gh/both)" = "Shared" ]
    clean
}

@test "mv text: a folder's texts take their notes" {
    make-store
    "$FOLIO" note set web/home -m "Home"
    "$FOLIO" note set web/deep/x -m "Deep"
    "$FOLIO" note set web/github -m "A secret's"
    "$FOLIO" mv text web site
    [ "$(note-file site/home)" = "Home" ]
    [ "$(note-file site/deep/x)" = "Deep" ]
    [ "$(note-file web/github)" = "A secret's" ]
    [ ! -e "$FOLIO_STORE_DIR/web/home.note" ]
    clean
}

@test "cp text: the copy gets the note, in place of its own; without one, the copy keeps its own" {
    make-store
    "$FOLIO" note set gh/user -m "The login"
    "$FOLIO" note set web/home -m "Home"
    "$FOLIO" cp text -f gh/user web/home
    [ "$(note-file web/home)" = "The login" ]
    [ "$(note-file gh/user)" = "The login" ]
    "$FOLIO" cp text -f web/deep/x web/home
    [ "$(note-file web/home)" = "The login" ]
    clean
}

@test "rm text: its note goes — unless a secret of the same name is left" {
    make-store
    "$FOLIO" note set gh/user -m "The login"
    "$FOLIO" note set gh/both -m "Shared"
    "$FOLIO" rm text -f gh/user
    "$FOLIO" rm text -f gh/both
    [ ! -e "$FOLIO_STORE_DIR/gh/user.note" ]
    [ "$(note-file gh/both)" = "Shared" ]
    clean
}

@test "rm text -r: a folder's texts lose their notes; its secrets keep theirs" {
    make-store
    "$FOLIO" note set web/home -m "Home"
    "$FOLIO" note set web/deep/x -m "Deep"
    "$FOLIO" note set web/github -m "A secret's"
    "$FOLIO" rm text -r -f web
    [ ! -e "$FOLIO_STORE_DIR/web/home.note" ]
    [ ! -e "$FOLIO_STORE_DIR/web/deep" ]
    [ "$(note-file web/github)" = "A secret's" ]
    clean
}

@test "mv secret: the note goes with the secret, also into a folder" {
    make-store
    "$FOLIO" note set gh/token -m "Renew"
    run "$FOLIO" mv secret gh/token gh/pat
    [ "$status" -eq 0 ]
    [ "$(note-file gh/pat)" = "Renew" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/token.note" ]
    "$FOLIO" mv secret gh/pat web/
    [ "$(note-file web/pat)" = "Renew" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/pat.note" ]
    clean
}

@test "mv secret: a whole folder moves with its notes" {
    make-store
    "$FOLIO" note set gh/token -m "Renew"
    "$FOLIO" mv secret gh hub
    [ "$(note-file hub/token)" = "Renew" ]
    [ ! -e "$FOLIO_STORE_DIR/gh" ]
    clean
}

@test "cp secret: the copy gets the note; the old one keeps it" {
    make-store
    "$FOLIO" note set gh/token -m "Renew"
    "$FOLIO" cp secret gh/token gh/pat
    [ "$(note-file gh/pat)" = "Renew" ]
    [ "$(note-file gh/token)" = "Renew" ]
    clean
}

@test "rm secret: its note goes — unless a text of the same name is left" {
    make-store
    "$FOLIO" note set gh/token -m "Renew"
    "$FOLIO" note set gh/both -m "Shared"
    "$FOLIO" rm secret -f gh/token
    "$FOLIO" rm secret -f gh/both
    [ ! -e "$FOLIO_STORE_DIR/gh/token.note" ]
    [ "$(note-file gh/both)" = "Shared" ]
    clean
}

@test "MANUAL: note set — the note goes into an export, and comes back with import" {
    make-store
    "$FOLIO" note set gh/token -m "Renew before March 2027" -m "See the **wiki**."
    "$FOLIO" note set web/home -m "Not exported"
    "$FOLIO" export -o "$SANDBOX/out/items.folio" --secrets --file-passphrase-stdin gh \
        < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/out/items.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" note show gh/token)" = "Renew before March 2027"$'\n\n'"See the **wiki**." ]
    [ "$("$FOLIO" note ls)" = "gh/token: Renew before March 2027" ]
    [ ! -e "$FOLIO_STORE_DIR/web" ]
    clean
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "import: the export's note takes the place of the one in the store; with none, that one stays" {
    make-store
    "$FOLIO" note set gh/user -m "From the export"
    "$FOLIO" export -o "$SANDBOX/out/items.folio" --file-passphrase-stdin gh/user web/home \
        < <(printf 'export pass\n') >/dev/null 2>&1
    "$FOLIO" note set gh/user -m "Mine"
    "$FOLIO" note set web/home -m "Mine too"
    run "$FOLIO" import --all --overwrite --file-passphrase-stdin "$SANDBOX/out/items.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$(note-file gh/user)" = "From the export" ]
    [ "$(note-file web/home)" = "Mine too" ]
    clean
}

@test "export --use: the note goes under the name without the namespace" {
    make-store
    "$FOLIO" insert text -t "prod-db" @prod/db/host < /dev/null
    "$FOLIO" note set @prod/db/host -m "The live one"
    "$FOLIO" export -o "$SANDBOX/out/prod.folio" --file-passphrase-stdin --use @prod \
        < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/out/prod.folio" \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$(note-file db/host)" = "The live one" ]
}

@test "MANUAL: note set — the note is in a backup, and comes back with restore" {
    make-store
    "$FOLIO" note set gh/token -m "Renew before March 2027"
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    local files=("$SANDBOX"/out/*)
    rm -rf "$FOLIO_STORE_DIR"
    run "$FOLIO" restore "${files[0]}" < /dev/null
    [ "$status" -eq 0 ]
    [ "$(info-note gh/token)" = "Renew before March 2027" ]
    git -C "$FOLIO_STORE_DIR" ls-files --error-unmatch gh/token.note >/dev/null
}

# --- Tab completion ---------------------------------------------------------------

# The words `folio __complete <word>...` offers, on one line.
words() { "$FOLIO" __complete "$@" | tail -n +2 | cut -f1 | paste -s -d ' ' - ; }

@test "completion: note, its commands, then a name, and set's option" {
    make-store
    [ "$(words no)" = "note" ]
    [ "$(words note "")" = "set edit show rm ls" ]
    [ "$(words note s)" = "set show" ]
    [ "$(words note set gh/t)" = "gh/token" ]
    [ "$(words note show gh/u)" = "gh/user" ]
    [ "$(words note set gh/token --m)" = "--message" ]
    [ "$(words note set gh/token gh/)" = "" ]
    [ "$(words note ls "")" = "" ]
    # note is not a kind of the actions: `folio rm <Tab>` and `folio show <Tab>` do not offer it.
    [[ " $(words rm "") " != *" note "* ]] || false
    [[ " $(words show "") " != *" note "* ]] || false
    [[ " $(words ls "") " != *" note "* ]] || false
    [[ " $(words "") " != *" set "* ]] || false
    [ "$(words help note "")" = "set edit show rm ls" ]
}

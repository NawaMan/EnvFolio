#!/usr/bin/env bats

# folio show text|secret --from and folio ls [text|secret] --from, through the real ./folio: what
# is in an export file, read on a machine ("there") with its own throwaway GPG home and no store.
# Also `folio show --help` and `folio help show`, which name no kind.

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
    unset FOLIO_FILE_DIR
    mkdir -p "$HOME" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    FILE="$SANDBOX/items.folio"
}

teardown() {
    # pass's clear-the-clipboard sleeper (see secret-show.bats).
    if [[ -n ${CLIPBOARD:-} && $(uname -s) == Darwin ]]; then
        pkill -f "^password store sleep for user $(id -u)" 2>/dev/null && sleep 1 || true
    elif [[ -n ${CLIPBOARD:-} ]]; then
        pkill -f "^password store sleep on display $DISPLAY" 2>/dev/null || true
    fi
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with texts gh/user, git/email and secrets gh/token, note (two lines), exported (secrets
# too) to $FILE with the passphrase "export pass".
make-export() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "shared-user"      gh/user   < /dev/null
    "$FOLIO" insert text -t "test@example.com" git/email < /dev/null
    "$FOLIO" insert secret -m gh/token < <(printf 'shared-token\n')         >/dev/null
    "$FOLIO" insert secret -m note     < <(printf 'line one\nline two\n') >/dev/null
    "$FOLIO" export -o "$FILE" --secrets --file-passphrase-stdin gh git note \
        < <(printf 'export pass\n') >/dev/null 2>&1
    [ -f "$FILE" ]
}

# Switch to "there": its own empty GPG home, and no store.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
}

# No store made, nothing left in TMPDIR, and the export's key never in the keyring.
left-clean() {
    [ ! -e "$FOLIO_STORE_DIR" ]
    [ -z "$(ls -A "$TMPDIR")" ]
    run gpg --list-keys "EnvFolio export"
    [ "$status" -ne 0 ]
}

# A stand-in xclip (Linux) and pbcopy/pbpaste (macOS) whose clipboard is a sandbox file.
fake-clipboard() {
    CLIPBOARD="$SANDBOX/clipboard"
    mkdir -p "$SANDBOX/bin"
    cat > "$SANDBOX/bin/xclip" <<EOF
#!/usr/bin/env bash
if [[ " \$* " == *" -o "* ]]; then cat "$CLIPBOARD" 2>/dev/null; else cat > "$CLIPBOARD"; fi
EOF
    printf '#!/usr/bin/env bash\ncat > "%s"\n'             "$CLIPBOARD" > "$SANDBOX/bin/pbcopy"
    printf '#!/usr/bin/env bash\ncat "%s" 2>/dev/null; :\n' "$CLIPBOARD" > "$SANDBOX/bin/pbpaste"
    chmod +x "$SANDBOX/bin/xclip" "$SANDBOX/bin/pbcopy" "$SANDBOX/bin/pbpaste"
    export PATH="$SANDBOX/bin:$PATH"
    export DISPLAY=":folio-test-$$"
    unset WAYLAND_DISPLAY
    export PASSWORD_STORE_CLIP_TIME=60
}

@test "MANUAL: show — a text or a secret in an export file" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" show text --from "$FILE" --file-passphrase-fd 3 gh/user 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-user" ]
    run --separate-stderr "$FOLIO" show secret gh/token --from="$FILE" --file-passphrase-fd=3 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token" ]
    run --separate-stderr "$FOLIO" show secret --from "$FILE" --file-passphrase-fd 3 note 3< <(printf 'export pass\n')
    [ "$output" = $'line one\nline two' ]
    left-clean
}

@test "MANUAL: ls — what is in an export file" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" ls --plain --flat --from "$FILE" --file-passphrase-fd 3 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = $'(S)gh/token\n(T)gh/user\n(T)git/email\n(S)note' ]
    run --separate-stderr "$FOLIO" ls --plain --from "$FILE" --file-passphrase-fd 3 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ ${lines[0]} == "EnvFolio Export: $FILE" ]] || false
    [[ $output == *"gh"*"(S)token"*"(T)user"* ]] || false
    [[ $output != *"shared"* && $output != *".sig"* ]] || false
    run --separate-stderr "$FOLIO" ls text --flat --from "$FILE" --file-passphrase-fd 3 3< <(printf 'export pass\n')
    [ "$output" = $'gh/user\ngit/email' ]
    run --separate-stderr "$FOLIO" ls secret --flat --from "$FILE" --file-passphrase-fd 3 gh 3< <(printf 'export pass\n')
    [ "$output" = "gh/token" ]
    run --separate-stderr "$FOLIO" ls secret --from "$FILE" --file-passphrase-fd 3 3< <(printf 'export pass\n')
    [[ ${lines[0]} == "Secret Export: $FILE" ]] || false
    left-clean
}

@test "show and ls --from <name>: the export of that name in FOLIO_FILE_DIR" {
    make-export ; go-there
    mkdir -p "$SANDBOX/folio/app2" && mv "$FILE" "$SANDBOX/folio/app2/prod.folio"
    export FOLIO_FILE_DIR="$SANDBOX/folio"
    run --separate-stderr "$FOLIO" show text --from app2/prod --file-passphrase-fd 3 gh/user 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-user" ]
    run --separate-stderr "$FOLIO" ls text --from app2/prod --file-passphrase-fd 3 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ ${lines[0]} == "Text Export: $SANDBOX/folio/app2/prod.folio" ]] || false
    unset FOLIO_FILE_DIR
    run "$FOLIO" ls --from app2/prod
    [ "$status" -eq 1 ]
    [[ $output == *"'app2/prod' does not end in .folio"* ]] || false
    left-clean
}

@test "show --from --clip: a secret's line to the clipboard (cleared after), a text's too" {
    make-export ; go-there
    fake-clipboard
    run "$FOLIO" show secret --clip=2 --from "$FILE" --file-passphrase-fd 3 note 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Copied note to clipboard"*"clear in 60 seconds"* ]] || false
    [[ $output != *"line"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "line two" ]
    run "$FOLIO" show text -c --from "$FILE" --file-passphrase-fd 3 gh/user 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Copied gh/user to clipboard"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "shared-user" ]
}

@test "show and ls --from: what the export does not have is refused, and says the export" {
    make-export ; go-there
    run "$FOLIO" show text --from "$FILE" --file-passphrase-fd 3 gh/nope 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $output == *"show text: 'gh/nope' is not a text in the export."* ]] || false
    run "$FOLIO" show secret --from "$FILE" --file-passphrase-fd 3 gh/user 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $output == *"show secret: 'gh/user' is not a secret in the export."* ]] || false
    run "$FOLIO" ls --from "$FILE" --file-passphrase-fd 3 web 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $output == *"ls: 'web' is not a folder in the export."* ]] || false
    left-clean
}

@test "show and ls --from: a wrong passphrase, or the options without --from, refused" {
    make-export ; go-there
    run "$FOLIO" show text --from "$FILE" --file-passphrase-fd 3 gh/user 3< <(printf 'wrong\n')
    [ "$status" -ne 0 ]
    [[ $output == *"Opening $FILE failed"* && $output != *"shared-user"* ]] || false
    run "$FOLIO" ls --file-passphrase-fd 3 3< <(printf 'x\n')
    [ "$status" -eq 1 ]
    [[ $output == *"ls: --file-passphrase-fd is for opening a --from file."* ]] || false
    run "$FOLIO" show secret --key-passphrase-fd 3 gh/token 3< <(printf 'x\n')
    [ "$status" -eq 1 ]
    [[ $output == *"show secret: --key-passphrase-fd is for opening a --from file."* ]] || false
    run "$FOLIO" show secret --from "$FILE" --store-passphrase-fd 4 gh/token 4< <(printf 'x\n')
    [ "$status" -eq 1 ]
    [[ $output == *"--store-passphrase-fd is for the store; --from does not use it."* ]] || false
    run "$FOLIO" ls text --from
    [ "$status" -eq 1 ]
    [[ $output == *"ls text: --from needs a value."* ]] || false
    left-clean
}

@test "show text --from: a text changed in the export is not shown" {
    make-export
    # Open the file, change the text, and lock it again as export does: its signature no longer
    # matches.
    mkdir "$SANDBOX/x"
    gpg --batch --quiet --pinentry-mode loopback --passphrase 'export pass' --decrypt "$FILE" 2>/dev/null \
        | tar -xzf - -C "$SANDBOX/x"
    printf 'changed' > "$SANDBOX/x/store/gh/user.txt"
    tar -czf - -C "$SANDBOX/x" . \
        | gpg --batch --quiet --yes --pinentry-mode loopback --passphrase 'export pass' --symmetric \
              --output "$FILE"
    go-there
    run "$FOLIO" show text --from "$FILE" --file-passphrase-fd 3 gh/user 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $output == *"show text: the signature of 'gh/user' in the export does not verify."* ]] || false
    [[ $output != *"changed"* ]] || false
    left-clean
}

@test "show --help, help show, rm -h: the help of both kinds; no store needed" {
    run "$FOLIO" show --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show text"*"Usage: folio show secret"* ]] || false
    run "$FOLIO" help show
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show text"*"Usage: folio show secret"* ]] || false
    run "$FOLIO" rm -h
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio rm text"*"Usage: folio rm secret"* ]] || false
    run "$FOLIO" help find
    [[ $output == *"Usage: folio find text"*"Usage: folio find secret"* ]] || false
    run "$FOLIO" show gh/user
    [ "$status" -eq 1 ]
    [[ $output == *"show: a text or a secret?"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

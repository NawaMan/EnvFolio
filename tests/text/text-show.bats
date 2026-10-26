#!/usr/bin/env bats

# folio show text, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store holding text web/user, a three-line text note, and a secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t jane web/user < /dev/null
    "$FOLIO" insert text -m      note     < <(printf 'one\ntwo\n\n')
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n') >/dev/null
}

# A stand-in xclip (and pbcopy, for macOS) whose clipboard is a sandbox file, so -c never touches
# a real clipboard.
fake-clipboard() {
    CLIPBOARD="$SANDBOX/clipboard"
    mkdir -p "$SANDBOX/bin"
    printf '#!/usr/bin/env bash\ncat > "%s"\n' "$CLIPBOARD" > "$SANDBOX/bin/xclip"
    cp "$SANDBOX/bin/xclip" "$SANDBOX/bin/pbcopy"
    chmod +x "$SANDBOX/bin/xclip" "$SANDBOX/bin/pbcopy"
    export PATH="$SANDBOX/bin:$PATH"
    export DISPLAY=":folio-test-$$"
    unset WAYLAND_DISPLAY
}

@test "MANUAL: show text — show a text" {
    make-store
    run "$FOLIO" show text web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane" ]
}

@test "show text: prints the text exactly" {
    make-store
    cmp <("$FOLIO" show text note) <(printf 'one\ntwo\n\n')
}

@test "MANUAL: show text — a text changed outside EnvFolio is not shown" {
    make-store
    printf 'mallory\n' > "$FOLIO_STORE_DIR/web/user.txt"
    run "$FOLIO" show text web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]] || false
    [[ $output == *"git -C"*"diff -- web/user.txt"*"log -p -- web/user.txt"* ]] || false
    [[ $output != *"mallory"* ]] || false
}

@test "MANUAL: show text — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$FOLIO" show text -c web/user
    [ "$status" -eq 0 ]
    [[ $output == *"Copied web/user to clipboard"*"not cleared"* && $output != *"jane"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "jane" ]
}

@test "show text --clip: the first line only, or the line given" {
    make-store
    fake-clipboard
    "$FOLIO" show text --clip note >/dev/null
    cmp "$CLIPBOARD" <(printf 'one')
    "$FOLIO" show text --clip=2 note >/dev/null
    cmp "$CLIPBOARD" <(printf 'two')
    "$FOLIO" show text -c2 note >/dev/null
    cmp "$CLIPBOARD" <(printf 'two')
}

@test "show text --clip: an empty line, a line past the end, or no number is refused" {
    make-store
    fake-clipboard
    local clip
    for clip in --clip=3 --clip=9; do
        run "$FOLIO" show text "$clip" note
        [ "$status" -eq 1 ]
        [[ $output == *"'note' has no text at line ${clip#*=}"* ]] || false
    done
    for clip in --clip=0 --clip=x -cx; do
        run "$FOLIO" show text "$clip" note
        [ "$status" -eq 1 ]
        [[ $output == *"is not a line number"* || $output == *"unknown option"* ]] || false
    done
    [ ! -e "$CLIPBOARD" ]
}

@test "show text --clip: a text changed outside EnvFolio is not copied" {
    make-store
    fake-clipboard
    printf 'mallory\n' > "$FOLIO_STORE_DIR/web/user.txt"
    run "$FOLIO" show text -c web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]] || false
    [ ! -e "$CLIPBOARD" ]
}

@test "show text --clip: no display fails and copies nothing" {
    [[ $(uname -s) != Darwin ]] || skip "macOS copies with pbcopy, no display needed"
    make-store
    fake-clipboard
    unset DISPLAY
    run "$FOLIO" show text -c web/user
    [ "$status" -eq 1 ]
    [[ $output == *"no clipboard"* ]] || false
    [ ! -e "$CLIPBOARD" ]
}

@test "show text: a missing signature is refused" {
    make-store
    rm "$FOLIO_STORE_DIR/web/user.txt.sig"
    run "$FOLIO" show text web/user
    [ "$status" -eq 1 ]
    [[ $output == *"'web/user' has no signature"* && $output != *"jane"* ]] || false
}

@test "show text: a text re-signed by another key in the keyring is refused" {
    make-store
    gpg --batch --passphrase '' --quick-generate-key "Other <other@example.com>" default default never 2>/dev/null
    printf 'mallory\n' > "$FOLIO_STORE_DIR/web/user.txt"
    gpg --batch --yes --local-user other@example.com --detach-sign \
        --output "$FOLIO_STORE_DIR/web/user.txt.sig" "$FOLIO_STORE_DIR/web/user.txt"
    gpg --verify "$FOLIO_STORE_DIR/web/user.txt.sig" "$FOLIO_STORE_DIR/web/user.txt" 2>/dev/null
    run "$FOLIO" show text web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* && $output != *"mallory"* ]] || false
}

@test "show text: the suggested fix signs the text again" {
    make-store
    printf 'jane doe\n' > "$FOLIO_STORE_DIR/web/user.txt"
    "$FOLIO" insert text -f -m web/user < "$FOLIO_STORE_DIR/web/user.txt"
    run "$FOLIO" show text web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane doe" ]
}

@test "show text: a folder, a secret, .. or an unknown name is refused" {
    make-store
    local name
    for name in web web/github nope; do
        run "$FOLIO" show text "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a text in the store"* ]] || false
        [[ $output != *"s3cr3t"* ]] || false
    done
    for name in ../x web/../../x -c; do
        run "$FOLIO" show text -- "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a valid name"* ]] || false
    done
    run "$FOLIO" show text web/user note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio show text"* ]] || false
}

@test "show text: no store fails and creates nothing" {
    run "$FOLIO" show text web/user
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "show text --help: works without a store" {
    run "$FOLIO" show text --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show text"* ]] || false
    run "$FOLIO" help show text
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show text"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "kind first still works: text insert, text show, secret show, and -c to the clipboard" {
    make-store
    run "$FOLIO" text insert -t old-way web/old < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/old)" = "old-way" ]
    [ "$("$FOLIO" show text web/old)" = "old-way" ]
    [ "$("$FOLIO" secret show web/github)" = "s3cr3t" ]
    fake-clipboard
    run "$FOLIO" text show -c web/old
    [ "$status" -eq 0 ]
    [ "$(cat "$CLIPBOARD")" = "old-way" ]
}

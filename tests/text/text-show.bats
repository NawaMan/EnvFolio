#!/usr/bin/env bats

# envfolio text show, through the real ./envfolio, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$ENVFOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding text web/user, a three-line text note, and a secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t jane web/user < /dev/null
    "$ENVFOLIO" text insert -m      note     < <(printf 'one\ntwo\n\n')
    "$ENVFOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
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
    export DISPLAY=":envfolio-test-$$"
    unset WAYLAND_DISPLAY
}

@test "MANUAL: text show — show a text" {
    make-store
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane" ]
}

@test "text show: prints the text exactly" {
    make-store
    cmp <("$ENVFOLIO" text show note) <(printf 'one\ntwo\n\n')
}

@test "MANUAL: text show — a text changed outside EnvFolio is not shown" {
    make-store
    printf 'mallory\n' > "$ENVFOLIO_STORE_DIR/web/user.txt"
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [[ $output == *"git -C"*"diff -- web/user.txt"*"log -p -- web/user.txt"* ]]
    [[ $output != *"mallory"* ]]
}

@test "MANUAL: text show — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$ENVFOLIO" text show -c web/user
    [ "$status" -eq 0 ]
    [[ $output == *"Copied web/user to clipboard"*"not cleared"* && $output != *"jane"* ]]
    [ "$(cat "$CLIPBOARD")" = "jane" ]
}

@test "text show --clip: the first line only, or the line given" {
    make-store
    fake-clipboard
    "$ENVFOLIO" text show --clip note >/dev/null
    cmp "$CLIPBOARD" <(printf 'one')
    "$ENVFOLIO" text show --clip=2 note >/dev/null
    cmp "$CLIPBOARD" <(printf 'two')
    "$ENVFOLIO" text show -c2 note >/dev/null
    cmp "$CLIPBOARD" <(printf 'two')
}

@test "text show --clip: an empty line, a line past the end, or no number is refused" {
    make-store
    fake-clipboard
    local clip
    for clip in --clip=3 --clip=9; do
        run "$ENVFOLIO" text show "$clip" note
        [ "$status" -eq 1 ]
        [[ $output == *"'note' has no text at line ${clip#*=}"* ]]
    done
    for clip in --clip=0 --clip=x -cx; do
        run "$ENVFOLIO" text show "$clip" note
        [ "$status" -eq 1 ]
        [[ $output == *"is not a line number"* || $output == *"unknown option"* ]]
    done
    [ ! -e "$CLIPBOARD" ]
}

@test "text show --clip: a text changed outside EnvFolio is not copied" {
    make-store
    fake-clipboard
    printf 'mallory\n' > "$ENVFOLIO_STORE_DIR/web/user.txt"
    run "$ENVFOLIO" text show -c web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [ ! -e "$CLIPBOARD" ]
}

@test "text show --clip: no display fails and copies nothing" {
    [[ $(uname -s) != Darwin ]] || skip "macOS copies with pbcopy, no display needed"
    make-store
    fake-clipboard
    unset DISPLAY
    run "$ENVFOLIO" text show -c web/user
    [ "$status" -eq 1 ]
    [[ $output == *"no clipboard"* ]]
    [ ! -e "$CLIPBOARD" ]
}

@test "text show: a missing signature is refused" {
    make-store
    rm "$ENVFOLIO_STORE_DIR/web/user.txt.sig"
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"'web/user' has no signature"* && $output != *"jane"* ]]
}

@test "text show: a text re-signed by another key in the keyring is refused" {
    make-store
    gpg --batch --passphrase '' --quick-generate-key "Other <other@example.com>" default default never 2>/dev/null
    printf 'mallory\n' > "$ENVFOLIO_STORE_DIR/web/user.txt"
    gpg --batch --yes --local-user other@example.com --detach-sign \
        --output "$ENVFOLIO_STORE_DIR/web/user.txt.sig" "$ENVFOLIO_STORE_DIR/web/user.txt"
    gpg --verify "$ENVFOLIO_STORE_DIR/web/user.txt.sig" "$ENVFOLIO_STORE_DIR/web/user.txt" 2>/dev/null
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* && $output != *"mallory"* ]]
}

@test "text show: the suggested fix signs the text again" {
    make-store
    printf 'jane doe\n' > "$ENVFOLIO_STORE_DIR/web/user.txt"
    "$ENVFOLIO" text insert -f -m web/user < "$ENVFOLIO_STORE_DIR/web/user.txt"
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane doe" ]
}

@test "text show: a folder, a secret, .. or an unknown name is refused" {
    make-store
    local name
    for name in web web/github nope; do
        run "$ENVFOLIO" text show "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a text in the store"* ]]
        [[ $output != *"s3cr3t"* ]]
    done
    for name in ../x web/../../x -c; do
        run "$ENVFOLIO" text show -- "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a valid name"* ]]
    done
    run "$ENVFOLIO" text show web/user note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio text show"* ]]
}

@test "text show: no store fails and creates nothing" {
    run "$ENVFOLIO" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "text show --help: works without a store" {
    run "$ENVFOLIO" text show --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text show"* ]]
    run "$ENVFOLIO" help text show
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio text show"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

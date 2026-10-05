#!/usr/bin/env bats

# keep secret show, through the real ./keep, against a throwaway GPG home and store.

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
    # pass's clear-the-clipboard sleeper, named after our own fake display only.
    [[ -z ${CLIPBOARD:-} ]] || pkill -f "^password store sleep on display $DISPLAY" 2>/dev/null || true
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and a two-line note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n')            >/dev/null
    "$KEEP" secret insert -m note       < <(printf 'line one\nline two\n') >/dev/null
}

# A stand-in xclip whose clipboard is a sandbox file, so -c never touches a real clipboard.
fake-clipboard() {
    CLIPBOARD="$SANDBOX/clipboard"
    mkdir -p "$SANDBOX/bin"
    cat > "$SANDBOX/bin/xclip" <<EOF
#!/usr/bin/env bash
if [[ " \$* " == *" -o "* ]]; then cat "$CLIPBOARD" 2>/dev/null; else cat > "$CLIPBOARD"; fi
EOF
    chmod +x "$SANDBOX/bin/xclip"
    export PATH="$SANDBOX/bin:$PATH"
    export DISPLAY=":keep-test-$$"
    unset WAYLAND_DISPLAY
    export PASSWORD_STORE_CLIP_TIME=60
}

@test "MANUAL: secret show — print a secret" {
    make-store
    run "$KEEP" secret show web/github
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "secret show: a multiline secret prints whole" {
    make-store
    run "$KEEP" secret show note
    [ "$status" -eq 0 ]
    [ "$output" = $'line one\nline two' ]
}

@test "MANUAL: secret show — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$KEEP" secret show web/github -c
    [ "$status" -eq 0 ]
    [[ $output == *"Copied web/github to clipboard"*"clear in 60 seconds"* ]]
    [[ $output != *"s3cr3t"* ]]
    [ "$(cat "$CLIPBOARD")" = "s3cr3t" ]
}

@test "MANUAL: secret show — copy one line" {
    make-store
    fake-clipboard
    run "$KEEP" secret show --clip=2 note
    [ "$status" -eq 0 ]
    [[ $output != *"line"* ]]
    [ "$(cat "$CLIPBOARD")" = "line two" ]
}

@test "secret show: a folder is refused, not listed" {
    make-store
    run "$KEEP" secret show web
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is not a secret"* ]]
    [[ $output != *"github"* ]]
}

@test "secret show: an unknown name fails" {
    make-store
    run "$KEEP" secret show nope
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not a secret"* ]]
}

@test "secret show: --qrcode and unknown options are refused" {
    make-store
    local arg
    for arg in -q --qrcode --qrcode=1; do
        run "$KEEP" secret show "$arg" web/github
        [ "$status" -eq 1 ]
        [[ $output == *"--qrcode is not offered"* ]]
    done
    run "$KEEP" secret show --nope web/github
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* && $output != *"s3cr3t"* ]]
}

@test "secret show: exactly one name" {
    make-store
    run "$KEEP" secret show
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep secret show"* ]]
    run "$KEEP" secret show web/github note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep secret show"* && $output != *"s3cr3t"* ]]
}

@test "secret show: a name after -- is not an option" {
    make-store
    "$KEEP" secret insert -m -- -c < <(printf 'dash\n') >/dev/null
    run "$KEEP" secret show -- -c
    [ "$status" -eq 0 ]
    [ "$output" = "dash" ]
}

@test "secret show: no store fails and creates nothing" {
    run "$KEEP" secret show web/github
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "secret show --help: works without a store" {
    run "$KEEP" secret show --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret show"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret show
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret show"* ]]
}

#!/usr/bin/env bats

# folio show secret, through the real ./folio, against a throwaway GPG home and store.

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
    # pass's clear-the-clipboard sleeper: on Linux named after our own fake display only; on macOS
    # named per user, so it is stopped and given a moment to restore into the fake clipboard.
    if [[ -n ${CLIPBOARD:-} && $(uname -s) == Darwin ]]; then
        pkill -f "^password store sleep for user $(id -u)" 2>/dev/null && sleep 1 || true
    elif [[ -n ${CLIPBOARD:-} ]]; then
        pkill -f "^password store sleep on display $DISPLAY" 2>/dev/null || true
    fi
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and a two-line note.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert secret -m web/github < <(printf 's3cr3t\n')            >/dev/null
    "$FOLIO" insert secret -m note       < <(printf 'line one\nline two\n') >/dev/null
}

# A stand-in xclip (Linux) and pbcopy/pbpaste (macOS) whose clipboard is a sandbox file, so -c
# never touches a real clipboard.
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

@test "MANUAL: show secret — print a secret" {
    make-store
    run "$FOLIO" show secret web/github
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "show secret: a multiline secret prints whole" {
    make-store
    run "$FOLIO" show secret note
    [ "$status" -eq 0 ]
    [ "$output" = $'line one\nline two' ]
}

@test "MANUAL: show secret — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$FOLIO" show secret web/github -c
    [ "$status" -eq 0 ]
    [[ $output == *"Copied web/github to clipboard"*"clear in 60 seconds"* ]] || false
    [[ $output != *"s3cr3t"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "s3cr3t" ]
}

@test "MANUAL: show secret — copy one line" {
    make-store
    fake-clipboard
    run "$FOLIO" show secret --clip=2 note
    [ "$status" -eq 0 ]
    [[ $output != *"line"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "line two" ]
}

@test "show secret: a folder is refused, not listed" {
    make-store
    run "$FOLIO" show secret web
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is not a secret"* ]] || false
    [[ $output != *"github"* ]] || false
}

@test "show secret: an unknown name fails" {
    make-store
    run "$FOLIO" show secret nope
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not a secret"* ]] || false
}

@test "show secret: --qrcode and unknown options are refused" {
    make-store
    local arg
    for arg in -q --qrcode --qrcode=1; do
        run "$FOLIO" show secret "$arg" web/github
        [ "$status" -eq 1 ]
        [[ $output == *"--qrcode is not offered"* ]] || false
    done
    run "$FOLIO" show secret --nope web/github
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* && $output != *"s3cr3t"* ]] || false
}

@test "show secret: exactly one name" {
    make-store
    run "$FOLIO" show secret
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio show secret"* ]] || false
    run "$FOLIO" show secret web/github note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio show secret"* && $output != *"s3cr3t"* ]] || false
}

@test "show secret: a name after -- is not an option" {
    make-store
    "$FOLIO" insert secret -m -- -c < <(printf 'dash\n') >/dev/null
    run "$FOLIO" show secret -- -c
    [ "$status" -eq 0 ]
    [ "$output" = "dash" ]
}

@test "show secret: no store fails and creates nothing" {
    run "$FOLIO" show secret web/github
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "show secret --help: works without a store" {
    run "$FOLIO" show secret --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show secret"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help show secret
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio show secret"* ]] || false
}

#!/usr/bin/env bats

# envfolio secret show, through the real ./envfolio, against a throwaway GPG home and store.

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
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" secret insert -m web/github < <(printf 's3cr3t\n')            >/dev/null
    "$ENVFOLIO" secret insert -m note       < <(printf 'line one\nline two\n') >/dev/null
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
    export DISPLAY=":envfolio-test-$$"
    unset WAYLAND_DISPLAY
    export PASSWORD_STORE_CLIP_TIME=60
}

@test "MANUAL: secret show — print a secret" {
    make-store
    run "$ENVFOLIO" secret show web/github
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "secret show: a multiline secret prints whole" {
    make-store
    run "$ENVFOLIO" secret show note
    [ "$status" -eq 0 ]
    [ "$output" = $'line one\nline two' ]
}

@test "MANUAL: secret show — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$ENVFOLIO" secret show web/github -c
    [ "$status" -eq 0 ]
    [[ $output == *"Copied web/github to clipboard"*"clear in 60 seconds"* ]]
    [[ $output != *"s3cr3t"* ]]
    [ "$(cat "$CLIPBOARD")" = "s3cr3t" ]
}

@test "MANUAL: secret show — copy one line" {
    make-store
    fake-clipboard
    run "$ENVFOLIO" secret show --clip=2 note
    [ "$status" -eq 0 ]
    [[ $output != *"line"* ]]
    [ "$(cat "$CLIPBOARD")" = "line two" ]
}

@test "secret show: a folder is refused, not listed" {
    make-store
    run "$ENVFOLIO" secret show web
    [ "$status" -eq 1 ]
    [[ $output == *"'web' is not a secret"* ]]
    [[ $output != *"github"* ]]
}

@test "secret show: an unknown name fails" {
    make-store
    run "$ENVFOLIO" secret show nope
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not a secret"* ]]
}

@test "secret show: --qrcode and unknown options are refused" {
    make-store
    local arg
    for arg in -q --qrcode --qrcode=1; do
        run "$ENVFOLIO" secret show "$arg" web/github
        [ "$status" -eq 1 ]
        [[ $output == *"--qrcode is not offered"* ]]
    done
    run "$ENVFOLIO" secret show --nope web/github
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* && $output != *"s3cr3t"* ]]
}

@test "secret show: exactly one name" {
    make-store
    run "$ENVFOLIO" secret show
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio secret show"* ]]
    run "$ENVFOLIO" secret show web/github note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio secret show"* && $output != *"s3cr3t"* ]]
}

@test "secret show: a name after -- is not an option" {
    make-store
    "$ENVFOLIO" secret insert -m -- -c < <(printf 'dash\n') >/dev/null
    run "$ENVFOLIO" secret show -- -c
    [ "$status" -eq 0 ]
    [ "$output" = "dash" ]
}

@test "secret show: no store fails and creates nothing" {
    run "$ENVFOLIO" secret show web/github
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "secret show --help: works without a store" {
    run "$ENVFOLIO" secret show --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio secret show"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
    run "$ENVFOLIO" help secret show
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: envfolio secret show"* ]]
}

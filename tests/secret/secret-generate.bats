#!/usr/bin/env bats

# folio secret generate, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$FOLIO" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
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

@test "MANUAL: secret generate — generate a secret" {
    make-store
    run "$FOLIO" secret generate -n api 12 < /dev/null
    [ "$status" -eq 0 ]
    local value ; value=$(pass show api)
    [[ $value =~ ^[A-Za-z0-9]{12}$ ]]
    [[ $output == *"$value"* ]]
}

@test "secret generate: 25 characters by default" {
    make-store
    "$FOLIO" secret generate api < /dev/null >/dev/null
    [ "$(pass show api | wc -c | tr -d ' ')" -eq 26 ]
}

@test "MANUAL: secret generate — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$FOLIO" secret generate -c api < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Copied api to clipboard"* ]]
    [[ $output != *"$(pass show api)"* ]]
    [ "$(cat "$CLIPBOARD")" = "$(pass show api)" ]
}

@test "secret generate: --in-place keeps the other lines" {
    make-store
    run "$FOLIO" secret generate -i web/github < /dev/null
    [ "$status" -eq 0 ]
    [ "$(pass show web/github | head -1)" != "s3cr3t" ]
    [ "$(pass show web/github | tail -1)" = "user: jane" ]
}

@test "secret generate: --qrcode is refused, in any spelling" {
    make-store
    local arg
    for arg in -q --qrcode -nq; do
        run "$FOLIO" secret generate "$arg" api < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"--qrcode is not offered"* ]]
    done
    [ ! -e "$FOLIO_STORE_DIR/api.gpg" ]
}

@test "secret generate --help: works without a store" {
    run "$FOLIO" secret generate --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret generate"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" help secret generate
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio secret generate"* ]]
}

@test "secret generate: no store fails and creates nothing" {
    run "$FOLIO" secret generate web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

#!/usr/bin/env bats

# keep secret generate, through the real ./keep, against a throwaway GPG home and store.

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

# A ready store, encrypted to a throwaway no-passphrase key, holding web/github and mail/work.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\nuser: jane\n') >/dev/null
    "$KEEP" secret insert -m mail/work  < <(printf 'other\n')              >/dev/null
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

@test "MANUAL: secret generate — generate a secret" {
    make-store
    run "$KEEP" secret generate -n api 12 < /dev/null
    [ "$status" -eq 0 ]
    local value ; value=$(pass show api)
    [[ $value =~ ^[A-Za-z0-9]{12}$ ]]
    [[ $output == *"$value"* ]]
}

@test "secret generate: 25 characters by default" {
    make-store
    "$KEEP" secret generate api < /dev/null >/dev/null
    [ "$(pass show api | wc -c | tr -d ' ')" -eq 26 ]
}

@test "MANUAL: secret generate — copy to the clipboard" {
    make-store
    fake-clipboard
    run "$KEEP" secret generate -c api < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Copied api to clipboard"* ]]
    [[ $output != *"$(pass show api)"* ]]
    [ "$(cat "$CLIPBOARD")" = "$(pass show api)" ]
}

@test "secret generate: --in-place keeps the other lines" {
    make-store
    run "$KEEP" secret generate -i web/github < /dev/null
    [ "$status" -eq 0 ]
    [ "$(pass show web/github | head -1)" != "s3cr3t" ]
    [ "$(pass show web/github | tail -1)" = "user: jane" ]
}

@test "secret generate: --qrcode is refused, in any spelling" {
    make-store
    local arg
    for arg in -q --qrcode -nq; do
        run "$KEEP" secret generate "$arg" api < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"--qrcode is not offered"* ]]
    done
    [ ! -e "$KEEP_STORE_DIR/api.gpg" ]
}

@test "secret generate --help: works without a store" {
    run "$KEEP" secret generate --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret generate"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" help secret generate
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep secret generate"* ]]
}

@test "secret generate: no store fails and creates nothing" {
    run "$KEEP" secret generate web/github x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

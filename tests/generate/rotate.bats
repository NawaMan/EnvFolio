#!/usr/bin/env bats

# folio rotate [text|secret] <name>, through the real ./folio, against a throwaway GPG home and store.

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
    # pass's clear-the-clipboard sleeper, as in secret-generate.bats.
    if [[ -n ${CLIPBOARD:-} && $(uname -s) == Darwin ]]; then
        pkill -f "^password store sleep for user $(id -u)" 2>/dev/null && sleep 1 || true
    elif [[ -n ${CLIPBOARD:-} ]]; then
        pkill -f "^password store sleep on display $DISPLAY" 2>/dev/null && sleep 1 || true
    fi
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, with a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
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

@test "MANUAL: rotate — rotate a secret" {
    make-store
    "$FOLIO" generate secret --as hex 32 app/session < /dev/null >/dev/null
    printf '%s\nnote: kept\n' "$(pass show app/session)" | pass insert -m -f app/session >/dev/null
    local before ; before=$(pass show app/session | head -1)
    run "$FOLIO" rotate app/session < /dev/null
    [ "$status" -eq 0 ]
    local after ; after=$(pass show app/session | head -1)
    [[ $after =~ ^[0-9a-f]{64}$ ]] || false
    [ "$after" != "$before" ]
    [[ $output == *"$after"* ]] || false
    [ "$(pass show app/session | tail -1)" = "note: kept" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "rotate: a text, made the same way, its other lines kept and signed" {
    make-store
    "$FOLIO" generate text --as int 1000000-9999999 app/pin < /dev/null >/dev/null
    printf '%s\nsecond\n' "$(cat "$FOLIO_STORE_DIR/app/pin.txt")" \
        | "$FOLIO" insert text -f -m app/pin
    run "$FOLIO" rotate app/pin < /dev/null
    [ "$status" -eq 0 ]
    [[ $(head -1 "$FOLIO_STORE_DIR/app/pin.txt") =~ ^[1-9][0-9]{6}$ ]] || false
    [ "$(sed -n 2p "$FOLIO_STORE_DIR/app/pin.txt")" = second ]
    "$FOLIO" show text app/pin >/dev/null
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Replace generated text for app/pin." ]
}

@test "rotate: characters keep their own set and length, whatever the variables say now" {
    make-store
    "$FOLIO" generate secret -n pw 10 < /dev/null >/dev/null
    PASSWORD_STORE_CHARACTER_SET='x' PASSWORD_STORE_GENERATED_LENGTH=3 "$FOLIO" rotate pw < /dev/null >/dev/null
    [[ $(pass show pw) =~ ^[[:alnum:]]{10}$ ]] || false
    [ "$(cat "$FOLIO_STORE_DIR/pw.gpg.gen")" = "chars 10 [:alnum:]" ]
    "$FOLIO" generate text -n word 7 < /dev/null >/dev/null
    PASSWORD_STORE_CHARACTER_SET='x' "$FOLIO" rotate text word < /dev/null >/dev/null
    [[ $(cat "$FOLIO_STORE_DIR/word.txt") =~ ^[[:alnum:]]{7}$ ]] || false
}

@test "MANUAL: rotate — copy the new secret to the clipboard" {
    make-store
    fake-clipboard
    "$FOLIO" generate secret --as uuid app/key < /dev/null >/dev/null
    run "$FOLIO" rotate -c app/key < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Copied app/key to clipboard"* ]] || false
    [[ $output != *"$(pass show app/key)"* ]] || false
    [ "$(cat "$CLIPBOARD")" = "$(pass show app/key)" ]
}

@test "rotate: a name that is both a text and a secret needs its kind" {
    make-store
    "$FOLIO" generate text   --as hex 4 both < /dev/null >/dev/null
    "$FOLIO" generate secret --as int 1-9 both < /dev/null >/dev/null
    run "$FOLIO" rotate both < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is both a text and a secret"*"folio rotate text both"* ]] || false
    run "$FOLIO" rotate text both < /dev/null
    [ "$status" -eq 0 ]
    [[ $(cat "$FOLIO_STORE_DIR/both.txt") =~ ^[0-9a-f]{8}$ ]] || false
    run "$FOLIO" rotate secret both < /dev/null
    [ "$status" -eq 0 ]
    [[ $(pass show both) =~ ^[1-9]$ ]] || false
}

@test "rotate: refused for an item with no recipe, a name-based UUID, or a recipe Folio does not know" {
    make-store
    "$FOLIO" insert text -t typed typed < /dev/null
    run "$FOLIO" rotate typed < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"'typed' has no recipe"*"folio generate text [--as <uuid|hex|int>] -i typed"* ]] || false

    "$FOLIO" generate text --as uuid 5:dns:python.org id < /dev/null >/dev/null
    run "$FOLIO" rotate id < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is a name-based UUID (v5)"*"nothing to rotate"* ]] || false
    [ "$(cat "$FOLIO_STORE_DIR/id.txt")" = 886313e1-3b8a-5372-9b90-0c9aee199e5d ]

    "$FOLIO" generate secret --as hex 4 key < /dev/null >/dev/null
    local before ; before=$(pass show key)
    echo "hex 99999" > "$FOLIO_STORE_DIR/key.gpg.gen"
    run "$FOLIO" rotate key < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"is not one Folio knows: hex 99999"* ]] || false
    [ "$(pass show key)" = "$before" ]

    run "$FOLIO" rotate missing < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"'missing' is not a text or a secret"* ]] || false
    run "$FOLIO" rotate text -c x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"rotate text: unknown option: -c"* ]] || false
}

@test "rotate: a text changed outside Folio is refused" {
    make-store
    "$FOLIO" generate text --as hex 4 key < /dev/null >/dev/null
    printf 'mallory\n' > "$FOLIO_STORE_DIR/key.txt"
    run "$FOLIO" rotate key < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]] || false
    [ "$(cat "$FOLIO_STORE_DIR/key.txt")" = mallory ]
}

@test "rotate --help: works without a store" {
    local args
    for args in "rotate --help" "rotate text --help" "rotate secret --help" "help rotate" "help rotate secret"; do
        # shellcheck disable=SC2086  # split the arguments
        run "$FOLIO" $args
        [ "$status" -eq 0 ]
        [[ $output == *"Usage: folio rotate"* ]] || false
    done
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "rotate: no store fails and creates nothing" {
    run "$FOLIO" rotate x < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Folio store"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

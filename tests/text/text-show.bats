#!/usr/bin/env bats

# keep text show, through the real ./keep, against a throwaway GPG home and store.

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
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store holding text web/user, a three-line text note, and a secret web/github.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t jane web/user < /dev/null
    "$KEEP" text insert -m      note     < <(printf 'one\ntwo\n\n')
    "$KEEP" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
}

@test "MANUAL: text show — show a text" {
    make-store
    run "$KEEP" text show web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane" ]
}

@test "text show: prints the text exactly" {
    make-store
    cmp <("$KEEP" text show note) <(printf 'one\ntwo\n\n')
}

@test "MANUAL: text show — a text changed outside Keep is not shown" {
    make-store
    printf 'mallory\n' > "$KEEP_STORE_DIR/web/user.txt"
    run "$KEEP" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* ]]
    [[ $output == *"git -C"*"diff -- web/user.txt"*"log -p -- web/user.txt"* ]]
    [[ $output != *"mallory"* ]]
}

@test "text show: a missing signature is refused" {
    make-store
    rm "$KEEP_STORE_DIR/web/user.txt.sig"
    run "$KEEP" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"'web/user' has no signature"* && $output != *"jane"* ]]
}

@test "text show: a text re-signed by another key in the keyring is refused" {
    make-store
    gpg --batch --passphrase '' --quick-generate-key "Other <other@example.com>" default default never 2>/dev/null
    printf 'mallory\n' > "$KEEP_STORE_DIR/web/user.txt"
    gpg --batch --yes --local-user other@example.com --detach-sign \
        --output "$KEEP_STORE_DIR/web/user.txt.sig" "$KEEP_STORE_DIR/web/user.txt"
    gpg --verify "$KEEP_STORE_DIR/web/user.txt.sig" "$KEEP_STORE_DIR/web/user.txt" 2>/dev/null
    run "$KEEP" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"does not verify with the store's key"* && $output != *"mallory"* ]]
}

@test "text show: the suggested fix signs the text again" {
    make-store
    printf 'jane doe\n' > "$KEEP_STORE_DIR/web/user.txt"
    "$KEEP" text insert -f -m web/user < "$KEEP_STORE_DIR/web/user.txt"
    run "$KEEP" text show web/user
    [ "$status" -eq 0 ]
    [ "$output" = "jane doe" ]
}

@test "text show: a folder, a secret, .. or an unknown name is refused" {
    make-store
    local name
    for name in web web/github nope; do
        run "$KEEP" text show "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a text in the store"* ]]
        [[ $output != *"s3cr3t"* ]]
    done
    for name in ../x web/../../x -c; do
        run "$KEEP" text show "$name"
        [ "$status" -eq 1 ]
        [[ $output == *"'$name' is not a valid name"* ]]
    done
    run "$KEEP" text show web/user note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep text show"* ]]
}

@test "text show: no store fails and creates nothing" {
    run "$KEEP" text show web/user
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"*"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "text show --help: works without a store" {
    run "$KEEP" text show --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text show"* ]]
    run "$KEEP" help text show
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: keep text show"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

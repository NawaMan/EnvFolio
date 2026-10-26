#!/usr/bin/env bats

# FOLIO_STORE_PASSPHRASE_FILE, through the real ./folio. The store's key has a passphrase ("pw"),
# and gpg's own prompt is a fake pinentry that cancels: a command that works here got the
# passphrase from the file, never from a prompt. The agent is restarted before each command, so
# nothing is left in its cache from the one before.

bats_require_minimum_version 1.5.0    # run --separate-stderr
load fake-pinentry

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    unset FOLIO_STORE_PASSPHRASE_FILE FOLIO_FRESH_PASSPHRASE
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME"
    [[ $GNUPGHOME == "$SANDBOX"/* && $FOLIO_STORE_DIR == "$SANDBOX"/* && $HOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # A store with a text and a secret, its key protected by "pw".
    gpg --batch --pinentry-mode loopback --passphrase pw \
        --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    use-pinentry pw
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    use-pinentry --cancel

    # The passphrase file, as the MANUAL makes it.
    PASS_FILE="$HOME/.config/folio/store-pass"
    mkdir -p "$(dirname "$PASS_FILE")"
    (umask 077; printf 'pw\n' > "$PASS_FILE")
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# Forget any passphrase the agent has.
forget() { gpgconf --kill gpg-agent ; }

@test "passphrase file: without it, gpg's prompt is all there is (here it cancels)" {
    forget
    run "$FOLIO" show secret web/github
    [ "$status" -ne 0 ]
}

@test "MANUAL: never asked, on a machine you trust — show secret" {
    forget
    FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE run --separate-stderr "$FOLIO" show secret web/github
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "MANUAL: never asked, on a machine you trust — insert text signs with it" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    forget
    run "$FOLIO" insert text -t "jane" web/user < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" show text web/user)" = "jane" ]
}

@test "MANUAL: never asked, on a machine you trust — exec --secrets; the command does not get the file's name" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    forget
    run --separate-stderr "$FOLIO" exec --secrets web -- \
        sh -c 'printf "%s %s [%s]\n" "$WEB_GITHUB" "$WEB_HOME" "${FOLIO_STORE_PASSPHRASE_FILE-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t https://example.com [unset]" ]
}

@test "passphrase file: exec --from does not use it — the store is not opened" {
    "$FOLIO" export -o "$SANDBOX/out/items" --file-passphrase-fd 3 --store-passphrase-fd 4 web/home \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') < /dev/null >/dev/null 2>&1
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    run --separate-stderr "$FOLIO" exec --from "$SANDBOX/out/items.folio" --file-passphrase-fd 3 web/home -- \
        sh -c 'echo "$WEB_HOME"' 3< <(printf 'file-pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "https://example.com" ]
}

@test "passphrase file: backup copies the key with it" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    forget
    run "$FOLIO" backup "$SANDBOX/out" < /dev/null
    [ "$status" -eq 0 ]
    ls "$SANDBOX/out"/backup-*--folio.tar.gz >/dev/null
}

@test "MANUAL: never asked, on a machine you trust — init makes a new key with it" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE FOLIO_STORE_DIR="$SANDBOX/new-store"
    run timeout 120 "$FOLIO" init --name "Jane Doe" --email jane@example.com --key-type classical < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Passphrase: ************ (from ~/.config/folio/store-pass)"* ]] || false
    # The new key opens with the file's passphrase.
    echo x | gpg --batch --pinentry-mode loopback --passphrase-file "$PASS_FILE" \
        --local-user "$(cat "$FOLIO_STORE_DIR/.gpg-id")" --sign >/dev/null 2>&1
}

@test "passphrase file: --store-passphrase-fd wins over it" {
    (umask 077; printf 'wrong\n' > "$PASS_FILE")
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    forget
    run --separate-stderr "$FOLIO" show secret --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "passphrase file: a wrong one stops before anything changes" {
    (umask 077; printf 'wrong\n' > "$PASS_FILE")
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    forget
    run "$FOLIO" insert text -t "jane" web/user < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"The passphrase in ~/.config/folio/store-pass does not unlock the store's key"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
}

@test "passphrase file: one others can get to, a missing one, or an empty one — refused" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    chmod 640 "$PASS_FILE"
    run "$FOLIO" show secret web/github
    [ "$status" -eq 1 ]
    [[ $output == *"other users can get to $PASS_FILE, so it is not used."*"chmod 600 $PASS_FILE"* ]] || false
    chmod 600 "$PASS_FILE"
    : > "$PASS_FILE"
    run "$FOLIO" show secret web/github
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase in $PASS_FILE: its first line is empty."* ]] || false
    FOLIO_STORE_PASSPHRASE_FILE="$SANDBOX/nothing" run "$FOLIO" show secret web/github
    [ "$status" -eq 1 ]
    [[ $output == *"FOLIO_STORE_PASSPHRASE_FILE: there is no file $SANDBOX/nothing."* ]] || false
}

@test "passphrase file: a command that never needs it does not look at it" {
    FOLIO_STORE_PASSPHRASE_FILE="$SANDBOX/nothing" run "$FOLIO" ls
    [ "$status" -eq 0 ]
}

@test "passphrase file: with --fresh-passphrase, still from the file, and forgotten after" {
    export FOLIO_STORE_PASSPHRASE_FILE=$PASS_FILE
    # Without it, gpg-agent keeps it: the next command needs no file.
    forget
    "$FOLIO" show secret web/github >/dev/null
    FOLIO_STORE_PASSPHRASE_FILE="" run --separate-stderr "$FOLIO" show secret web/github
    [ "$output" = "s3cr3t" ]
    forget
    run --separate-stderr "$FOLIO" show secret --fresh-passphrase web/github
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
    # Forgotten: with the file gone, gpg's prompt (which cancels) is all there is.
    unset FOLIO_STORE_PASSPHRASE_FILE
    run "$FOLIO" show secret web/github
    [ "$status" -ne 0 ]
}

#!/usr/bin/env bats

# --fresh-passphrase and FOLIO_FRESH_PASSPHRASE=1, through the real ./folio: gpg-agent forgets the
# store key's passphrase at the start and the end — for exec and shell, before the command starts.
# The store's key has a passphrase ("pw"). What the agent keeps is read from it (KEYINFO), by
# keygrip; gpg's own prompt is a fake pinentry that answers "pw", or cancels. The other key has a
# passphrase of its own ("pw2"): gpg-agent unlocks a key with the passphrase it has for another,
# when it is the same.

bats_require_minimum_version 1.5.0    # run --separate-stderr
load fake-pinentry

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    unset FOLIO_FRESH_PASSPHRASE
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME"
    [[ $GNUPGHOME == "$SANDBOX"/* && $FOLIO_STORE_DIR == "$SANDBOX"/* && $HOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # A store with a text and a secret, its key protected by "pw"; and another key, "pw2".
    gpg --batch --pinentry-mode loopback --passphrase pw \
        --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    gpg --batch --pinentry-mode loopback --passphrase pw2 \
        --quick-generate-key "Other User <other@example.com>" default default never 2>/dev/null
    use-pinentry pw
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    gpgconf --kill gpg-agent
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# cached <key>: whether gpg-agent has the passphrase of <key> (any of its subkeys).
cached() {
    local grip grips
    grips=$(gpg --list-keys --with-keygrip --with-colons "$1" | awk -F: '$1 == "grp" { print $10 }')    # a,b for ML-KEM + ECC
    for grip in $(gpg-connect-agent 'keyinfo --list' /bye | awk '$1 == "S" && $7 == "1" { print $3 }'); do
        [[ $grips == *"$grip"* ]] && return 0
    done
    return 1
}

# forgotten <key>: whether gpg-agent has no passphrase of <key>. (A bare `! cached` would not fail
# the test.)
forgotten() {
    if cached "$1"; then return 1 ; fi
}

# pinentry-cancels: from now on, gpg's prompt cancels — the agent is not restarted, so it keeps
# what it has (use-pinentry restarts it).
pinentry-cancels() {
    sed -i.bak 's/^D pw$/ERR 83886179 Operation cancelled/; /^OK$/d' "$SANDBOX/fake-pinentry"
}

# remember: have gpg-agent keep the store key's passphrase, by reading a secret.
remember() {
    "$FOLIO" show secret --store-passphrase-fd 3 web/github 3< <(printf 'pw\n') >/dev/null
    cached test@example.com
}

@test "fresh passphrase: without it, gpg-agent keeps the passphrase (as gpg does)" {
    remember
    cached test@example.com
}

@test "MANUAL: leave no passphrase behind — show secret --fresh-passphrase forgets it at the end" {
    run --separate-stderr "$FOLIO" show secret --fresh-passphrase --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
    forgotten test@example.com
}

@test "fresh passphrase: at the start too — one the agent had is asked again" {
    use-pinentry --cancel
    remember
    run "$FOLIO" show secret --fresh-passphrase web/github
    [ "$status" -ne 0 ]
    [[ $output != *s3cr3t* ]] || false
}

@test "MANUAL: leave no passphrase behind — FOLIO_FRESH_PASSPHRASE=1 does the same; 0 does not; anything else is refused" {
    remember
    FOLIO_FRESH_PASSPHRASE=0 run "$FOLIO" ls
    [ "$status" -eq 0 ]
    cached test@example.com
    FOLIO_FRESH_PASSPHRASE=1 run "$FOLIO" ls
    [ "$status" -eq 0 ]
    forgotten test@example.com
    FOLIO_FRESH_PASSPHRASE=yes run "$FOLIO" ls
    [ "$status" -eq 1 ]
    [[ $output == *"FOLIO_FRESH_PASSPHRASE is 1 (on) or 0 (off), not 'yes'."* ]] || false
}

@test "fresh passphrase: before the command, after the kind, or first — all the same" {
    remember
    run "$FOLIO" --fresh-passphrase ls
    [ "$status" -eq 0 ]
    forgotten test@example.com
    remember
    run "$FOLIO" show --fresh-passphrase secret --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$output" = "s3cr3t" ]
    forgotten test@example.com
}

@test "fresh passphrase: insert text (it signs) — forgotten after" {
    run "$FOLIO" insert text --fresh-passphrase --store-passphrase-fd 3 -t "jane" web/user 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    forgotten test@example.com
    [ "$("$FOLIO" show text web/user)" = "jane" ]
}

@test "fresh passphrase: forgotten also when the command fails" {
    remember
    run "$FOLIO" show secret --fresh-passphrase --store-passphrase-fd 3 web/nothing 3< <(printf 'pw\n')
    [ "$status" -ne 0 ]
    forgotten test@example.com
}

@test "MANUAL: leave no passphrase behind — exec: forgotten before the command starts; a --fresh-passphrase after -- is the command's" {
    run --separate-stderr "$FOLIO" exec --fresh-passphrase --secrets --store-passphrase-fd 3 web -- \
        bash -c "printf '%s %s\n' \"\$WEB_GITHUB\" \"\$1\"
                 $(declare -f cached); cached test@example.com && echo kept || echo forgotten" _ --fresh-passphrase \
        3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "s3cr3t --fresh-passphrase" ]
    [ "${lines[1]}" = "forgotten" ]
}

@test "fresh passphrase: shell — forgotten before the shell starts" {
    SHELL=/bin/bash run "$FOLIO" shell --fresh-passphrase --secrets --store-passphrase-fd 3 web/github 3< <(printf 'pw\n') \
        < <(printf '%s\n' "$(declare -f cached)" 'echo "got $WEB_GITHUB"' 'cached test@example.com && echo kept || echo forgotten')
    [ "$status" -eq 0 ]
    [[ $output == *"got s3cr3t"* && $output == *forgotten* && $output != *kept* ]] || false
}

@test "fresh passphrase: exec --from — the key the file is locked to is forgotten too" {
    "$FOLIO" export --to other@example.com -o "$SANDBOX/out/items" web/home < /dev/null >/dev/null 2>&1
    forgotten other@example.com
    use-pinentry pw2
    run --separate-stderr "$FOLIO" exec --fresh-passphrase --from "$SANDBOX/out/items.folio" web/home -- \
        bash -c "echo \"\$WEB_HOME\"; $(declare -f cached); cached other@example.com && echo kept || echo forgotten"
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "https://example.com" ]
    [ "${lines[1]}" = "forgotten" ]
    # Without it, the agent keeps it.
    run --separate-stderr "$FOLIO" exec --from "$SANDBOX/out/items.folio" web/home -- true
    cached other@example.com
}

@test "fresh passphrase: another key the agent had before is kept" {
    printf 'x\n' | gpg --batch --quiet --trust-model always --encrypt --recipient other@example.com \
        | gpg --batch --quiet --pinentry-mode loopback --passphrase-fd 5 --decrypt 5< <(printf 'pw2\n') >/dev/null
    cached other@example.com
    remember
    run "$FOLIO" ls --fresh-passphrase
    [ "$status" -eq 0 ]
    forgotten test@example.com
    cached other@example.com
}

@test "fresh passphrase: backup --encrypt — the file's passphrase is not kept" {
    # Without it, gpg-agent keeps the passphrase typed at the prompt: the backup opens with none.
    run "$FOLIO" backup --encrypt "$SANDBOX/out/kept" < /dev/null
    [ "$status" -eq 0 ]
    pinentry-cancels
    run bash -c "gpg --batch --quiet --decrypt \"$SANDBOX/out/kept--folio.gpg\" > /dev/null"
    [ "$status" -eq 0 ]
    use-pinentry pw
    run "$FOLIO" backup --fresh-passphrase --encrypt "$SANDBOX/out/fresh" < /dev/null
    [ "$status" -eq 0 ]
    forgotten test@example.com
    pinentry-cancels
    run bash -c "gpg --batch --quiet --decrypt \"$SANDBOX/out/fresh--folio.gpg\" > /dev/null"
    [ "$status" -ne 0 ]
}

@test "fresh passphrase: a post-quantum store key — both keygrips of its ML-KEM + ECC subkey" {
    # shellcheck disable=SC1090  # folio, sourced only to ask gpg-has-pqc
    bash -c 'source "$1" && gpg-has-pqc' _ "$FOLIO" \
        || skip "this gpg ($(gpg --version | head -n 1)) cannot make a post-quantum key"
    gpg --batch --pinentry-mode loopback --passphrase pw \
        --quick-generate-key "PQ User <pq@example.com>" pqc default never 2>/dev/null
    export FOLIO_STORE_DIR="$SANDBOX/pq-store"
    "$FOLIO" init --key pq@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    gpgconf --kill gpg-agent
    "$FOLIO" show secret --store-passphrase-fd 3 web/github 3< <(printf 'pw\n') >/dev/null
    cached pq@example.com
    run --separate-stderr "$FOLIO" show secret --fresh-passphrase --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
    forgotten pq@example.com
}

@test "fresh passphrase: help lists it, and Tab completes it with any command's options" {
    run "$FOLIO" help
    [[ $output == *"--fresh-passphrase"*"FOLIO_FRESH_PASSPHRASE=1"* ]] || false
    run "$FOLIO" __complete show secret --fr
    [[ $output == *"--fresh-passphrase"* ]] || false
    # Before the command, it is left out: the command is still found.
    run "$FOLIO" __complete --fresh-passphrase show secret web/
    [[ $output == *"web/github"* ]] || false
}

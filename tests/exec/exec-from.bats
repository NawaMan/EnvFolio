#!/usr/bin/env bats

# folio exec --from and folio shell --from, through the real ./folio: the entries come from an
# export file, on a machine ("there") with its own throwaway GPG home and no store at all.

# shellcheck disable=SC2016  # the '$VAR's are for the command EnvFolio runs to expand, not this file
bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    FILE="$SANDBOX/items.folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with texts gh/user, git/email, @nawa/gh/user and secrets gh/token, @nawa/gh/token,
# exported (all of it, secrets too) to $FILE with the passphrase "export pass".
make-export() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "shared-user"      gh/user         < /dev/null
    "$FOLIO" text insert -t "test@example.com" git/email       < /dev/null
    "$FOLIO" text insert -t "nawa-user"        "@nawa/gh/user" < /dev/null
    "$FOLIO" secret insert -m gh/token         < <(printf 'shared-token\n') >/dev/null
    "$FOLIO" secret insert -m "@nawa/gh/token" < <(printf 'nawa-token\n')   >/dev/null
    "$FOLIO" export -o "$FILE" --secrets --file-passphrase-stdin gh git @nawa \
        < <(printf 'export pass\n') >/dev/null 2>&1
    [ -f "$FILE" ]
}

# Switch to "there": its own empty GPG home, and no store.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
}

# No store made, nothing left in TMPDIR, and the export's key never in the keyring.
left-clean() {
    [ ! -e "$FOLIO_STORE_DIR" ]
    [ -z "$(ls -A "$TMPDIR")" ]
    ! gpg --list-keys "EnvFolio export" >/dev/null 2>&1
}

@test "MANUAL: exec — from an export file" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 gh git \
        -- sh -c 'echo "$GH_USER|$GIT_EMAIL|${GH_TOKEN-unset}"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-user|test@example.com|unset" ]
    [[ $stderr == *"left out 1 secret(s) under 'gh'"* ]]
    left-clean
}

@test "exec --from: --secrets loads secrets; --all and a namespace layer as from a store" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from="$FILE" --file-passphrase-fd=3 --secrets gh \
        -- sh -c 'echo "$GH_USER|$GH_TOKEN"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-user|shared-token" ]
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 --all --secrets @nawa \
        -- sh -c 'echo "$GH_USER|$GH_TOKEN|$GIT_EMAIL"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "nawa-user|nawa-token|test@example.com" ]
    left-clean
}

@test "exec --from: the unpacked export is gone before the command starts" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 -s gh \
        -- sh -c 'ls -A "$TMPDIR"; echo "count=$(ls -A "$TMPDIR" | wc -l | tr -d " ")"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "count=0" ]
}

@test "exec --from --names: shows the names, runs nothing; the file is still opened" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 --names --secrets gh @nawa \
        3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "$(printf 'GH_TOKEN <- @nawa/gh/token (S)\nGH_USER  <- @nawa/gh/user (T)')" ]
    left-clean
}

@test "exec --from: a file locked to your key opens with no passphrase given" {
    make-export
    # Lock a second export to "there"'s key.
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    "$FOLIO" export -o "$SANDBOX/to.folio" --secrets --to "$SANDBOX/server.asc" gh < /dev/null >/dev/null 2>&1
    go-there
    run --separate-stderr "$FOLIO" exec --from "$SANDBOX/to.folio" -s gh -- sh -c 'echo "$GH_TOKEN"' < /dev/null
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token" ]
    left-clean
}

@test "exec --from: a wrong passphrase stops everything; the command does not run" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 gh \
        -- sh -c 'echo ran' 3< <(printf 'wrong pass\n')
    [ "$status" -eq 1 ]
    [ -z "$output" ]
    [[ $stderr == *"Opening $FILE failed."* ]]
    left-clean
}

@test "exec --from: an entry the export does not have is refused" {
    make-export ; go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 VAR=nope \
        -- sh -c 'echo ran' 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [ -z "$output" ]
    [[ $stderr == *"'nope' is not a text or secret in the export."* ]]
    left-clean
}

@test "exec --from: bad arguments are refused and run nothing" {
    make-export ; go-there
    run "$FOLIO" exec --from "$SANDBOX/missing.folio" gh -- sh -c 'echo ran'
    [ "$status" -eq 1 ]
    [[ $output == *"There is no file"* ]]
    run "$FOLIO" exec --from "$SANDBOX/no-store" gh -- sh -c 'echo ran'
    [ "$status" -eq 1 ]
    run "$FOLIO" exec --from gh -- sh -c 'echo ran'
    [ "$status" -eq 1 ]
    run "$FOLIO" exec --from "$FILE" --file-passphrase-fd 7 gh -- sh -c 'echo ran'
    [ "$status" -eq 1 ]
    [[ $output == *"no such file descriptor is open"* ]]
    run "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 gh -- sh -c 'echo ran' 3< /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase on file descriptor 3."* ]]
    run "$FOLIO" exec --file-passphrase-fd 3 gh -- sh -c 'echo ran' 3< <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $output == *"--file-passphrase-fd is for opening a --from file."* ]]
    [[ $output != *ran* ]]
    left-clean
}

@test "MANUAL: shell — from an export file" {
    make-export ; go-there
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --from "$FILE" --file-passphrase-fd 3 --secrets gh @nawa \
        3< <(printf 'export pass\n') < <(printf 'echo "$FOLIO_SHELL|$GH_TOKEN|$GH_USER"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "1|nawa-token|nawa-user" ]
    [ "$stderr" = "folio shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave." ]
    left-clean
}

@test "exec --from --vars: the vars file takes its entries from the export" {
    make-export ; go-there
    printf '%s\n' "LOGIN=@{gh/user}" 'TOKEN=@{@nawa/gh/token:-none}' > "$SANDBOX/a.vars"
    run --separate-stderr "$FOLIO" exec -s --from "$FILE" --file-passphrase-fd 3 --vars "$SANDBOX/a.vars" \
        -- sh -c 'echo "$LOGIN|$TOKEN"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-user|nawa-token" ]
    left-clean
}

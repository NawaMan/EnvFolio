#!/usr/bin/env bats

# Commands not built yet fail the same way: a message on stderr, nothing on stdout, exit 1.

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
    rm -rf "$SANDBOX"
}

@test "not yet: every unbuilt command fails with a message on stderr only" {
    local command stdout
    for command in "store backup" "store restore" "store export" "store import" \
                   "text generate" "text rm" "text mv" "text cp"; do
        # shellcheck disable=SC2086  # split "store backup" into its words
        run "$KEEP" $command < /dev/null
        [ "$status" -eq 1 ]
        [ "$output" = "keep: $command is not built yet." ]
        # shellcheck disable=SC2086
        stdout=$("$KEEP" $command < /dev/null 2>/dev/null) || true
        [ -z "$stdout" ]
    done
}

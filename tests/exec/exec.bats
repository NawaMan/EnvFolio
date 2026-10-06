#!/usr/bin/env bats

# keep exec and keep shell, through the real ./keep, against a throwaway GPG home and store.

# shellcheck disable=SC2016  # the '$VAR's are for the command Keep runs to expand, not this file
bats_require_minimum_version 1.5.0    # run --separate-stderr

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

# A ready store.
#   texts:   git/user_name, git/email, gh/user, @nawa/gh/user, multi/cert (two lines),
#            odd/ok, odd/api-key (not a valid variable name), both/x
#   secrets: gh/token, @nawa/gh/token, both/x
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "Test User"        git/user_name   < /dev/null
    "$KEEP" text insert -t "test@example.com" git/email       < /dev/null
    "$KEEP" text insert -t "shared-user"      gh/user         < /dev/null
    "$KEEP" text insert -t "nawa-user"        "@nawa/gh/user" < /dev/null
    "$KEEP" text insert -t "ok value"         odd/ok          < /dev/null
    "$KEEP" text insert -t "dash value"       odd/api-key     < /dev/null
    "$KEEP" text insert -t "both text"        both/x          < /dev/null
    "$KEEP" text insert -m multi/cert < <(printf 'line one\nline two\n') >/dev/null
    "$KEEP" secret insert -m gh/token         < <(printf 'shared-token\n') >/dev/null
    "$KEEP" secret insert -m "@nawa/gh/token" < <(printf 'nawa-token\n')   >/dev/null
    "$KEEP" secret insert -m both/x           < <(printf 'both secret\n')  >/dev/null
}

@test "MANUAL: exec — run a command with texts" {
    make-store
    run --separate-stderr "$KEEP" exec git -- sh -c 'echo "$GIT_USER_NAME|$GIT_EMAIL|${GH_TOKEN-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "Test User|test@example.com|unset" ]
    [ -z "$stderr" ]
}

@test "MANUAL: exec — add secrets" {
    make-store
    run --separate-stderr "$KEEP" exec --secrets gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|shared-user" ]
}

@test "MANUAL: exec — layer a namespace" {
    make-store
    run "$KEEP" exec --secrets gh @nawa -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "nawa-token|nawa-user" ]
    # The later selection wins, so the other order gives the shared ones.
    run "$KEEP" exec --secrets @nawa gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$output" = "shared-token|shared-user" ]
}

@test "exec: only a top @folder is a namespace; deeper, @ is ordinary; [ ] is ordinary" {
    make-store
    "$KEEP" text insert -t "a-domain" @usera/domain/user < /dev/null
    "$KEEP" text insert -t "a-server" @usera/server/user < /dev/null
    "$KEEP" text insert -t "b-server" @userb/server/user < /dev/null
    "$KEEP" text insert -t "work"     sv/@work/user      < /dev/null
    "$KEEP" text insert -t "bracket"  "[x]y/z"           < /dev/null
    run "$KEEP" exec @usera -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "a-domain|a-server" ]
    run "$KEEP" exec @usera @userb -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$output" = "a-domain|b-server" ]
    run --separate-stderr "$KEEP" exec sv/@work -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'sv/@work/user' would be SV_@WORK_USER"* ]]
    run --separate-stderr "$KEEP" exec "[x]y" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'[x]y/z' would be [X]Y_Z"* ]]
}

@test "MANUAL: exec — pick the variable name" {
    make-store
    run "$KEEP" exec --secrets GITHUB_TOKEN=gh/token gh -- sh -c 'echo "$GITHUB_TOKEN|${GH_TOKEN-unset}|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|unset|shared-user" ]
}

@test "exec: an explicit name wins wherever it is typed; the claim is only its own entry" {
    make-store
    run "$KEEP" exec --secrets @nawa GH_TOKEN=gh/token -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    run "$KEEP" exec --secrets GH_TOKEN=gh/token @nawa -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    # gh/token is claimed; @nawa/gh/token is another entry and still gives GH_TOKEN.
    run "$KEEP" exec --secrets MY=gh/token gh @nawa -- sh -c 'echo "$MY|$GH_TOKEN"'
    [ "$output" = "shared-token|nawa-token" ]
    # Two explicit ones for the same name: the later wins.
    run "$KEEP" exec --secrets X=gh/token X=gh/user -- printenv X
    [ "$output" = "shared-user" ]
}

@test "exec: a single entry is named by its full path; a value keeps its lines, not its last newline" {
    make-store
    run "$KEEP" exec git/email multi/cert -- sh -c 'printf "%s|%s" "$GIT_EMAIL" "$MULTI_CERT"'
    [ "$status" -eq 0 ]
    [ "$output" = $'test@example.com|line one\nline two' ]
}

@test "exec: a name that is not a valid variable is left out with a warning" {
    make-store
    run --separate-stderr "$KEEP" exec odd -- sh -c 'echo "$ODD_OK|${ODD_API-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "ok value|unset" ]
    [[ $stderr == *"warning: 'odd/api-key' would be ODD_API-KEY"*"Use VAR=odd/api-key"* ]]
    # Given a VAR, it loads.
    run "$KEEP" exec ODD_API_KEY=odd/api-key -- printenv ODD_API_KEY
    [ "$output" = "dash value" ]
    # Left out and nothing else: there is nothing to load.
    run "$KEEP" exec odd/api-key -- true
    [ "$status" -eq 1 ]
    [[ $output == *"nothing to load"* ]]
}

@test "exec: a path that is both a text and a secret is refused when both would load" {
    make-store
    run "$KEEP" exec --secrets both -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'both/x' is both a text and a secret"* ]]
    run "$KEEP" exec --secrets both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    run "$KEEP" exec --secrets X=both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    # Without --secrets only the text loads.
    run "$KEEP" exec both -- printenv BOTH_X
    [ "$status" -eq 0 ]
    [ "$output" = "both text" ]
}

@test "exec: a secret needs --secrets; a folder without it skips its secrets" {
    make-store
    run "$KEEP" exec gh/token -- true
    [ "$status" -eq 1 ]
    [[ $output == *"'gh/token' is a secret; add --secrets"* ]]
    run "$KEEP" exec gh -- sh -c 'echo "${GH_TOKEN-unset}|$GH_USER"'
    [ "$output" = "unset|shared-user" ]
}

@test "exec: a text changed outside Keep stops everything; the command does not run" {
    make-store
    echo "tampered" > "$KEEP_STORE_DIR/git/email.txt"
    run "$KEEP" exec git -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'git/email'"*"does not verify"* ]]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: the command's exit status and output are its own; Keep prints no values" {
    make-store
    run --separate-stderr "$KEEP" exec --secrets gh git -- sh -c 'exit 7'
    [ "$status" -eq 7 ]
    [ -z "$output" ]
    [ -z "$stderr" ]
    run -127 "$KEEP" exec git -- no-such-command-here
}

@test "exec: the caller's PASSWORD_STORE_DIR is put back, or stays unset" {
    make-store
    run env PASSWORD_STORE_DIR="$SANDBOX/callers" "$KEEP" exec git -- printenv PASSWORD_STORE_DIR
    [ "$output" = "$SANDBOX/callers" ]
    run env -u PASSWORD_STORE_DIR "$KEEP" exec git -- sh -c 'echo "${PASSWORD_STORE_DIR-unset}"'
    [ "$output" = "unset" ]
}

@test "exec: bad arguments are refused and run nothing" {
    make-store
    local args
    for args in "git" "git --" "-- touch $SANDBOX/ran" "--bogus git -- true" "nope -- true" \
                "../x -- true" "1X=git/email -- true" "my-var=git/email -- true" "X=nope -- true" \
                "X=git -- true"; do
        # shellcheck disable=SC2086  # split the arguments on purpose
        run "$KEEP" exec $args < /dev/null
        [ "$status" -eq 1 ]
    done
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: no store fails and creates nothing" {
    run "$KEEP" exec git -- true
    [ "$status" -eq 1 ]
    [[ $output == *"keep store init"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "exec --help and shell --help: work without a store" {
    run "$KEEP" exec --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep exec "* ]]
    run "$KEEP" help shell
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep shell "* ]]
}

@test "MANUAL: shell — open a shell" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$KEEP" shell --secrets gh @nawa \
        < <(printf 'echo "$KEEP_SHELL|$GH_TOKEN|$GH_USER"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "1|nawa-token|nawa-user" ]
    [ "$stderr" = "keep shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave." ]
}

@test "shell: takes no command, and needs an entry" {
    make-store
    run "$KEEP" shell gh -- sh
    [ "$status" -eq 1 ]
    run "$KEEP" shell
    [ "$status" -eq 1 ]
}

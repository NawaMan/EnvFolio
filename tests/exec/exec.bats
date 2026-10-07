#!/usr/bin/env bats

# envfolio exec and envfolio shell, through the real ./envfolio, against a throwaway GPG home and store.

# shellcheck disable=SC2016  # the '$VAR's are for the command EnvFolio runs to expand, not this file
bats_require_minimum_version 1.5.0    # run --separate-stderr

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
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store.
#   texts:   git/user_name, git/email, gh/user, @nawa/gh/user, multi/cert (two lines),
#            odd/ok, odd/api-key (not a valid variable name), both/x
#   secrets: gh/token, @nawa/gh/token, both/x
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "Test User"        git/user_name   < /dev/null
    "$ENVFOLIO" text insert -t "test@example.com" git/email       < /dev/null
    "$ENVFOLIO" text insert -t "shared-user"      gh/user         < /dev/null
    "$ENVFOLIO" text insert -t "nawa-user"        "@nawa/gh/user" < /dev/null
    "$ENVFOLIO" text insert -t "ok value"         odd/ok          < /dev/null
    "$ENVFOLIO" text insert -t "dash value"       odd/api-key     < /dev/null
    "$ENVFOLIO" text insert -t "both text"        both/x          < /dev/null
    "$ENVFOLIO" text insert -m multi/cert < <(printf 'line one\nline two\n') >/dev/null
    "$ENVFOLIO" secret insert -m gh/token         < <(printf 'shared-token\n') >/dev/null
    "$ENVFOLIO" secret insert -m "@nawa/gh/token" < <(printf 'nawa-token\n')   >/dev/null
    "$ENVFOLIO" secret insert -m both/x           < <(printf 'both secret\n')  >/dev/null
}

@test "MANUAL: exec — run a command with texts" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec git -- sh -c 'echo "$GIT_USER_NAME|$GIT_EMAIL|${GH_TOKEN-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "Test User|test@example.com|unset" ]
    [ -z "$stderr" ]
}

@test "MANUAL: exec — add secrets" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec --secrets gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|shared-user" ]
}

@test "MANUAL: exec — layer a namespace" {
    make-store
    run "$ENVFOLIO" exec --secrets gh @nawa -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "nawa-token|nawa-user" ]
    # The later selection wins, so the other order gives the shared ones.
    run "$ENVFOLIO" exec --secrets @nawa gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$output" = "shared-token|shared-user" ]
}

@test "exec: only a top @folder is a namespace; deeper, @ is ordinary; [ ] is ordinary" {
    make-store
    "$ENVFOLIO" text insert -t "a-domain" @usera/domain/user < /dev/null
    "$ENVFOLIO" text insert -t "a-server" @usera/server/user < /dev/null
    "$ENVFOLIO" text insert -t "b-server" @userb/server/user < /dev/null
    "$ENVFOLIO" text insert -t "work"     sv/@work/user      < /dev/null
    "$ENVFOLIO" text insert -t "bracket"  "[x]y/z"           < /dev/null
    run "$ENVFOLIO" exec @usera -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "a-domain|a-server" ]
    run "$ENVFOLIO" exec @usera @userb -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$output" = "a-domain|b-server" ]
    run --separate-stderr "$ENVFOLIO" exec sv/@work -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'sv/@work/user' would be SV_@WORK_USER"* ]]
    run --separate-stderr "$ENVFOLIO" exec "[x]y" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'[x]y/z' would be [X]Y_Z"* ]]
}

@test "MANUAL: exec — load everything" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec --all -- sh -c 'echo "$GIT_EMAIL|$GH_USER|${GH_TOKEN-unset}|$BOTH_X|$MULTI_CERT"'
    [ "$status" -eq 0 ]
    [ "$output" = $'test@example.com|shared-user|unset|both text|line one\nline two' ]
    # Secrets left out are counted outside the namespaces only: gh/token, both/x.
    [[ $stderr == *"envfolio exec: left out 2 secret(s) in the store; add --secrets to load them."* ]]
    [[ $stderr == *"'odd/api-key' would be ODD_API-KEY"* ]]
}

@test "exec --all: loads first wherever it is typed; namespaces and VAR= layer over it" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec @nawa --all -- printenv GH_USER
    [ "$output" = "nawa-user" ]
    run --separate-stderr "$ENVFOLIO" exec --all X=@nawa/gh/user -- sh -c 'echo "$X|$GH_USER"'
    [ "$output" = "nawa-user|shared-user" ]
    # With --secrets, both/x (a text and a secret) is refused; without it, all secrets load.
    run "$ENVFOLIO" exec --all --secrets -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    "$ENVFOLIO" secret rm -f both/x < /dev/null >/dev/null
    run --separate-stderr "$ENVFOLIO" exec --all --secrets -- printenv GH_TOKEN
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token" ]
    # --all on a store of only namespaced entries: nothing to load.
    rm -rf "$ENVFOLIO_STORE_DIR"/{git,gh,odd,both,multi}
    run "$ENVFOLIO" exec --all -- true
    [ "$status" -eq 1 ]
    [[ $output == *"the store has no entries to load"* ]]
}

@test "shell --all: needs no entry" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$ENVFOLIO" shell --all < <(printf 'echo "$GIT_USER_NAME"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "Test User" ]
}

@test "MANUAL: exec — check the names first" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec --names --secrets gh @nawa -- gh repo list
    [ "$status" -eq 0 ]
    [ "$output" = $'GH_TOKEN <- @nawa/gh/token (S)\nGH_USER  <- @nawa/gh/user (T)' ]
}

@test "exec --names: reads nothing, runs nothing; the command is optional; shell too" {
    make-store
    echo "tampered" > "$ENVFOLIO_STORE_DIR/git/email.txt"
    # No gpg at all: a tampered text still shows, a broken gpg home is never asked.
    run --separate-stderr env GNUPGHOME="$SANDBOX/none" "$ENVFOLIO" exec --names git X=gh/user -- touch "$SANDBOX/ran"
    [ "$status" -eq 0 ]
    [ "$output" = $'GIT_EMAIL     <- git/email (T)\nGIT_USER_NAME <- git/user_name (T)\nX             <- gh/user (T)' ]
    [ ! -e "$SANDBOX/ran" ]
    run --separate-stderr "$ENVFOLIO" exec -n gh
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER <- gh/user (T)" ]
    [[ $stderr == *"left out 1 secret(s) under 'gh'"* ]]
    SHELL=/bin/sh run --separate-stderr "$ENVFOLIO" shell --names gh < <(printf 'echo SHELL-RAN\n')
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER <- gh/user (T)" ]
    # Refusals still stop it.
    run "$ENVFOLIO" exec --names --secrets both -- true
    [ "$status" -eq 1 ]
}

@test "MANUAL: exec — pick the variable name" {
    make-store
    run "$ENVFOLIO" exec --secrets GITHUB_TOKEN=gh/token gh -- sh -c 'echo "$GITHUB_TOKEN|${GH_TOKEN-unset}|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|unset|shared-user" ]
}

@test "exec: an explicit name wins wherever it is typed; the claim is only its own entry" {
    make-store
    run "$ENVFOLIO" exec --secrets @nawa GH_TOKEN=gh/token -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    run "$ENVFOLIO" exec --secrets GH_TOKEN=gh/token @nawa -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    # gh/token is claimed; @nawa/gh/token is another entry and still gives GH_TOKEN.
    run "$ENVFOLIO" exec --secrets MY=gh/token gh @nawa -- sh -c 'echo "$MY|$GH_TOKEN"'
    [ "$output" = "shared-token|nawa-token" ]
    # Two explicit ones for the same name: the later wins.
    run "$ENVFOLIO" exec --secrets X=gh/token X=gh/user -- printenv X
    [ "$output" = "shared-user" ]
}

@test "exec: a single entry is named by its full path; a value keeps its lines, not its last newline" {
    make-store
    run "$ENVFOLIO" exec git/email multi/cert -- sh -c 'printf "%s|%s" "$GIT_EMAIL" "$MULTI_CERT"'
    [ "$status" -eq 0 ]
    [ "$output" = $'test@example.com|line one\nline two' ]
}

@test "exec: a name that is not a valid variable is left out with a warning" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec odd -- sh -c 'echo "$ODD_OK|${ODD_API-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "ok value|unset" ]
    [[ $stderr == *"warning: 'odd/api-key' would be ODD_API-KEY"*"Use VAR=odd/api-key"* ]]
    # Given a VAR, it loads.
    run "$ENVFOLIO" exec ODD_API_KEY=odd/api-key -- printenv ODD_API_KEY
    [ "$output" = "dash value" ]
    # Left out and nothing else: there is nothing to load.
    run "$ENVFOLIO" exec odd/api-key -- true
    [ "$status" -eq 1 ]
    [[ $output == *"nothing to load"* ]]
}

@test "exec: a path that is both a text and a secret is refused when both would load" {
    make-store
    run "$ENVFOLIO" exec --secrets both -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'both/x' is both a text and a secret"* ]]
    run "$ENVFOLIO" exec --secrets both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    run "$ENVFOLIO" exec --secrets X=both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    # Without --secrets only the text loads.
    run --separate-stderr "$ENVFOLIO" exec both -- printenv BOTH_X
    [ "$status" -eq 0 ]
    [ "$output" = "both text" ]
}

@test "exec: a secret needs --secrets; a folder without it skips its secrets" {
    make-store
    run "$ENVFOLIO" exec gh/token -- true
    [ "$status" -eq 1 ]
    [[ $output == *"'gh/token' is a secret; add --secrets"* ]]
    run --separate-stderr "$ENVFOLIO" exec gh -- sh -c 'echo "${GH_TOKEN-unset}|$GH_USER"'
    [ "$output" = "unset|shared-user" ]
    [ "$stderr" = "envfolio exec: left out 1 secret(s) under 'gh'; add --secrets to load them." ]
    # A folder of secrets only: nothing to load without --secrets.
    "$ENVFOLIO" secret insert -m only/s < <(printf 'x\n') >/dev/null
    run "$ENVFOLIO" exec only -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"only secrets under 'only' (1); add --secrets"* ]]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: a name bash keeps for itself is refused; EnvFolio's own names load like any other" {
    make-store
    "$ENVFOLIO" text insert -t "seed" random    < /dev/null
    "$ENVFOLIO" text insert -t "me"   uid       < /dev/null
    "$ENVFOLIO" text insert -t "ev"   exec/vars < /dev/null
    run "$ENVFOLIO" exec random -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"could not set RANDOM"*"VAR=<name>"* ]]
    run "$ENVFOLIO" exec uid -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"could not set UID"* ]]
    [ ! -e "$SANDBOX/ran" ]
    run "$ENVFOLIO" exec SEED=random -- printenv SEED
    [ "$output" = "seed" ]
    run "$ENVFOLIO" exec exec/vars pairs=git/email entries=git/user_name -- sh -c 'echo "$EXEC_VARS|$pairs|$entries"'
    [ "$status" -eq 0 ]
    [ "$output" = "ev|test@example.com|Test User" ]
}

@test "exec: a text changed outside EnvFolio stops everything; the command does not run" {
    make-store
    echo "tampered" > "$ENVFOLIO_STORE_DIR/git/email.txt"
    run "$ENVFOLIO" exec git -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'git/email'"*"does not verify"* ]]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: the command's exit status and output are its own; EnvFolio prints no values" {
    make-store
    run --separate-stderr "$ENVFOLIO" exec --secrets gh git -- sh -c 'exit 7'
    [ "$status" -eq 7 ]
    [ -z "$output" ]
    [ -z "$stderr" ]
    run -127 "$ENVFOLIO" exec git -- no-such-command-here
}

@test "exec: the caller's PASSWORD_STORE_DIR is put back, or stays unset" {
    make-store
    run env PASSWORD_STORE_DIR="$SANDBOX/callers" "$ENVFOLIO" exec git -- printenv PASSWORD_STORE_DIR
    [ "$output" = "$SANDBOX/callers" ]
    run env -u PASSWORD_STORE_DIR "$ENVFOLIO" exec git -- sh -c 'echo "${PASSWORD_STORE_DIR-unset}"'
    [ "$output" = "unset" ]
}

@test "exec: bad arguments are refused and run nothing" {
    make-store
    local args
    for args in "git" "git --" "-- touch $SANDBOX/ran" "--bogus git -- true" "nope -- true" \
                "../x -- true" "1X=git/email -- true" "my-var=git/email -- true" "X=nope -- true" \
                "X=git -- true"; do
        # shellcheck disable=SC2086  # split the arguments on purpose
        run "$ENVFOLIO" exec $args < /dev/null
        [ "$status" -eq 1 ]
    done
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: no store fails and creates nothing" {
    run "$ENVFOLIO" exec git -- true
    [ "$status" -eq 1 ]
    [[ $output == *"envfolio store init"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "exec --help and shell --help: work without a store" {
    run "$ENVFOLIO" exec --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: envfolio exec "* ]]
    run "$ENVFOLIO" help shell
    [ "$status" -eq 0 ]
    [[ $output == "Usage: envfolio shell "* ]]
}

@test "MANUAL: shell — open a shell" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$ENVFOLIO" shell --secrets gh @nawa \
        < <(printf 'echo "$ENVFOLIO_SHELL|$GH_TOKEN|$GH_USER"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "1|nawa-token|nawa-user" ]
    [ "$stderr" = "envfolio shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave." ]
}

@test "shell: takes no command, and needs an entry" {
    make-store
    run "$ENVFOLIO" shell gh -- sh
    [ "$status" -eq 1 ]
    run "$ENVFOLIO" shell
    [ "$status" -eq 1 ]
}

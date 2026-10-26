#!/usr/bin/env bats

# folio exec and folio shell, through the real ./folio, against a throwaway GPG home and store.

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
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
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
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "Test User"        git/user_name   < /dev/null
    "$FOLIO" insert text -t "test@example.com" git/email       < /dev/null
    "$FOLIO" insert text -t "shared-user"      gh/user         < /dev/null
    "$FOLIO" insert text -t "nawa-user"        "@nawa/gh/user" < /dev/null
    "$FOLIO" insert text -t "ok value"         odd/ok          < /dev/null
    "$FOLIO" insert text -t "dash value"       odd/api-key     < /dev/null
    "$FOLIO" insert text -t "both text"        both/x          < /dev/null
    "$FOLIO" insert text -m multi/cert < <(printf 'line one\nline two\n') >/dev/null
    "$FOLIO" insert secret -m gh/token         < <(printf 'shared-token\n') >/dev/null
    "$FOLIO" insert secret -m "@nawa/gh/token" < <(printf 'nawa-token\n')   >/dev/null
    "$FOLIO" insert secret -m both/x           < <(printf 'both secret\n')  >/dev/null
}

@test "MANUAL: exec — run a command with texts" {
    make-store
    run --separate-stderr "$FOLIO" exec git -- sh -c 'echo "$GIT_USER_NAME|$GIT_EMAIL|${GH_TOKEN-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "Test User|test@example.com|unset" ]
    [ -z "$stderr" ]
}

@test "MANUAL: exec — add secrets" {
    make-store
    run --separate-stderr "$FOLIO" exec --secrets gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|shared-user" ]
}

@test "MANUAL: exec — layer a namespace" {
    make-store
    run "$FOLIO" exec --secrets gh @nawa -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "nawa-token|nawa-user" ]
    # The later selection wins, so the other order gives the shared ones.
    run "$FOLIO" exec --secrets @nawa gh -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$output" = "shared-token|shared-user" ]
}

@test "exec: only a top @folder is a namespace; deeper, @ is ordinary; [ ] is ordinary" {
    make-store
    "$FOLIO" insert text -t "a-domain" @usera/domain/user < /dev/null
    "$FOLIO" insert text -t "a-server" @usera/server/user < /dev/null
    "$FOLIO" insert text -t "b-server" @userb/server/user < /dev/null
    "$FOLIO" insert text -t "work"     sv/@work/user      < /dev/null
    "$FOLIO" insert text -t "bracket"  "[x]y/z"           < /dev/null
    run "$FOLIO" exec @usera -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "a-domain|a-server" ]
    run "$FOLIO" exec @usera @userb -- sh -c 'echo "$DOMAIN_USER|$SERVER_USER"'
    [ "$output" = "a-domain|b-server" ]
    run --separate-stderr "$FOLIO" exec sv/@work -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'sv/@work/user' would be SV_@WORK_USER"* ]] || false
    run --separate-stderr "$FOLIO" exec "[x]y" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"'[x]y/z' would be [X]Y_Z"* ]] || false
}

@test "MANUAL: exec — load everything" {
    make-store
    run --separate-stderr "$FOLIO" exec --all -- sh -c 'echo "$GIT_EMAIL|$GH_USER|${GH_TOKEN-unset}|$BOTH_X|$MULTI_CERT"'
    [ "$status" -eq 0 ]
    [ "$output" = $'test@example.com|shared-user|unset|both text|line one\nline two' ]
    # Secrets left out are counted outside the namespaces only: gh/token, both/x.
    [[ $stderr == *"folio exec: left out 2 secret(s) in the store; add --secrets to load them."* ]] || false
    [[ $stderr == *"'odd/api-key' would be ODD_API-KEY"* ]] || false
}

@test "exec --all: where it is typed, the last one winning; namespaces and VAR= layer over it" {
    make-store
    run --separate-stderr "$FOLIO" exec --all @nawa -- printenv GH_USER
    [ "$output" = "nawa-user" ]
    run --separate-stderr "$FOLIO" exec @nawa --all -- printenv GH_USER
    [ "$output" = "shared-user" ]
    run --separate-stderr "$FOLIO" exec --all X=@nawa/gh/user -- sh -c 'echo "$X|$GH_USER"'
    [ "$output" = "nawa-user|shared-user" ]
    # With --secrets, both/x (a text and a secret) is refused; without it, all secrets load.
    run "$FOLIO" exec --all --secrets -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    "$FOLIO" rm secret -f both/x < /dev/null >/dev/null
    run --separate-stderr "$FOLIO" exec --all --secrets -- printenv GH_TOKEN
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token" ]
    # --all on a store of only namespaced entries: nothing to load.
    rm -rf "$FOLIO_STORE_DIR"/{git,gh,odd,both,multi}
    run "$FOLIO" exec --all -- true
    [ "$status" -eq 1 ]
    [[ $output == *"the store has no entries to load"* ]] || false
}

@test "shell --all: needs no entry" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --all < <(printf 'echo "$GIT_USER_NAME"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "Test User" ]
}

@test "MANUAL: exec — check the names first" {
    make-store
    run --separate-stderr "$FOLIO" exec --names --secrets gh @nawa -- gh repo list
    [ "$status" -eq 0 ]
    [ "$output" = $'GH_TOKEN <- @nawa/gh/token(S)\nGH_USER  <- @nawa/gh/user(T)' ]
}

@test "exec --names: reads nothing, runs nothing; the command is optional; shell too" {
    make-store
    echo "tampered" > "$FOLIO_STORE_DIR/git/email.txt"
    # No gpg at all: a tampered text still shows, a broken gpg home is never asked.
    run --separate-stderr env GNUPGHOME="$SANDBOX/none" "$FOLIO" exec --names git X=gh/user -- touch "$SANDBOX/ran"
    [ "$status" -eq 0 ]
    [ "$output" = $'GIT_EMAIL     <- git/email(T)\nGIT_USER_NAME <- git/user_name(T)\nX             <- gh/user(T)' ]
    [ ! -e "$SANDBOX/ran" ]
    run --separate-stderr "$FOLIO" exec -n gh
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER <- gh/user(T)" ]
    [[ $stderr == *"left out 1 secret(s) under 'gh'"* ]] || false
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --names gh < <(printf 'echo SHELL-RAN\n')
    [ "$status" -eq 0 ]
    [ "$output" = "GH_USER <- gh/user(T)" ]
    # Refusals still stop it.
    run "$FOLIO" exec --names --secrets both -- true
    [ "$status" -eq 1 ]
}

@test "exec --debug: the names on stderr, then the command runs; shell too; not with --names" {
    make-store
    run --separate-stderr "$FOLIO" exec --debug --secrets gh @nawa -- sh -c 'echo "$GH_TOKEN|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "nawa-token|nawa-user" ]
    [ "$stderr" = $'GH_TOKEN <- @nawa/gh/token(S)\nGH_USER  <- @nawa/gh/user(T)' ]
    # Notes are said once, by the real run.
    run --separate-stderr "$FOLIO" exec --debug gh -- sh -c 'echo "$GH_USER"'
    [ "$output" = "shared-user" ]
    [ "$stderr" = "GH_USER <- gh/user(T)
folio exec: left out 1 secret(s) under 'gh'; add --secrets to load them." ]
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --debug gh/user < <(printf 'echo "SHELL-RAN $GH_USER"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "SHELL-RAN shared-user" ]
    [[ $stderr == "GH_USER <- gh/user(T)"$'\n'"folio shell: loaded GH_USER"* ]] || false
    # A refusal still stops it, before anything runs.
    run --separate-stderr "$FOLIO" exec --debug --secrets both -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"'both/x' is both a text and a secret"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
    run "$FOLIO" exec --names --debug gh -- true
    [ "$status" -eq 1 ]
    [[ $output == *"--names only shows the names"* ]] || false
}

@test "exec --confirm: without a terminal, refused before anything is read or run" {
    make-store
    command -v setsid >/dev/null || skip "no setsid here (macOS)"
    # setsid: no controlling terminal, so /dev/tty cannot be opened.
    run --separate-stderr setsid "$FOLIO" exec --confirm --secrets gh -- touch "$SANDBOX/ran" < <(echo y)
    [ "$status" -eq 1 ]
    [[ $stderr == "GH_TOKEN <- gh/token(S)"$'\n'"GH_USER  <- gh/user(T)"$'\n'*"--confirm needs a terminal to ask on."* ]] || false
    [ ! -e "$SANDBOX/ran" ]
}

@test "MANUAL: exec — pick the variable name" {
    make-store
    run "$FOLIO" exec --secrets GITHUB_TOKEN=gh/token gh -- sh -c 'echo "$GITHUB_TOKEN|${GH_TOKEN-unset}|$GH_USER"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|shared-token|shared-user" ]
    # On its own, VAR=<name> selects nothing else.
    run "$FOLIO" exec --secrets GITHUB_TOKEN=gh/token -- sh -c 'echo "$GITHUB_TOKEN|${GH_TOKEN-unset}|${GH_USER-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|unset|unset" ]
}

@test "exec: an explicit name wins wherever it is typed; its entry keeps its own name too" {
    make-store
    run "$FOLIO" exec --secrets @nawa GH_TOKEN=gh/token -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    run "$FOLIO" exec --secrets GH_TOKEN=gh/token @nawa -- printenv GH_TOKEN
    [ "$output" = "shared-token" ]
    # gh/token still gives GH_TOKEN by the rule; @nawa/gh/token, later, gives it over that.
    run "$FOLIO" exec --secrets MY=gh/token gh -- sh -c 'echo "$MY|$GH_TOKEN"'
    [ "$output" = "shared-token|shared-token" ]
    run "$FOLIO" exec --secrets MY=gh/token gh @nawa -- sh -c 'echo "$MY|$GH_TOKEN"'
    [ "$output" = "shared-token|nawa-token" ]
    # Two explicit ones for the same name: the later wins.
    run "$FOLIO" exec --secrets X=gh/token X=gh/user -- printenv X
    [ "$output" = "shared-user" ]
}

@test "exec: a single entry is named by its full path; a value keeps its lines, not its last newline" {
    make-store
    run "$FOLIO" exec git/email multi/cert -- sh -c 'printf "%s|%s" "$GIT_EMAIL" "$MULTI_CERT"'
    [ "$status" -eq 0 ]
    [ "$output" = $'test@example.com|line one\nline two' ]
}

@test "exec: a name that is not a valid variable is left out with a warning" {
    make-store
    run --separate-stderr "$FOLIO" exec odd -- sh -c 'echo "$ODD_OK|${ODD_API-unset}"'
    [ "$status" -eq 0 ]
    [ "$output" = "ok value|unset" ]
    [[ $stderr == *"warning: 'odd/api-key' would be ODD_API-KEY"*"Use VAR=odd/api-key"* ]] || false
    # Given a VAR, it loads.
    run "$FOLIO" exec ODD_API_KEY=odd/api-key -- printenv ODD_API_KEY
    [ "$output" = "dash value" ]
    # Left out and nothing else: there is nothing to load.
    run "$FOLIO" exec odd/api-key -- true
    [ "$status" -eq 1 ]
    [[ $output == *"nothing to load"* ]] || false
}

@test "exec: a path that is both a text and a secret is refused when both would load" {
    make-store
    run "$FOLIO" exec --secrets both -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'both/x' is both a text and a secret"* ]] || false
    run "$FOLIO" exec --secrets both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    run "$FOLIO" exec --secrets X=both/x -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    # Without --secrets only the text loads.
    run --separate-stderr "$FOLIO" exec both -- printenv BOTH_X
    [ "$status" -eq 0 ]
    [ "$output" = "both text" ]
}

@test "exec: a secret needs --secrets; a folder without it skips its secrets" {
    make-store
    run "$FOLIO" exec gh/token -- true
    [ "$status" -eq 1 ]
    [[ $output == *"'gh/token' is a secret; add --secrets"* ]] || false
    run --separate-stderr "$FOLIO" exec gh -- sh -c 'echo "${GH_TOKEN-unset}|$GH_USER"'
    [ "$output" = "unset|shared-user" ]
    [ "$stderr" = "folio exec: left out 1 secret(s) under 'gh'; add --secrets to load them." ]
    # A folder of secrets only: nothing to load without --secrets.
    "$FOLIO" insert secret -m only/s < <(printf 'x\n') >/dev/null
    run "$FOLIO" exec only -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"only secrets under 'only' (1); add --secrets"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: a name bash keeps for itself is refused; EnvFolio's own names load like any other" {
    make-store
    "$FOLIO" insert text -t "seed" random    < /dev/null
    "$FOLIO" insert text -t "me"   uid       < /dev/null
    "$FOLIO" insert text -t "ev"   exec/vars < /dev/null
    run "$FOLIO" exec random -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"could not set RANDOM"*"VAR=<name>"* ]] || false
    run "$FOLIO" exec uid -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"could not set UID"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
    run "$FOLIO" exec SEED=random -- printenv SEED
    [ "$output" = "seed" ]
    run "$FOLIO" exec exec/vars pairs=git/email entries=git/user_name -- sh -c 'echo "$EXEC_VARS|$pairs|$entries"'
    [ "$status" -eq 0 ]
    [ "$output" = "ev|test@example.com|Test User" ]
}

@test "exec: a text changed outside EnvFolio stops everything; the command does not run" {
    make-store
    echo "tampered" > "$FOLIO_STORE_DIR/git/email.txt"
    run "$FOLIO" exec git -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"'git/email'"*"does not verify"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: the command's exit status and output are its own; EnvFolio prints no values" {
    make-store
    run --separate-stderr "$FOLIO" exec --secrets gh git -- sh -c 'exit 7'
    [ "$status" -eq 7 ]
    [ -z "$output" ]
    [ -z "$stderr" ]
    run -127 "$FOLIO" exec git -- no-such-command-here
}

@test "exec: the caller's PASSWORD_STORE_DIR is put back, or stays unset" {
    make-store
    run env PASSWORD_STORE_DIR="$SANDBOX/callers" "$FOLIO" exec git -- printenv PASSWORD_STORE_DIR
    [ "$output" = "$SANDBOX/callers" ]
    run env -u PASSWORD_STORE_DIR "$FOLIO" exec git -- sh -c 'echo "${PASSWORD_STORE_DIR-unset}"'
    [ "$output" = "unset" ]
}

@test "exec: bad arguments are refused and run nothing" {
    make-store
    local args
    for args in "git" "git --" "-- touch $SANDBOX/ran" "--bogus git -- true" "nope -- true" \
                "../x -- true" "1X=git/email -- true" "my-var=git/email -- true" "X=nope -- true" \
                "X=git -- true"; do
        # shellcheck disable=SC2086  # split the arguments on purpose
        run "$FOLIO" exec $args < /dev/null
        [ "$status" -eq 1 ]
    done
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec: no store fails and creates nothing" {
    run "$FOLIO" exec git -- true
    [ "$status" -eq 1 ]
    [[ $output == *"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "exec --help and shell --help: work without a store" {
    run "$FOLIO" exec --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio exec "* ]] || false
    run "$FOLIO" help shell
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio shell "* ]] || false
}

@test "MANUAL: shell — open a shell" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --secrets gh @nawa \
        < <(printf 'echo "$FOLIO_SHELL|$GH_TOKEN|$GH_USER"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "1|nawa-token|nawa-user" ]
    [ "$stderr" = "folio shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave." ]
}

@test "shell: takes no command, and needs an entry" {
    make-store
    run "$FOLIO" shell gh -- sh
    [ "$status" -eq 1 ]
    run "$FOLIO" shell
    [ "$status" -eq 1 ]
}

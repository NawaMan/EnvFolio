#!/usr/bin/env bats

# folio exec --vars and folio shell --vars, through the real ./folio, against a throwaway GPG home
# and store.

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

# A ready store: texts prod/db/user, atl/name, atl/host, both/x; secrets prod/db/pass, gh/token, both/x.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "dbuser"       prod/db/user < /dev/null
    "$FOLIO" text insert -t "Jane"         atl/name     < /dev/null
    "$FOLIO" text insert -t "jira.example" atl/host     < /dev/null
    "$FOLIO" text insert -t "both text"    both/x       < /dev/null
    "$FOLIO" secret insert -m prod/db/pass < <(printf 'p@ss\n')        >/dev/null
    "$FOLIO" secret insert -m gh/token     < <(printf 'shared-token\n') >/dev/null
    "$FOLIO" secret insert -m both/x       < <(printf 'both secret\n')  >/dev/null
}

# vars <line>...: write $SANDBOX/a.vars.
vars() { printf '%s\n' "$@" > "$SANDBOX/a.vars" ; }

# show <VAR>...: a command printing VAR=[value] for each.
show() { local v out="" ; for v in "$@"; do out+="echo \"$v=[\$$v]\" ; " ; done ; echo "$out" ; }

@test "MANUAL: exec — from a vars file" {
    make-store
    cat > "$SANDBOX/prod-deploy.vars" <<'V'
# What ./deploy needs.
LOG_LEVEL=debug
HOST_NAME=${HOSTNAME_FOR_TEST:-localhost}
GH_TOKEN=@{gh/token:-none}
DB_URL=postgres://@{prod/db/user}:@{prod/db/pass}@${DB_HOST:-db}:5432/app
@{atl/*}
V
    DB_HOST=db.prod run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/prod-deploy.vars" \
        -- sh -c "$(show LOG_LEVEL HOST_NAME GH_TOKEN DB_URL ATL_NAME ATL_HOST)"
    [ "$status" -eq 0 ]
    [ "$output" = "LOG_LEVEL=[debug]
HOST_NAME=[localhost]
GH_TOKEN=[shared-token]
DB_URL=[postgres://dbuser:p@ss@db.prod:5432/app]
ATL_NAME=[Jane]
ATL_HOST=[jira.example]" ]
    [ -z "$stderr" ]
}

@test "exec --vars: fallbacks either way, chained, and only made when needed" {
    make-store
    vars 'A=${UNSET_X:-@{gh/token}}' \
         'B=@{no/such:-${SET_X:-x}}' \
         'C=@{no/such:-@{also/not:-last}}' \
         'D=${SET_X:-@{no/such}}' \
         'E=${UNSET_X}' \
         'F=${EMPTY_X:-was empty}'
    SET_X=from-env EMPTY_X= run "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- sh -c "$(show A B C D E F)"
    [ "$status" -eq 0 ]
    # D's fallback names an entry that is not there: not needed, so no error.
    [ "$output" = "A=[shared-token]
B=[from-env]
C=[last]
D=[from-env]
E=[]
F=[was empty]" ]
}

@test "exec --vars: quotes, escapes, comments and blanks" {
    make-store
    vars "Q='\${HOME} @{gh/token} # kept'" \
         'D="  @{prod/db/user} \"in\"  "   # after' \
         'E=cost \$5, \@{not} \\ done' \
         'C=#ff0000' \
         'T=   trimmed   # comment' \
         'H=a#b' \
         'S=a\ #b' \
         'B=a\\ # comment'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- sh -c "$(show Q D E C T H S B)"
    [ "$status" -eq 0 ]
    [ "$output" = 'Q=[${HOME} @{gh/token} # kept]
D=[  dbuser "in"  ]
E=[cost $5, @{not} \ done]
C=[#ff0000]
T=[trimmed]
H=[a#b]
S=[a #b]
B=[a\]' ]
}

@test "exec --vars: \${NAME} sees earlier lines first; a later line overrides; typed entries override the file" {
    make-store
    vars 'BASE=https://example.com' 'URL=${BASE}/api' 'BASE=changed' 'NAME=${ATL_NAME:-none}' '@{atl/name}' 'AFTER=${ATL_NAME}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" BASE=atl/host -- sh -c "$(show URL BASE NAME AFTER)"
    [ "$status" -eq 0 ]
    [ "$output" = "URL=[https://example.com/api]
BASE=[jira.example]
NAME=[none]
AFTER=[Jane]" ]
}

@test "exec --vars: several files, the later overriding; --vars=<file>; --all loads first" {
    make-store
    printf '%s\n' 'A=one' 'B=one' > "$SANDBOX/1.vars"
    printf '%s\n' 'B=two' 'ATL_NAME=from-vars' > "$SANDBOX/2.vars"
    run --separate-stderr "$FOLIO" exec --all --vars "$SANDBOX/1.vars" --vars="$SANDBOX/2.vars" -- sh -c "$(show A B ATL_NAME ATL_HOST)"
    [ "$status" -eq 0 ]
    [ "$output" = "A=[one]
B=[two]
ATL_NAME=[from-vars]
ATL_HOST=[jira.example]" ]
}

@test "MANUAL: exec — check a vars file against the store first" {
    make-store
    vars 'LOG_LEVEL=debug' 'HOST=${UNSET_X}' 'TOKEN=${UNSET_X:-@{gh/token}}' \
         'DB_URL=postgres://@{prod/db/user}:@{prod/db/pass}@${DB_HOST:-db}/app' '@{atl/*}'
    run "$FOLIO" exec -s --names --vars "$SANDBOX/a.vars"
    [ "$status" -eq 0 ]
    [ "$output" = 'LOG_LEVEL <- debug
HOST      <- [$UNSET_X (unset)]
TOKEN     <- [gh/token (S)]
DB_URL    <- postgres://[prod/db/user (T)]:[prod/db/pass (S)]@db/app
ATL_HOST  <- atl/host (T)
ATL_NAME  <- atl/name (T)' ]
}

@test "exec --names: on a screen, 🔑/📄 in front and coloured; --plain as before" {
    make-store
    vars 'TOKEN=@{gh/token}' 'URL=//@{prod/db/user}' '@{atl/name}'
    local y=$'\e[33m' g=$'\e[32m' off=$'\e[0m'
    # As if stdout were a screen (on-screen says yes).
    on-screen() { bash -c 'source "$1"; shift; function on-screen() { return 0; }; Main "$@"' _ "$FOLIO" "$@" ; }
    TERM=xterm LC_ALL=C.UTF-8 run on-screen exec -s --names --vars "$SANDBOX/a.vars"
    [ "$status" -eq 0 ]
    [ "$output" = "TOKEN    <- [$y🔑 gh/token$off]
URL      <- //[$g📄 prod/db/user$off]
ATL_NAME <- $g📄 atl/name$off" ]
    TERM=xterm LC_ALL=C.UTF-8 run on-screen exec -s --names --plain --vars "$SANDBOX/a.vars"
    [ "$output" = 'TOKEN    <- [gh/token (S)]
URL      <- //[prod/db/user (T)]
ATL_NAME <- atl/name (T)' ]
    TERM=xterm LC_ALL=C.UTF-8 SHELL=/bin/sh run on-screen shell --names --plain atl/name
    [ "$output" = 'ATL_NAME <- atl/name (T)' ]
}

@test "exec --names --vars: never prints a value from the environment or the store" {
    make-store
    vars 'A=${SECRET_ENV}' 'B=@{gh/token}' 'C=@{prod/db/user}'
    SECRET_ENV=hunter2 run "$FOLIO" exec -s --names --vars "$SANDBOX/a.vars"
    [ "$status" -eq 0 ]
    [[ $output != *hunter2* && $output != *shared-token* && $output != *dbuser* ]]
}

@test "exec --vars: a secret needs --secrets — even in a fallback not needed today, or in a folder" {
    make-store
    vars 'A=${HOME:-@{gh/token}}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:1: 'gh/token' is a secret; add --secrets to load it."* ]]
    vars '@{gh/token}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: 'gh/token' is a secret; add --secrets to load it."* ]]
    vars '@{prod/*}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: 'prod' has 1 secret(s); add --secrets to load them."* ]]
    vars 'X=@{both/x}'
    run "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: 'both/x' is both a text and a secret; rename one."* ]]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec --vars: an entry that is not there, with no fallback, stops it, saying where" {
    make-store
    vars 'OK=1' 'X=@{no/such}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:2: 'no/such' is not a text or secret in the store, and there is no fallback."* ]]
    vars '@{no/such}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: 'no/such' is not a text or secret in the store."* ]]
    vars '@{no/*}'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: 'no' is not a folder in the store."* ]]
    [ ! -e "$SANDBOX/ran" ]
}

@test "exec --vars: an entry that is not there stops it before any value is read, after a secret too" {
    make-store
    # A pass that logs each call, so a decryption shows.
    mkdir -p "$SANDBOX/bin"
    printf '#!/usr/bin/env bash\necho "$*" >> "%s"\nexec "%s" "$@"\n' "$SANDBOX/pass.log" "$(command -v pass)" > "$SANDBOX/bin/pass"
    chmod +x "$SANDBOX/bin/pass"
    vars 'A=@{gh/token}'
    PATH="$SANDBOX/bin:$PATH" run "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- true
    [ "$status" -eq 0 ]
    [ "$(cat "$SANDBOX/pass.log")" = "show -- gh/token" ]
    rm "$SANDBOX/pass.log"
    vars 'A=@{gh/token}' 'B=${UNSET_FOR_TEST:-@{no/such}}'
    PATH="$SANDBOX/bin:$PATH" run "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:2: 'no/such' is not a text or secret in the store, and there is no fallback."* ]]
    [ ! -e "$SANDBOX/pass.log" ] && [ ! -e "$SANDBOX/ran" ]
}

@test "exec --vars: a mistake in the file stops it before anything is read; nothing runs" {
    make-store
    vars 'A=1' 'B=$(touch '"$SANDBOX"'/pwned)'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:2: a \$ starts \${NAME} or \${NAME:-<fallback>}; write \\\$ for a \$ itself."* ]]
    vars 'A=`touch '"$SANDBOX"'/pwned`'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"a.vars:1: a \` is refused: nothing in a vars file runs."* ]]
    run "$FOLIO" exec --vars "$SANDBOX/nope.vars" -- touch "$SANDBOX/ran"
    [[ $output == *"cannot read the vars file"* ]]
    [ ! -e "$SANDBOX/ran" ] && [ ! -e "$SANDBOX/pwned" ]
}

@test "exec --vars: Windows line ends and a last line without one" {
    make-store
    printf 'A=one\r\nB=@{atl/name}' > "$SANDBOX/a.vars"
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- sh -c "$(show A B)"
    [ "$status" -eq 0 ]
    [ "$output" = "A=[one]
B=[Jane]" ]
}

@test "exec --vars: a file with nothing to load is not enough on its own" {
    make-store
    vars '# nothing yet'
    run "$FOLIO" exec --vars "$SANDBOX/a.vars" -- true
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio exec"* ]]
}

@test "MANUAL: shell — from a vars file" {
    make-store
    vars 'TOKEN=@{gh/token}' '@{atl/*}'
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell -s --vars "$SANDBOX/a.vars" \
        < <(printf 'echo "$TOKEN|$ATL_NAME"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "shared-token|Jane" ]
    [ "$stderr" = "folio shell: loaded TOKEN, ATL_HOST, ATL_NAME (texts: 2, secrets: 0, from vars files: 1). Type 'exit' to leave." ]
}

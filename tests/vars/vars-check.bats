#!/usr/bin/env bats

# folio vars check, through the real ./folio: only what is written, so no store and no GPG key.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "MANUAL: vars check — a good file" {
    cat > "$SANDBOX/prod-deploy.vars" <<'V'
# What ./deploy needs.
LOG_LEVEL=debug
HOST_NAME=${HOME:-default}
GH_TOKEN=@{gh/token:-${GH_TOKEN:-none}}
DB_URL=postgres://@{prod/db/user}:@{prod/db/pass}@${DB_HOST:-localhost}/app
@{atlassian/*}
V
    run "$FOLIO" vars check "$SANDBOX/prod-deploy.vars"
    [ "$status" -eq 0 ]
    [ "$output" = "$SANDBOX/prod-deploy.vars: fine (5 line(s) to load)." ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "MANUAL: vars check — every mistake, with its line" {
    printf '%s\n' 'GOOD=1' 'BAD LINE' 'X=$(whoami)' 'Y=`id`' 'Z=${HOME' 'W=@{gh/token:-x' 'V=${1}' \
        '@{gh/token:-x}' '@{gh/*} extra' "U='open" 'T=$HOME' '1X=a' 'Q="open' 'E=ends\' '@{../x}' \
        > "$SANDBOX/bad.vars"
    run "$FOLIO" vars check "$SANDBOX/bad.vars"
    [ "$status" -eq 1 ]
    local f="$SANDBOX/bad.vars"
    [ "$output" = "folio: vars check: $f:2: not VAR=<value>, nor @{<entry>}: 'BAD LINE'.
folio: vars check: $f:3: a \$ starts \${NAME} or \${NAME:-<fallback>}; write \\\$ for a \$ itself.
folio: vars check: $f:4: a \` is refused: nothing in a vars file runs.
folio: vars check: $f:5: \${HOME is not closed with }.
folio: vars check: $f:6: a \${…} or @{…} is not closed with }.
folio: vars check: $f:7: \${1…}: only \${NAME} and \${NAME:-<fallback>}, NAME a variable name.
folio: vars check: $f:8: @{gh/token:-x} on a line of its own has no variable to fall back for; write VAR=@{gh/token:-x}.
folio: vars check: $f:9: only a comment can follow @{gh/*} on its line.
folio: vars check: $f:10: a ' is not closed.
folio: vars check: $f:11: a \$ starts \${NAME} or \${NAME:-<fallback>}; write \\\$ for a \$ itself.
folio: vars check: $f:12: '1X' is not a variable name (VAR=<value>, no blanks before the =).
folio: vars check: $f:13: a \" is not closed.
folio: vars check: $f:14: a \\ ends the line; write \\\\ for a \\ itself.
folio: vars check: $f:15: '../x' is not an entry name." ]
}

@test "vars check: several files; one bad fails the whole, the good ones still said" {
    printf 'A=1\n' > "$SANDBOX/good.vars"
    printf 'A B\n' > "$SANDBOX/bad.vars"
    run "$FOLIO" vars check "$SANDBOX/good.vars" "$SANDBOX/bad.vars" "$SANDBOX/missing.vars"
    [ "$status" -eq 1 ]
    [[ $output == *"good.vars: fine (1 line(s) to load)."* ]] || false
    [[ $output == *"bad.vars:1: not VAR=<value>"* ]] || false
    [[ $output == *"cannot read the vars file"*"missing.vars."* ]] || false
}

@test "vars check: needs a file; --help" {
    run "$FOLIO" vars check
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio vars check <file>..."* ]] || false
    run "$FOLIO" vars check --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio vars check <file>..."* ]] || false
    run "$FOLIO" vars
    [ "$status" -eq 1 ]
}

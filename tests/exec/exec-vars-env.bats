#!/usr/bin/env bats

# @{=name} in a vars file — the variable <name> is by its path when it is set, else the entry —
# through the real ./folio, against a throwaway GPG home and store.

# shellcheck disable=SC2016  # the '$VAR's are for the command Folio runs to expand, not this file
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
    unset GH_TOKEN AWS_REGION ATL_NAME ATL_HOST DB_PASS
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store: texts aws/region, atl/name, atl/host; secrets gh/token, @prod/db/pass.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "eu-west-1"    aws/region < /dev/null
    "$FOLIO" insert text -t "Jane"         atl/name   < /dev/null
    "$FOLIO" insert text -t "jira.example" atl/host   < /dev/null
    "$FOLIO" insert secret -m gh/token      < <(printf 'store-token\n') >/dev/null
    "$FOLIO" insert secret -m @prod/db/pass < <(printf 'p@ss\n')        >/dev/null
}

# vars <line>...: write $SANDBOX/a.vars.
vars() { printf '%s\n' "$@" > "$SANDBOX/a.vars" ; }

# show <VAR>...: a command printing VAR=[value] for each.
show() { local v out="" ; for v in "$@"; do out+="echo \"$v=[\$$v]\" ; " ; done ; echo "$out" ; }

# The MANUAL's app.vars.
app-vars() {
    cat > "$SANDBOX/app.vars" <<'V'
# app.vars
@{=gh/token}                      # GH_TOKEN: as it is set, else the secret gh/token
GITHUB_TOKEN=@{=gh/token}         # the same, under the app's own name
REGION=@{=aws/region:-us-east-1}  # AWS_REGION, else aws/region, else us-east-1
@{=atl/*}                         # each entry under atl/: its variable when set, else the entry
V
}

@test "MANUAL: exec — the environment first, then the store" {
    make-store
    app-vars
    GH_TOKEN=ghp_DEMO ATL_NAME=Joe run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/app.vars" \
        -- sh -c "$(show GH_TOKEN GITHUB_TOKEN REGION ATL_NAME ATL_HOST)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_TOKEN=[ghp_DEMO]
GITHUB_TOKEN=[ghp_DEMO]
REGION=[eu-west-1]
ATL_NAME=[Joe]
ATL_HOST=[jira.example]" ]
}

@test "exec @{=…}: with nothing set, every value comes from the store" {
    make-store
    app-vars
    run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/app.vars" \
        -- sh -c "$(show GH_TOKEN GITHUB_TOKEN REGION ATL_NAME ATL_HOST)"
    [ "$status" -eq 0 ]
    [ "$output" = "GH_TOKEN=[store-token]
GITHUB_TOKEN=[store-token]
REGION=[eu-west-1]
ATL_NAME=[Jane]
ATL_HOST=[jira.example]" ]
}

@test "exec @{=…}: an empty variable counts as unset, as \${NAME:-…} does" {
    make-store
    vars 'T=@{=gh/token}'
    GH_TOKEN= run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- sh -c "$(show T)"
    [ "$status" -eq 0 ]
    [ "$output" = "T=[store-token]" ]
}

@test "exec @{=…}: the fallback when neither is there; else an error saying where" {
    make-store
    vars 'A=@{=no/such:-dflt}' '@{=no/other:-${AWS_REGION:-@{aws/region}}}'
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/a.vars" -- sh -c "$(show A NO_OTHER)"
    [ "$status" -eq 0 ]
    [ "$output" = "A=[dflt]
NO_OTHER=[eu-west-1]" ]
    vars 'X=1' 'B=@{=no/such}'
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/a.vars" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"a.vars:2: \$NO_SUCH is not set, 'no/such' is not a text or secret in the store, and there is no fallback."* ]] || false
}

@test "exec @{=…}: a secret still needs --secrets, even when the variable is set" {
    make-store
    vars 'T=@{=gh/token}'
    GH_TOKEN=ghp_DEMO run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/a.vars" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"a.vars:1: 'gh/token' is a secret; add --secrets to load it."* ]] || false
    vars '@{=gh/*}'
    GH_TOKEN=ghp_DEMO run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/a.vars" -- true
    [ "$status" -eq 1 ]
    [[ $stderr == *"add --secrets"* ]] || false
}

@test "exec @{=…}: the variable is named by the path, its namespace left off" {
    make-store
    vars 'PGPASSWORD=@{=@prod/db/pass}'
    DB_PASS=from-env run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- sh -c "$(show PGPASSWORD)"
    [ "$status" -eq 0 ]
    [ "$output" = "PGPASSWORD=[from-env]" ]
    run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- sh -c "$(show PGPASSWORD)"
    [ "$output" = "PGPASSWORD=[p@ss]" ]
    # Through --use: the entry as the view names it.
    vars 'PGPASSWORD=@{=db/pass}'
    DB_PASS=from-env run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" --use @prod -- sh -c "$(show PGPASSWORD)"
    [ "$status" -eq 0 ]
    [ "$output" = "PGPASSWORD=[from-env]" ]
}

@test "exec @{=…}: an earlier line sets the variable it looks at" {
    make-store
    vars 'GH_TOKEN=from-line' 'T=@{=gh/token}'
    GH_TOKEN=from-env run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" -- sh -c "$(show T)"
    [ "$status" -eq 0 ]
    [ "$output" = "T=[from-line]" ]
}

@test "exec @{=…}: what --all feeds the file is the store's side; the environment still comes first" {
    make-store
    vars 'T=@{=gh/token}' 'U=${GH_TOKEN}'
    GH_TOKEN=from-env run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/a.vars" --all -- sh -c "$(show T U)"
    [ "$status" -eq 0 ]
    # ${GH_TOKEN} sees --all's gh/token first, as it always has; @{=gh/token} the environment.
    [ "$output" = "T=[from-env]
U=[store-token]" ]
}

@test "exec --names @{=…}: says which one would be used, never a value" {
    make-store
    app-vars
    GH_TOKEN=ghp_DEMO run "$FOLIO" exec -s --names --plain --vars "$SANDBOX/app.vars"
    [ "$status" -eq 0 ]
    [[ $output != *ghp_DEMO* && $output != *store-token* ]] || false
    [ "$output" = 'GH_TOKEN     <- [$GH_TOKEN]
GITHUB_TOKEN <- [$GH_TOKEN]
REGION       <- [aws/region(T)]
ATL_HOST     <- atl/host(T)
ATL_NAME     <- atl/name(T)' ]
    ATL_HOST=x run "$FOLIO" exec -s --names --plain --vars "$SANDBOX/app.vars"
    [[ $output == *'GH_TOKEN     <- [gh/token(S)]'* ]] || false
    [[ $output == *'ATL_HOST     <- [$ATL_HOST]'* ]] || false
}

@test "check vars: @{=…} is well written; what cannot be is said with its line" {
    vars '@{=gh/token}' 'X=@{=gh/token:-none}' '@{=aws/*}  # a comment' 'Y=a@{=b/c}d'
    run "$FOLIO" check vars "$SANDBOX/a.vars"
    [ "$status" -eq 0 ]
    vars '@{=gh/token} trailing'
    run "$FOLIO" check vars "$SANDBOX/a.vars"
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:1: only a comment can follow @{=gh/token…} on its line."* ]] || false
    vars 'X=@{=@a/@b/c}'
    run "$FOLIO" check vars "$SANDBOX/a.vars"
    [ "$status" -eq 1 ]
    [[ $output == *"'@a/@b/c' would be @B_C, not a valid variable name"* ]] || false
    vars '@{=aws/*:-x}'
    run "$FOLIO" check vars "$SANDBOX/a.vars"
    [ "$status" -eq 1 ]
    [[ $output == *"no variable to fall back for"* ]] || false
}

@test "export --vars: takes the entries an @{=…} names" {
    make-store
    app-vars
    run --separate-stderr "$FOLIO" export -s --vars "$SANDBOX/app.vars" \
        -o "$SANDBOX/app.folio" --file-passphrase-stdin < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 4 (texts: 3, secrets: 1)"* ]] || false
}

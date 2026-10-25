#!/usr/bin/env bats

# folio exec/shell/export --use: a namespace peeled off the front of the paths, laid over the store
# (or an export) in the order typed, the last one winning — through the real ./folio, against a
# throwaway GPG home and store.

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
    FILE="$SANDBOX/app2.folio"
    TMUX_SOCKET="$SANDBOX/tmux.sock"
    unset TMUX
}

teardown() {
    tmux -S "$TMUX_SOCKET" kill-server 2>/dev/null || true
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with a shared server/port, and two apps' environments under @app2:
#   server/port                     22
#   @app2/@prod/server/user|db      deploy | db.prod     password (S) p-secret
#   @app2/@staging/server/user|db   stg    | db.stg      password (S) s-secret   port 2222
#   gh/user                         other
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t 22       server/port                  < /dev/null
    "$FOLIO" text insert -t deploy   @app2/@prod/server/user      < /dev/null
    "$FOLIO" text insert -t db.prod  @app2/@prod/server/db        < /dev/null
    "$FOLIO" text insert -t stg      @app2/@staging/server/user   < /dev/null
    "$FOLIO" text insert -t db.stg   @app2/@staging/server/db     < /dev/null
    "$FOLIO" text insert -t 2222     @app2/@staging/server/port   < /dev/null
    "$FOLIO" text insert -t other    gh/user                      < /dev/null
    "$FOLIO" secret insert -m @app2/@prod/server/password    < <(printf 'p-secret\n') >/dev/null
    "$FOLIO" secret insert -m @app2/@staging/server/password < <(printf 's-secret\n') >/dev/null
}

# A server.vars contract: what the app needs, by its own names.
make-contract() {
    cat > "$SANDBOX/server.vars" <<'V'
DB_USER=@{server/user}
PGPASSWORD=${SERVER_PASSWORD}
DB_URL=postgres://${SERVER_USER}@${SERVER_DB}:${SERVER_PORT:-5432}/app
V
}

# Switch to "there": its own empty GPG home, and no store.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
}

# in-pane <command>: run <command> (a line for bash) in a tmux pane — a terminal — kept open after.
in-pane() {
    printf '%s\nsleep 60\n' "$1" > "$SANDBOX/pane.sh"
    tmux -S "$TMUX_SOCKET" new-session -d -s use -x 160 -y 30 "bash '$SANDBOX/pane.sh'"
}
pane()    { tmux -S "$TMUX_SOCKET" capture-pane -p -t use ; }
on-pane() { [[ $(pane) == *"$1"* ]] ; }
tmp-empty() { [ -z "$(ls -A "$TMPDIR")" ] ; }

# wait-until <command>...: until <command> succeeds, for up to 10 seconds.
wait-until() {
    local i
    for (( i = 0; i < 100; i++ )); do "$@" && return 0 ; sleep 0.1 ; done
    return 1
}

# show <VAR>...: a command printing VAR=[value] for each.
show() { local v out="" ; for v in "$@"; do out+="echo \"$v=[\$$v]\" ; " ; done ; echo "$out" ; }

@test "exec --use: the namespace is peeled off; nothing is left behind, the store is as it was" {
    make-store
    run --separate-stderr "$FOLIO" exec -s --use @app2/@prod -- sh -c "$(show SERVER_USER SERVER_DB SERVER_PASSWORD SERVER_PORT)"
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_USER=[deploy]
SERVER_DB=[db.prod]
SERVER_PASSWORD=[p-secret]
SERVER_PORT=[]" ]
    [ -z "$(ls -A "$TMPDIR")" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    [ ! -e "$FOLIO_STORE_DIR/server/user.txt" ]
}

@test "MANUAL: exec — peel a namespace with --use: in the order typed, the last one wins" {
    make-store
    run --separate-stderr "$FOLIO" exec server --use @app2/@staging -- printenv SERVER_PORT
    [ "$output" = "2222" ]
    run --separate-stderr "$FOLIO" exec --use @app2/@staging server -- printenv SERVER_PORT
    [ "$output" = "22" ]
    run --separate-stderr "$FOLIO" exec --all --use @app2/@staging -- sh -c "$(show SERVER_PORT SERVER_USER GH_USER)"
    [ "$output" = "SERVER_PORT=[2222]
SERVER_USER=[stg]
GH_USER=[other]" ]
    run --separate-stderr "$FOLIO" exec --use @app2/@staging --all -- sh -c "$(show SERVER_PORT SERVER_USER)"
    [ "$output" = "SERVER_PORT=[22]
SERVER_USER=[stg]" ]
    run --separate-stderr "$FOLIO" exec --use=@app2/@prod --use @app2/@staging/ -- printenv SERVER_USER
    [ "$output" = "stg" ]
}

@test "exec --use: secrets only with --secrets, as in a folder" {
    make-store
    run --separate-stderr "$FOLIO" exec --use @app2/@prod -- sh -c "$(show SERVER_USER SERVER_PASSWORD)"
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_USER=[deploy]
SERVER_PASSWORD=[]" ]
    [[ $stderr == *"left out 1 secret(s) under '@app2/@prod'; add --secrets to load them."* ]] || false
}

@test "exec --use: only namespaces, from the front, that are there; nothing runs otherwise" {
    make-store
    run --separate-stderr "$FOLIO" exec --use @app2/server -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"--use @app2/server: 'server' is not a namespace (one starting with @)."* ]] || false
    run --separate-stderr "$FOLIO" exec --use @app2 --use @prod -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"--use @prod: there is no '@prod' in the store."* ]] || false
    run --separate-stderr "$FOLIO" exec --use server -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"'server' is not a namespace"* ]] || false
    run --separate-stderr "$FOLIO" exec --use -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [ ! -e "$SANDBOX/ran" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "MANUAL: exec — the vars file is the contract: it reads through --use; the command gets only what it sets" {
    make-store
    make-contract
    run --separate-stderr "$FOLIO" exec -s --vars "$SANDBOX/server.vars" server --use @app2/@prod \
        -- sh -c "$(show DB_USER PGPASSWORD DB_URL SERVER_USER SERVER_PASSWORD)"
    [ "$status" -eq 0 ]
    [ "$output" = "DB_USER=[deploy]
PGPASSWORD=[p-secret]
DB_URL=[postgres://deploy@db.prod:22/app]
SERVER_USER=[]
SERVER_PASSWORD=[]" ]
    run "$FOLIO" exec -s --vars "$SANDBOX/server.vars" --use @app2/@staging -- printenv DB_URL
    [ "$output" = "postgres://stg@db.stg:2222/app" ]
}

@test "MANUAL: exec — peel a namespace with --use: --names says where each came from" {
    make-store
    run --separate-stderr "$FOLIO" exec --names --plain server --use @app2/@prod
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_PORT <- server/port(T)
SERVER_DB   <- server/db(T)  (--use: @app2/@prod/server/db)
SERVER_USER <- server/user(T)  (--use: @app2/@prod/server/user)" ]
    make-contract
    run "$FOLIO" exec -s --names --plain --vars "$SANDBOX/server.vars" --use @app2/@prod
    [ "$status" -eq 0 ]
    [ "$output" = 'DB_USER         <- [server/user(T)]
PGPASSWORD      <- [$SERVER_PASSWORD <- server/password(S)]
DB_URL          <- postgres://[$SERVER_USER <- server/user(T)]@[$SERVER_DB <- server/db(T)]:5432/app
Only for the vars files (the command does not get these):
SERVER_DB       <- server/db(T)  (--use: @app2/@prod/server/db)
SERVER_PASSWORD <- server/password(S)  (--use: @app2/@prod/server/password)
SERVER_USER     <- server/user(T)  (--use: @app2/@prod/server/user)' ]
}

@test "shell --use: as in exec" {
    make-store
    run --separate-stderr "$FOLIO" shell --names --plain --use @app2/@staging
    [ "$status" -eq 0 ]
    [[ $output == *"SERVER_PORT <- server/port(T)  (--use: @app2/@staging/server/port)"* ]] || false
}

@test "export --use: the file has the items named without it; exec --from --use peels the rest" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --secrets --file-passphrase-stdin server --use @app2 \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 8 (texts: 6, secrets: 2)"* ]] || false
    [[ $stderr == *"@prod/server/user"* && $stderr != *"@app2/"* ]] || false
    make-contract
    go-there
    run --separate-stderr "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 -s --vars "$SANDBOX/server.vars" \
        --all --use @prod -- sh -c "$(show DB_USER PGPASSWORD DB_URL)" 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "DB_USER=[deploy]
PGPASSWORD=[p-secret]
DB_URL=[postgres://deploy@db.prod:22/app]" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
    [ -z "$(ls -A "$TMPDIR")" ]
}

@test "MANUAL: export — one environment, with --use: the last one winning, nothing of the others" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --secrets --file-passphrase-stdin server --use @app2/@staging \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 4 (texts: 3, secrets: 1)"* ]] || false
    [[ $stderr != *"@prod"* && $stderr != *"@staging/"* ]] || false
    go-there
    run "$FOLIO" exec --from "$FILE" --file-passphrase-fd 3 -s --all \
        -- sh -c "$(show SERVER_PORT SERVER_USER SERVER_PASSWORD)" 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "SERVER_PORT=[2222]
SERVER_USER=[stg]
SERVER_PASSWORD=[s-secret]" ]
}

@test "export --use: refused as in exec" {
    make-store
    run --separate-stderr "$FOLIO" export -o "$FILE" --file-passphrase-stdin --use @app2/server < <(printf 'export pass\n')
    [ "$status" -eq 1 ]
    [[ $stderr == *"'server' is not a namespace"* ]] || false
    [ ! -e "$FILE" ]
}

@test "MANUAL: feeding a command — one contract, two environments, two places" {
    make-store
    make-contract
    run "$FOLIO" exec -s --vars "$SANDBOX/server.vars" server --use @app2/@prod -- printenv DB_URL
    [ "$output" = "postgres://deploy@db.prod:22/app" ]
    run "$FOLIO" exec -s --vars "$SANDBOX/server.vars" server --use @app2/@staging -- printenv DB_URL
    [ "$output" = "postgres://stg@db.stg:2222/app" ]
    run --separate-stderr "$FOLIO" export -o "$SANDBOX/app2-prod.folio" --secrets --file-passphrase-stdin \
        server --use @app2/@prod < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 4 (texts: 3, secrets: 1)"* && $stderr != *"@staging/"* ]] || false
    go-there
    run --separate-stderr "$FOLIO" exec --from "$SANDBOX/app2-prod.folio" --file-passphrase-fd 3 -s \
        --vars "$SANDBOX/server.vars" --all -- sh -c "$(show DB_USER PGPASSWORD DB_URL SERVER_USER)" \
        3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "DB_USER=[deploy]
PGPASSWORD=[p-secret]
DB_URL=[postgres://deploy@db.prod:22/app]
SERVER_USER=[]" ]
}

@test "MANUAL: exec — what --all does, with and without a vars file" {
    make-store
    run --separate-stderr "$FOLIO" exec --all -- sh -c "$(show GH_USER SERVER_PORT SERVER_USER)"
    [ "$output" = "GH_USER=[other]
SERVER_PORT=[22]
SERVER_USER=[]" ]
    run --separate-stderr "$FOLIO" exec --all --use @app2/@staging -- printenv SERVER_PORT
    [ "$output" = "2222" ]
    run --separate-stderr "$FOLIO" exec --use @app2/@staging --all -- printenv SERVER_PORT
    [ "$output" = "22" ]

    printf '%s\n' 'OWNER=${GH_USER}' 'PORT=@{server/port}' > "$SANDBOX/app.vars"
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/app.vars" --all -- sh -c "$(show OWNER PORT GH_USER)"
    [ "$output" = "OWNER=[other]
PORT=[22]
GH_USER=[]" ]
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/app.vars" --all --use @app2/@staging -- printenv PORT
    [ "$output" = "2222" ]
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/app.vars" --use @app2/@staging --all -- printenv PORT
    [ "$output" = "22" ]
    # Without --all, nothing feeds ${GH_USER}.
    run --separate-stderr "$FOLIO" exec --vars "$SANDBOX/app.vars" -- sh -c "$(show OWNER PORT)"
    [ "$output" = "OWNER=[]
PORT=[22]" ]
}

@test "MANUAL: export — the items a vars file names, and what feeds its \${NAME}" {
    make-store
    make-contract
    run --separate-stderr "$FOLIO" export -s --vars "$SANDBOX/server.vars" server --use @app2/@prod \
        -o "$SANDBOX/app2-prod.folio" --file-passphrase-stdin < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"Items: 4 (texts: 3, secrets: 1)"* ]] || false
    go-there
    run --separate-stderr "$FOLIO" exec -s --from "$SANDBOX/app2-prod.folio" --file-passphrase-fd 3 \
        --vars "$SANDBOX/server.vars" --all -- printenv DB_URL 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "postgres://deploy@db.prod:22/app" ]
}

@test "exec --use: a secret laid over a text of the same name — only with --secrets; else the text stays" {
    make-store
    "$FOLIO" secret insert -m @app2/@prod/gh/user < <(printf 'p-gh\n') >/dev/null
    run --separate-stderr "$FOLIO" exec -s gh --use @app2/@prod -- printenv GH_USER
    [ "$status" -eq 0 ]
    [ "$output" = "p-gh" ]
    run --separate-stderr "$FOLIO" exec -s --use @app2/@prod gh -- printenv GH_USER
    [ "$status" -eq 0 ]
    [ "$output" = "other" ]
    run --separate-stderr "$FOLIO" exec gh --use @app2/@prod -- printenv GH_USER
    [ "$status" -eq 0 ]
    [ "$output" = "other" ]
    [[ $stderr == *"left out 2 secret(s) under '@app2/@prod'; add --secrets to load them."* ]] || false
}

@test "exec --use: an item both a text and a secret under it is refused with --secrets, as in a folder" {
    make-store
    "$FOLIO" secret insert -m @app2/@prod/server/user < <(printf 'x\n') >/dev/null
    run --separate-stderr "$FOLIO" exec -s --use @app2/@prod -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"'@app2/@prod/server/user' is both a text and a secret"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
    run --separate-stderr "$FOLIO" exec --use @app2/@prod -- printenv SERVER_USER
    [ "$status" -eq 0 ]
    [ "$output" = "deploy" ]
}

@test "shell --use: starts the shell with the peeled values" {
    make-store
    SHELL=/bin/sh run --separate-stderr "$FOLIO" shell --use @app2/@staging < <(printf 'echo "$SERVER_USER|$SERVER_PORT"\n')
    [ "$status" -eq 0 ]
    [ "$output" = "stg|2222" ]
    tmp-empty
}

@test "exec --debug --use: the names, and where each came from, on stderr; then it runs" {
    make-store
    run --separate-stderr "$FOLIO" exec --debug --plain -s --use @app2/@prod -- printenv SERVER_PASSWORD
    [ "$status" -eq 0 ]
    [ "$output" = "p-secret" ]
    [[ $stderr == *"SERVER_PASSWORD <- server/password(S)  (--use: @app2/@prod/server/password)"* ]] || false
    tmp-empty
}

@test "exec --confirm --use: the names on the terminal; yes runs it with the peeled values" {
    command -v tmux >/dev/null || skip "no tmux here"
    make-store
    in-pane "'$FOLIO' exec --confirm --plain -s --use @app2/@staging -- sh -c 'echo \"\$SERVER_USER|\$SERVER_PASSWORD|\$SERVER_PORT\" > \"$SANDBOX/got\"'"
    wait-until on-pane "folio exec: run sh? [y/N]"
    [[ $(pane) == *"SERVER_USER     <- server/user(T)  (--use: @app2/@staging/server/user)"* ]] || false
    [ ! -e "$SANDBOX/got" ]
    tmux -S "$TMUX_SOCKET" send-keys -t use y Enter
    wait-until test -s "$SANDBOX/got"
    [ "$(cat "$SANDBOX/got")" = "stg|s-secret|2222" ]
    tmp-empty
}

@test "exec --confirm --use: no cancels — nothing runs, nothing left behind" {
    command -v tmux >/dev/null || skip "no tmux here"
    make-store
    in-pane "'$FOLIO' exec --confirm -s --use @app2/@prod -- touch '$SANDBOX/ran'"
    wait-until on-pane "folio exec: run touch? [y/N]"
    tmux -S "$TMUX_SOCKET" send-keys -t use n Enter
    wait-until on-pane "folio: Cancelled."
    wait-until tmp-empty
    [ ! -e "$SANDBOX/ran" ]
}

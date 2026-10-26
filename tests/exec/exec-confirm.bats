#!/usr/bin/env bats

# exec/shell --confirm, answered on a real terminal: tmux, on a socket of its own in the sandbox
# (never the user's tmux), runs folio in a pane and types the answer. Skipped without tmux.

# shellcheck disable=SC2016  # the '$VAR's are for the command EnvFolio runs to expand, not this file

setup() {
    command -v tmux >/dev/null || skip "no tmux here"
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
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]] || false
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    TMUX_SOCKET="$SANDBOX/tmux.sock"
    unset TMUX

    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "shared-user" gh/user < /dev/null
    "$FOLIO" insert secret -m gh/token < <(printf 'shared-token\n') >/dev/null
}

teardown() {
    [[ -z ${TMUX_SOCKET:-} ]] || tmux -S "$TMUX_SOCKET" kill-server 2>/dev/null || true
    gpgconf --kill all 2>/dev/null || true
    [[ -z ${SANDBOX:-} ]] || rm -rf "$SANDBOX"
}

# in-pane <command>: run <command> (a line for bash) in a tmux pane — a terminal — kept open after.
in-pane() {
    printf '%s\nsleep 60\n' "$1" > "$SANDBOX/pane.sh"
    tmux -S "$TMUX_SOCKET" -u new-session -d -s confirm -x 120 -y 30 "bash '$SANDBOX/pane.sh'"
}

pane() { tmux -S "$TMUX_SOCKET" capture-pane -p -t confirm ; }

# wait-until <command>...: until <command> succeeds, for up to 10 seconds.
wait-until() {
    local i
    for (( i = 0; i < 100; i++ )); do "$@" && return 0 ; sleep 0.1 ; done
    return 1
}
on-pane() { [[ $(pane) == *"$1"* ]] ; }

@test "exec --confirm: shows the names, asks on the terminal; yes runs the command with the values" {
    # A UTF-8 locale: tmux draws emoji, so the names are marked 🔑/📄 (folio asks the terminal).
    in-pane "LC_ALL=C.UTF-8 TERM=xterm-256color NO_COLOR=1 '$FOLIO' exec --confirm --secrets gh -- sh -c 'echo \"\$GH_TOKEN|\$GH_USER\" > \"$SANDBOX/got\"'"
    wait-until on-pane "folio exec: run sh? [y/N]"
    [[ $(pane) == *"GH_TOKEN <- 🔑gh/token"*"GH_USER  <- 📄gh/user"* ]] || false
    [ ! -e "$SANDBOX/got" ]
    tmux -S "$TMUX_SOCKET" send-keys -t confirm y Enter
    wait-until test -s "$SANDBOX/got"
    [ "$(cat "$SANDBOX/got")" = "shared-token|shared-user" ]
}

@test "exec --confirm: no (or just Enter) cancels — nothing runs" {
    in-pane "'$FOLIO' exec --confirm --secrets gh -- touch '$SANDBOX/ran'"
    wait-until on-pane "folio exec: run touch? [y/N]"
    tmux -S "$TMUX_SOCKET" send-keys -t confirm Enter
    wait-until on-pane "folio: Cancelled."
    [ ! -e "$SANDBOX/ran" ]
}

@test "shell --confirm: yes starts the shell with the values" {
    in-pane "SHELL=/bin/sh '$FOLIO' shell --confirm gh/user"
    wait-until on-pane "folio shell: start /bin/sh? [y/N]"
    tmux -S "$TMUX_SOCKET" send-keys -t confirm y Enter
    wait-until on-pane "folio shell: loaded GH_USER"
    tmux -S "$TMUX_SOCKET" send-keys -t confirm "echo \"\$GH_USER\" > '$SANDBOX/got'; exit" Enter
    wait-until test -s "$SANDBOX/got"
    [ "$(cat "$SANDBOX/got")" = "shared-user" ]
}

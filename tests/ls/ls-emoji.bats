#!/usr/bin/env bats

# folio ls on a real terminal: tmux, on a socket of its own in the sandbox (never the user's tmux),
# runs folio in a pane, so folio asks the terminal whether it draws emoji. tmux draws them two cells
# wide, so it says yes. Skipped without tmux.

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
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" text insert -t "https://example.com" web/home < /dev/null
}

teardown() {
    [[ -z ${TMUX_SOCKET:-} ]] || tmux -S "$TMUX_SOCKET" kill-server 2>/dev/null || true
    gpgconf --kill all 2>/dev/null || true
    [[ -z ${SANDBOX:-} ]] || rm -rf "$SANDBOX"
}

# in-pane <command>: run <command> (a line for bash) in a tmux pane — a terminal with a UTF-8
# locale — then write "done" to $SANDBOX/done, and keep the pane open.
in-pane() {
    printf 'export LC_ALL=C.UTF-8 TERM=xterm-256color\n%s\necho done > "%s/done"\nsleep 60\n' \
        "$1" "$SANDBOX" > "$SANDBOX/pane.sh"
    tmux -S "$TMUX_SOCKET" -u new-session -d -s emoji -x 80 -y 20 "bash '$SANDBOX/pane.sh'"
}

pane() { tmux -S "$TMUX_SOCKET" capture-pane -p -t emoji ; }

# wait-until <command>...: until <command> succeeds, for up to 10 seconds.
wait-until() {
    local i
    for (( i = 0; i < 100; i++ )); do "$@" && return 0 ; sleep 0.1 ; done
    return 1
}

@test "ls on a terminal that draws emoji: asks it, marks 🔑/📄, and leaves no trace of asking" {
    in-pane "NO_COLOR=1 '$FOLIO' ls --flat"
    wait-until test -s "$SANDBOX/done"
    [ "$(pane | sed '/^$/d')" = $'🔑web/github\n📄web/home' ]
}

@test "ls into a pipe on that terminal: (S)/(T), and the terminal is not asked" {
    in-pane "'$FOLIO' ls --flat | cat"
    wait-until test -s "$SANDBOX/done"
    [ "$(pane | sed '/^$/d')" = $'(S)web/github\n(T)web/home' ]
}

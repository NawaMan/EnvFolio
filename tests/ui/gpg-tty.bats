#!/usr/bin/env bats

# GPG_TTY: with stdin a pipe, gpg's terminal pinentry still asks on the terminal EnvFolio runs in;
# exec's command does not get a GPG_TTY EnvFolio added. Answered on a real terminal: tmux, on a
# socket of its own in the sandbox (never the user's tmux), runs folio in a pane. The store's key
# has a passphrase ("pw"). Skipped without tmux, or without a pinentry for gpg to run.

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
    unset TMUX GPG_TTY
    local pinentry
    pinentry=$(gpgconf --list-components | awk -F: '$1 == "pinentry" { print $3 }')
    [[ -x $pinentry ]] || skip "no pinentry for gpg here"

    gpg --batch --pinentry-mode loopback --passphrase pw \
        --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    # Nothing cached: the next signing asks.
    gpgconf --kill gpg-agent
}

teardown() {
    [[ -z ${TMUX_SOCKET:-} ]] || tmux -S "$TMUX_SOCKET" kill-server 2>/dev/null || true
    gpgconf --kill all 2>/dev/null || true
    [[ -z ${SANDBOX:-} ]] || rm -rf "$SANDBOX"
}

# in-pane <command>: run <command> (a line for bash) in a tmux pane — a terminal — kept open after.
in-pane() {
    printf '%s\nsleep 60\n' "$1" > "$SANDBOX/pane.sh"
    tmux -S "$TMUX_SOCKET" new-session -d -s tty -x 100 -y 30 "bash '$SANDBOX/pane.sh'"
}
pane()    { tmux -S "$TMUX_SOCKET" capture-pane -p -t tty ; }
on-pane() { [[ $(pane) == *"$1"* ]] ; }

# wait-until <command>...: until <command> succeeds, for up to 10 seconds.
wait-until() {
    local i
    for (( i = 0; i < 100; i++ )); do "$@" && return 0 ; sleep 0.1 ; done
    return 1
}

@test "GPG_TTY: a text piped in is signed — gpg asks for the passphrase on the terminal" {
    # stdin is the pipe; stdout and stderr are the terminal, as at a prompt.
    in-pane "printf 'piped value\n' | '$FOLIO' text insert -m t/x; echo \"DONE=\$?\""
    wait-until on-pane "assphrase" || { pane ; false ; }
    tmux -S "$TMUX_SOCKET" send-keys -t tty pw Enter
    wait-until on-pane "DONE="
    pane
    [[ $(pane) == *"DONE=0"* ]] || false
    run "$FOLIO" text show t/x
    [ "$status" -eq 0 ]
    [ "$output" = "piped value" ]
}

@test "GPG_TTY: exec's command does not get the one EnvFolio set; one already set is kept" {
    "$FOLIO" text insert -t v t/x --store-passphrase-fd 3 3< <(printf 'pw\n') < /dev/null
    in-pane "'$FOLIO' exec t/x -- sh -c 'echo \"GOT=\${GPG_TTY-unset}\"' < /dev/null"
    wait-until on-pane "GOT="
    [[ $(pane) == *"GOT=unset"* ]] || false
    tmux -S "$TMUX_SOCKET" kill-server
    in-pane "GPG_TTY=/dev/mine '$FOLIO' exec t/x -- sh -c 'echo \"GOT=\${GPG_TTY-unset}\"'"
    wait-until on-pane "GOT="
    [[ $(pane) == *"GOT=/dev/mine"* ]] || false
}

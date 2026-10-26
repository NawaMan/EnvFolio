#!/usr/bin/env bats

# The prompts (Input helpers). No store or key is touched; answers come from stdin.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME"

    # shellcheck source=SCRIPTDIR/../../folio
    source "$BATS_TEST_DIRNAME/../../folio"
    [[ $STORE_PATH == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "ask-choice: prints the option picked by number" {
    run --separate-stderr ask-choice "Pick one" "a b" "c" "d" <<< "2"
    [ "$status" -eq 0 ]
    [ "$output" = "c" ]
}

@test "ask-choice: an invalid number asks again" {
    run --separate-stderr ask-choice "Pick one" "a" "b" <<< $'9\nx\n1'
    [ "$status" -eq 0 ]
    [ "$output" = "a" ]
}

@test "ask-choice: Enter asks again; with --default, Enter picks that option" {
    run --separate-stderr ask-choice "Pick one" "a" "b" <<< $'\n2'
    [ "$output" = "b" ]
    run --separate-stderr ask-choice --default 1 "Pick one" "a" "b" <<< ""
    [ "$status" -eq 0 ]
    [ "$output" = "a" ]
    [[ $stderr == *"Pick a number (Enter for 1, Ctrl-D cancels):"* ]] || false
    run --separate-stderr ask-choice --default 1 "Pick one" "a" "b" <<< "2"
    [ "$output" = "b" ]
}

@test "ask-choice: end of input cancels" {
    run --separate-stderr ask-choice "Pick one" "a" "b" < /dev/null
    [ "$status" -eq 1 ]
    [ "$output" = "" ]
}

@test "ask-text: prints the answer" {
    run --separate-stderr ask-text "Your name" "e.g. Jane" "Guess" <<< "Jane Doe"
    [ "$status" -eq 0 ]
    [ "$output" = "Jane Doe" ]
}

@test "ask-text: an empty answer keeps the guess" {
    run --separate-stderr ask-text "Your name" "e.g. Jane" "Guess" <<< ""
    [ "$status" -eq 0 ]
    [ "$output" = "Guess" ]
}

@test "ask-text: end of input cancels" {
    run --separate-stderr ask-text "Your name" < /dev/null
    [ "$status" -eq 1 ]
    # shellcheck disable=SC2154  # set by run --separate-stderr
    [[ $stderr == *"Cancelled"* ]] || false
}

@test "ask-path: piped, prints the answer; an empty answer keeps the guess" {
    run --separate-stderr ask-path "Export file" "a .folio file" <<< "out/x.folio"
    [ "$status" -eq 0 ]
    [ "$output" = "out/x.folio" ]
    [[ $stderr == *"Export file [a .folio file]:"* ]] || false
    run --separate-stderr ask-path "File" "" "./store-1.folio" <<< ""
    [ "$output" = "./store-1.folio" ]
}

@test "ask-path: a leading ~ is the home folder" {
    run --separate-stderr ask-path "File" <<< "~/out/x.folio"
    [ "$output" = "$HOME/out/x.folio" ]
    run --separate-stderr ask-path "File" <<< "~"
    [ "$output" = "$HOME" ]
    run --separate-stderr ask-path "File" <<< "a~/b"
    [ "$output" = "a~/b" ]
}

@test "ask-path: end of input cancels" {
    run --separate-stderr ask-path "Export file" < /dev/null
    [ "$status" -eq 1 ]
    [[ $stderr == *"Cancelled"* ]] || false
}

@test "confirm: y is yes; empty, n and end of input are no" {
    run confirm "Sure?" <<< "y"   ; [ "$status" -eq 0 ]
    run confirm "Sure?" <<< "Yes" ; [ "$status" -eq 0 ]
    run confirm "Sure?" <<< ""    ; [ "$status" -eq 1 ]
    run confirm "Sure?" <<< "n"   ; [ "$status" -eq 1 ]
    run confirm "Sure?" < /dev/null ; [ "$status" -eq 1 ]
}

@test "show-box: draws every line inside an even box" {
    run show-box "short" "" "a longer line"
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "╭───────────────╮" ]
    [ "${lines[1]}" = "│ short         │" ]
    [ "${lines[2]}" = "│               │" ]
    [ "${lines[3]}" = "│ a longer line │" ]
    [ "${lines[4]}" = "╰───────────────╯" ]
}

# fake-tty [answer]: TTY_PATH becomes a named pipe in the sandbox, held open on fd 5 so opening it
# does not wait. No program answers on it: what is there is [answer], then what folio writes.
fake-tty() {
    rm -f "$SANDBOX/tty" && mkfifo "$SANDBOX/tty"
    exec 5<>"$SANDBOX/tty"
    [[ -z ${1:-} ]] || printf '%s' "$1" >&5
    TTY_PATH="$SANDBOX/tty"
}

@test "terminal-draws-emoji: yes only when the cursor went to column 3" {
    fake-tty $'\e[12;3R'
    run --separate-stderr terminal-draws-emoji
    exec 5>&-
    [ "$status" -eq 0 ]
    fake-tty $'\e[12;2R'    # drawn one cell wide
    run --separate-stderr terminal-draws-emoji
    exec 5>&-
    [ "$status" -eq 1 ]
    fake-tty $'\e[12;5R'    # drawn as its bytes
    run --separate-stderr terminal-draws-emoji
    exec 5>&-
    [ "$status" -eq 1 ]
}

@test "terminal-draws-emoji: a terminal that never answers is a no, after about a second, quietly" {
    fake-tty
    local start=$SECONDS
    run --separate-stderr terminal-draws-emoji
    exec 5>&-
    [ "$status" -ne 0 ]
    [ -z "$stderr" ]
    (( SECONDS - start <= 3 )) || false
}

@test "terminal-draws-emoji: no terminal is a no, quietly" {
    TTY_PATH="$SANDBOX/no-tty"
    run --separate-stderr terminal-draws-emoji
    [ "$status" -ne 0 ]
    [ -z "$stderr" ]
    [ ! -e "$SANDBOX/no-tty" ]
}

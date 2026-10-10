#!/usr/bin/env bats

# The prompts (Input helpers). No store or key is touched; answers come from stdin.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME"

    # shellcheck source=SCRIPTDIR/../../envfolio
    source "$BATS_TEST_DIRNAME/../../envfolio"
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
    [[ $stderr == *"Cancelled"* ]]
}

@test "ask-path: piped, prints the answer; an empty answer keeps the guess" {
    run --separate-stderr ask-path "Export file" "a .envfolio file" <<< "out/x.envfolio"
    [ "$status" -eq 0 ]
    [ "$output" = "out/x.envfolio" ]
    [[ $stderr == *"Export file [a .envfolio file]:"* ]]
    run --separate-stderr ask-path "File" "" "./store-1.envfolio" <<< ""
    [ "$output" = "./store-1.envfolio" ]
}

@test "ask-path: a leading ~ is the home folder" {
    run --separate-stderr ask-path "File" <<< "~/out/x.envfolio"
    [ "$output" = "$HOME/out/x.envfolio" ]
    run --separate-stderr ask-path "File" <<< "~"
    [ "$output" = "$HOME" ]
    run --separate-stderr ask-path "File" <<< "a~/b"
    [ "$output" = "a~/b" ]
}

@test "ask-path: end of input cancels" {
    run --separate-stderr ask-path "Export file" < /dev/null
    [ "$status" -eq 1 ]
    [[ $stderr == *"Cancelled"* ]]
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

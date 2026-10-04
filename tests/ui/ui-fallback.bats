#!/usr/bin/env bats

# The plain-bash prompts used when gum is missing (forced here with KEEP_NO_GUM). No store or key is
# touched; answers come from stdin.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    export KEEP_NO_GUM=1
    mkdir -p "$HOME"

    # shellcheck source=SCRIPTDIR/../../keep
    source "$BATS_TEST_DIRNAME/../../keep"
    [[ $STORE_PATH == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

@test "has-gum: KEEP_NO_GUM turns gum off" {
    run has-gum
    [ "$status" -eq 1 ]
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

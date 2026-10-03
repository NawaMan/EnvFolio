
in_booth     := if env("BOOTH_CONTAINER_NAME", "") == "" { "false" } else { "true" }
run_in_booth := if in_booth == "true" { "" } else { "./booth exec --run --" }

[private]
default:
    @just --list

test-all:
    {{run_in_booth}} bash -c 'cd $HOME/code/tests && ./test-all.sh'

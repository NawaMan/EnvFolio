
in_booth     := if env("BOOTH_CONTAINER_NAME", "") == "" { "false" } else { "true" }
run_in_booth := if in_booth == "true" { "" } else { "./booth exec --run --" }

[private]
default:
    @just --list

test-all:
    {{run_in_booth}} bash -c 'cd $HOME/code/tests && ./test-all.sh'

# Run every test under bash 3.2 (the one macOS ships), built into the booth by the bash32 setup.
test-bash32:
    {{run_in_booth}} bash -c 'cd $HOME/code/tests && PATH=/opt/bash-3.2/bin:$PATH ./test-all.sh'

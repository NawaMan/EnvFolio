
in_booth     := if env("BOOTH_CONTAINER_NAME", "") == "" { "false" } else { "true" }
run_in_booth := if in_booth == "true" { "" } else { "./booth exec --run --" }

[private]
default:
    @just --list

# Run every test under bash 3.2 and bash 5.
test-all: test-bash32 test-bash5

# Run every test under bash 3.2, the minimum (the one macOS ships): /opt/bash-3.2/bin/bash in the booth (off PATH).
test-bash32:
    {{run_in_booth}} bash -c 'export PATH=/opt/bash-3.2/bin:$PATH && cd $HOME/code/tests && ./test-all.sh 3'

# Run every test under bash 5, the one Linux ships: /usr/bin/bash in the booth.
test-bash5:
    {{run_in_booth}} bash -c 'export PATH=/usr/bin:$PATH && cd $HOME/code/tests && ./test-all.sh 5'


in_booth     := if env("BOOTH_CONTAINER_NAME", "") == "" { "false" } else { "true" }
run_in_booth := if in_booth == "true" { "" } else { "./booth exec --run --" }

[private]
default:
    @just --list

# Run every test under bash 3.2 and bash 5.
test-all: test-bash32 test-bash5

# Run every test under bash 3.2, the minimum (the one macOS ships), from CodingBooth's `bash` template.
# `use-bash 3.2` covers #!/bin/bash; the real 3.2 binary also goes first on PATH because the
# /usr/bin/bash dispatcher (a dash script) drops exported functions, and bats needs `export -f`.
test-bash32:
    {{run_in_booth}} use-bash 3.2 bash -c 'export PATH="$(dirname "$(readlink -f "$(command -v bash-3.2)")"):$PATH" && cd $HOME/code/tests && ./test-all.sh 3'

# Run every test under bash 5, the one Linux ships. /usr/bin goes first for Ubuntu's gpg 2.4. The
# distro bash is /usr/bin/bash.distro (behind the dispatcher, see test-bash32), so a one-link
# folder puts it first on PATH as `bash`.
test-bash5:
    {{run_in_booth}} bash -c 'd=$(mktemp -d) && ln -s /usr/bin/bash.distro "$d/bash" && export PATH="$d:/usr/bin:$PATH" && cd $HOME/code/tests && ./test-all.sh 5'

# Arguments go to claude as given: `just claude`, or `just claude -p "List undone todos for EnvFolio"`.
# The booth runs its command through a shell, so each argument is quoted once more for it.
# Run Claude in the booth, with the todos MCP token (todos/mcp-token) loaded and its tools allowed.
[positional-arguments]
claude *args:
    #!/usr/bin/env bash
    set -euo pipefail
    cmd=(folio exec -s todos/mcp-token -- claude --allowedTools mcp__todos "$@")
    if [[ {{in_booth}} == true ]]; then exec "${cmd[@]}"; fi
    quoted=()
    for a in "${cmd[@]}"; do quoted+=("$(printf '%q' "$a")"); done
    exec ./booth --privileged-allowed --quiet -- "${quoted[@]}"

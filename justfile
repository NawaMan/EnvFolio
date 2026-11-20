
in_booth     := if env("BOOTH_CONTAINER_NAME", "") == "" { "false" } else { "true" }
run_in_booth := if in_booth == "true" { "" } else { "./booth exec --run --" }

# `just quiet=true claude …`: show only what the command prints, and its errors only when it fails.
quiet        := "false"

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
# With quiet=true, stderr goes to a private temp file inside the booth (the booth's terminal would
# merge it into stdout on the host) and is printed only when the command fails.
# gpg's passphrase prompt, if any, comes before the booth starts, from the host's agent.
# Leading `--worktree <name>` and `--worktree-keep` go to the booth, which then runs on that git
# worktree (`just claude --worktree fix-1 -p "…"`); a worktree the run creates is removed when it
# exits, if nothing would be lost, unless --worktree-keep. Only leading ones: later, they are
# claude's (claude has a --worktree of its own).
# Run Claude in the booth, with the todos MCP token (todos/mcp-token) loaded and its tools allowed.
[positional-arguments]
claude *args:
    #!/usr/bin/env bash
    set -euo pipefail
    booth_opts=()
    while (( $# )); do
        case $1 in
            --worktree)      (( $# >= 2 )) || { echo "just claude: --worktree needs a name" >&2; exit 2; }
                             booth_opts+=("$1" "$2"); shift 2 ;;
            --worktree=*)    booth_opts+=(--worktree "${1#--worktree=}"); shift ;;
            --worktree-keep) booth_opts+=("$1"); shift ;;
            *)               break ;;
        esac
    done
    if [[ {{in_booth}} == true && ${#booth_opts[@]} -gt 0 ]]; then
        echo "just claude: --worktree is for starting a booth; this is already in one" >&2; exit 2
    fi
    cmd=(folio exec -s todos/mcp-token -- claude --allowedTools mcp__todos "$@")
    if [[ {{quiet}} == true ]]; then
        cmd=(bash -c 'umask 077; err=$(mktemp); trap '\''rm -f "$err"'\'' EXIT
                      rc=0; "$@" 2>"$err" || rc=$?
                      (( rc == 0 )) || cat "$err" >&2
                      exit "$rc"' quiet "${cmd[@]}")
    fi
    if [[ {{in_booth}} == true ]]; then exec "${cmd[@]}"; fi
    # The booth's gpg uses the host's agent when its socket is there (config.toml mounts it), and
    # the booth never asks for a passphrase then: unlock the key here first, on this terminal,
    # by decrypting the token to nowhere. No prompt when the agent has the passphrase cached.
    if [[ -S ${XDG_RUNTIME_DIR:-/nonexistent}/gnupg/S.gpg-agent && -t 0 ]]; then
        GPG_TTY=$(tty) gpg --quiet --decrypt "${FOLIO_STORE_DIR:-$HOME/.folio}/todos/mcp-token.gpg" >/dev/null
    fi
    quoted=()
    for a in "${cmd[@]}"; do quoted+=("$(printf '%q' "$a")"); done
    booth=(./booth --privileged-allowed --quiet ${booth_opts[@]+"${booth_opts[@]}"} --)
    if [[ {{quiet}} != true ]]; then exec "${booth[@]}" "${quoted[@]}"; fi
    # The booth's own start-up warnings go to the host's stderr: kept the same way.
    umask 077; err=$(mktemp); trap 'rm -f "$err"' EXIT
    rc=0; "${booth[@]}" "${quoted[@]}" 2>"$err" || rc=$?
    (( rc == 0 )) || cat "$err" >&2
    exit "$rc"


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

# A todo's work, in three steps, on a git worktree named after it: its number, a dash, a word or
# two (`299-note` is todo #299). The todo's text, in the todos app, is the task.
#   just start <name>  in the booth: starts on the todo, and stops at a question or when the change
#                      is ready for you to test. Interactive; leave and come back with
#                      `just claude --worktree <name> -c`.
#   just ready <name>  in the booth, once you have tested it: closes gaps (tests, docs), runs the
#                      tests, commits on the branch.
#   just land <name>   on the host: rebases onto main, merges, removes the worktree and the branch,
#                      marks the todo done.
# Words after the name are added to Claude's prompt. quiet=true works for ready and land as for
# `just claude` (start is interactive).

# Start todo #N on worktree <N-word>, in the booth, interactively (the worktree is made if missing, and kept).
[positional-arguments]
start name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^([0-9]+)-[A-Za-z0-9] ]] || { echo "just start: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1 todo=${BASH_REMATCH[1]}; shift
    prompt="Work on todo #$todo; read it with the todos MCP tools. This booth runs on git worktree and branch '$name', made for this todo: it is the linked checkout AGENTS.md asks for (Rule 0b), so work here and on this branch, not on main. Follow AGENTS.md: post the proposal and wait for my answer before editing. Once the change is implemented and its checks pass, commit it on this branch and stop, telling me it is ready for me to test.${*:+ $*}"
    exec just claude --worktree "$name" --worktree-keep "$prompt"

# Prepare worktree <N-word> to land, in the booth: close gaps in tests and docs, run the tests, commit.
[positional-arguments]
ready name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^([0-9]+)-[A-Za-z0-9] ]] || { echo "just ready: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1 todo=${BASH_REMATCH[1]}; shift
    prompt="Todo #$todo, on this branch '$name': I have tested it and the work is done; don't ask me anything. Prepare it for landing. Audit it against the todo (read it with the todos MCP tools) and AGENTS.md for gaps: tests that should exist, docs (README, MANUAL, CHANGELOG, help text, tab completion) not updated, experiments not concluded, accidental changes. Fill them, run shellcheck and just test-all, and commit on this branch. A test that fails the same way on main is not from this branch: name it and carry on. Do not rebase, merge or change main: 'just land $name' does that on the host. End with what you changed and the test results.${*:+ $*}"
    exec just quiet={{quiet}} claude --worktree "$name" --worktree-keep -p "$prompt"

# Land worktree <N-word> into main, on the host: rebase, merge, remove the worktree and branch, mark the todo done.
[positional-arguments]
land name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^([0-9]+)-[A-Za-z0-9] ]] || { echo "just land: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1 todo=${BASH_REMATCH[1]}; shift
    if [[ {{in_booth}} == true ]]; then
        echo "just land: run it on the host; a booth sees neither main's checkout nor the worktree's folder" >&2; exit 2
    fi
    # The worktree of branch <name>, wherever it is (worktree/<name>, or ../<repo>.worktrees/<name> from booth --worktree).
    path=$(git worktree list --porcelain | awk -v b="branch refs/heads/$name" '/^worktree /{p=substr($0,10)} $0==b{print p; exit}')
    [[ -n $path ]] || { echo "just land: no worktree has branch $name checked out" >&2; exit 2; }
    prompt="Land todo #$todo: branch '$name' into main, as the land skill (.claude/skills/land/SKILL.md) says. I have tested it and the work is done, and 'just ready' has closed its gaps; don't ask me anything. Its worktree is $path (not under worktree/). If the preflight still finds gaps, stop and list them. Otherwise rebase it onto main there, and if the rebase changed anything run just test-all again; then merge, remove that worktree and delete the branch. Never --force: if git refuses, stop and tell me why. Do not push. Last, mark todo #$todo done with the todos MCP tools; if they cannot be reached, say so.${*:+ $*}"
    cmd=(claude --add-dir "$path" --permission-mode acceptEdits
         --allowedTools 'Bash(git *)' 'Bash(just *)' 'Bash(./booth *)' mcp__todos
         -p "$prompt")
    if [[ {{quiet}} != true ]]; then exec "${cmd[@]}"; fi
    umask 077; err=$(mktemp); trap 'rm -f "$err"' EXIT
    rc=0; "${cmd[@]}" 2>"$err" || rc=$?
    (( rc == 0 )) || cat "$err" >&2
    exit "$rc"

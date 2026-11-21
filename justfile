
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

# A todo's work, on a git worktree named after it: its number, a dash, a word or two (`299-note`
# is todo #299). The todo, in the todos app, is the task; each step moves its status along.
#   any To do status --pickup--> Analyse --start--> Working --ready--> Wait for testing --land--> Done
#   just pickup <name>    booth: makes the worktree (kept), writes the proposal into the todo's
#                         description (## Plan), and stops; no code changes.
#   just start <name>     booth: implements the plan and commits on the branch.
#   just ready <name>     booth: closes gaps (tests, docs), runs the tests, commits.
#                         Then you test it (set Testing by hand if you like).
#   just land <name>      host: rebases onto main, merges, removes the worktree and the branch.
#   just discuss <name>   booth, interactive, any status: catches up and talks it over with you;
#                         adjusts the plan or the code, and sets whatever status you name
#                         (Backlog, Rejected, …) — only when you ask.
# Between steps: the todo holds what you read (## Plan, ## Work log); task-memory.md, gitignored
# in the worktree, holds the steps' own working notes (land keeps what is worth it in the log).
# All but discuss run unattended (claude -p). Words after the name are added to the prompt.
# quiet=true works for all but discuss, as for `just claude`.

# Run a todo step: `todo-step <name> <interactive|unattended> <prompt>`, in the booth on that
# worktree (made if missing, and kept), or right here when this booth is already on it.
[private]
[positional-arguments]
todo-step name mode prompt:
    #!/usr/bin/env bash
    set -euo pipefail
    name=$1 mode=$2 prompt=$3
    todo=${name%%-*}
    common="Todo #$todo is the task: read it with the todos MCP tools (get_item #$todo). This checkout is git worktree and branch '$name', made for it: it is the linked checkout AGENTS.md asks for (Rule 0b), so work here and commit on this branch, never on main. Statuses are set with update_item (codes: TRIAGE, BACKLOG, LATER, UNSURE, NEED_ANALYSIS, ON_HOLD, DEPENDING; ANALYSE, WORKING, WAIT_FOR_TESTING, TESTING, LANDING; DONE, REJECTED, CANCELLED, DUPLICATED). Notes go in the todo's description, which update_item replaces whole: read it first and keep what is there; the plan is its '## Plan' section, and step results go as dated lines under '## Work log' at the end. If the todos tools cannot be reached, say so and stop. Memory between steps: task-memory.md at the top of this checkout (gitignored, never committed). Read it first if it is there; before you stop, update it with what the next step should know (files involved, commands that worked, dead ends, causes found), short, and never a secret in it. It is for the steps; what I should read goes in the todo."
    args=()
    [[ $mode == unattended ]] && args+=(-p)
    args+=("$common $prompt")
    if [[ {{in_booth}} == true ]]; then
        [[ $(git branch --show-current) == "$name" ]] || { echo "this booth is not on worktree $name; run it from the host" >&2; exit 2; }
        exec just quiet={{quiet}} claude "${args[@]}"
    fi
    exec just quiet={{quiet}} claude --worktree "$name" --worktree-keep "${args[@]}"

# Pick up todo #N (any To do status) on a new worktree <N-word>: write the proposal into the todo, set Analyse.
[positional-arguments]
pickup name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^[0-9]+-[A-Za-z0-9] ]] || { echo "just pickup: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1; shift
    exec just quiet={{quiet}} todo-step "$name" unattended "Step: pickup. Its status must be one of To do (TRIAGE … DEPENDING); otherwise say what it is and stop. Set it to ANALYSE. Then study the todo and the code read-only, and write the proposal AGENTS.md asks for (Problem · Diagnostic · Approach, the checkout being this worktree, any new dependency flagged) into the todo's description as its '## Plan' section, ending with the questions I need to answer, if any. Change no files but task-memory.md (start it with what you found) and commit nothing: 'just start' implements the plan once I agree (I adjust it with 'just discuss'). End with a short summary of the plan.${*:+ $*}"

# Start the work on todo worktree <name> (Analyse): implement the plan and commit; status Working.
[positional-arguments]
start name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^[0-9]+-[A-Za-z0-9] ]] || { echo "just start: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1; shift
    if [[ {{in_booth}} != true ]] && ! git worktree list --porcelain | grep -qx "branch refs/heads/$name"; then
        echo "just start: no worktree has branch $name checked out; just pickup $name makes it" >&2; exit 2
    fi
    exec just quiet={{quiet}} todo-step "$name" unattended "Step: start. Its status must be ANALYSE, and its description must have a '## Plan' with no open questions; otherwise say what is missing and stop. The plan there is my approval of the proposal. Set the status to WORKING, implement the plan, run the checks that fit (shellcheck always; the bats tests it touches) and commit on this branch. If you get stuck on something the plan does not settle, write the question under '## Work log', keep WORKING, and stop. End with what you did.${*:+ $*}"

# Get todo worktree <name> (Working) ready for you to test: close gaps, run all tests, commit; status Wait for testing.
[positional-arguments]
ready name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^[0-9]+-[A-Za-z0-9] ]] || { echo "just ready: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1; shift
    if [[ {{in_booth}} != true ]] && ! git worktree list --porcelain | grep -qx "branch refs/heads/$name"; then
        echo "just ready: no worktree has branch $name checked out; just pickup $name makes it" >&2; exit 2
    fi
    exec just quiet={{quiet}} todo-step "$name" unattended "Step: ready. Its status must be WORKING; otherwise say what it is and stop. Audit this branch against the todo, its plan and AGENTS.md for gaps: tests that should exist, docs (README, MANUAL, CHANGELOG, help text, tab completion) not updated, experiments not concluded, accidental changes. Fill them, run shellcheck and just test-all, and commit on this branch. A test that fails the same way on main is not from this branch: name it and carry on. When all is in, set the status to WAIT_FOR_TESTING and log the test results under '## Work log'; if something of this branch still fails, keep WORKING and log why. Do not rebase, merge or change main. End with what you changed and the test results.${*:+ $*}"

# Land todo worktree <name> (Wait for testing or Testing), on the host: rebase, merge, remove the worktree and branch; status Done.
[positional-arguments]
land name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    if [[ {{in_booth}} == true ]]; then
        echo "just land: run it on the host; a booth sees neither main's checkout nor the worktree's folder" >&2; exit 2
    fi
    [[ $1 =~ ^[0-9]+-[A-Za-z0-9] ]] || { echo "just land: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1; shift
    todo=${name%%-*}
    # The worktree of branch <name>, wherever it is (worktree/<name>, or ../<repo>.worktrees/<name> from booth --worktree).
    path=$(git worktree list --porcelain | awk -v b="branch refs/heads/$name" '/^worktree /{p=substr($0,10)} $0==b{print p; exit}')
    [[ -n $path ]] || { echo "just land: no worktree has branch $name checked out" >&2; exit 2; }
    prompt="Land todo #$todo: branch '$name' into main, as the land skill (.claude/skills/land/SKILL.md) says. Read the todo with the todos MCP tools (get_item #$todo); its status must be WAIT_FOR_TESTING or TESTING, otherwise say what it is and stop. I have tested it and the work is done, and 'just ready' has closed its gaps; don't ask me anything. Its worktree is $path (not under worktree/). Set the status to LANDING. If the preflight still finds gaps, stop and list them. Otherwise rebase it onto main there, and if the rebase changed anything run just test-all again; then merge. Before removing the worktree, read its task-memory.md (gitignored, the steps' working notes), if there is one, and add what is worth keeping to the todo's '## Work log'; then remove that worktree and delete the branch. Never --force: if git refuses, stop and tell me why. Do not push. Last, set the status to DONE and add the merge commit under '## Work log' in its description (update_item replaces the description whole: keep what is there). If something stopped the land, keep LANDING and log why. If the todos tools cannot be reached, say so.${*:+ $*}"
    cmd=(claude --add-dir "$path" --permission-mode acceptEdits
         --allowedTools 'Bash(git *)' 'Bash(just *)' 'Bash(./booth *)' mcp__todos
         -p "$prompt")
    if [[ {{quiet}} != true ]]; then exec "${cmd[@]}"; fi
    umask 077; err=$(mktemp); trap 'rm -f "$err"' EXIT
    rc=0; "${cmd[@]}" 2>"$err" || rc=$?
    (( rc == 0 )) || cat "$err" >&2
    exit "$rc"

# Discuss todo worktree <name> with Claude, interactively, at any status: adjust the plan or the code, set any status you name.
[positional-arguments]
discuss name *words:
    #!/usr/bin/env bash
    set -euo pipefail
    [[ $1 =~ ^[0-9]+-[A-Za-z0-9] ]] || { echo "just discuss: name it <todo number>-<word>, like 299-note" >&2; exit 2; }
    name=$1; shift
    if [[ {{in_booth}} != true ]] && ! git worktree list --porcelain | grep -qx "branch refs/heads/$name"; then
        echo "just discuss: no worktree has branch $name checked out; just pickup $name makes it" >&2; exit 2
    fi
    exec just todo-step "$name" interactive "Step: discuss, with me, at whatever status the todo has. Catch up first: the todo (status, plan, work log), task-memory.md, and what this branch has (git log and diff against main, uncommitted changes). Give me a short summary of where it stands, then wait for me. As we agree changes: update the '## Plan' section, or change the code (proposal before code, as AGENTS.md says) and commit on this branch when I ask. Set the status only when I ask, to exactly the one I name; mention anything that step would normally have done and has not. When I close it (REJECTED, CANCELLED, DUPLICATED), remove nothing: tell me what is left (the worktree's path, commits not in main, uncommitted files) and the exact commands to throw it away. Back to a To do status, the worktree and branch stay.${*:+ $*}"

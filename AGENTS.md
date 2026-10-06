# AGENTS.md — Working on this repository

Guidance for an AI agent (Claude Code, or similar) helping develop **Keep**, a command-line app with
interactive prompts, written in **bash**, for keeping texts and secrets.

---

## Quick start for agents (read this first)

> **Bootstrap phase (current):** the initial work happens **directly on `main`**. Rule 0b still
> stands, but for now **ask** in each proposal — "on main, or in a worktree?" — instead of
> defaulting to a worktree; the user's answer is the opt-out. The user will say when the bootstrap
> phase is over; then remove this note and the worktree default applies as written below.

### Rules you must follow

Rules 0 and 0b are **hard stops before any feature edit**.

0. **Proposal before code.** For any change that is not pure Q&A: research read-only, post
   **Problem · Diagnostic · Approach** (a few sentences each), and **wait** for the user before the
   first substantive edit. Approach must name the **checkout** (worktree vs main) when source will
   change. Full text: *Proposal before code* below.
0b. **Linked worktree.** Feature work is **not** edited on `main` (bootstrap phase: ask). Before
   the first substantive write: either you are already under `worktree/<name>/`, or you create
   that checkout and work **only** there. **"Yes" / "go ahead" / "Let's go" authorises the *work*,
   not the *checkout*.** It is never permission to edit the main clone. Full text: *Session =
   linked worktree + branch* below, including the pre-edit self-check.
1. **Prefer the smallest honest verification.** Match checks to the change (`shellcheck` always;
   a `bats` test for logic; a tmux smoke test for rendering / input / terminal state). Do not claim
   "done" without the check that would catch the bug class you touched.
2. **Do not kill the user's long-lived processes or sessions.** Only stop what you started for your
   own verification, unless the user asks otherwise.
3. **Keep docs coherent with behaviour.** When user-visible behaviour changes (keys, flags, file
   formats, config), update README / help text / CHANGELOG. No docs churn for internal refactors.
4. **No commit / push / PR / merge unless the user asks.** Landing a branch is only on explicit
   "land" / "merge into main". Never push as part of landing. Creating a worktree branch is allowed
   as part of Rule 0b; committing still needs an ask.
5. **Never publish or release without showing what will change and getting explicit
   confirmation** — tagging/pushing a release, publishing to a package index or install script.
   Same bar as Rule 4. Never add a flag that skips that confirmation.
6. **Secrets never go in a committed file** — no real credentials, keys, or vault data in the repo,
   including test fixtures (generate throwaway ones at test time). A secret that was ever committed
   is compromised until rotated, private repo or not.

### Proposal before code — study, discuss, then edit

**Default for any change that is not pure Q&A or quick follow up.** Research is fine (read files,
search, run read-only commands). **Writing is not** — no source edits, no scaffolding, no "I'll
start while I explain" — until you have posted a short proposal and the user has replied.

Post **three headings, a few sentences each**, then **stop and wait**:

1. **Problem** — restate what the user wants in plain language, so a mismatch surfaces before
   code.
2. **Diagnostic** — what you found in the tree: what already exists, what is the outlier, which
   constraint bites. Put 1–2 clarifying questions *here* when something is still ambiguous.
3. **Approach** — how you intend to do it, including deliberate non-goals and open choices the
   user should pick. **When the change will touch source**, Approach **must** name the checkout
   in one explicit line — either:
   - **Worktree:** `worktree/<name>` + branch `<name>` (this is the default for feature work), or
   - **Main / here:** only if the user already opted out ("here", "on main", "no worktree") or
     the change is a pure docs/typo one-liner they want on main.

   **New dependencies must be called out explicitly.** If the change needs anything beyond
   `bash`, `pass`, `gpg`, `git`, `tree`, `tar`, `gzip` and POSIX coreutils — a new runtime tool,
   a newer minimum version of an existing one, or a new dev tool — Approach carries its own
   clearly marked line:

   > **⚠ New dependency:** `<tool>` (runtime / dev-only) — why it's needed, and the
   > no-new-dependency alternative considered.

   Never leave a dependency implied by the code or buried mid-paragraph. If there is none, say
   nothing — the absence of that line means "no new dependencies".

   A proposal that describes the code change but **omits the checkout** is incomplete — fix it
   before asking for a green light. After green light, if you are still on the main clone and
   Approach said worktree, **create the worktree first**; do not start writing on main.

Proceed only when the user agrees, picks an option, or explicitly green-lights
("do it", "implement", "yes", "go ahead"). One approval covers that plan — not every later
surprise; if the approach has to change, re-propose the delta.

**Skip the gate when:**

- Pure questions / orientation with **no** code change
- The user already approved this approach in the **same thread**
- They explicitly skip it ("just implement", "no plan", "don't discuss")
- Mechanical follow-through of an **already-agreed** plan (the next step of work already green-lit)

This is Rule 0. **Rule 0b (worktree isolation) is not skipped by a
green light** — it is a separate pre-edit check.

### How to run things

- See in Justfiles first.
- The development is done within CodingBooth (a wrapper around a container). The booth will have
    all the toolchain needed.
- Use `./booth exec --run -- <cmd>` for everything (Justfile will use the same technique).
- If there is a need for more tools, mention it explicitly (particularly near the bottom of the text and in color).

### CodingBooth
- CodingBooth's own source (sibling repo `../CodingBooth`) is an external dependency — don't edit it
  as part of this project's work.
- You are not likely to need it but just in case. Here is how to get more info about CodingBooth:
  - `./booth help`,
  - `./booth help --detail`,
  - `./booth exec --run -- cat /opt/codingbooth/AGENT.md`,
  - `https://codingbooth.io`,
  - `https://github.com/NawaMan/CodingBooth/`


### Verification guidance
- Prefer the smallest honest check: a `bats` test for a logic change, `shellcheck` always, a
  tmux-driven smoke test only when rendering, key handling or terminal state changed.
- Check what's already running before starting something long-lived (`tmux ls`). **Never stop or
  kill something you did not start.**
- Tear down your own short-lived verification sessions (`tmux kill-session -t <yours>`) when the
  check is done.
- Do not invent fallbacks when a required tool (`bash` of the right version, `pass`,
  `shellcheck`, `bats`, `tmux`) is missing — stop and tell the user.
- Tests use a throwaway `pass` store and GPG home — **never** the user's real ones (see
  *Tests never touch the real password store*).

### Session = linked worktree + branch

**One session folder, one branch.** This keeps GitKraken / other GUIs and parallel agent sessions
legible, and contains half-finished work to its own checkout.

```bash
# from the main clone root
mkdir -p worktree
git worktree add worktree/<name> -b <name>    # branch + linked checkout in one step
cd worktree/<name>
claude                                        # or your agent CLI — start it HERE, from inside
```

Start the agent **inside** the folder git already made. Do not use an agent CLI's own worktree
feature to create it (see below). If branch `<name>` already exists, drop `-b`:
`git worktree add worktree/<name> <name>`.

| Piece | Value | Notes |
| --- | --- | --- |
| Working tree | `<repo>/worktree/<name>/` | Open this in the editor / agent CLI / GUI |
| Branch | `<name>` (same as the folder) | Created by `-b <name>`; already checked out |
| Git bookkeeping | `<repo>/.git/worktrees/<name>/` | Auto; **never** open or check out files here |
| Gitignore | `/worktree/` in `.gitignore` | Nested under main → must be ignored |

Check that a GUI will see it (open the **main** repo, not only the worktree path):

```bash
git worktree list
# …/<repo>                      […] [main]
# …/<repo>/worktree/<name>      […] [<name>]
```

A healthy linked worktree has a **file** `.git` pointing at the main repo (not a `.git/` directory):

```text
gitdir: /…/<repo>/.git/worktrees/<name>
```

**Do not let an agent CLI create the isolation for this project** (e.g. Claude Code's
`EnterWorktree` / `isolation: "worktree"`). Most of them ship a worktree feature that puts the checkout somewhere *outside* `<repo>/worktree/` — under the tool's own home
directory, or a temp dir (a standalone clone in some cases, not even a linked worktree). Either way
the checkout is **invisible** to a GUI's worktree list for the main repo, which is the whole point
of the recipe above. Use `git worktree add worktree/<name>` yourself and start the agent inside it.

If one already exists elsewhere and the user wants it GUI-visible: move work aside, `git worktree
add worktree/<name> <branch>` from main, re-apply any uncommitted edits, delete the stray checkout.

When the user asks for "a session", "a worktree", or a feature checkout: run the recipe above
(or confirm `worktree/<name>` already exists and is linked), then work **inside** that folder.
Keep `/worktree/` in `.gitignore`.

**Default for feature work: use a linked worktree** (`worktree/<name>` + branch `<name>`) — this
is **Rule 0b**, not a soft preference. Unless the user says otherwise ("here", "on main", "no
worktree") or you are **already** inside one, **stop before the first substantive edit** and create
the checkout from the main clone root (recipe above). Prefer a short name from the task. Tell the
user the path and branch. **"Go ahead" on a plan is not permission to edit main.**

**Skip isolation only when:** pure Q&A; docs/typo one-liners the user wants on main; the user
said "here" / "on main" / "no worktree"; or you are already inside a linked worktree.

**Pre-edit self-check (feature work) — fail closed:**

- [ ] **Bootstrap phase** (note at the top is present): the user has answered main-vs-worktree for
      this change — if not, ask; do not create a worktree or edit main until they pick
- [ ] `pwd` is under `…/worktree/<name>/` **or** the user opted out of isolation
- [ ] `git branch --show-current` is **not** `main` / `master` (unless the user opted out)
- If any box fails: **do not write**. Ask, or create/enter the worktree first, then continue.

### Landing and cleanup

Guardrails — these hold whether or not the `land` skill is loaded:

- **Land only on an explicit ask** ("land", "merge into main") — Rule 4. Full procedure: the
  `land` skill (`.claude/skills/land/SKILL.md`).
- **Never push** as part of landing, and **never squash**.
- **Clean up only what you created, and only when the user says the work is done.** A worktree
  holds real work — an unmerged branch and possibly uncommitted edits — so removing one is the
  user's call, never a tidy-up you do on your own initiative. *Exception:* a successful land
  removes its worktree and branch as its last step.
- **Never `--force`** `git worktree remove` or `git branch -d` (no `-D` either) — it silently
  discards work. If git refuses, that refusal is the point: stop and tell the user what is
  unmerged or uncommitted, and let them decide.

### Already in a worktree → stay on the feature branch

How to tell you are in a worktree (any one is enough):

- Path is `…/worktree/<name>/…`, or `.git` is a file with `gitdir: …/.git/worktrees/…`
- `git rev-parse --git-dir` and `--git-common-dir` resolve to different paths
- The user said this is a worktree / feature session

If you are still on `main` / `master` inside `worktree/<name>/`, fix that **before the first
substantive edit**: prefer branch name = folder name (reuse it if it exists, else
`git checkout -b <name>`), and tell the user the branch name. Still **do not** `git commit`,
`git push`, or open a PR unless the user asks (Rule 4) — creating or switching the branch is the
exception.

---

## Bash CLI conventions

Starting style, not law — deviate explicitly (say so and why) rather than silently.

### Language and portability

- **Must run on both Linux and macOS.** Every change is written for both; anything that differs
  (package manager, clipboard tool, GNU vs BSD flags) is handled explicitly, not assumed.
- `#!/usr/bin/env bash`. **Minimum bash: 3.2**, the version macOS still ships, so Keep runs on a
  stock Mac. No bash 4+ features: no associative arrays (`declare -A`), `mapfile`/`readarray`,
  case changes (`${var,,}`, `${var^^}`), namerefs (`local -n`), `${var@Q}`, `;&`/`;;&`, `|&`,
  `coproc`, `wait -n` or negative array indexes. Also avoid `"${arr[@]}"` on an empty array
  under `set -u`, which 3.2 treats as unset. `just test-all` runs every test under bash 3.2
  (`just test-bash32`, `/usr/local/bin/bash` in the booth) and bash 5 (`just test-bash5`); each
  fails at once if the wanted bash is not the one found.
- **Runtime dependencies: `bash`, `pass`, `gpg`, `git`, `tree`, `tar`, `gzip` — and that's the
  list.** `gpg` is a direct dependency because first-run setup has to find or create a key before
  `pass init`, and texts are signed with it; `git` because the store is synced as a git repo;
  `tree` (already a dependency of `pass`) because `secret ls`/`find` run pass's own `tree` line
  with the texts left out; `tar` + `gzip` because
  `keep store backup` packs everything into one file. Every prompt goes through the Input helpers
  (`ask-text`, `ask-choice`, `confirm`, `show-box`), in plain bash. Plus one clipboard tool — `pbcopy` /
  `wl-copy` / `xclip`, whichever `pass` itself uses on the machine — for `keep text show -c`.
  The script's `ensure-requirements` is the authoritative list. Anything
  beyond bash builtins and POSIX coreutils needs a stated reason and the user's OK — flag it with
  the **⚠ New dependency** line in the proposal (Rule 0), never slip it in. Dev-only tools (`shellcheck`, `bats`, `tmux`) are fine.
- **The approved-dependency list lives in the script itself**, in `ensure-requirements` — one
  place that is both the record and the check.

### Structure for testability

- Keep **logic** (parsing, state, data transforms) in functions that don't touch the terminal, and
  **rendering / input** in a thin layer on top. Logic is tested with `bats` directly; the thin
  layer is what needs a TTY.
- A script that can be `source`d without running `main` (guard with
  `[[ ${BASH_SOURCE[0]} == "$0" ]] && main "$@"`) lets tests call its functions.

### Verifying interactive prompts (you have no real keyboard)

An agent cannot use the app interactively. Drive it headlessly in **tmux**:

```bash
tmux new-session -d -s keep-check -x 100 -y 30 './keep'
tmux send-keys -t keep-check 'j' 'j' Enter
tmux capture-pane -t keep-check -p          # assert on the rendered screen
tmux kill-session -t keep-check             # tear down your own session
```

Use a session name that is clearly yours, and never kill one you did not create.

### Tests never touch the real password store

- Every test (bats or tmux) runs against a **throwaway store**: a temp `PASSWORD_STORE_DIR` and a
  temp `GNUPGHOME` with a generated no-passphrase test key, created in setup and removed in
  teardown. Assert the env vars point into the temp dir before running anything.
- Never run `pass` against the user's real store (`~/.password-store`, the user's own GPG keyring)
  for verification — not even read-only `pass ls`. If a check seems to need it, stop and ask.
- Tests never touch the user's **real folders or drives** either: set `XDG_STATE_HOME` to a temp
  dir, and hide plugged-in drives from `removable-drives` (e.g. `USER=sb-test-nobody`, so
  `/media/$USER` / `/run/media/$USER` match nothing). An early test wrote a sandbox backup onto
  the user's real USB drive because this was missed.

### Handling secrets — non-negotiable

- Secrets never appear in **argv** (visible in `ps`), **environment variables** passed to children,
  **shell history**, **logs/debug output**, or **temp files**. Take input with
  `read -rs`, hand it to `pass insert` via stdin, keep it in a
  variable only as long as needed, and `unset` it after. Any unavoidable temp file goes under
  `umask 077` and is removed in the `EXIT` trap.
- **One exception, by the user's decision: `keep exec` and `keep shell`.** Their whole purpose is
  to hand entries to a child process as environment variables (like `op run` / `aws-vault exec`),
  so there — and only there — secrets go into a child's environment. Only with `--secrets`
  (texts load by default). Everything else still holds: values never go on a command line (Keep
  `export`s them and `exec`s — never `env VAR=value cmd`), into a file, or on the screen (the
  shell lists variable names only).
- **Texts are not secrets** — they're stored plain, so they may come from argv
  (`keep text insert -t <text>`). Never offer a way to put a *secret* on the command line.
- No `set -x` / debug tracing in any path that handles a secret.
- Don't hand-roll crypto or clipboard clearing — use `pass` (`pass show -c` / `pass generate -c`
  already clear after `PASSWORD_STORE_CLIP_TIME`). Say in the UI that the clipboard will clear.

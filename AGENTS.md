# AGENTS.md — Working on this repository

Guidance for an AI agent (Claude Code, or similar) helping develop **Keep**, a terminal UI (TUI)
app written in **bash**, built on **`pass`** (the standard Unix password manager — storage and
crypto) and **`gum`** (Charm's CLI widgets — the UI), with as few other dependencies as possible. The workflow half of this file (proposal gate, worktrees, landing) is
adapted from the user's other projects; the bash/TUI half is the starting style for this one. Fill
in the *Project specifics* table once the repo's shape is settled.

---

## Quick start for agents (read this first)

> **Bootstrap phase (current):** the initial work happens **directly on `main`**. Rule 0b still
> stands, but for now **ask** in each proposal — "on main, or in a worktree?" — instead of
> defaulting to a worktree. This overrides the worktree default in the skills (`todo-pick`,
> `work-start`) too. The user will say when the bootstrap phase is over; then remove this note and
> the worktree default applies as written below.

**Two hard stops before any feature edit (Rules 0 and 0b):**

1. **Proposal before code** — post Problem · Diagnostic · Approach, then wait (Rule 0).
2. **Linked worktree** — feature work is **not** edited on `main`. Before the first substantive
   write: either you are already under `worktree/<name>/`, or you create that checkout and work
   **only** there. **"Yes" / "go ahead" / "Let's go" authorises the *work*, not the *checkout*.**
   It is never permission to edit the main clone. Full text: Rule 0b and *Session = linked
   worktree + branch* below.

### Proposal before code — study, discuss, then edit

**Default for any change that is not pure Q&A.** Research is fine (read files, search, run
read-only commands). **Writing is not** — no source edits, no scaffolding, no "I'll start while
I explain" — until you have posted a short proposal and the user has replied.

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
   `bash`, `pass`, `gpg`, `git`, `gum`, `tar`, `gzip` and POSIX coreutils — a new runtime tool, a newer minimum version of an
   existing one, or a new dev tool — Approach carries its own clearly marked line:

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
- A skill's **own** gate already covers the same wait — but **not every skill menu is enough**.
  - `todo-add`: recording an idea is not implementation; no proposal gate (but do not build).
  - `todo-pick`: the menu only chooses *which* feature. After the pick you **still** post
    Problem · Diagnostic · Approach and wait — a one-line pitch is not a plan.
  - `work-start`: its step 2 *is* the form, posted before the worktree exists (replaces a second
    copy of it).
  - `work-finish`: preflight report *as* Problem · Diagnostic · Approach, then wait (replaces a
    second copy of the form).

This is Rule 0 under *Rules you must follow*. **Rule 0b (worktree isolation) is not skipped by a
green light** — it is a separate pre-edit check. Skills that implement things restate both at the
top so they are hard to miss when a skill is loaded alone.

### How to run things

*To be filled in once the layout exists.* Expected shape:

| Task | Command | Notes |
| --- | --- | --- |
| Run the app | `./keep` (TBD) | Needs a real TTY — see *Verifying a TUI* below |
| **Everything** | `~/code/test-all.sh` in a booth shell (`cd test-booth && ./booth`) | shellcheck, bats, test1–test4 in turn; a ✓/✗ line each, a summary, non-zero exit if anything failed. Full output per check in `test-booth/.test-all/<check>.txt`. About 13 minutes. One run at a time: test-all and test1–test4 each hold a `.running` lock, and a second run refuses to start (two at once would delete each other's sandboxes) |
| Lint | `shellcheck keep test-booth/.booth/setups/*.sh` | Must be clean; justify each `# shellcheck disable=` inline. No host install? test-booth has it: `cd test-booth && ./booth --name keep-shellcheck -- 'cd ~/keep && shellcheck keep'`. `test-booth/booth` is vendored CodingBooth — not linted here |
| Unit tests | `bats test/` | Logic tests, no TTY required; each file sets up a throwaway GPG home + store (`test/helpers.bash`). No host install? test-booth has it: `cd test-booth && ./booth --name keep-tests -- 'cd ~/keep && bats test/'` |
| TUI smoke test | tmux-driven (TBD) | Only for changes to rendering / key handling |
| `store init`, happy path | `~/code/test1/test1-store-init.sh` in a booth shell (`cd test-booth && ./booth`) | Runs the real `keep store init` in a private tmux session and answers its prompts (gum, gpg, pinentry), then checks secrets and texts in the new store. `--manual` to answer yourself. Sandbox: `test-booth/test1/sandbox/`, deleted at the start of each run |
| `store init`, other paths | `~/code/test2/test2-store-init-errors.sh` in a booth shell | 19 scenarios — cancelling, bad input, existing keys, no git identity, missing tool, failed git history. `--list`, `--only <name>`. Screen output per run in `test-booth/test2/sandbox/<scenario>/run-N.txt` |
| `store backup` / `restore` | `~/code/test3/test3-store-backup-restore.sh` in a booth shell | 25 scenarios with a "computer A" and "computer B" — plain / sealed backups, refusals, fresh restore, cancel / key only / replace, merges (secrets and texts, same and different keys). `--list`, `--only <name>`. About 5 minutes |
| `store export` | `~/code/test4/test4-store-export.sh` in a booth shell | 12 scenarios — new / reused export key, plain / sealed, restore on the other computer and the update-by-merge flow, the store's key never offered or exported, cancelling, refusals, a temp folder inside a git repo, texts (and a tampered one). `--list`, `--only <name>`. About 5 minutes |

If a `justfile` is added, `just --list` becomes the entry point and this table should point at it.

**Verification guidance:**
- Prefer the smallest honest check: a `bats` test for a logic change, `shellcheck` always, a
  tmux-driven smoke test only when rendering, key handling or terminal state changed.
- Check what's already running before starting something long-lived (`tmux ls`). **Never stop or
  kill something you did not start.**
- Tear down your own short-lived verification sessions (`tmux kill-session -t <yours>`) when the
  check is done.
- Do not invent fallbacks when a required tool (`bash` of the right version, `pass`, `gum`,
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
feature to create it (see below).

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

**Do not let an agent CLI create the isolation for this project.** Most of them ship a worktree
feature that puts the checkout somewhere *outside* `<repo>/worktree/` — under the tool's own home
directory, or a temp dir (a standalone clone in some cases, not even a linked worktree). Either way
the checkout is **invisible** to a GUI's worktree list for the main repo, which is the whole point
of the recipe above. Use `git worktree add worktree/<name>` yourself and start the agent inside it.

If one already exists elsewhere and the user wants it GUI-visible: move work aside, `git worktree
add worktree/<name> <branch>` from main, re-apply any uncommitted edits, delete the stray checkout.

When the user asks for "a session", "a worktree", or a feature checkout: run the recipe above
(or confirm `worktree/<name>` already exists and is linked), then work **inside** that folder.
Prefer the **`work-start`** skill — it judges whether the task really is *work*, folds in the
Rule 0 proposal, and ends with you inside the worktree. Keep `/worktree/` in `.gitignore`.

**Default for feature work: use a linked worktree** (`worktree/<name>` + branch `<name>`) — this
is **Rule 0b**, not a soft preference. Unless the user says otherwise ("here", "on main", "no
worktree") or you are **already** inside one, **stop before the first substantive edit** and create
the checkout from the main clone root (recipe above). Prefer a short name from the task. Tell the
user the path and branch. `todo-pick` asks, and defaults the answer to worktree — hand the setup
itself to `work-start`. Do **not** invent a worktree for pure Q&A, docs-only nits the user wants on
main, or a one-line fix they explicitly want in place.

**Pre-edit self-check (feature work) — fail closed:**

- [ ] `pwd` is under `…/worktree/<name>/` **or** the user opted out of isolation
- [ ] `git branch --show-current` is **not** `main` / `master` (unless the user opted out)
- If either box fails: **do not write**. Create or enter the worktree first, then continue.

### Landing a worktree's branch into main

Merging is a deliberate act, same bar as any commit/push (Rule 4) — only when the user asks to
land/merge a worktree's work, never on your own initiative. Prefer the **`work-finish`** skill.
Summary of the procedure:

0. **Preflight (read-only), including a gap audit** — git shape (clean main, behind/ahead,
   merge-tree) **and** land-time **gaps** only: (1) tests that should exist but do not,
   (2) docs not updated for user-visible behaviour, (3) experiments not concluded,
   (4) accidental changes. If none: say **`No gaps.`** only — no checklist walkthrough. If
   some: list them plainly and **wait** (close gaps vs land as-is). Do not auto-fix.
   "Not yet committed" is a process step, not a gap.
1. **In the main clone**, stash anything uncommitted so main is clean before the merge
   (`git stash push -u -m "land-<branch>"` — skip if main is already clean).
2. **In the worktree**, rebase the feature branch onto main: `git rebase main`. Resolve
   conflicts. If the rebase touched covered code, re-run the relevant checks in that worktree
   **before** merging.
3. **From the main clone**, `git merge --no-ff <branch>` — a real merge commit, so the worktree's
   commit history is kept. **Never squash.** *Exception:* if the branch is exactly **one** commit
   (`git rev-list --count main..<branch>` = 1), a plain fast-forward `git merge <branch>` is fine —
   there is no history to preserve. Two or more commits ⇒ `--no-ff`.
4. If step 1 stashed anything, `git stash apply <sha>` (not `pop`), confirm, then `git stash drop
   <sha>`.
5. **Clean up the worktree and branch** as part of landing: stop anything long-lived *you* started
   for that worktree, then from the main clone `git worktree remove worktree/<name>` and
   `git branch -d <name>` — both **without** `--force`.

**Never push** as part of landing. The merge in step 3 only ever touches the local `main` —
pushing is its own explicit ask (Rule 4).

### Cleaning up after a session

**Clean up only what you created, and only when the user says the work is done.** A worktree holds
real work — an unmerged branch and possibly uncommitted edits — so removing one is destructive and
is the user's call, never a tidy-up you do on your own initiative. **Exception:** *Landing a
worktree's branch into main* runs worktree/branch removal automatically as the last step of a
successful merge — the merge itself is what makes that removal safe.

```bash
git worktree remove worktree/<name>   # refuses if there are uncommitted changes — do NOT --force
git branch -d <name>                  # -d only; refuses to drop unmerged work
git worktree list                     # confirm it is gone
```

`--force` on either command silently discards work. If git refuses, that refusal is the point:
stop and tell the user what is unmerged or uncommitted, and let them decide.

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

## Skills — the executable half of this file

The recurring jobs are also shipped as **skills** in `.claude/skills/`, each a checklist that ends
in a working, tested artifact. Prefer the skill when one matches; come back here for the prose and
the background. Implementation skills still obey **Proposal before code** (Rule 0) and **feature
work in a linked worktree** (Rule 0b).

| skill | use it when |
| --- | --- |
| `todo-add` | record an idea in `docs/TODO.md` only — never implement |
| `todo-pick` | "what's next?" — shortlist open TODO items, user picks, then build |
| `work-start` | beginning a sizable task — judge it *is* work, propose, then create the worktree + branch |
| `work-finish` | merging a worktree's branch into main — preflight, rebase, checks, `--no-ff`, cleanup |

Add project-specific skills (e.g. a tmux smoke-test runner, a release step) alongside these once
the project's shape is known.

---

## Rules you must follow

0. **Proposal before code.** For any change that is not pure Q&A: research read-only, post
   **Problem · Diagnostic · Approach** (a few sentences each), and **wait** for the user before the
   first substantive edit. Approach must name the **checkout** (worktree vs main) when source will
   change. Full text under *Quick start*.
0b. **Feature work runs in a linked worktree — never on main by default.** Before the first
   substantive edit of feature work:
   1. If path is already `…/worktree/<name>/` (or `.git` is a `gitdir:` file), stay there; ensure
      the branch name matches the folder.
   2. Else if on the main clone: from the **main clone root**,
      `mkdir -p worktree && git worktree add worktree/<name> -b <name>`, then **cd into that
      folder** and only edit there. Tell the user the path and branch.
   3. Do **not** use the agent CLI's own worktree feature (e.g. Claude Code's `EnterWorktree` /
      `isolation: "worktree"`) — those checkouts are invisible to a GUI's worktree list.

   **Bootstrap phase:** ask main-vs-worktree each time instead of defaulting (see the note at the
   top of *Quick start*); the user's answer is the opt-out.

   **Skip isolation only when:** pure Q&A; docs/typo one-liners the user wants on main; the user
   said "here" / "on main" / "no worktree"; or you are already inside a linked worktree.
   **"Go ahead" on a plan is not permission to edit main.**
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

---

## Bash TUI conventions

Starting style, not law — deviate explicitly (say so and why) rather than silently.

### Language and portability

- **Must run on both Linux and macOS.** Every change is written for both; anything that differs
  (package manager, clipboard tool, GNU vs BSD flags) is handled explicitly, not assumed.
- `#!/usr/bin/env bash`. **Decide the minimum bash version up front** and write it here — macOS
  still ships bash 3.2 (no associative arrays, no `mapfile`, no `${var,,}`). *Open question.*
- **Runtime dependencies: `bash`, `pass`, `gpg`, `git`, `gum`, `tar`, `gzip` — and that's the
  list.** `gpg` is a direct dependency because first-run setup has to find or create a key before
  `pass init`; `git` because the store is synced as a git repo; `tar` + `gzip` because
  `keep store backup` packs everything into one file. Plus one clipboard tool — `pbcopy` /
  `wl-copy` / `xclip`, whichever `pass` itself uses on the machine — for `keep text show -c`.
  The script's approved-dependency block is the authoritative list. Anything
  beyond bash builtins and POSIX coreutils needs a stated reason and the user's OK — flag it with
  the **⚠ New dependency** line in the proposal (Rule 0), never slip it in. Dev-only tools (`shellcheck`, `bats`, `tmux`) are fine.
- **The approved-dependency list lives in the script itself**, at the top of the entry-point
  script, right after its opening project comment block — one place that is both the record and
  the check:

  ```bash
  #!/usr/bin/env bash
  # Keep — <project description comment block>
  # ...

  # --- Approved dependencies -------------------------------------------------
  # Every external command Keep calls beyond bash builtins and POSIX coreutils.
  # Adding one requires the "⚠ New dependency" line in a proposal and the user's OK
  # (AGENTS.md Rule 0). Format: name  min-version  why
  #   pass   <TBD>  storage + encryption
  #   gpg    <TBD>  key discovery / creation for first-run setup
  #   git    <TBD>  store history + sync (driven through `pass git`)
  #   gum    <TBD>  all UI widgets
  KEEP_DEPS=(pass gpg git gum)
  # ---------------------------------------------------------------------------
  ```

  When a proposal's **⚠ New dependency** is approved, adding it to this block (comment line
  **and** `KEEP_DEPS`) is part of the change. A command called anywhere in the code but missing
  from the list is a gap at `work-finish` time (accidental change).
- Check every entry in `KEEP_DEPS` at startup with `command -v` and fail loudly with an install
  hint — no silent fallbacks. Note GNU vs BSD differences (`sed -i`, `date`, `stat`, `base64`) wherever
  they bite.

### Using `pass` and `gum`

- **`pass` owns secrets: storage and crypto.** Go through its commands (`pass ls`/`show`/
  `insert`/`generate`/`edit`/`rm`/`mv`/`git`) — never read or write `.gpg` files directly, and
  never call `gpg` to do what `pass` already does. Direct `gpg` use is for key management
  (listing/creating keys for `pass init`, backups) and for **signing and verifying texts** (below).
  Likewise, git operations on the store go through `pass git …`, not a bare `git -C` into the
  store. **`pass git` always exits 0** (pass 1.7.4: its exit trap replaces git's status, and
  `pass git init` ignores failed commits) — judge git by its *output* (e.g.
  `[[ -n $(pass git rev-parse --verify --quiet HEAD) ]]`, an empty `status --porcelain`), never by
  the exit status. Respect its env vars (`PASSWORD_STORE_DIR`, `PASSWORD_STORE_KEY`,
  `PASSWORD_STORE_UMASK`, `PASSWORD_STORE_X_SELECTION`, …) rather than hard-coding paths.
- **Keep owns texts.** A text is a plain value stored beside the secrets, in the same folders:
  `<name>.txt` holds exactly the bytes given (Keep never adds a newline; typed input drops its
  final Enter), `<name>.txt.sig` is a detached `gpg` signature over them, made with the key of the
  nearest `.gpg-id` and accepted only from a key that `.gpg-id` lists. These two file kinds are
  the only ones Keep writes into the store itself; every change is committed through `pass git`,
  like pass does for secrets. **A name is one kind** — a secret or a text, never both — and every
  `keep secret` / `keep text` write enforces it.
- **Keep is a passthrough of `pass`: nothing we add may interfere with `pass`.** A store Keep
  has touched must stay a plain `pass` store that the `pass` CLI (and other `pass` clients) use
  exactly as before. The concrete rules get settled case by case as features hit them. When a
  proposal might affect this (extra files in the store, entry-format conventions, config), flag it
  in Approach so it's decided then, not discovered later. Settled so far: texts live in the store
  (the user's call), so `pass ls` / `pass find` list their `.txt` / `.txt.sig` files, and
  `pass mv` / `cp` / `rm -r` on a folder take its texts along — everything else in `pass` is
  unaffected.
- **`gum` owns the widgets** (`choose`, `filter`, `input --password`, `confirm`, `spin`, `style`,
  `pager`, …). Prefer composing gum commands over hand-rolled `tput`/`stty` screens; drop to raw
  terminal control only for what gum genuinely can't do, and say so. Treat gum's exit codes as
  meaningful (Esc/Ctrl-C cancel ≠ empty selection) and handle cancel on every prompt.
- Pin a **minimum `gum` version** once a feature we rely on needs it, and note it here. Known:
  `gum file` (2.0.2) is unreliable — `--directory` returns wrong paths after navigating, and in
  real use it didn't show folders the user knew existed. Don't use it; take paths as arguments
  or offer a `gum choose` list of likely places. `gum filter` (2.0.2) starts with its search box
  focused: the first Esc only leaves the box, the second cancels — no flag changes that. Keep
  accepts it (type-to-narrow matters for long lists) and says "Esc twice to cancel" in the
  filter's header.
- **Every command has help:** `keep <command> --help` / `-h` and `keep help <command>`,
  handled in `main` before the command checks tools or prompts. A new command adds its entry to
  `command-help` and a line to `usage`.
- **Keep's own state** (e.g. the last backup folder) lives in
  `${XDG_STATE_HOME:-~/.local/state}/keep/` — never inside the store. Keep it small and
  non-secret.
- `shellcheck`-clean. Any `# shellcheck disable=SCxxxx` carries a one-line reason next to it.
- **Naming:** functions are **kebab-case** (`require-tool`, `store-init`); variables are
  **snake_case** (`store_dir`, `install_cmd`). Commands are `<group> <action>`
  (`keep store backup`) and map to function `<group>-<action>` (`store-backup`);
  `keep pass …` hands everything to `pass` unchanged.
- **Script shape:** functions first, a `main` that dispatches subcommands, and the very last lines
  call `main "$@"` — guarded so the file can be `source`d by tests without running:
  `if [[ ${BASH_SOURCE[0]} == "$0" ]]; then main "$@"; fi`.
- Quote every expansion; `read -r`; `printf` over `echo`; `[[ ]]` over `[ ]`; `local` in functions.
- `set -euo pipefail` is fine but know its holes: `-e` is suppressed inside `if`/`&&`/`||` and in
  functions called from them, and `local x=$(cmd)` masks `cmd`'s exit status (declare, then assign).
- **Never pipe a command whose failure matters into a filter** without `pipefail` (or `PIPESTATUS`)
  — a pipeline reports only the last command's status, so a real failure is silently swallowed.

### Terminal state — always restore it

- `gum` restores the terminal around its own widgets; this is about anything *we* change.
- Anything that changes the terminal (`stty -echo`/raw mode, `tput civis`, alternate screen
  `tput smcup`, mouse reporting) is undone by **one** cleanup function installed with
  `trap cleanup EXIT` (plus `INT`/`TERM` → exit, so `EXIT` runs). A crash must not leave the user's
  shell with no echo or no cursor.
- Handle `SIGWINCH` (resize) by re-reading `tput lines`/`tput cols` and redrawing.
- Degrade when stdout is not a TTY (`[[ -t 1 ]]`) — non-interactive/scriptable paths should work
  without the UI and are the easiest to test.

### Structure for testability

- Keep **logic** (parsing, state, data transforms) in functions that don't touch the terminal, and
  **rendering / input** in a thin layer on top. Logic is tested with `bats` directly; the thin
  layer is what needs a TTY.
- A script that can be `source`d without running `main` (guard with
  `[[ ${BASH_SOURCE[0]} == "$0" ]] && main "$@"`) lets tests call its functions.

### Verifying a TUI (you have no real keyboard)

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
  `gum input --password` (or `read -rs`), hand it to `pass insert` via stdin, keep it in a
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

---

## Local tooling: CodingBooth (not set up here yet)

The user's other projects run inside **CodingBooth** (`booth` script + `.booth/`), their own tool
for containerized dev environments. Its source and manual live in the sibling repo
**`../CodingBooth`** (`README.md`, `CODINGBOOTH.md`, `docs/`) — treat it as an external dependency;
don't edit it as part of this project's work.

This repo has **no booth yet**, so agents run directly on the host — there is no container boundary
and no booth-provided permission deny list; the rules above are the whole safety layer. If a booth
is added, it only needs a light template set for this project (bash, `pass` + `gpg`, `gum`,
`shellcheck`, `bats`, `tmux`, the agent CLI) — update this section with the config and pinned version (`.booth/tools/codingbooth.lock`).

---

## Project specifics (fill in)

| Path | What's there |
| --- | --- |
| `keep` (TBD) | Entry point |
| `lib/` (TBD) | Sourced modules — logic separate from rendering |
| `test/` | `bats` tests — `helpers.bash` (sandbox setup), `text.bats` (`keep text` / `keep secret`) |
| `test-booth/` | CodingBooth for trying Keep in a clean container (`pass`, `gum`, `shellcheck`, `bats`, `tmux`); inside, `test-booth/` is `~/code` and the repo is `~/keep` |
| `test-booth/test1/` … `test4/` | tmux-driven tests: `store init` (happy path / other paths), `store backup` + `restore`, `store export`; each keeps its throwaway keys, stores and backups in a git-ignored `sandbox/` |
| `docs/TODO.md` | Backlog used by `todo-add` / `todo-pick` |

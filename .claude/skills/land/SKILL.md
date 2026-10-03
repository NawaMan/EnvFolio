---
name: land
description: Land a worktree's feature branch into local main — preflight with gap audit, rebase, merge (--no-ff unless one commit), then remove the worktree and branch. Use only when the user explicitly asks to "land" or "merge into main".
---

# Land a worktree's branch into main

Merging is a deliberate act, same bar as any commit/push (AGENTS.md Rule 4) — only when the user
asks to land/merge a worktree's work, never on your own initiative. The guardrails in AGENTS.md
(*Landing and cleanup*) still apply; this is the full procedure.

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
   for that worktree, then from the main clone:

   ```bash
   git worktree remove worktree/<name>   # refuses if there are uncommitted changes — do NOT --force
   git branch -d <name>                  # -d only; refuses to drop unmerged work
   git worktree list                     # confirm it is gone
   ```

   If git refuses, that refusal is the point: stop and tell the user what is unmerged or
   uncommitted, and let them decide.

**Never push** as part of landing. The merge in step 3 only ever touches the local `main` —
pushing is its own explicit ask (Rule 4).

# Changelog

User-visible changes to Keep. Newest first.

## Unreleased

### Added

- `keep store backup` — saves the whole store and its GPG key (still protected by its
  passphrase) into one file, `backup-<date>-<time>--keep.tar.gz`. `--history` keeps the store's
  git history (off by default); `--encrypt` encrypts the file with a passphrase of its own
  (`--keep.gpg`), `--passphrase-stdin` reads that passphrase from stdin.
- `keep store restore <file>` — brings the store and its key back from such a backup: imports and
  trusts the key, starts a new git history when the backup has none, and refuses when the store
  folder already exists.
- `keep exec` and `keep shell` — run a command, or your shell, with entries from the store as
  environment variables; secrets only with `--secrets`. A variable is named by the entry's path,
  a top `@namespace` folder removed (`@nawa/gh/token` → `GH_TOKEN`); a later entry overrides an
  earlier one, and `VAR=<name>` overrides them all. `--all` loads every entry outside the
  namespaces first; `--names` shows which variable gets which entry, reading nothing. Values are
  never printed. Secrets left out for want of `--secrets` are counted on stderr; a name bash
  keeps for itself (`RANDOM`, `UID`) is refused.
- `keep store init` — creates the Keep store (`$KEEP_STORE_DIR`, default `~/.keep`): picks or
  creates the GPG key, runs `pass init`, and starts the store's git history. Options: `--key`,
  `--new-key`, `--name`, `--email`, `--passphrase-stdin`.
- `keep store path` — prints the store's folder; `--help` and `keep help store path` explain it.
- `keep secret ls | find | grep | show | insert | edit | generate | rm | mv | cp` — thin
  pass-throughs to the matching `pass` commands, run against the Keep store. Options that would
  put a secret on screen without asking are refused: `insert --echo`, and `--qrcode` on `show`
  and `generate`. `secret ls` lists folders only; `secret show` shows entries only. `secret ls` and
  `secret find` leave texts out.
- `keep ls` — lists texts and secrets together in one tree, each marked (S) or (T). `--flat` (on
  `keep ls`, `text ls` and `secret ls`) lists full names one per line instead.
- `keep text ls` — lists the texts as a tree, names only; mirrors `keep secret ls`.
- `keep text find` — lists the texts whose names contain any of the parts; mirrors
  `keep secret find`.
- `keep text edit` — edits a text in `$EDITOR` (or adds it), then signs and commits it; a text
  changed outside Keep is refused, not re-signed.
- `keep text generate | rm | mv | cp` — mirror the secret commands for texts; on a folder, they
  act on its texts only, never its secrets. A generated or moved text is signed and verifies.
- `keep text show` — prints a text only if its signature is there, matches, and is by the store's
  key; otherwise it fails and says how to check and re-sign. `-c`/`--clip[=<line>]` copies its
  first line (or line `<line>`) to the clipboard instead, as `secret show -c` does, but the
  clipboard is not cleared: a text is not a secret.
- `keep text grep` — prints the matching lines of every text under its name; mirrors
  `keep secret grep`.
- `keep text insert` — adds a text: kept plain as `<name>.txt` in the same layout as the secrets,
  signed with the store's key as `<name>.txt.sig`, and committed. `-t <text>` gives it on the
  command line; `-m` takes several lines.
- `keep help [command]` and `--help` on every command; `keep version`.
- A dependency check on every run: if `pass`, `gpg`, `git` or `tree` is missing (or the clipboard tool for
  `-c`), Keep shows what to install and stops.

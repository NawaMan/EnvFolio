# Changelog

User-visible changes to EnvFolio. Newest first.

## Unreleased

### Changed

- `envfolio store init` and `envfolio store restore` accept an empty folder at `$ENVFOLIO_STORE_DIR`
  (a mount point or bind mount, say), as it is, and make the store inside it; a folder with
  anything in it is still refused.
- A store folder made by `envfolio store init` is private (`700`), its git history too, as one made
  by `envfolio store restore` already was.

### Added

- Like gpg for its home folder, EnvFolio warns when the store's folder belongs to someone else or
  other users can get into it (a store made by 0.1.0 `envfolio store init` was open to them).
  `store init`, `store restore` and `store import` then ask before using it — `--allow-unsafe-folder`
  answers yes; every other command carries on. There is no setting to hide the warning.

## 0.1.0 — 2026-10-07

### Added

- `envfolio store export` — copies the items you name or pick (texts in a folder; its secrets with
  `--secrets`) into one `.envfolio` file, encrypted and signed with a new key made for that export only.
  The file is always locked: with a passphrase, or with `--to`, to the public key of where it is
  going (a key file or a key in your keyring). Your store's key never leaves the machine.
- `envfolio store import` — brings all (`--all`) or some of an export's items into the store, making
  the store first when there is none (`--key`). Texts are checked against the export's signature
  before anything is written; an item already in the store is overwritten or skipped
  (`--overwrite`, `--skip-existing`, or asked).
- `envfolio store backup` — saves the whole store and its GPG key (still protected by its
  passphrase) into one file, `backup-<date>-<time>--envfolio.tar.gz`. `--history` keeps the store's
  git history (off by default); `--encrypt` encrypts the file with a passphrase of its own
  (`--envfolio.gpg`), `--passphrase-stdin` reads that passphrase from stdin.
- `envfolio store restore <file>` — brings the store and its key back from such a backup: imports and
  trusts the key, starts a new git history when the backup has none, and refuses when the store
  folder already exists.
- `envfolio exec` and `envfolio shell` — run a command, or your shell, with entries from the store as
  environment variables; secrets only with `--secrets`. A variable is named by the entry's path,
  a top `@namespace` folder removed (`@nawa/gh/token` → `GH_TOKEN`); a later entry overrides an
  earlier one, and `VAR=<name>` overrides them all. `--all` loads every entry outside the
  namespaces first; `--names` shows which variable gets which entry, reading nothing. Values are
  never printed. Secrets left out for want of `--secrets` are counted on stderr; a name bash
  keeps for itself (`RANDOM`, `UID`) is refused.
- `envfolio store init` — creates the EnvFolio store (`$ENVFOLIO_STORE_DIR`, default `~/.envfolio`): picks or
  creates the GPG key, runs `pass init`, and starts the store's git history. Options: `--key`,
  `--new-key`, `--name`, `--email`, `--passphrase-stdin`.
- `envfolio store path` — prints the store's folder; `--help` and `envfolio help store path` explain it.
- `envfolio secret ls | find | grep | show | insert | edit | generate | rm | mv | cp` — thin
  pass-throughs to the matching `pass` commands, run against the EnvFolio store. Options that would
  put a secret on screen without asking are refused: `insert --echo`, and `--qrcode` on `show`
  and `generate`. `secret ls` lists folders only; `secret show` shows entries only. `secret ls` and
  `secret find` leave texts out.
- `envfolio ls` — lists texts and secrets together in one tree, each marked (S) or (T). `--flat` (on
  `envfolio ls`, `text ls` and `secret ls`) lists full names one per line instead.
- `envfolio text ls` — lists the texts as a tree, names only; mirrors `envfolio secret ls`.
- `envfolio text find` — lists the texts whose names contain any of the parts; mirrors
  `envfolio secret find`.
- `envfolio text edit` — edits a text in `$EDITOR` (or adds it), then signs and commits it; a text
  changed outside EnvFolio is refused, not re-signed.
- `envfolio text generate | rm | mv | cp` — mirror the secret commands for texts; on a folder, they
  act on its texts only, never its secrets. A generated or moved text is signed and verifies.
- `envfolio text show` — prints a text only if its signature is there, matches, and is by the store's
  key; otherwise it fails and says how to check and re-sign. `-c`/`--clip[=<line>]` copies its
  first line (or line `<line>`) to the clipboard instead, as `secret show -c` does, but the
  clipboard is not cleared: a text is not a secret.
- `envfolio text grep` — prints the matching lines of every text under its name; mirrors
  `envfolio secret grep`.
- `envfolio text insert` — adds a text: kept plain as `<name>.txt` in the same layout as the secrets,
  signed with the store's key as `<name>.txt.sig`, and committed. `-t <text>` gives it on the
  command line; `-m` takes several lines.
- `envfolio help [command]` and `--help` on every command; `envfolio version`.
- A dependency check on every run: if `pass`, `gpg`, `git` or `tree` is missing (or the clipboard tool for
  `-c`), EnvFolio shows what to install and stops.

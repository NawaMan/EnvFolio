# Changelog

User-visible changes to EnvFolio. Newest first.

## Unreleased

### Added

- `folio exec --from <file>` and `folio shell --from <file>`: take the entries from a file made by
  `folio export` instead of the store, on a machine with no EnvFolio store at all. Everything else
  is as from a store (`--secrets`, `--all`, namespaces, `VAR=<name>`). gpg asks for the file's
  passphrase, or it comes from `--passphrase-fd <n>`; a file locked to your key needs that key in
  your keyring. The file is opened in a private temporary folder that is removed before the command
  starts.

## 0.5.0 — 2026-10-11

### Changed

- The store commands are one level up: `folio init`, `folio path`, `folio backup`, `folio restore`,
  `folio export` and `folio import` (were `folio store init` and so on). `folio store …` now stops
  and says which command to run instead.
- `export` asks "How should the file be locked?" with "With a public key" (was "To a public key").
- Before gpg asks for a new export file's passphrase, `export` now also says to be ready to give it.
- At "Press Enter to continue", what you type is not shown and is dropped, so a passphrase typed there
  too early never appears on screen.

## 0.4.0 — 2026-10-11

### Changed

- The command is now `folio` (the app is still EnvFolio): `folio store init`, `folio text show`, and
  so on. Releases ship the script as `folio`. The names EnvFolio uses for its files and settings
  follow, with no fallback to the old ones:
  - the store folder: `~/.folio` (was `~/.envfolio`)
  - `FOLIO_STORE_DIR` (was `ENVFOLIO_STORE_DIR`) and `FOLIO_SHELL` (was `ENVFOLIO_SHELL`)
  - backups: `--folio.tar.gz` and `--folio.gpg` (were `--envfolio.tar.gz`, `--envfolio.gpg`)
  - exports: `.folio` (was `.envfolio`)
  - inside them, `folio-backup.txt` and `folio-export.txt` (were `envfolio-*.txt`)

  To upgrade from 0.3.0: put `folio` on your `PATH` and remove `envfolio`
  (e.g. `rm ~/.local/bin/envfolio`); `mv ~/.envfolio ~/.folio`, or rename `ENVFOLIO_STORE_DIR` to
  `FOLIO_STORE_DIR` where you set it; rename any backup or export you keep to the new ending
  (`x--envfolio.tar.gz` → `x--folio.tar.gz`, `x.envfolio` → `x.folio`). `store restore` and
  `store import` still read what is inside a 0.3.0 file once it is renamed.

## 0.3.0 — 2026-10-10

### Changed

- `envfolio store init`, `store export` and `store import` now walk you through what they need:
  an overview first, then each input either confirmed ("✓ …") or asked for when it is missing,
  then "That is everything needed" — and only then is anything made. Anything given as an option
  is not asked.
- `store export` asks where to write the file when there is no `-o`, offering
  `store-<date>.envfolio` in the current folder (the default name was `export-<date>-<time>.envfolio`),
  and how to lock it when neither `--to` nor a passphrase option is given: with a passphrase, or
  to a public key picked from your keyring or given as a key file. A `--to` key is checked before
  anything is made.
- `store import` asks for the export file when none is given. With no store yet, it asks for the
  new store's key (as `store init` does) before anything is made, instead of in the middle of the
  import. `--passphrase-stdin` now also needs the file given, and `--key` when there is no store yet.
- Before gpg asks for a passphrase that EnvFolio knows it will ask for — a new key's, an export
  file's — EnvFolio says which one it is and waits for Enter.
- At a file question, Tab completes file and folder names, and a leading `~` is your home folder.

### Added

- `--passphrase-fd <n>` for `store init`, `store export` and `store import`: the passphrase from the
  first line of file descriptor `<n>`, leaving stdin free for the other questions.

## 0.2.0 — 2026-10-07

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

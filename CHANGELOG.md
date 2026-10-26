# Changelog

User-visible changes to EnvFolio. Newest first.

## Unreleased

1.0.0: commands, options and file formats (the store, vars files, `.folio` exports, backups) are
now stable. A change that breaks any of them will come with a new major version. Changes since
0.8.0:

### Added

- **Experimental, may change:** `--use <@namespace>` for `exec`, `shell` and `export`: takes every
  item under the namespace as if it were not in the path (`--use @app2/@prod`:
  `@app2/@prod/server/user` is `server/user`, so `SERVER_USER`), also for a vars file's `@{…}`. Only
  namespaces, from the front. `export --use` writes the items so, e.g. one file per environment.
  `--names` says where a peeled one came from.
- `folio init` makes a post-quantum key (ML-KEM + ECC) with gpg 2.5.21 or later — asked, when
  anything else is asked, with classical as the other choice. `--key-type pqc|classical` picks it
  without asking. With an older gpg, nothing changes (`--key-type pqc` is refused). The summary
  shows the key's `Type:`.
- A backup of a post-quantum key, or an export locked to one, says it needs gpg 2.5.21 or later to
  open. On an older gpg, `restore`, `import` and `--from` refuse such a file, change nothing, and
  link to how to update gpg (a new README section).
- `exec`/`shell --debug`: show which variable gets which entry, as `--names` does, on stderr, and
  then run. `--confirm`: show the same and ask on the terminal (not stdin) first. No value is read,
  and the store key is not unlocked (`--store-passphrase-fd`), before the yes; a `--from` file is
  opened first, to show its names.
- On a terminal that draws emoji, `folio ls` and `exec`/`shell --names` mark a secret 🔑 and a text
  📄 instead of (S)/(T): `🔑gh/token`. folio asks the terminal — it writes 🔑, asks where the
  cursor went (two cells: yes), and wipes the line — so one that cannot draw them keeps (S)/(T), as
  do the Linux console and a locale that is not UTF-8. In a pipe or a file it stays (S)/(T).
- `--plain` for `ls`, `text ls`, `secret ls`, `text find`, `secret find`, `exec` and `shell`: no
  colour, even on a screen; for `ls`, `exec` and `shell`, (S)/(T) rather than emoji.

### Changed

- **`exec`/`shell`: the entries, `--all` and `--use` are taken in the order typed, and the last one
  wins.** `--all` used to load first wherever it was typed: `@nawa --all` now lets the shared
  entries win; write `--all @nawa` for the old way.
- **`exec`/`shell --vars`: the vars files are made after the entries, `--all` and `--use`, and they
  only feed them.** `${NAME}` sees them, but the command gets only what the vars files set. The
  entries typed used to be set after the file, over it, and went to the command too; to pass one
  on, set it in the file (`GH_TOKEN=${GH_TOKEN}`, or `@{gh/token}`).
- **`exec`/`shell`: `VAR=<name>` no longer takes its entry away from the rule.** It picks `<name>`
  as the entries, `--all` and `--use` left it (else from the store), wherever it is typed, and
  still wins over a variable of the same name; the entry keeps its own variable too:
  `GITHUB_TOKEN=gh/token gh` now also sets `GH_TOKEN`. With `--use`, it can rename a peeled one
  (`--use @app2/@prod U=server/user`).
- `exec`/`shell`: entries under a namespace inside a namespace (`exec @app2/@prod`) are left out
  with one line for that namespace, saying to add `--use @app2/@prod` — not a warning for each
  entry suggesting `VAR=<name>`.
- `exec`/`shell`: two items of one selection (an entry, a folder, `--all`, a `--use`, a vars
  file's `@{folder/*}`) that would give the same variable are refused before anything runs —
  e.g. `--use @app2` holding both `@prod/…` and `@staging/…` — instead of the later name, in
  sorted order, winning. From two selections, the later still wins.
- `folio ls`, `text ls`, `secret ls` and `text find`/`secret find` show secrets in yellow and texts
  in green, on a screen that shows colour; `exec`/`shell --names` too. Sent to a pipe or a file, or
  with `NO_COLOR` set or `TERM=dumb`, they now print no colour codes at all (folders used to keep
  theirs).
- `exec`/`shell --names`, `folio ls` and the export/import lists put the mark right against the
  name: `gh/token(S)` for exec, `(S)gh/token` for the others (was `gh/token (S)`, `(S) gh/token`).
- `exec`/`shell --names` with `--store-passphrase-fd` no longer reads the passphrase: it reads no
  value, so it needs none.
- The warning about gpg 2.5.24 from `restore`, `import` and `--from` is now a check: opening an
  export, EnvFolio tries its key, and refuses — saying why, nothing changed — only when this gpg
  cannot use it. gpg 2.5.23 and 2.5.24 as released cannot use a key imported without a passphrase,
  as an export's is ([T8469](https://dev.gnupg.org/T8469)); Homebrew's 2.5.24 has the fix, and
  works with a classical key and a post-quantum one.

### Fixed

- With stdin a pipe or a file (`echo x | folio text insert x`, `export -s
  --file-passphrase-stdin`), gpg could not ask for the store key's passphrase on a terminal and
  stopped with "Inappropriate ioctl for device". EnvFolio now sets `GPG_TTY` to its terminal when
  it is not set; the command `exec` and `shell` run does not get it.
- A prompt (`[y/N]`, a name, a number, Enter to continue — `pass`'s too) is no longer answered by
  keys typed before it showed: an extra Enter, or the newline at the end of a paste. At a terminal,
  what is waiting is dropped first; answers piped in are read as before.
- `folio completion zsh` no longer fails with `compinit: initialization aborted` and
  `command not found: compdef` when zsh finds a completion file it does not trust (one owned by
  another user, or in a world-writable folder) and no one can answer its question — as at
  Powerlevel10k's instant prompt. It skips that file instead.

## 0.8.0 — 2026-10-22

### Added

- `folio completion bash|zsh`: Tab completion for commands, their options, and the names of texts
  and secrets (names only: nothing is read or decrypted), plus file names where a file goes. zsh
  gets its own, with a description beside each choice; bash's works with the 3.2 macOS ships.
  Load it with `eval "$(folio completion bash)"` in `~/.bashrc`, or `zsh` in `~/.zshrc`.
- `folio exec` and `folio shell` take `--vars <file>`: a file saying which variables to set and
  where each value comes from — `LOG_LEVEL=debug`, `HOST=${HOSTNAME:-localhost}` (the environment),
  `TOKEN=@{gh/token:-none}` (a text or secret), several in one value
  (`DB_URL=postgres://@{db/user}:@{db/pass}@${DB_HOST:-db}/app`), fallbacks chained either way, and
  `@{folder/*}` for every entry under a folder. It holds no secret, so it can be committed with a
  project. Nothing in it runs; a mistake stops everything, saying the file and line. `--names`
  shows where each variable would come from, reading no value.
- `folio vars check <file>...`: check vars files for mistakes, every one with its line, without a
  store.
- `folio export --vars <file>`: export the items a vars file names, instead of picking them, to run
  the same command elsewhere with `folio exec --from <export> --vars <file>`. An item in a fallback
  is taken when it is there and left out with a note when not; any secret needs `--secrets`.

## 0.7.0 — 2026-10-21

### Added

- `--store-passphrase-fd <n>`: the store key's passphrase from the first line of file descriptor
  `<n>`, instead of gpg's prompt, for every command that may need it — `backup`, `export`, `import`,
  `exec`, `shell`, `text insert`/`edit`/`generate` and `secret show`/`grep`/`edit`/`generate`. EnvFolio
  hands it to gpg-agent once (a wrong one stops the command before anything changes); the agent
  then keeps it for its cache time, as when it is typed.
- `--file-passphrase-fd <n>` for `backup --encrypt` and `restore` too.

### Changed

- The passphrase options are named by whose passphrase they give: `--passphrase-stdin` and
  `--passphrase-fd` are now `--store-passphrase-stdin` / `--store-passphrase-fd` for `init`, and
  `--file-passphrase-stdin` / `--file-passphrase-fd` for `backup`, `restore`, `export`, `import` and
  `exec`/`shell --from`. The old names stop and say the new one.
- The fd a passphrase is read from is closed after, so a command `folio exec` runs never gets it.

## 0.6.0 — 2026-10-19

### Added

- `folio exec --from <file>` and `folio shell --from <file>`: take the entries from a file made by
  `folio export` instead of the store, on a machine with no EnvFolio store at all. Everything else
  is as from a store (`--secrets`, `--all`, namespaces, `VAR=<name>`). gpg asks for the file's
  passphrase, or it comes from `--passphrase-fd <n>`; a file locked to your key needs that key in
  your keyring. The file is opened in a private temporary folder that is removed before the command
  starts.
- A warning from `restore`, `import`, and `exec`/`shell --from` with `--secrets`, when gpg is
  2.5.24 — the version Homebrew installs at the time of writing. It imports a secret key it then
  cannot decrypt with (it says "No secret key"), so those fail. gpg 2.4 (and 2.5.22) are fine.

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

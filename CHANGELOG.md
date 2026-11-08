# Changelog

User-visible changes to EnvFolio. Newest first.

## Unreleased

## 2.0.0 — 2026-11-08

### Added

- `folio export` asks whether to set a passphrase on the export's own key too (no by default;
  not asked with `--file-passphrase-stdin`), before it asks how to lock the file. On yes, gpg asks
  you to choose it, after the items are copied, then once more to pack the key; or give it with the
  new `--key-passphrase-fd <n>`. `folio import` and `exec`/`shell --from` then ask for it, or take
  it with `--key-passphrase-fd <n>`.

- Before each passphrase gpg asks for — when exporting, importing, and with `exec`/`shell --from` —
  EnvFolio shows the export file and its two locks (the file's, and the passphrase of the key
  inside), and marks the one gpg asks for next.

- `folio export --key-type <pqc|classical>`: the export's own key can be post-quantum. When this
  gpg can make one, EnvFolio asks (classical by default, as the file may be opened where gpg cannot
  use one yet), and reminds that opening the file then needs gpg 2.5.21 or later. `folio import`
  and `exec`/`shell --from` on an older gpg say so, instead of "has no secret key".

- `FOLIO_FILE_DIR`: a folder for your `.folio` exports, so you can name one instead of giving its
  path. `folio exec --from app2-prod` (and `shell --from`, `import`, `export -o`) is
  `$FOLIO_FILE_DIR/app2-prod.folio`; a subfolder works too (`app2/prod`). Tab completes the names.

- `folio show text|secret --from <export>` and `folio ls [text|secret] --from <export>`: show an
  entry, or list what is in an export file, without importing it and with no store, as
  `exec --from` reads it (a path ending in `.folio`, or a name in `FOLIO_FILE_DIR`; with
  `--file-passphrase-fd` and `--key-passphrase-fd`). `--clip` works too. A text is checked with the
  export's own key.

- `-q` (`--quiet`) with every command, or `FOLIO_QUIET=1`: leave out the notes on what happens
  next — the picture of an export's locks, the note before gpg asks for a passphrase,
  `Copied … to clipboard`, shell's `loaded …`. Errors, warnings and questions are still said. Not
  for `grep`, where `-q` is grep's own.

- `folio show --help` and `folio help show` — and so for `find`, `grep`, `insert`, `edit`,
  `generate`, `rm`, `mv` and `cp` — show the help of both kinds, text and secret, instead of
  asking which one.

### Changed

- **Breaking** (why this is 2.0.0): `folio export -o` takes an export the way every command now
  does — `-o out/items` is a name in `FOLIO_FILE_DIR`, not `out/items.folio`, and `-o <folder>` is
  gone (both below). And `-` and `.` in an entry's name now give a variable (`gh/api-key` is
  `GH_API_KEY`): a folder holding both `api-key` and `api_key` is refused as a clash, where
  `api_key` loaded before.

- An entry's variable name turns `-` and `.` into `_` too, as it did `/`: `gh/api-key` is
  `GH_API_KEY` and `db/host.name` is `DB_HOST_NAME`, for `exec`, `shell` and vars files — no longer
  left out with a warning. `api-key` beside `api_key` in one folder is refused, as `a/b` beside
  `a_b` is. A name still not valid (one starting with a digit, or with `+` or a space) is still
  left out with the warning.

- `exec` with a command that is not there says `there is no command '…' to run.` (exit 127), not
  bash's `line …: exec: …: not found`; typed in quotes as for a shell (`-- 'echo $GH_USER'`), it says
  the command runs without one, and how: `sh -c '…'`.

- A classical export's own key is now one RSA-3072 key that signs and encrypts, not Ed25519 with
  an RSA-3072 subkey: with a passphrase on it, gpg asks you to choose it once, not for each part.
  Exports made before still open.

- The temporary keyring an export's key is used in now asks with your own pinentry (the
  `pinentry-program` in your `gpg-agent.conf`, a window one too).

- **Every command that takes an export file reads it the same way:** one ending in `.folio` is a
  path, as written; anything else is a name in `FOLIO_FILE_DIR`, and refused when that is not set.
  For `folio export -o` this means `.folio` is no longer added to a path (`-o out/items` is now the
  name `out/items`: write `-o out/items.folio`), and `-o <folder>` is gone (write
  `-o <folder>/<name>.folio`). With no `-o`, the file offered is `store-<date>` in `FOLIO_FILE_DIR`
  when it is set.

- `show text -c` and `show secret -c` say `Copied … to clipboard` on stderr, not stdout: stdout is
  only ever the output itself. `-q` alone is no longer refused as `pass`'s `--qrcode`: it is
  `--quiet` now (`-nq` still is).

- The README shows the latest release, and links to the website's videos and articles; the
  website links back to the README, and every episode's last slide shows the install script. The
  website shows EP001 only for now: EP002 and EP003 are drafts, off the site.

## 1.1.0 — 2026-11-01

### Added

- An install script for installing without Homebrew:
  `curl -fsSL https://raw.githubusercontent.com/NawaMan/EnvFolio/main/install.sh | bash`. It checks
  the download against the release's `SHA256SUMS` and puts `folio` in `~/.local/bin`, no sudo;
  `FOLIO_INSTALL_DIR` and `FOLIO_VERSION` pick the folder and the release.

### Fixed

- `folio import` and `exec`/`shell --from` work with Ubuntu's gpg 2.4.8 (with libgcrypt 1.12.0),
  which refused every export ("cannot use the key in …"): it often cannot use a cv25519 key it has
  just imported, a gpg bug. An export's own key is now ed25519 with an RSA encryption subkey,
  which that gpg — and 2.5.23 and 2.5.24 as released ([T8469](https://dev.gnupg.org/T8469)) — can
  use; an export made before still has a cv25519 key, and the message says to export it again or
  use Homebrew's gpg. `folio restore` of a cv25519 store key can still fail on that gpg ("Bad
  passphrase" when the store is used): use Homebrew's gpg.

## 1.0.1 — 2026-10-30

### Fixed

- `folio completion zsh` also works as the file `_folio` on `$fpath` (it starts with
  `#compdef folio`), so Homebrew can install Tab completion for zsh, as it does for bash: no
  `eval` line needed. `eval "$(folio completion zsh)"` works as before.

## 1.0.0 — 2026-10-27

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
  anything else is asked, with classical as the other choice (Enter picks post-quantum).
  `--key-type pqc|classical` picks it without asking. With an older gpg, nothing changes
  (`--key-type pqc` is refused). The summary shows the key's `Type:`.
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
- `--plain` for `ls`, `ls text`, `ls secret`, `find text`, `find secret`, `exec` and `shell`: no
  colour, even on a screen; for `ls`, `exec` and `shell`, (S)/(T) rather than emoji.
- `FOLIO_STORE_PASSPHRASE_FILE=<file>`, for a machine you trust: the store key's passphrase is the
  file's first line, for every command that takes `--store-passphrase-fd` (which wins over it), and
  for the new key `init` makes — so it is never asked. The file must be yours and closed to others
  (`chmod 600`), and is refused otherwise. The command `exec` and `shell` run does not get it.
- `--fresh-passphrase`, for every command, or `FOLIO_FRESH_PASSPHRASE=1`: gpg-agent forgets the
  store key's passphrase when the command starts and when it ends — for `exec` and `shell`, before
  the command or shell starts — also a key first used during it (a `--from` file's). The
  passphrase of an encrypted backup or an export is not kept at all. Other keys are left as they
  were; one with the same passphrase still unlocks the store key.

### Changed

- **The action comes first, then the kind: `folio show secret web/github`, `folio insert text …`,
  `folio check vars …`** (was `folio secret show`, `folio text insert`, `folio vars check`). Help,
  error messages, Tab completion and the MANUAL use this order. The kind first still works the
  same. An action with no kind (`folio show web/github`) says to name one. `folio ls text` and
  `folio ls secret` list one kind; a top folder named `text` or `secret` is `folio ls text/`.
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
- `folio ls`, `ls text`, `ls secret` and `find text`/`find secret` show secrets in yellow and texts
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

- `export --vars` with `<name>`s or `--use` too: the closing box's `folio exec --from` line now
  has `--all`. Without it, what they brought — e.g. a `--use`'s `db/host` — was not loaded there,
  so a `${DB_HOST}` it should feed came out empty.
- With stdin a pipe or a file (`echo x | folio insert text x`, `export -s
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

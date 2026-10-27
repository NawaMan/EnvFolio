<p align="center"><img src="logo.svg" alt="EnvFolio" width="160"></p>

# EnvFolio

Run a command with your secrets and settings as environment variables, kept in a
[`pass`](https://www.passwordstore.org/) store — the way `op run` and `aws-vault exec` do, with
nothing but bash, `pass` and `gpg`.

```bash
folio exec --secrets gh/token -- gh release list     # gh gets GH_TOKEN
```

- **Two kinds of item.** A *secret* is encrypted, as in `pass`. A *text* is a plain value — a URL,
  a user name, a region — kept readable but signed, so a changed one is caught. "Item" means
  either.
- **Built on `pass`.** The store is a `pass` store with a git history; `pass` itself can still
  read every secret in it.
- **Easy to move.** One command each to back up, restore, export and import items.
- **Made for places you don't fully trust.** Export only what a cloud machine needs, locked to
  its key, and run there with no store at all. One motivation is a cloud CodingBooth, where users
  can put their sensitive items for themselves to use inside the booth, in a way that
  `CodingBooths.online` (the provider) never needs to touch the actual secrets.

Website: [nawaman.github.io/EnvFolio](https://nawaman.github.io/EnvFolio/) ·
Every command, with examples: [MANUAL.md](MANUAL.md) ·
What changed: [CHANGELOG.md](CHANGELOG.md)

## Install

With [Homebrew](https://brew.sh) (macOS or Linux):

```bash
brew install nawaman/tap/folio
```

Or by hand — EnvFolio is one bash script. Download `folio` and `SHA256SUMS` from the
[latest release](https://github.com/NawaMan/EnvFolio/releases/latest), check it, make it
executable and put it on your `PATH`:

```bash
sha256sum -c SHA256SUMS            # macOS: shasum -a 256 -c SHA256SUMS
chmod +x folio && mv folio ~/.local/bin/
folio version
```

If `folio version` is not found, `~/.local/bin` is not on your `PATH` (often the case on macOS):
add `export PATH="$HOME/.local/bin:$PATH"` to your shell's rc file, or move `folio` to another
folder on it. To upgrade, do the same with the new release; to uninstall, delete the file.

For Tab completion of commands, options and item names, add `eval "$(folio completion bash)"` to
`~/.bashrc`, or `eval "$(folio completion zsh)"` to `~/.zshrc`.

### Dependencies

- `bash` 3.2 or newer (the one macOS ships is enough)
- `pass`, `gpg`, `git`, `tree`, `tar`, `gzip`
- one clipboard tool, only for `-c`: `pbcopy` (macOS), `wl-copy` (Wayland) or `xclip` (X11)
- optionally, a GUI pinentry to have gpg ask for passphrases in a window — see
  [Passphrase prompts in a window](MANUAL.md#passphrase-prompts-in-a-window-gui)

```bash
brew install pass gnupg tree          # macOS
sudo apt install pass gnupg git tree  # Debian / Ubuntu
```

`gpg` 2.4 is fine. 2.5.21 or later can also make a post-quantum key — see
[Updating gpg for post-quantum keys](#updating-gpg-for-post-quantum-keys). On Windows, EnvFolio
runs in WSL.

## Quick start

```bash
folio init                                  # make the store, and a GPG key for it if you want one
folio insert secret gh/token                # asks for the secret, never shows it
folio insert text -t eu-west-1 aws/region   # a text can be given on the command line
folio ls                                    # both, as a tree

folio exec --secrets gh aws -- ./release.sh    # gets GH_TOKEN and AWS_REGION
folio shell --secrets gh                       # a shell with GH_TOKEN; `exit` to leave
```

Texts load by default; a secret loads only with `--secrets`. Use `--names` to see which variable
gets what without reading any value:

```bash
folio exec --secrets --names gh aws -- ./release.sh
```

## Texts and secrets

| | Secret | Text |
| --- | --- | --- |
| Stored as | `<name>.gpg`, encrypted to the store's key | `<name>.txt`, plain, plus a signature `<name>.txt.sig` |
| Reading it | needs the key's passphrase | needs no passphrase; refused if changed outside EnvFolio |
| `exec` / `shell` | only with `--secrets` | loaded by default |
| `show -c` | clipboard cleared after 45 seconds | clipboard not cleared |
| For | tokens, passwords, private keys | URLs, user names, regions, ports — anything not secret that must not be tampered with |

A text and a secret can share a name. The commands always say which kind they mean:
`folio show secret web/github`, `folio show text web/github` — so a secret is never shown by
accident.

## Commands

| Command | What it does |
| --- | --- |
| `folio init` | Create the store (and its GPG key, or use one you have) |
| `folio path` | Print the store's folder |
| `folio backup` / `restore` | The whole store and its key, in one file and back |
| `folio export` / `import` | Some items, in one locked file and into another store |
| `folio ls [text\|secret]` | List items, as a tree or flat |
| `folio <action> text\|secret` | `show`, `insert`, `edit`, `generate`, `rm`, `mv`, `cp`, `find` (by name), `grep` (by value) |
| `folio exec` | Run a command with items as environment variables |
| `folio shell` | Start a shell with items as environment variables |
| `folio check vars` | Check how vars files are written |
| `folio completion bash\|zsh` | Print the Tab completion script |
| `folio help [command]`, `folio version` | Help and version |

The kind can come first too: `folio secret show` is `folio show secret`. Every command takes
`--fresh-passphrase` to have gpg-agent forget the store key's passphrase when it starts and ends.
Details: [MANUAL.md](MANUAL.md).

## Naming the variables

An item's variable name comes from its path:

1. a top folder whose name starts with `@` — a *namespace* — is dropped, or with `--use`, the
   namespaces it names;
2. `/` turns into `_`;
3. it is uppercased.

| Item | Variable |
| --- | --- |
| `gh/token` | `GH_TOKEN` |
| `@me/gh/token` | `GH_TOKEN` |
| `gh/api-key` | none — not a valid name; left out with a warning |

Namespaces can nest from the front of the path — `@app1/@prod/db/user` — but naming drops only the
top one: items under a nested namespace are left out, with a note to add `--use @app1/@prod`,
which peels the whole prefix (see [One contract, many environments](#one-contract-many-environments)).
After a folder without `@`, `@` is an ordinary character: `gh/@work/token` is not a valid name.

To pick the name yourself, write `VAR=<name>` on the command line:

```bash
folio exec --secrets GITHUB_TOKEN=gh/token -- gh release list
```

## Vars files

A vars file says what a command needs, by its own names, and where each value comes from —
`@{name}` is an item, `${NAME}` a variable already set:

```bash
# deploy.vars
GITHUB_TOKEN=@{gh/token}                  # gh/token, as GITHUB_TOKEN
AUTH=Bearer @{gh/token}                   # put into a longer value
REGION=@{aws/region:-${AWS_REGION}}       # with a fallback when the item is not there
@{aws/*}                                  # every item under aws/, each named by its path
```

```bash
folio check vars deploy.vars                      # check how it is written (no store needed)
folio exec --secrets --names --vars deploy.vars   # show where each variable would come from
folio exec --secrets --vars deploy.vars -- ./deploy.sh
```

With `--vars`, the command gets only what the file sets. A secret still needs `--secrets`. See
[From a vars file](MANUAL.md#from-a-vars-file).

## One contract, many environments

> **Experimental:** `--use` may change in a later version.

Keep each environment's items under its own namespace, and pick one at run time with `--use`. It
takes every item under the namespace as if the namespace were not in its path:

```
server/port                      (T)  22
@app2/@prod/server/{db, user}    (T)
@app2/@prod/server/password      (S)
@app2/@staging/server/...
```

```bash
# server.vars — the contract, written once for the app
DB_USER=@{server/user}
PGPASSWORD=${SERVER_PASSWORD}
DB_URL=postgres://${SERVER_USER}@${SERVER_DB}:${SERVER_PORT:-5432}/app
```

```bash
folio exec --secrets --vars server.vars server --use @app2/@prod -- ./deploy.sh
```

`server` and `--use @app2/@prod` load `server/port` and prod's `server/db`, `server/user` and
`server/password` as `SERVER_PORT`, `SERVER_DB`, `SERVER_USER` and `SERVER_PASSWORD`, and the vars
file builds what the command gets from them. Where two give the same item, the one typed last
wins. Or export one file per environment and run where there is no store:

```bash
folio export --secrets server --use @app2/@prod -o app2-prod.folio                  # here
folio exec --from app2-prod.folio --secrets --vars server.vars --all -- ./deploy.sh   # there
```

See [Feeding a command](MANUAL.md#feeding-a-command-contract-store-and-namespaces).

## Security model

What EnvFolio does:

- **Secrets never go on a command line, into a file, or on the screen** unless you ask to see
  one. They are read at a hidden prompt or from a pipe and handed to `pass` on stdin; there is no
  option that takes a secret as an argument.
- **`exec` and `shell` are the one exception, on purpose:** with `--secrets`, they put secrets
  into the command's environment — that is their job. Anything running as you can read a
  process's environment (`/proc/<pid>/environ` on Linux), so run only commands you trust.
  `--debug` and `--confirm` show what a run will load before any value is read.
- **Texts are signed.** A text changed, or signed by another key, outside EnvFolio is refused, and
  the message says how to see what changed.
- **The store folder is private** (`700`). EnvFolio warns whenever it belongs to someone else or
  other users can get into it.
- **The clipboard** is cleared after 45 seconds for a secret (`PASSWORD_STORE_CLIP_TIME`).
- **An export is always locked**, with a passphrase or to a public key (`--to`), and carries a
  key made for it alone — your store's key never leaves your machine.
- **A backup holds the store's secret key** (still protected by its passphrase), the texts and the
  names of the secrets. `--encrypt` locks the whole file with a passphrase of its own. Keep it
  somewhere safe and offline.

What it does not do: protect against someone who already runs code as you, or as root. The secrets
are as safe as your GPG key and its passphrase.

## Syncing the store with git

The store is a git repository, and every change is committed. EnvFolio has no `push` or `pull`,
but you can add a remote yourself — a **private** one: the texts and the names of the secrets are
plain in it, and the secrets are encrypted to your key.

On the first machine, back up with the history, and push:

```bash
folio backup --history /media/usb
cd "$(folio path)"
git remote add origin git@example.com:me/folio-store.git
git push -u origin HEAD
```

On another machine, restore that backup (it brings the key and the same history), then pull and
push as usual:

```bash
folio restore /media/usb/backup-…--folio.tar.gz
cd "$(folio path)"
git remote add origin git@example.com:me/folio-store.git
git fetch origin && git branch -u "origin/$(git branch --show-current)"
git pull
```

Without `--history`, a restore starts a new history that cannot be pulled into.

`folio backup` and `folio restore` alone, or `folio export` and `import`, also move items
between machines without a remote.

## Using `pass` directly

The store is kept apart from your own `~/.password-store`. Point `pass` at it to read a secret:

```bash
PASSWORD_STORE_DIR="$(folio path)" pass show gh/token
```

Texts are not `pass` entries: they are the `.txt` files next to the secrets.

## Environment variables

- `FOLIO_STORE_DIR` — the store's folder. Defaults to `$HOME/.folio`.
- `FOLIO_STORE_PASSPHRASE_FILE` — a file of yours only (`chmod 600`) whose first line is the store
  key's passphrase, so it is never asked — for a machine you trust. See
  [Never asked, on a machine you trust](MANUAL.md#never-asked-on-a-machine-you-trust).
- `FOLIO_FRESH_PASSPHRASE` — set to `1` to have gpg-agent forget the store key's passphrase when
  each command starts and ends, as `--fresh-passphrase` does. See
  [Leave no passphrase behind](MANUAL.md#leave-no-passphrase-behind).
- `FOLIO_SHELL` — set to `1` inside `folio shell`, for your prompt to show.
- `pass`'s own settings apply too, such as `PASSWORD_STORE_CLIP_TIME` (how long a copied secret
  stays) and `PASSWORD_STORE_GENERATED_LENGTH` (the length of `generate`).

## Design principles

- Follow what `pass` does as much as possible.
- Users of `pass` should be able to get to their secrets using `pass` directly.
- It must be clear when secrets are involved. The CLI uses the word "secret" explicitly, to avoid
  exposing secrets by accident.
- Simplify things when possible (opinionated).
- Explain clearly so there is no confusion.
- Plain, linear bash, so anyone can read it and see that no secret is sent anywhere.

## Why not …?

- **`pass` alone** — EnvFolio *is* a `pass` store; it adds texts, running commands with items as
  variables, vars files, namespaces, and backup/export in one file.
- **`op run`, `aws-vault exec`** — the same idea, without an account or a service: the store is
  files and a GPG key on your machine.
- **`.env` files, `direnv`** — those keep values in plain files next to the code. With EnvFolio,
  a vars file holds the names and the store holds the values.
- **`sops`** — encrypts whole config files for a team in a repository. EnvFolio is a personal
  store that hands values to commands.

## Limitations

- The store key's expiry is not watched: once it expires, adding or changing items fails, and
  there is no command yet to extend or rotate the key.
- No `push`/`pull` of its own — see [Syncing the store with git](#syncing-the-store-with-git).
- Windows only through WSL.
- `--use` is experimental.

## Development

EnvFolio is developed in a [CodingBooth](https://codingbooth.io) container that has every tool:

```bash
just test-all                                  # every test, under bash 3.2 and bash 5
./booth exec --run -- shellcheck folio tools/*.sh tests/test-all.sh
```

Read [AGENTS.md](AGENTS.md) for the conventions — bash 3.2, Linux and macOS, how secrets are
handled, and how tests stay away from your real store.

## Updating gpg for post-quantum keys

A post-quantum key needs gpg 2.5.21 or later on every machine that opens the store, a backup of
it, or an export locked to it. Check with `gpg --version`. If it is older, EnvFolio keeps working
with classical keys, but it cannot make, restore or open post-quantum ones.

- **macOS** — install gpg with [Homebrew](https://brew.sh): `brew install gnupg` (or
  `brew upgrade gnupg`). If `gpg --version` still shows an older one (for example GPG Suite's),
  put Homebrew's `bin` folder ahead of it on your `PATH`.
- **Linux** — if your distribution's package is already 2.5.21 or later, upgrading it is enough.
  Many still ship 2.4; then install gpg with [Homebrew on Linux](https://docs.brew.sh/Homebrew-on-Linux)
  (`brew install gnupg`) and put its `bin` folder ahead on your `PATH`, or build it from
  [gnupg.org](https://gnupg.org/download/). gpg 2.5.23 and 2.5.24 as released have a bug
  ([T8469](https://dev.gnupg.org/T8469)): they cannot use a key imported without a passphrase,
  so EnvFolio cannot open an export with them. Homebrew's has the fix; building it yourself, add
  the two commits linked from that bug, or take a later 2.5.
- **Windows** — EnvFolio runs in WSL: follow the Linux steps there.

Then stop the old gpg-agent, so the new gpg starts its own: `gpgconf --kill all`. `pass` uses a
command named `gpg2` instead of `gpg` when there is one: if `gpg2 --version` shows an older gpg,
remove it or put the new one first.

## License

[MIT](LICENSE.md)

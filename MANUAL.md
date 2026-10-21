# EnvFolio Manual

One section per command, one subsection per example. Every example that can run without a
keyboard has a matching test in `tests/` named `MANUAL: <command> — <example>`.

---

## `folio help`

```
folio help [command]
```

### List the commands

```bash
folio help
```

Lists every command, one line each.

### Help for one command

```bash
folio help init
```

The usage and options of `folio init` — the same as `folio init --help`.

---

## Passphrase prompts in a window (GUI)

EnvFolio never asks for a passphrase itself: gpg does, through its agent's *pinentry* program. By
default that is often a prompt in the terminal. To get a window instead, install a GUI pinentry,
name it in `~/.gnupg/gpg-agent.conf`, and restart the agent. This is gpg's own setting, so it
applies to `pass` and every other gpg tool on the machine too.

### Linux

Pick the one that matches your desktop:

| Desktop | Program | Debian / Ubuntu | Fedora | Arch |
| --- | --- | --- | --- | --- |
| GNOME and other GTK desktops | `pinentry-gnome3` | `sudo apt install pinentry-gnome3` | `sudo dnf install pinentry-gnome3` | `sudo pacman -S pinentry gcr` |
| KDE Plasma | `pinentry-qt` | `sudo apt install pinentry-qt` | `sudo dnf install pinentry-qt` | `sudo pacman -S pinentry` |

Then add the line to `~/.gnupg/gpg-agent.conf` (create the file if it is not there) and restart
the agent:

```bash
echo "pinentry-program $(command -v pinentry-gnome3)" >> ~/.gnupg/gpg-agent.conf
gpgconf --kill gpg-agent
```

The path must be absolute — the file does not expand `~` or `$HOME`. On Debian and Ubuntu,
`sudo update-alternatives --config pinentry` picks the default program for every user instead.

### macOS

```bash
brew install pinentry-mac
echo "pinentry-program $(brew --prefix)/bin/pinentry-mac" >> ~/.gnupg/gpg-agent.conf
gpgconf --kill gpg-agent
```

With [GPG Suite](https://gpgtools.org) installed instead of Homebrew's gpg, the window is already
set up. `pinentry-mac` offers *Save in Keychain*: ticked, the passphrase is kept in the macOS
Keychain and gpg does not ask again; leave it unticked to be asked each time.

### Check it

```bash
gpgconf --kill gpg-agent
echo test | gpg --clearsign > /dev/null
```

The window should open and ask for your key's passphrase. Then any EnvFolio command that needs it
(`folio secret show`, `folio text insert`, `folio export`, …) asks the same way.

### Good to know

- `--passphrase-stdin` and `--passphrase-fd` never open a window: the passphrase comes from stdin
  or the file descriptor instead.
- With no display — over SSH, in a container or a booth — keep a terminal pinentry
  (`pinentry-curses` or `pinentry-tty`). The GUI ones usually fall back to the terminal when
  there is no display.
- If the window opens on the wrong screen, or never opens and gpg waits, the agent was started
  from another session: run `gpg-connect-agent updatestartuptty /bye` in the current one.
- How long the agent remembers a passphrase is `default-cache-ttl` and `max-cache-ttl` (seconds)
  in the same file.

---

## `folio init`

Creates the EnvFolio store (`$FOLIO_STORE_DIR`, default `~/.folio`): picks or creates the GPG key that
encrypts it, runs `pass init`, and starts the store's git history.

```
folio init [--key <id>] [--allow-unsafe-folder]
folio init [--new-key] [--name <name>] [--email <email>] [--passphrase-stdin|--passphrase-fd <n>] [--allow-unsafe-folder]
```

| Option | Meaning |
| --- | --- |
| `--key <id>` | Use an existing secret key — fingerprint, key id or email; must match exactly one key. No passphrase is needed: the store only encrypts to the key. |
| `--new-key` | Create a new key. Implied by any of the options below. |
| `--name <name>` | The new key's name. |
| `--email <email>` | The new key's email. |
| `--passphrase-stdin` | Read the new key's passphrase from the first line of stdin instead of gpg's prompt. Needs `--name` and `--email`. An empty passphrase is refused. |
| `--passphrase-fd <n>` | Read the new key's passphrase from the first line of file descriptor `<n>` (e.g. `--passphrase-fd 3 3< pass.txt`). stdin stays free, so anything not given is still asked for. An empty passphrase is refused. |
| `--allow-unsafe-folder` | Use an existing empty folder that is someone else's or open to other users without asking. The warning still shows. See *The store folder is private*. |
| `-h`, `--help` | Show the options and stop. Nothing is created. |

`--opt=value` works as well as `--opt value`. EnvFolio first says what it needs, then confirms each
input given and asks for the ones that are not; only then is anything made. Before gpg asks you to
choose a new key's passphrase, EnvFolio says so and waits for Enter. `--key` cannot be combined
with the new-key options. It fails if `$FOLIO_STORE_DIR` is a folder with anything in it;
an empty folder is fine.

### Ask for everything

```bash
folio init
```

Shows a menu of your secret keys plus *Create a new key* (straight to creating one if you have
none). A new key asks for your name and email — pre-filled from git — then gpg asks for the
passphrase.

*Interactive — checked by hand, no automated test.*

### Use an existing key, no prompts

```bash
folio init --key jane@example.com < /dev/null
```

Uses the one secret key matching `jane@example.com`. Nothing is asked, so this works in a script.

### Create a new key, no prompts

```bash
folio init --name "Jane Doe" --email jane@example.com --passphrase-stdin < passphrase-file
```

Creates a key for `Jane Doe <jane@example.com>` protected by the first line of `passphrase-file`.
Feed the passphrase from a file (made under `umask 077`) or another secret tool — not with
`echo`, which leaves it in your shell history.

### Use another store folder

```bash
FOLIO_STORE_DIR=~/work-folio folio init --key jane@example.com
```

Creates the store in `~/work-folio` instead of `~/.folio`. Every later `folio` command needs the
same `FOLIO_STORE_DIR` to use it.

### When the store folder already exists

An **empty** folder is fine: the store is made inside it (it may be a mount point, such as an
encrypted volume or a bind mount). Its mode and owner are left as they are — see *The store folder
is private*.

Otherwise `folio init` refuses to run, and changes nothing:

- **A ready EnvFolio store** (it has `.gpg-id` and a git history) — says the store already exists.
- **Anything else** in the folder, even only hidden files — says it is not a ready EnvFolio store.
  This is what an earlier `folio init` leaves if it stopped partway (an error, Ctrl-C, a
  closed terminal): remove the folder and run `folio init` again. A key created by the
  earlier run is kept, and shows up in the key menu.

### The store folder is private

When `folio init` or `folio restore` creates the store folder, only you can get
into it (`700`): even encrypted, the names of your entries and the plain texts would show to other
users. An existing empty folder you point them at (a bind mount, say) is used as it is — that is
your call.

Like gpg for its home folder, EnvFolio checks whether the store's folder belongs to someone else,
or other users can get into it (as they can into a store made by EnvFolio 0.1.0):

```
folio: warning: /home/you/.folio belongs to root, not to you: they can read and change your store.
folio: warning: other users can get into /home/you/.folio. To make it private:
    chmod 700 /home/you/.folio
```

- **`folio init`, `folio restore`, `folio import`** — the commands that put your items there —
  warn, then ask `Use /home/you/.folio anyway? [y/N]`. Anything but yes stops them, and nothing
  changes; so does nothing to answer with (stdin at its end, or carrying a passphrase).
  `--allow-unsafe-folder` answers yes for them, in a script say; the warning still shows.
- **Every other command** that uses the store warns, and carries on.

There is no setting to hide the warning: whose folder holds your texts and secrets is worth seeing
every time. Fix the folder instead, or keep the store somewhere else.

---

## `folio path`

Prints the EnvFolio store's folder: `$FOLIO_STORE_DIR`, default `~/.folio`, as an absolute path. It
works whether or not the store exists yet.

```
folio path
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. |

### Print the store's folder

```bash
folio path
```

```
/home/jane/.folio
```

---

## `folio backup`

Saves the whole EnvFolio store and its GPG key into one file, to get it all back with
`folio restore` — on this machine or a new one.

```
folio backup [--history] [--encrypt [--passphrase-stdin]] [<file>|<folder>]
```

| Option | Meaning |
| --- | --- |
| `--history` | Keep the store's git history too. Without it, a restore starts a new one. |
| `--encrypt` | Encrypt the backup with a passphrase of its own (`gpg --symmetric`); the file ends in `--folio.gpg` instead of `--folio.tar.gz`. |
| `--passphrase-stdin` | Read that passphrase from the first line of stdin instead of gpg's prompt. Needs `--encrypt`. An empty passphrase is refused. |
| `-h`, `--help` | Show the options and stop. |

The file is `<file>` (the suffix added when missing), or `backup-<date>-<time>--folio.tar.gz` in
`<folder>` — default the current folder. An existing file is never replaced. The file is readable
by you only.

What is in it:

- `folio-backup.txt` — when it was made, the store's folder name, and the key's fingerprint.
- `key.asc` — the store's secret key, exported with `gpg --export-secret-keys`. gpg asks for the
  key's passphrase to export it, and the key stays protected by that passphrase in the file.
- The store's folder: the secrets (encrypted), the texts and their signatures (plain) — and with
  `--history`, its `.git`.

Without `--encrypt`, anyone with the file can read the texts and the names of the secrets; the
secrets themselves need the key and its passphrase. Keep the file somewhere safe and offline.

### Back up into the current folder

```bash
folio backup
```

Writes `backup-20261006-120000--folio.tar.gz` (the date and time now) here.

### Restore on a new machine

```bash
folio backup /media/usb
# ... on the new machine:
folio restore /media/usb/backup-20261006-120000--folio.tar.gz
```

The store comes back with a new git history, its texts still verify and its secrets decrypt.

### With the git history

```bash
folio backup --history
```

The restored store has the same history as this one.

### Encrypted

```bash
folio backup --encrypt
```

gpg asks for a passphrase for the backup (twice), and writes `backup-…--folio.gpg`. A restore asks
for it again. With `--passphrase-stdin`, the first line of stdin is the passphrase — feed it from
a file or another secret tool, not with `echo`.

---

## `folio restore`

Brings back an EnvFolio store from a file made by `folio backup`.

```
folio restore [--passphrase-stdin] [--allow-unsafe-folder] <file>
```

| Option | Meaning |
| --- | --- |
| `--passphrase-stdin` | Read the passphrase of an encrypted backup (`--folio.gpg`) from the first line of stdin instead of gpg's prompt. |
| `--allow-unsafe-folder` | Use an existing empty folder that is someone else's or open to other users without asking. The warning still shows. |
| `-h`, `--help` | Show the options and stop. |

It imports the backup's key into your keyring and trusts it as your own (so `pass` can encrypt to
it), then puts the store at `$FOLIO_STORE_DIR` (default `~/.folio`). A key already in your keyring
is fine. A backup without its git history gets a new one: one commit of everything restored.

An empty folder at `$FOLIO_STORE_DIR` is fine: the store is moved inside it (it may be a mount
point, such as an encrypted volume or a bind mount), its mode and owner left as they are. A folder
made by the restore is private (`700`) — see *The store folder is private* under
`folio init`.

It refuses when the folder has anything in it, and changes nothing: move that folder away first, or
restore elsewhere with `FOLIO_STORE_DIR=<other-folder> folio restore <file>`.
A file whose name ends in neither `--folio.tar.gz` nor `--folio.gpg`, or that is not an EnvFolio backup,
is refused too. Nothing is left behind when it fails.

Examples: see `folio backup` above.

---

## `folio export`

Copies some items into one file, to bring them into another store with `folio import` — on
a server, in a booth, or on another machine. Your store's key never leaves this machine.

```
folio export [-s|--secrets] [--to <key>|--passphrase-stdin|--passphrase-fd <n>] [-o|--output <file>|<folder>] [<name>...]
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Take the secrets in a folder too. A secret named on its own always goes. |
| `--to <key>` | Lock the file to this public key — a key file (`.asc`) or a key in your keyring (fingerprint, key id or email) — instead of a passphrase. Only its secret key can open the file. A key file is never added to your keyring. |
| `--passphrase-stdin` | Read the file's passphrase from the first line of stdin instead of gpg's prompt. Not with `--to`. Needs a `<name>`. An empty passphrase is refused. |
| `--passphrase-fd <n>` | Read the file's passphrase from the first line of file descriptor `<n>`. Not with `--to`. stdin stays free, so the items can still be picked. An empty passphrase is refused. |
| `-o`, `--output <file>\|<folder>` | Where to write the file. With no `-o`, EnvFolio asks. |
| `-h`, `--help` | Show the options and stop. |

A `<name>` is a text or a secret, or a folder: every text under it, and its secrets with
`--secrets`. With no `<name>`, EnvFolio lists every item, numbered, and asks which ones
(`1 3 5-7`, or `all`).

With neither `--to` nor a passphrase option, EnvFolio asks how to lock the file: with a passphrase
(gpg asks for it, after EnvFolio says so and waits for Enter), or with a public key — picked from the
usable keys in your keyring, or given as a key file.

The file is `<file>` (`.folio` added when missing), or `store-<date>.folio` in `<folder>` —
never inside the store. With no `-o`, EnvFolio asks, offering `store-<date>.folio` in the current
folder (Tab completes names). An existing file is never replaced. The file
is readable by you only.

How it works:

- A **new key** is made for this export only, in a keyring of its own that is removed afterwards.
  Each secret is decrypted with your store's key and encrypted to the new key through a pipe —
  the value never touches the disk. gpg may ask for your store key's passphrase. Each text is
  checked and signed again with the new key.
- The file holds `folio-export.txt` (when it was made, the new key's fingerprint), `key.asc` (the
  new key, with no passphrase of its own) and `store/` — a `pass` store of the chosen items.
- The whole file is **always locked**: with a passphrase, or with `--to`, to the public key of
  where it is going. Whoever opens the file can read every item in it, so it is never written
  unlocked.

### Export with a passphrase

```bash
folio export web
```

Takes the texts under `web/` (its secrets need `--secrets`). EnvFolio asks where to write the file
(Enter takes `store-20261006.folio` here) and how to lock it; pick the passphrase, and
gpg asks for one for the file (twice).

### Lock it to the server's public key

```bash
# on the server:
gpg --armor --export server@example.com > server.asc
# here:
folio export --secrets --to server.asc web
```

Only the server's secret key can open the file, so it can travel through places you do not trust
(a provider, a chat, a shared drive).

---

## `folio import`

Brings items from a file made by `folio export` into the EnvFolio store.

```
folio import [-a|--all] [--overwrite|--skip-existing] [--key <id>] [--passphrase-stdin|--passphrase-fd <n>] [--allow-unsafe-folder] [<file> [<name>...]]
```

| Option | Meaning |
| --- | --- |
| `-a`, `--all` | Take every item in the export. |
| `--overwrite` | Replace the items already in the store. |
| `--skip-existing` | Keep the items already in the store; take only the new ones. |
| `--key <id>` | With no store yet: make it with this key, as `folio init --key`. |
| `--passphrase-stdin` | Read the file's passphrase (or your key's, for a file locked to it) from the first line of stdin. Needs `<file>`, and `--all` or a `<name>`; with no store yet, `--key` too. |
| `--passphrase-fd <n>` | The same, from the first line of file descriptor `<n>`. stdin stays free, so anything not given is still asked for. |
| `--allow-unsafe-folder` | Import into a store folder that is someone else's or open to other users without asking. The warning still shows. |
| `-h`, `--help` | Show the options and stop. |

With no `<file>`, EnvFolio asks for it (Tab completes names). A `<name>` is an item in the export,
or a folder: every item under it. With neither `<name>` nor `--all`, EnvFolio lists the export's
items and asks which ones. Before gpg asks for the passphrase of a file locked with one, EnvFolio
says so and waits for Enter.

Every text is checked against the export's signature first; one that does not verify stops the
import before anything is written. Then each secret is encrypted to the store's key (by
`pass insert`) and each text is signed with it (gpg may ask for its passphrase); every item is
one commit in the store's history, as when you add it by hand. The export's key is used in a
keyring of its own and never added to yours.

With no store yet, one is made first, as `folio init` does: its key — `--key`, or picked,
or a new one from your name and email — is asked for before anything is made. An item already in
the store is overwritten or skipped as `--overwrite` or
`--skip-existing` says; with neither, EnvFolio lists them and asks.

### Into a new store

```bash
folio import --all --key server@example.com store-20261006.folio
```

Makes the store with the server's key, then imports every item.

### Merge into a store, keeping what is there

```bash
folio import --skip-existing store-20261006.folio aws/key web/user
```

Takes `aws/key` and `web/user`; one already in the store stays as it is.

---

## `folio ls`

Lists the texts and secrets in the EnvFolio store together as one tree: names only, never values.
Each name is marked **(S)** for a secret or **(T)** for a text. A name that is both shows twice.
Signatures (`.txt.sig`) are left out.

```
folio ls [--flat] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree: `(S) web/github`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. It needs a ready store (`folio init`).

### List everything

```bash
folio ls
```

```
EnvFolio Store
├── (T) note
└── web
    ├── (S) github
    ├── (T) github
    └── (T) home
```

### List one folder

```bash
folio ls web
```

Lists only what is under `web`.

### List flat

```bash
folio ls --flat
```

```
(T) note
(S) web/github
(T) web/github
(T) web/home
```

One full name per line, ready for `grep` or a script.

---

## `folio text ls`

Lists the texts in the EnvFolio store as a tree: names only. It mirrors `folio secret ls`: the same
tree as `pass ls`, but with the texts instead of the secrets. Signatures (`.txt.sig`) and folders
holding no texts are left out.

```
folio text ls [--flat] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed; a text's own name is refused (use `folio text show` once it exists).
It needs a ready store (`folio init`).

### List every text

```bash
folio text ls
```

```
Text Store
├── note
└── web
    ├── home
    └── user
```

### List one folder

```bash
folio text ls web
```

Lists only what is under `web`.

---

## `folio text find`

Lists the texts whose names contain any of the given parts, ignoring case, as a tree: names
only. It mirrors `folio secret find`: `pass find`, for the texts.

```
folio text find <part>...
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

It needs a ready store (`folio init`).

### Find by name

```bash
folio text find home
```

```
Search Terms: home
└── web
    └── home
```

---

## `folio text grep`

Prints the lines of every text that match, each under its text's name. It mirrors
`folio secret grep`: the same loop as `pass grep`, reading the plain texts instead of decrypting
secrets. Secrets are never searched. Signatures are not checked here (`folio text show` will).

```
folio text grep [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `-h`, `--help` | Show the options and stop. Works without a store. In EnvFolio, `-h` is always help, never grep's `-h`. |

It needs a ready store (`folio init`).

### Find by value

```bash
folio text grep jane
```

```
web/user:
jane
```

---

## `folio text show`

Prints a text, after checking its signature: `<name>.txt.sig` must be there, match the text, and
be by the store's key (the first key in `.gpg-id`). Checking needs no passphrase.

```
folio text show [-c|--clip[=<line>]] <name>
```

| Option | Meaning |
| --- | --- |
| `-c`, `--clip[=<line>]` | Copy the first line, or line `<line>`, to the clipboard and print nothing. **The clipboard is not cleared** afterwards: a text is not a secret. Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a text can be shown; a folder or a secret is refused (use `folio secret show` for secrets).
It needs a ready store (`folio init`).

### Show a text

```bash
folio text show web/user
```

Prints the text exactly as it was inserted.

### Copy to the clipboard

```bash
folio text show -c web/user
```

Copies the text's first line, once its signature is checked. `--clip=2` copies line 2 instead.

### A text changed outside EnvFolio is not shown

If the signature is missing, does not match, or is by another key — even one you trust — the text
is not printed and the command fails. The message says how to see what changed
(`git diff` / `git log -p` in the store), and how to sign it again if the text is right:

```bash
folio text insert -f -m web/user < ~/.folio/web/user.txt
```

---

## `folio text insert`

Adds a text to the EnvFolio store. A text is **not a secret**: it is kept plain, not encrypted, as
`<name>.txt` in the same folders as the secrets, and signed with the store's key as
`<name>.txt.sig`, so a changed text can be told. Both are committed to the store's git history.
Signing uses the key's secret half, so gpg may ask for its passphrase.

```
folio text insert [-m|--multiline] [-f|--force] [-t|--text <text>] <name>
```

| Option | Meaning |
| --- | --- |
| `-t`, `--text <text>` | The text itself, instead of asking. |
| `-m`, `--multiline` | The text is several lines; end it with Ctrl-D. Piped in, all of stdin is the text. |
| `-f`, `--force` | Overwrite an existing text without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A text and a secret can share a name: `web/github` can be both. At a terminal, it asks before
overwriting a text. **From a script or pipe, it overwrites** (the old one stays in the git
history). If signing fails, nothing is saved and the old text stays. It needs a ready store
(`folio init`).

### Give the text

```bash
folio text insert -t "https://example.com" web/home
```

### Type a text

```bash
folio text insert web/user
```

Asks for the text once, and shows it as you type.

*Interactive — checked by hand, no automated test.*

### Pipe a text in

```bash
whoami | folio text insert web/user
```

Only the first line is the text. For more, use `-m` below.

### Several lines

```bash
folio text insert -m notes/todo < todo.txt
```

All of stdin is the text, kept exactly.

---

## `folio text edit`

Opens a text in `$EDITOR` (`vi` if unset), or adds it if it is new, then signs and commits it. It
mirrors `folio secret edit` (`pass edit`): you edit a temporary copy, removed afterwards, and the
text is saved only if you changed it. Signing may ask for the key's passphrase.

```
folio text edit <name>
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

**The signature is checked first**, as `folio text show` does: a text changed outside EnvFolio is not
opened, so editing never signs it by accident. If you save it unchanged, it fails with *Text
unchanged.* and nothing is committed. It needs a ready store (`folio init`).

### Edit a text

```bash
folio text edit web/user
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `folio text generate`

Generates a random text, saves, signs and commits it, then prints it. It mirrors
`folio secret generate` (`pass generate`): the same characters and default length. It is kept
plain, so use it for things like IDs, not passwords. Signing may ask for the key's passphrase.

```
folio text generate [-n|--no-symbols] [-i|--in-place|-f|--force] <name> [<length>]
```

| Option | Meaning |
| --- | --- |
| `<length>` | How many characters. Default 25 (`PASSWORD_STORE_GENERATED_LENGTH`). |
| `-n`, `--no-symbols` | Letters and digits only. |
| `-i`, `--in-place` | Replace only the first line of an existing text and keep the rest. Its signature is checked first. |
| `-f`, `--force` | Overwrite an existing text without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

There is no `-c`/`--clip`. **An existing text is only asked about at a terminal.** From a script or
pipe, it is overwritten (the old one stays in the git history).

### Generate a text

```bash
folio text generate -n id/session 12
```

Saves a 12-character text of letters and digits as `id/session`, and prints it.

---

## `folio text rm`

Removes a text, or every text in a folder with `-r`, and commits the removal. The text stays in
the store's git history. It mirrors `folio secret rm` (`pass rm`), but **only texts are removed**:
`-r` on a folder keeps the secrets in it.

```
folio text rm [-r|--recursive] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-r`, `--recursive` | Remove every text in a folder. |
| `-f`, `--force` | Do not ask. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal it asks first. **From a script or pipe, it does not ask.** A name that is both a
text and a folder means the text; end it with `/` for the folder.

### Remove a text

```bash
folio text rm -f mail/work
```

---

## `folio text mv`

Renames or moves a text, or every text in a folder, and commits the change. It mirrors
`folio secret mv` (`pass mv`), but **only texts are moved**: secrets in a moved folder stay where
they are. A signature covers the text, not its name, so a moved text still verifies.

```
folio text mv [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A `<new-name>` ending in `/`, or an existing folder, is a folder: the text keeps its name inside
it. At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Rename a text

```bash
folio text mv web/user web/login
```

---

## `folio text cp`

Copies a text, or every text in a folder, and commits the copy. It mirrors `folio secret cp`
(`pass cp`), but **only texts are copied**.

```
folio text cp [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Copy a text

```bash
folio text cp web/user web/user-copy
```

---

## `folio secret ls`

Lists the secrets in the EnvFolio store as a tree: names only, never their values. It is `pass ls`
without the texts: the same tree, minus `*.txt`/`*.txt.sig` files and folders holding only texts.

```
folio secret ls [--flat] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. A secret's own name is refused, because `pass ls <name>` would
print the secret (use `folio secret show` once it exists). The same goes for `pass`'s other
options, such as `-c`. It needs a ready store (`folio init`).

### List every secret

```bash
folio secret ls
```

```
Secret Store
├── note
└── web
    └── github
```

### List one folder

```bash
folio secret ls web
```

Lists only what is under `web`.

---

## `folio secret find`

Lists the secrets whose names contain any of the given parts, ignoring case, as a tree. It shows
names only, never values. It is `pass find` without the texts.

```
folio secret find <part>...
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Find by name

```bash
folio secret find git
```

```
Search Terms: git
└── web
    └── github
```

---

## `folio secret grep`

Decrypts every secret and prints the lines that match, each under its secret's name. **The
matching lines are secret values, and they are shown on screen.** It is `pass grep`, so gpg may
ask for the key's passphrase.

```
folio secret grep [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `-h`, `--help` | Show the options and stop. Works without a store. In EnvFolio, `-h` is always help, never grep's `-h`. |

### Find by value

```bash
folio secret grep jane
```

```
web/github:
user: jane
```

---

## `folio secret show`

Decrypts a secret and prints it, or copies it to the clipboard. It is `pass show`, so gpg may
ask for the key's passphrase.

```
folio secret show [-c|--clip[=<line>]] <name>
```

| Option | Meaning |
| --- | --- |
| `-c`, `--clip[=<line>]` | Copy the first line, or line `<line>`, to the clipboard and print nothing. The clipboard is cleared after 45 seconds (`PASSWORD_STORE_CLIP_TIME`). Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a secret can be shown. A folder is refused, because `pass show <folder>` would list it
(use `folio secret ls`). `pass`'s `-q`/`--qrcode` is not offered. It needs a ready store
(`folio init`).

### Print a secret

```bash
folio secret show web/github
```

Prints the whole secret, every line of it.

### Copy to the clipboard

```bash
folio secret show -c web/github
```

Copies the secret's first line without showing it, and says when the clipboard will clear. As in
`pass`, a secret's first line is its password.

### Copy one line

```bash
folio secret show --clip=2 note
```

Copies only line 2 of `note`, e.g. the user name kept under a password.

---

## `folio secret insert`

Adds a secret to the EnvFolio store, encrypted with the store's key, and commits it to the store's git
history. It is a plain `pass` entry, so `PASSWORD_STORE_DIR=~/.folio pass show <name>` reads it too.

```
folio secret insert [-m|--multiline] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-m`, `--multiline` | The secret is several lines; end it with Ctrl-D. |
| `-f`, `--force` | Overwrite an existing secret without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Everything except `--help` goes straight to `pass insert`, so it behaves exactly like `pass`.
`pass`'s `-e`/`--echo` is refused: it would show the secret on screen. The secret is never taken
as an argument. It needs a ready store (`folio init`).

### Type a secret

```bash
folio secret insert web/github
```

Asks for the secret twice, without echo. If `web/github` already exists, asks before overwriting it.

*Interactive — checked by hand, no automated test.*

### Pipe a secret in

```bash
printf '%s\n%s\n' "$value" "$value" | folio secret insert web/github
```

As at the prompt, the secret is given twice — one per line — and must match. Nothing is asked:
**an existing secret is overwritten**, as `pass insert` does (the old one stays in the store's git
history). For a single copy, use `-m` below.

### Several lines

```bash
folio secret insert -m note < note.txt
```

All of stdin is the secret.

---

## `folio secret edit`

Opens a secret in `$EDITOR` (vi if unset), or adds it if it is new, and commits the change. It
is `pass edit`: the secret is decrypted to a temporary file for the editor, in `/dev/shm` (a RAM
disk) where there is one, and removed afterwards. Without `/dev/shm` (macOS), `pass` warns and
asks first. If you save it unchanged, nothing is committed.

```
folio secret edit <name>
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Edit a secret

```bash
folio secret edit web/github
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `folio secret generate`

Generates a random secret, saves and commits it, then prints it, or copies it with `-c`. It is
`pass generate`.

```
folio secret generate [-n|--no-symbols] [-c|--clip] [-i|--in-place|-f|--force] <name> [<length>]
```

| Option | Meaning |
| --- | --- |
| `<length>` | How many characters. Default 25 (`PASSWORD_STORE_GENERATED_LENGTH`). |
| `-n`, `--no-symbols` | Letters and digits only. |
| `-c`, `--clip` | Copy the secret to the clipboard instead of printing it. It is cleared after 45 seconds. Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-i`, `--in-place` | Replace only the first line of an existing secret and keep the rest. |
| `-f`, `--force` | Overwrite an existing secret without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

`pass`'s `-q`/`--qrcode` is not offered. **An existing secret is only asked about at a
terminal.** From a script or pipe, it is overwritten (the old one stays in the git history).

### Generate a secret

```bash
folio secret generate -n api 12
```

Saves a 12-character secret of letters and digits as `api`, and prints it.

### Copy to the clipboard

```bash
folio secret generate -c api
```

Saves the new secret and copies it without showing it.

---

## `folio secret rm`

Removes a secret, or a folder with `-r`, and commits the removal. The secret stays in the store's
git history. It is `pass rm`.

```
folio secret rm [-r|--recursive] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-r`, `--recursive` | Remove a folder and everything in it. |
| `-f`, `--force` | Do not ask. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal it asks first. **From a script or pipe, it does not ask.** On a folder, `-r` removes
everything in it, **texts included** — `pass` acts on the whole folder. (`folio text rm -r` removes
only the texts.)

### Remove a secret

```bash
folio secret rm -f mail/work
```

---

## `folio secret mv`

Renames or moves a secret or a folder, and commits the change. It is `pass mv`.

```
folio secret mv [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A `<new-name>` ending in `/` is a folder: the secret keeps its name inside it. At a terminal, it
asks before overwriting. **From a script or pipe, it overwrites.** A folder moves with everything
in it, **texts included**.

### Rename a secret

```bash
folio secret mv web/github web/gh
```

---

## `folio secret cp`

Copies a secret or a folder, and commits the copy. It is `pass cp`.

```
folio secret cp [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.** A folder is
copied with everything in it, **texts included**.

### Copy a secret

```bash
folio secret cp web/github web/github-copy
```

---

## `folio exec`

Runs a command with entries from the EnvFolio store as environment variables, the way `op run` and
`aws-vault exec` do. Texts load by default; secrets load only with `--secrets`. Values never go
on a command line, into a file, or on the screen.

```
folio exec [-s|--secrets] [-a|--all] [-n|--names] [--from <file> [--passphrase-fd <n>]]
           <entry>... -- <command> [<arg>...]
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. Without it, a secret named directly is refused, and the secrets in a folder are left out, with a note on stderr saying how many. |
| `-a`, `--all` | Load every entry outside the namespaces (top `@` folders) first, wherever it is typed; the entries given then layer over it. With it, `<entry>` is optional. |
| `-n`, `--names` | Only show which variable would get which entry, in the order they are set, marked (S)ecret or (T)ext, and stop. Nothing is read or decrypted (no passphrase, no signature check), and the command, if given, does not run. With `--from`, the file is still opened to see what is in it. |
| `--from <file>` | Take the entries from a file made by `folio export`, not from the store. No store is needed, and none is made or touched. See [From an export file](#from-an-export-file). |
| `--passphrase-fd <n>` | With `--from`: the file's passphrase, from the first line of file descriptor `<n>`, e.g. `--passphrase-fd 3 3< pass.txt`. stdin stays the command's. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

An `<entry>` is one of:

| Form | Loads |
| --- | --- |
| `<name>` | One text (or, with `--secrets`, one secret). |
| `<folder>` | Every text under the folder, at any depth; with `--secrets`, every secret too. |
| `VAR=<name>` | One entry, as the variable `VAR`, exactly as written. |

At least one `<entry>` is needed, unless `--all` is given; the whole store is never loaded by
default. The `--` is
needed, and everything after it is the command, which EnvFolio never parses. It needs a ready store
(`folio init`), unless the entries come from a file with `--from`.

**Variable names.** An entry's name comes from its full path in the store, whatever was
selected:

1. A namespace — a top folder whose name starts with `@` — is removed.
2. `/` turns into `_`.
3. It is uppercased.

| Entry | Variable |
| --- | --- |
| `gh/token` | `GH_TOKEN` |
| `git/user_name` | `GIT_USER_NAME` |
| `@nawa/gh/token` | `GH_TOKEN` |

Only a top folder is a namespace. Deeper down, `@` is an ordinary character: `gh/@work/token`
would be `GH_@WORK_TOKEN`, which is not a valid variable name (see below).

The variables are worked out in this order:

1. **Explicit names first.** Each `VAR=<name>` takes its entry and claims it. `VAR` must be a
   valid name (`^[A-Za-z_][A-Za-z0-9_]*$`), or the command is refused. If two of them give the
   same `VAR`, the later one wins.
2. **Then the rule.** The other selections are expanded in order, skipping claimed entries. A
   later selection overrides an earlier one; this is how a namespace layers over shared entries.
3. **Explicit names last**, so they win over any derived variable of the same name, wherever
   they were typed.

A derived name that is still not a valid variable name (e.g. `GH_API-KEY`, or one starting with a
digit) is **left out with a warning** that names the entry and suggests `VAR=<name>`. A selection
that matches no entry is an error, and so is a run that would load nothing at all.

**Refused**, before anything runs: a path that is both a text and a secret
(`gh/token.txt` and `gh/token.gpg`) when both would load, and a `VAR=<name>` pointing at such a
path. Without `--secrets` only the text loads, so there is no conflict. Also refused: a name bash
or EnvFolio keeps for itself, such as `RANDOM` or `UID` (an entry `random` would give it), since the
command would not get the value; load it under another name with `VAR=<name>`.

**Values.** An entry's whole content, with trailing newlines removed (as `$(pass show x)` gives
it), so multi-line values such as keys come through whole. Each text's signature is checked as
in `folio text show`; each secret is decrypted with `pass show`, so gpg may ask for the key's
passphrase. **All or nothing:** every entry is checked and read before the command starts; if one
fails, the command does not run and EnvFolio exits 1.

**The command** replaces EnvFolio (`exec`), so its exit status, signals and input/output are its own.
It gets the caller's environment plus the loaded variables, which override any of the same name.
EnvFolio's own `PASSWORD_STORE_DIR` is not passed on: the caller's value is put back, or it is unset.

### Run a command with texts

```bash
folio exec git -- git commit
```

Runs `git commit` with every text under `git/` set, e.g. `git/user_name` as `GIT_USER_NAME`.

### Add secrets

```bash
folio exec --secrets gh -- gh repo list
```

Also loads the secrets under `gh/`, e.g. `gh/token` as `GH_TOKEN`.

### Layer a namespace

```bash
folio exec --secrets gh @nawa -- gh repo list
```

Loads `gh/`, then everything in `@nawa/` over it: `@nawa/gh/token` gives `GH_TOKEN`, replacing
`gh/token`'s. `folio exec @nawa -- cmd` alone loads only what is in the namespace.

### Load everything

```bash
folio exec --all --secrets @nawa -- ./deploy
```

Loads every text and secret outside the namespaces, then `@nawa/` over them. Without
`--secrets`, only the texts, with a note saying how many secrets were left out.

### Check the names first

```bash
folio exec --names --secrets gh @nawa -- gh repo list
```

```
GH_TOKEN <- @nawa/gh/token (S)
GH_USER  <- @nawa/gh/user (T)
```

Shows what the command would get, without running it. Warnings and notes still show on stderr.

### Pick the variable name

```bash
folio exec --secrets GITHUB_TOKEN=gh/token gh -- ./deploy
```

Sets `GITHUB_TOKEN` from `gh/token`, and loads the rest of `gh/` by the rule. `gh/token` is
claimed, so it does not also give `GH_TOKEN`.

### From an export file

```bash
folio exec --from items.folio --secrets --all -- ./deploy
```

Loads the entries from `items.folio`, a file made by `folio export`, on a machine with no EnvFolio
store at all — a booth in the cloud, say. Entries, `--secrets`, `--all`, namespaces, `VAR=<name>`
and variable names are as from a store; the file's items are laid out as they were in the store
they were exported from.

The file is opened as `folio import` opens it: gpg asks for its passphrase (or it comes from
`--passphrase-fd`), or, when it is locked to your public key, uses your secret key from your
keyring (gpg may ask for that key's passphrase). Nothing more is asked after that: the items in
the file are locked to a key of the export's own, which has none. Each text is checked against the
export's signature; a text or secret that does not check stops everything, and the command does
not run.

Nothing is kept. The file is unpacked into a private temporary folder (`700`), with its key in a
GnuPG home of its own, never added to your keyring; once every value is read, the folder is
removed, before the command starts. The file itself is left as it is.

To give the passphrase without typing it, open it on a file descriptor. Here the shell opens the
file, removes its name at once, and hands EnvFolio the open descriptor:

```bash
{ rm /dev/shm/pass ; folio exec --from items.folio --passphrase-fd 3 -a -- ./deploy ; } 3< /dev/shm/pass
```

Anyone who has both the file and its passphrase has its items: bring them to the machine by
different routes. With a file locked to your key, the passphrase never travels — for instance,
lock it to your own key, and forward your gpg-agent to the machine over SSH, so the key stays on
yours.

---

## `folio shell`

Starts your shell (`$SHELL`, or `/bin/sh`) with entries from the EnvFolio store as environment
variables. It is `folio exec <entry>... -- "$SHELL"`, plus a line saying what was loaded.

```
folio shell [-s|--secrets] [-a|--all] [-n|--names] [--from <file> [--passphrase-fd <n>]] <entry>...
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. |
| `-a`, `--all` | Load every entry outside the namespaces first, as in `folio exec`. |
| `-n`, `--names` | Only show which variable would get which entry, as in `folio exec`; no shell starts. |
| `--from <file>` | Take the entries from a file made by `folio export`, as in `folio exec`. |
| `--passphrase-fd <n>` | With `--from`: the file's passphrase, from file descriptor `<n>`, as in `folio exec`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Entries, variable names, values and errors are as in `folio exec`. Before the shell starts, EnvFolio
prints the loaded variable names, never their values, to stderr. It sets `FOLIO_SHELL=1`, so your
own prompt can show it; EnvFolio does not change the prompt. `exit` leaves the shell. It needs a
ready store (`folio init`), unless the entries come from a file with `--from`.

### Open a shell

```bash
folio shell --secrets gh @nawa
```

```
folio shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave.
```

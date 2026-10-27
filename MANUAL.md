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

### The action first, then the kind

A command on items names the action, then the kind: `folio show text web/user`,
`folio insert secret web/github`, `folio check vars prod.vars`. Typed the other way round
(`folio text show web/user`), it works the same.

---

## `folio init`

Creates the EnvFolio store (`$FOLIO_STORE_DIR`, default `~/.folio`): picks or creates the GPG key that
encrypts it, runs `pass init`, and starts the store's git history.

```
folio init [--key <id>] [--allow-unsafe-folder]
folio init [--new-key] [--name <name>] [--email <email>] [--key-type <pqc|classical>] [--store-passphrase-stdin|--store-passphrase-fd <n>] [--allow-unsafe-folder]
```

| Option | Meaning |
| --- | --- |
| `--key <id>` | Use an existing secret key — fingerprint, key id or email; must match exactly one key. No passphrase is needed: the store only encrypts to the key. |
| `--new-key` | Create a new key. Implied by any of the options below. See *Post-quantum keys*. |
| `--name <name>` | The new key's name. |
| `--email <email>` | The new key's email. |
| `--key-type <pqc\|classical>` | The new key's kind, without asking: `pqc` (post-quantum; needs gpg 2.5.21 or later, refused on an older one) or `classical` (gpg's default key). See *Post-quantum keys*. |
| `--store-passphrase-stdin` | Read the new key's passphrase from the first line of stdin instead of gpg's prompt. Needs `--name` and `--email`. An empty passphrase is refused. |
| `--store-passphrase-fd <n>` | Read the new key's passphrase from the first line of file descriptor `<n>` (e.g. `--store-passphrase-fd 3 3< pass.txt`). stdin stays free, so anything not given is still asked for. An empty passphrase is refused. |
| `--allow-unsafe-folder` | Use an existing empty folder that is someone else's or open to other users without asking. The warning still shows. See *The store folder is private*. |
| `-h`, `--help` | Show the options and stop. Nothing is created. |

`--opt=value` works as well as `--opt value`. EnvFolio first says what it needs, then confirms each
input given and asks for the ones that are not; only then is anything made. Before gpg asks you to
choose a new key's passphrase, EnvFolio says so and waits for Enter. `--key` cannot be combined
with the new-key options. It fails if `$FOLIO_STORE_DIR` is a folder with anything in it;
an empty folder is fine.

### Post-quantum keys

With gpg 2.5.21 or later, a new key can be post-quantum (gpg's `pqc`: ML-KEM together with an
elliptic curve), which also protects the secrets from a future quantum computer. When anything
for the new key is asked, its kind is asked too:

```
1) Post-quantum (recommended) — ML-KEM-768 + Brainpool P-256, Brainpool P-384
2) Classical — X25519, Ed25519
```

With every input given as an option, it is post-quantum without asking. `--key-type pqc` or
`--key-type classical` picks it without asking — e.g. a scripted init for a store that machines
with gpg 2.4 must open:

```bash
folio init --name "Jane Doe" --email jane@example.com --key-type classical --store-passphrase-fd 3 3< pass.txt
```

With an older gpg, nothing changes: the key is gpg's default, and `--key-type pqc` is refused. A store with a post-quantum key needs gpg 2.5.21 or
later on every machine that opens it. Texts are still signed classically: gpg has no post-quantum
signatures yet.

So do the files made from it: `folio backup` says so when the store's key is post-quantum, and
`folio export --to` when the key it locks to is. On an older gpg, `restore`, `import` and
`exec`/`shell --from` refuse such a file before changing anything — an older gpg would take the
key without a word, then fail to decrypt with it. The refusal says why, and links to
[Updating gpg for post-quantum keys](README.md#updating-gpg-for-post-quantum-keys).

For a key with special needs — another algorithm, a smart card, another expiry — make it with
gpg first, then pick it, or pass it with `--key`.

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
folio init --name "Jane Doe" --email jane@example.com --store-passphrase-stdin < passphrase-file
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

## `folio ls`

Lists the texts and secrets in the EnvFolio store together as one tree: names only, never values.
Each name is marked **(S)** for a secret or **(T)** for a text. A name that is both shows twice.
On a screen, secrets are yellow and texts green — the colours in `ls text`, `ls secret` and `find`
too — and, when the terminal draws emoji, marked 🔑 and 📄 instead: `🔑github`. folio asks the
terminal (it writes 🔑, asks where the cursor went, and wipes the line), so a terminal that cannot
draw them keeps (S)/(T), as does `TERM=linux` or a locale that is not UTF-8. Sent to a pipe or a
file, with `TERM=dumb`, or with `--plain`, there are neither colours nor emoji (`NO_COLOR` takes
only the colours away) — what scripts and the examples below see.
Signatures (`.txt.sig`) are left out.

```
folio ls [--flat] [--plain] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree: `(S)web/github`. |
| `--plain` | Mark secrets (S) and texts (T), with no colour, even on a screen. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. It needs a ready store (`folio init`). `folio ls text` and
`folio ls secret` list one kind (below); a folder named `text` or `secret` at the top is listed
with its `/`: `folio ls text/`.

### List everything

```bash
folio ls
```

```
EnvFolio Store
├── (T)note
└── web
    ├── (S)github
    ├── (T)github
    └── (T)home
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
(T)note
(S)web/github
(T)web/github
(T)web/home
```

One full name per line, ready for `grep` or a script.

---

## `folio ls text`

Lists the texts in the EnvFolio store as a tree: names only. It mirrors `folio ls secret`: the same
tree as `pass ls`, but with the texts instead of the secrets. Signatures (`.txt.sig`) and folders
holding no texts are left out.

```
folio ls text [--flat] [--plain] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree. |
| `--plain` | No colour, even on a screen. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed; a text's own name is refused (use `folio show text` once it exists).
It needs a ready store (`folio init`).

### List every text

```bash
folio ls text
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
folio ls text web
```

Lists only what is under `web`.

---

## `folio find text`

Lists the texts whose names contain any of the given parts, ignoring case, as a tree: names
only. It mirrors `folio find secret`: `pass find`, for the texts.

```
folio find text [--plain] <part>...
```

| Option | Meaning |
| --- | --- |
| `--plain` | No colour, even on a screen. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

It needs a ready store (`folio init`).

### Find by name

```bash
folio find text home
```

```
Search Terms: home
└── web
    └── home
```

---

## `folio grep text`

Prints the lines of every text that match, each under its text's name. It mirrors
`folio grep secret`: the same loop as `pass grep`, reading the plain texts instead of decrypting
secrets. Secrets are never searched. Signatures are not checked here (`folio show text` will).

```
folio grep text [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `-h`, `--help` | Show the options and stop. Works without a store. In EnvFolio, `-h` is always help, never grep's `-h`. |

It needs a ready store (`folio init`).

### Find by value

```bash
folio grep text jane
```

```
web/user:
jane
```

---

## `folio show text`

Prints a text, after checking its signature: `<name>.txt.sig` must be there, match the text, and
be by the store's key (the first key in `.gpg-id`). Checking needs no passphrase.

```
folio show text [-c|--clip[=<line>]] <name>
```

| Option | Meaning |
| --- | --- |
| `-c`, `--clip[=<line>]` | Copy the first line, or line `<line>`, to the clipboard and print nothing. **The clipboard is not cleared** afterwards: a text is not a secret. Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a text can be shown; a folder or a secret is refused (use `folio show secret` for secrets).
It needs a ready store (`folio init`).

### Show a text

```bash
folio show text web/user
```

Prints the text exactly as it was inserted.

### Copy to the clipboard

```bash
folio show text -c web/user
```

Copies the text's first line, once its signature is checked. `--clip=2` copies line 2 instead.

### A text changed outside EnvFolio is not shown

If the signature is missing, does not match, or is by another key — even one you trust — the text
is not printed and the command fails. The message says how to see what changed
(`git diff` / `git log -p` in the store), and how to sign it again if the text is right:

```bash
folio insert text -f -m web/user < ~/.folio/web/user.txt
```

---

## `folio insert text`

Adds a text to the EnvFolio store. A text is **not a secret**: it is kept plain, not encrypted, as
`<name>.txt` in the same folders as the secrets, and signed with the store's key as
`<name>.txt.sig`, so a changed text can be told. Both are committed to the store's git history.
Signing uses the key's secret half, so gpg may ask for its passphrase.

```
folio insert text [-m|--multiline] [-f|--force] [-t|--text <text>] [--store-passphrase-fd <n>] <name>
```

| Option | Meaning |
| --- | --- |
| `-t`, `--text <text>` | The text itself, instead of asking. |
| `-m`, `--multiline` | The text is several lines; end it with Ctrl-D. Piped in, all of stdin is the text. |
| `-f`, `--force` | Overwrite an existing text without asking. |
| `--store-passphrase-fd <n>` | The store key's passphrase (to sign), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A text and a secret can share a name: `web/github` can be both. At a terminal, it asks before
overwriting a text. **From a script or pipe, it overwrites** (the old one stays in the git
history). If signing fails, nothing is saved and the old text stays. It needs a ready store
(`folio init`).

### Give the text

```bash
folio insert text -t "https://example.com" web/home
```

### Type a text

```bash
folio insert text web/user
```

Asks for the text once, and shows it as you type.

*Interactive — checked by hand, no automated test.*

### Pipe a text in

```bash
whoami | folio insert text web/user
```

Only the first line is the text. For more, use `-m` below.

### Several lines

```bash
folio insert text -m notes/todo < todo.txt
```

All of stdin is the text, kept exactly.

---

## `folio edit text`

Opens a text in `$EDITOR` (`vi` if unset), or adds it if it is new, then signs and commits it. It
mirrors `folio edit secret` (`pass edit`): you edit a temporary copy, removed afterwards, and the
text is saved only if you changed it. Signing may ask for the key's passphrase.

```
folio edit text [--store-passphrase-fd <n>] <name>
```

| Option | Meaning |
| --- | --- |
| `--store-passphrase-fd <n>` | The store key's passphrase (to sign), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

**The signature is checked first**, as `folio show text` does: a text changed outside EnvFolio is not
opened, so editing never signs it by accident. If you save it unchanged, it fails with *Text
unchanged.* and nothing is committed. It needs a ready store (`folio init`).

### Edit a text

```bash
folio edit text web/user
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `folio generate text`

Generates a random text, saves, signs and commits it, then prints it. It mirrors
`folio generate secret` (`pass generate`): the same characters and default length. It is kept
plain, so use it for things like IDs, not passwords. Signing may ask for the key's passphrase.

```
folio generate text [-n|--no-symbols] [-i|--in-place|-f|--force] [--store-passphrase-fd <n>] <name> [<length>]
```

| Option | Meaning |
| --- | --- |
| `<length>` | How many characters. Default 25 (`PASSWORD_STORE_GENERATED_LENGTH`). |
| `-n`, `--no-symbols` | Letters and digits only. |
| `-i`, `--in-place` | Replace only the first line of an existing text and keep the rest. Its signature is checked first. |
| `-f`, `--force` | Overwrite an existing text without asking. |
| `--store-passphrase-fd <n>` | The store key's passphrase (to sign), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

There is no `-c`/`--clip`. **An existing text is only asked about at a terminal.** From a script or
pipe, it is overwritten (the old one stays in the git history).

### Generate a text

```bash
folio generate text -n id/session 12
```

Saves a 12-character text of letters and digits as `id/session`, and prints it.

---

## `folio rm text`

Removes a text, or every text in a folder with `-r`, and commits the removal. The text stays in
the store's git history. It mirrors `folio rm secret` (`pass rm`), but **only texts are removed**:
`-r` on a folder keeps the secrets in it.

```
folio rm text [-r|--recursive] [-f|--force] <name>
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
folio rm text -f mail/work
```

---

## `folio mv text`

Renames or moves a text, or every text in a folder, and commits the change. It mirrors
`folio mv secret` (`pass mv`), but **only texts are moved**: secrets in a moved folder stay where
they are. A signature covers the text, not its name, so a moved text still verifies.

```
folio mv text [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A `<new-name>` ending in `/`, or an existing folder, is a folder: the text keeps its name inside
it. At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Rename a text

```bash
folio mv text web/user web/login
```

---

## `folio cp text`

Copies a text, or every text in a folder, and commits the copy. It mirrors `folio cp secret`
(`pass cp`), but **only texts are copied**.

```
folio cp text [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Copy a text

```bash
folio cp text web/user web/user-copy
```

---

## `folio ls secret`

Lists the secrets in the EnvFolio store as a tree: names only, never their values. It is `pass ls`
without the texts: the same tree, minus `*.txt`/`*.txt.sig` files and folders holding only texts.

```
folio ls secret [--flat] [--plain] [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `--flat` | Full names, one per line, sorted, instead of a tree. |
| `--plain` | No colour, even on a screen. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. A secret's own name is refused, because `pass ls <name>` would
print the secret (use `folio show secret` once it exists). The same goes for `pass`'s other
options, such as `-c`. It needs a ready store (`folio init`).

### List every secret

```bash
folio ls secret
```

```
Secret Store
├── note
└── web
    └── github
```

### List one folder

```bash
folio ls secret web
```

Lists only what is under `web`.

---

## `folio find secret`

Lists the secrets whose names contain any of the given parts, ignoring case, as a tree. It shows
names only, never values. It is `pass find` without the texts.

```
folio find secret [--plain] <part>...
```

| Option | Meaning |
| --- | --- |
| `--plain` | No colour, even on a screen. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Find by name

```bash
folio find secret git
```

```
Search Terms: git
└── web
    └── github
```

---

## `folio grep secret`

Decrypts every secret and prints the lines that match, each under its secret's name. **The
matching lines are secret values, and they are shown on screen.** It is `pass grep`, so gpg may
ask for the key's passphrase.

```
folio grep secret [--store-passphrase-fd <n>] [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `--store-passphrase-fd <n>` | The store key's passphrase, from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. In EnvFolio, `-h` is always help, never grep's `-h`. |

### Find by value

```bash
folio grep secret jane
```

```
web/github:
user: jane
```

---

## `folio show secret`

Decrypts a secret and prints it, or copies it to the clipboard. It is `pass show`, so gpg may
ask for the key's passphrase.

```
folio show secret [-c|--clip[=<line>]] [--store-passphrase-fd <n>] <name>
```

| Option | Meaning |
| --- | --- |
| `-c`, `--clip[=<line>]` | Copy the first line, or line `<line>`, to the clipboard and print nothing. The clipboard is cleared after 45 seconds (`PASSWORD_STORE_CLIP_TIME`). Needs `pbcopy`, `wl-copy` or `xclip`. |
| `--store-passphrase-fd <n>` | The store key's passphrase, from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a secret can be shown. A folder is refused, because `pass show <folder>` would list it
(use `folio ls secret`). `pass`'s `-q`/`--qrcode` is not offered. It needs a ready store
(`folio init`).

### Print a secret

```bash
folio show secret web/github
```

Prints the whole secret, every line of it.

### Copy to the clipboard

```bash
folio show secret -c web/github
```

Copies the secret's first line without showing it, and says when the clipboard will clear. As in
`pass`, a secret's first line is its password.

### Copy one line

```bash
folio show secret --clip=2 note
```

Copies only line 2 of `note`, e.g. the user name kept under a password.

---

## `folio insert secret`

Adds a secret to the EnvFolio store, encrypted with the store's key, and commits it to the store's git
history. It is a plain `pass` entry, so `PASSWORD_STORE_DIR=~/.folio pass show <name>` reads it too.

```
folio insert secret [-m|--multiline] [-f|--force] <name>
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
folio insert secret web/github
```

Asks for the secret twice, without echo. If `web/github` already exists, asks before overwriting it.

*Interactive — checked by hand, no automated test.*

### Pipe a secret in

```bash
printf '%s\n%s\n' "$value" "$value" | folio insert secret web/github
```

As at the prompt, the secret is given twice — one per line — and must match. Nothing is asked:
**an existing secret is overwritten**, as `pass insert` does (the old one stays in the store's git
history). For a single copy, use `-m` below.

### Several lines

```bash
folio insert secret -m note < note.txt
```

All of stdin is the secret.

---

## `folio edit secret`

Opens a secret in `$EDITOR` (vi if unset), or adds it if it is new, and commits the change. It
is `pass edit`: the secret is decrypted to a temporary file for the editor, in `/dev/shm` (a RAM
disk) where there is one, and removed afterwards. Without `/dev/shm` (macOS), `pass` warns and
asks first. If you save it unchanged, nothing is committed.

```
folio edit secret [--store-passphrase-fd <n>] <name>
```

| Option | Meaning |
| --- | --- |
| `--store-passphrase-fd <n>` | The store key's passphrase, from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Edit a secret

```bash
folio edit secret web/github
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `folio generate secret`

Generates a random secret, saves and commits it, then prints it, or copies it with `-c`. It is
`pass generate`.

```
folio generate secret [-n|--no-symbols] [-c|--clip] [-i|--in-place|-f|--force] [--store-passphrase-fd <n>] <name> [<length>]
```

| Option | Meaning |
| --- | --- |
| `<length>` | How many characters. Default 25 (`PASSWORD_STORE_GENERATED_LENGTH`). |
| `-n`, `--no-symbols` | Letters and digits only. |
| `-c`, `--clip` | Copy the secret to the clipboard instead of printing it. It is cleared after 45 seconds. Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-i`, `--in-place` | Replace only the first line of an existing secret and keep the rest. |
| `-f`, `--force` | Overwrite an existing secret without asking. |
| `--store-passphrase-fd <n>` | The store key's passphrase (needed by `--in-place`, to read the rest), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

`pass`'s `-q`/`--qrcode` is not offered. **An existing secret is only asked about at a
terminal.** From a script or pipe, it is overwritten (the old one stays in the git history).

### Generate a secret

```bash
folio generate secret -n api 12
```

Saves a 12-character secret of letters and digits as `api`, and prints it.

### Copy to the clipboard

```bash
folio generate secret -c api
```

Saves the new secret and copies it without showing it.

---

## `folio rm secret`

Removes a secret, or a folder with `-r`, and commits the removal. The secret stays in the store's
git history. It is `pass rm`.

```
folio rm secret [-r|--recursive] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-r`, `--recursive` | Remove a folder and everything in it. |
| `-f`, `--force` | Do not ask. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal it asks first. **From a script or pipe, it does not ask.** On a folder, `-r` removes
everything in it, **texts included** — `pass` acts on the whole folder. (`folio rm text -r` removes
only the texts.)

### Remove a secret

```bash
folio rm secret -f mail/work
```

---

## `folio mv secret`

Renames or moves a secret or a folder, and commits the change. It is `pass mv`.

```
folio mv secret [-f|--force] <old-name> <new-name>
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
folio mv secret web/github web/gh
```

---

## `folio cp secret`

Copies a secret or a folder, and commits the copy. It is `pass cp`.

```
folio cp secret [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.** A folder is
copied with everything in it, **texts included**.

### Copy a secret

```bash
folio cp secret web/github web/github-copy
```

---

## Feeding a command: contract, store and namespaces

> **Experimental:** `--use` may change in a later version.

`folio exec` and `folio shell` hand items to a command as environment variables. Three pieces
decide what it gets, and each can be written by someone else:

| Piece | What it says | Who writes it |
| --- | --- | --- |
| A **vars file** (`--vars`) | The contract: which variables the command needs, by its own names, and where each comes from. | The command's side — committed with the app or the deploy script. |
| The **store**, or a **`.folio` file** (`--from`) | The values. | You; or a supplier, who exports one file per environment with `folio export`. |
| A **namespace** and **`--use`** | The last-mile choice: which variant, out of what was handed over. | Whoever runs the command, at run time. |

### How a run is worked out

1. **The source.** The store, or with `--from`, the opened `.folio` file — laid out like a store.
2. **The layers.** The entries, `--all` and `--use`, **in the order typed**. With a `--use`, they
   are laid over a private copy of the source (see [Peel a namespace with
   --use](#peel-a-namespace-with---use)): `--use @app2/@prod` puts every item under it where it
   would be without `@app2/@prod/`. Where two layers give the same item, **the last one wins**.
3. **The variables.** Each layer's items, named by their path ([Variable
   names](#folio-exec)); then each `VAR=<name>` picks from what the layers made (or the store),
   and wins. The item keeps its own variable too.
4. **The vars files**, when given — **after** every layer. Each line is made in order: `${NAME}`
   sees the earlier lines, then the layers' variables, then your environment; `@{name}` reads the
   source through any `--use`. **The command gets only what the vars files set**: the layers only
   feed them.
5. **Read, then run.** Every value is read and checked; the copy and any opened file are removed;
   then the command runs. Nothing is kept on disk.

Without `--vars`, the command gets the layers' variables (step 3). With it, the file decides
(step 4), and the layers are what it is fed from.

### One contract, two environments, two places

The store:

```
server/port                       (T)  22
@app2/@prod/server/{db, user}     (T)
@app2/@prod/server/password       (S)
@app2/@staging/server/{db, user}  (T)
@app2/@staging/server/port        (T)  2222
@app2/@staging/server/password    (S)
```

The contract, written once for the app:

```bash
# server.vars
DB_USER=@{server/user}
PGPASSWORD=${SERVER_PASSWORD}
DB_URL=postgres://${SERVER_USER}@${SERVER_DB}:${SERVER_PORT:-5432}/app
```

Here, from the store, choosing the environment with `--use`:

```bash
folio exec --secrets --vars server.vars server --use @app2/@prod    -- ./deploy.sh
folio exec --secrets --vars server.vars server --use @app2/@staging -- ./deploy.sh
```

`./deploy.sh` gets `DB_USER`, `PGPASSWORD` and `DB_URL` — `postgres://deploy@db.prod:22/app` for
prod, with the shared port, and `…db.stg:2222…` for staging, whose own port wins as it comes later.

There — a booth, a CI runner — from one file per environment, with no store:

```bash
folio export --secrets server --use @app2/@prod -o app2-prod.folio      # here
folio exec --from app2-prod.folio --secrets --vars server.vars --all -- ./deploy.sh   # there
```

The file holds `server/{port, db, user, password}` and nothing of staging; `--all` feeds them all
to the contract. The same `server.vars` works in both places.

---

## `folio exec`

Runs a command with entries from the EnvFolio store as environment variables, the way `op run` and
`aws-vault exec` do. Texts load by default; secrets load only with `--secrets`. Values never go
on a command line, into a file, or on the screen.

```
folio exec [-s|--secrets] [-a|--all] [-n|--names|--debug|--confirm] [--plain]
           [--use <@namespace>]... [--vars <file>]... [--store-passphrase-fd <n>]
           [--from <file> [--file-passphrase-fd <n>]] <entry>... -- <command> [<arg>...]
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. Without it, a secret named directly is refused, and the secrets in a folder are left out, with a note on stderr saying how many. |
| `-a`, `--all` | Load every entry outside the namespaces (top `@` folders), where it is typed among the entries: `--all @nawa` lays `@nawa` over it, `@nawa --all` lays it over `@nawa`. With `--vars`, it only feeds the file. With it, `<entry>` is optional. See [What --all does](#what---all-does-with-and-without-a-vars-file). |
| `-n`, `--names` | Only show which variable would get which entry, in the order they are set, marked (S)ecret or (T)ext — on a screen, coloured and with 🔑/📄 as in `folio ls` (`🔑gh/token`) — and stop. With `--vars`, the entries that only feed the files follow, under `Only for the vars files`; with `--use`, a peeled one says where it came from. Nothing is read or decrypted (no passphrase, no signature check), and the command, if given, does not run. With `--from`, the file is still opened to see what is in it. |
| `--debug` | Show the same as `--names`, on stderr, then run the command. The names are shown before any value is read. Not with `--names`. |
| `--confirm` | Show the same as `--debug`, then ask `run <command>? [y/N]` and run it only on yes. Asked and answered on the terminal (`/dev/tty`), never stdin, which stays the command's; with no terminal it refuses. No value is read or decrypted, and the store key is not unlocked (`--store-passphrase-fd`), before the yes; a `--from` file is opened first, to show its names. |
| `--plain` | With `--names`, `--debug` or `--confirm`: mark secrets (S) and texts (T), with no colour, even on a screen. |
| `--use <@namespace>` | Take every entry under `<@namespace>` as if it were not in the path: `@prod/server/user` is `server/user`. Only namespaces, from the front (`@app2/@prod`). Where it is typed among the entries; can be given more than once. With it, `<entry>` is optional. See [Peel a namespace with --use](#peel-a-namespace-with---use). Experimental: it may change. |
| `--vars <file>` | Set the variables a vars file says: constants, values from your environment, entries, with fallbacks. Can be given more than once. With it, `<entry>` is optional, and the entries only feed it. See [From a vars file](#from-a-vars-file). |
| `--from <file>` | Take the entries from a file made by `folio export`, not from the store. No store is needed, and none is made or touched. See [From an export file](#from-an-export-file). |
| `--file-passphrase-fd <n>` | With `--from`: the file's passphrase, from the first line of file descriptor `<n>`, e.g. `--file-passphrase-fd 3 3< pass.txt`. stdin stays the command's. |
| `--store-passphrase-fd <n>` | Without `--from`: the store key's passphrase (to read the secrets), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `-h`, `--help` | Show the options and stop. Works without a store. |

An `<entry>` is one of:

| Form | Loads |
| --- | --- |
| `<name>` | One text (or, with `--secrets`, one secret). |
| `<folder>` | Every text under the folder, at any depth; with `--secrets`, every secret too. |
| `VAR=<name>` | One entry, as the variable `VAR`, exactly as written. |

At least one `<entry>` is needed, unless `--all`, `--use` or `--vars` is given; the whole store is never loaded by
default. The `--` is
needed, and everything after it is the command, which EnvFolio never parses. It needs a ready store
(`folio init`), unless the entries come from a file with `--from`.

**Variable names.** An entry's name comes from its full path in the store — with `--use`, its
path once the namespace is peeled off — whatever was selected:

1. A namespace — a top folder whose name starts with `@` — is removed.
2. `/` turns into `_`.
3. It is uppercased.

| Entry | Variable |
| --- | --- |
| `gh/token` | `GH_TOKEN` |
| `git/user_name` | `GIT_USER_NAME` |
| `@nawa/gh/token` | `GH_TOKEN` |

Namespaces can nest from the front of the path — `@app2/@prod/server/user` — but the rule removes
only the top one: the entries under a nested namespace are left out, with a note to add
`--use @app2/@prod`, which peels the whole prefix (see [Peel a namespace with
--use](#peel-a-namespace-with---use)). After a folder without `@`, `@` is an ordinary character:
`gh/@work/token` would be `GH_@WORK_TOKEN`, which is not a valid variable name (see below).

The variables are worked out in this order:

1. **The selections.** Entries, folders, `--all` and `--use` are expanded in the order typed. A
   later selection overrides an earlier one; this is how a namespace layers over shared entries.
2. **The rule.** Every item they selected is named by its path, as above. Where two selections
   give the same variable, the later one wins. Two items of **one** selection giving the same
   variable are refused, as which one won would be down to the order of their names:
   `--use @app2` holding both `@prod/server/user` and `@staging/server/user` (both `SERVER_USER`)
   says to pick one, e.g. `--use @app2/@prod`; `a/b` and `a_b` in one folder say to give one a
   `VAR=<name>` or rename it.
3. **Explicit names last.** Each `VAR=<name>`, wherever it is typed, takes `<name>` as it is
   after the selections — with `--use`, `server/user` can be one it peeled — or, if they did not
   select it, from the store. It wins over any variable of the same name. Its item keeps the
   variable the rule gave it, if any: `PORT=server/port server` gives both `PORT` and
   `SERVER_PORT`. `VAR` must be a valid name (`^[A-Za-z_][A-Za-z0-9_]*$`), or the command is
   refused. If two of them give the same `VAR`, the later one wins.

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
in `folio show text`; each secret is decrypted with `pass show`, so gpg may ask for the key's
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

### Peel a namespace with --use

> **Experimental:** `--use` may change in a later version.

```
server/port                       (T)  22
@app2/@prod/server/{db, user}     (T)
@app2/@prod/server/password       (S)
@app2/@staging/server/{db, user}  (T)
@app2/@staging/server/port        (T)  2222
@app2/@staging/server/password    (S)
```

```bash
folio exec --secrets server --use @app2/@prod -- ./deploy.sh
```

`--use @app2/@prod` takes every entry under `@app2/@prod` as if `@app2/@prod/` were not in its
path: `@app2/@prod/server/user` is `server/user`, so `SERVER_USER`. Only namespaces peel, and only
from the front: `--use @app2/server` is refused, and so is `--use @app2 --use @prod` when there is
no top `@prod` — each `--use` names the whole prefix. It is a change of path, not only of name:
a vars file's `@{server/user}` reads `@app2/@prod/server/user` too.

Entries, `--all` and `--use` are laid over each other in the order typed, and the last one wins
where two give the same entry:

| Typed | `SERVER_PORT` |
| --- | --- |
| `server --use @app2/@staging` | `2222`, staging's |
| `--use @app2/@staging server` | `22`, the shared one |
| `--all --use @app2/@staging` | `2222` |

`--names` says where a peeled one came from:

```
SERVER_PORT <- server/port(T)
SERVER_DB   <- server/db(T)  (--use: @app2/@prod/server/db)
SERVER_USER <- server/user(T)  (--use: @app2/@prod/server/user)
```

Nothing is changed in the store. The entries are read from a view of it — a private temporary
copy (`700`) of the store's files, its `.git` left out, with each layer laid over it — removed
before the command starts. Only files are copied: a secret stays encrypted until it is read, as
from the store.

### What --all does, with and without a vars file

`--all` takes every item outside the namespaces (the top `@` folders), **where it is typed** among
the entries — so it is also an overlay control: before a `--use`, the peeled items win; after it,
the shared ones do.

**Without `--vars`**, it selects: the command gets every item outside the namespaces.

```bash
folio exec --all -- ./app                                # everything outside the namespaces
folio exec --all --use @app2/@staging -- ./app           # SERVER_PORT=2222: staging's, laid last
folio exec --use @app2/@staging --all -- ./app           # SERVER_PORT=22: the shared one, laid last
```

**With `--vars`**, the file selects, and `--all` gives nothing to the command itself. It still
does two things:

1. **Order.** It decides whether the shared items sit under or over the peeled ones, and so what
   the file's `@{…}` reads.
2. **Inputs for `${NAME}`.** Every item outside the namespaces is there for the file by its
   variable name — `${GH_USER}` for `gh/user`. (`@{gh/user}` needs no `--all`: it reads the store.)

```bash
# app.vars
OWNER=${GH_USER}
PORT=@{server/port}
```

```bash
folio exec --vars app.vars --all -- ./app                          # OWNER=other  PORT=22
folio exec --vars app.vars --all --use @app2/@staging -- ./app     # PORT=2222
folio exec --vars app.vars --use @app2/@staging --all -- ./app     # PORT=22
```

`./app` gets `OWNER` and `PORT` only — not `GH_USER` or the rest. Without `--all`, `OWNER` would be
empty: nothing else feeds `${GH_USER}`. When a vars file uses no `${…}` from the store and there is
no `--use` to order against, `--all` beside it changes nothing.

### Check the names first

```bash
folio exec --names --secrets gh @nawa -- gh repo list
```

```
GH_TOKEN <- @nawa/gh/token(S)
GH_USER  <- @nawa/gh/user(T)
```

Shows what the command would get, without running it. Warnings and notes still show on stderr.

To see the same and run it, use `--debug` (the names go to stderr, so the command's output stays
clean); to see it and be asked first, `--confirm`:

```bash
folio exec --confirm --secrets gh @nawa -- gh repo list
```

```
GH_TOKEN <- @nawa/gh/token(S)
GH_USER  <- @nawa/gh/user(T)
folio exec: run gh? [y/N]
```

### Pick the variable name

```bash
folio exec --secrets GITHUB_TOKEN=gh/token gh -- ./deploy
```

Sets `GITHUB_TOKEN` from `gh/token`, and loads all of `gh/` by the rule — `gh/token` also as
`GH_TOKEN`. Without `gh`, only `GITHUB_TOKEN` is set: a `VAR=<name>` on its own selects nothing
else.

### From a vars file

Write down once what a command needs, and where each value comes from:

```bash
# prod-deploy.vars
LOG_LEVEL=debug                                     # a constant
HOST_NAME=${HOSTNAME:-localhost}                    # from your environment, else a constant
GH_TOKEN=@{gh/token:-none}                          # a secret, else a constant
DB_URL=postgres://@{prod/db/user}:@{prod/db/pass}@${DB_HOST:-db}:5432/app
@{atlassian/*}                                      # every entry under atlassian/, named by its path
```

```bash
folio exec -s --vars prod-deploy.vars -- ./deploy
```

Each line is one of:

| Line | Sets |
| --- | --- |
| `VAR=<value>` | `VAR`, to the value: text, with any number of `${NAME}` and `@{name}` put in. |
| `@{name}` | The text or secret `name`, as a variable named by its path (as an `<entry>` is: `@{gh/token}` gives `GH_TOKEN`). |
| `@{folder/*}` | Every entry under `folder`, each named by its path; `@{@prod/*}` for a namespace. |

In a value:

| Write | For |
| --- | --- |
| `${NAME}` | The variable `NAME`: set by an earlier line, else by the entries, `--all` and `--use` typed, else from your environment. Empty when it is none of them. |
| `@{name}` | The text or secret `name`. One that is not there stops everything. |
| `${NAME:-<fallback>}`, `@{name:-<fallback>}` | The same, but the fallback when the variable is unset or empty, or the entry is not there. A fallback is a value too, so they chain, either way round: `${GH_TOKEN:-@{gh/token}}`, `@{gh/token:-${GH_TOKEN:-none}}`. A fallback is only made when needed: `${GH_TOKEN:-@{gh/token}}` reads nothing from the store when `GH_TOKEN` is set. |
| `'…'` | Text as it is: `'${HOME}'` is `${HOME}`. |
| `"…"` | Text with its blanks kept; `${…}` and `@{…}` are still put in. |
| `\` | The next character as it is: `\$`, `\@{`, `\}`, `\#`, `\\`. |

Blank lines, and comments — `#` at the start of a line, or after a blank (`#ff0000` is a value)
— are left out, and so are the blanks around a value. Nothing in a vars file ever runs: it is read
by EnvFolio a character at a time, never handed to a shell; `$(…)`, `` ` `` and any other use of `$`
are refused.

A mistake stops everything before anything is read, saying the file and line:

```
folio: exec: prod-deploy.vars:4: 'prod/db/pas' is not a text or secret in the store, and there is no fallback.
```

So does a secret without `--secrets`, wherever it is in the file — also in a fallback that is not
needed today, so a forgotten `-s` never slips through as a fallback — and an `@{folder/*}` with a
secret under it (typed on the command line, a folder's secrets are left out with a note instead).

Lines are set in order, a later one overriding an earlier one. With several `--vars`, a later file
overrides an earlier one. The value goes only to the command, as any entry's does.

**The file is the contract.** It is made after the entries, `--all` and `--use` typed, and they
only feed it: its `${NAME}` sees them, its `@{name}` reads through any `--use`, but the command
gets only the variables the vars files set. So one file, written for what the command needs, can
be fed a different environment each time (the whole picture: [Feeding a
command](#feeding-a-command-contract-store-and-namespaces)):

```bash
# server.vars — what the app needs, by its own names
DB_USER=@{server/user}
PGPASSWORD=${SERVER_PASSWORD}
DB_URL=postgres://${SERVER_USER}@${SERVER_DB}:${SERVER_PORT:-5432}/app
```

```bash
folio exec --secrets --vars server.vars server --use @app2/@prod    -- ./deploy.sh
folio exec --secrets --vars server.vars server --use @app2/@staging -- ./deploy.sh
```

`./deploy.sh` gets `DB_USER`, `PGPASSWORD` and `DB_URL` — not `SERVER_USER` and the rest.
`--names` lists those under `Only for the vars files`.

The file holds where the values are, not the values, so it can be committed with the project it is
for. A constant is in it as written: put a secret in the store, and `@{…}` it — never a constant.
`folio check vars` checks a file's writing without a store (in CI, say); `--names` shows where each
variable would come from. To run the command elsewhere, `folio export --vars` takes just the items
the file names — see [The items a vars file names](#the-items-a-vars-file-names).

### Check a vars file against the store first

```bash
folio exec -s --names --vars prod-deploy.vars
```

```
LOG_LEVEL <- debug
HOST_NAME <- [$HOSTNAME]
GH_TOKEN  <- [gh/token(S)]
DB_URL    <- postgres://[prod/db/user(T)]:[prod/db/pass(S)]@db:5432/app
JIRA_HOST <- atlassian/jira/host(T)
```

Each value as it would be made, each part shown by where it would come from — `[$NAME]` from the
environment (`[$NAME (unset)]` when it would be empty), `[name(S)]` or `[name(T)]` from the
store, or the constant — never a value. A mistake, or an entry that is not there, stops it as the
real run would.

### From an export file

```bash
folio exec --from items.folio --secrets --all -- ./deploy
```

Loads the entries from `items.folio`, a file made by `folio export`, on a machine with no EnvFolio
store at all — a booth in the cloud, say. Entries, `--secrets`, `--all`, `--use`, namespaces,
`VAR=<name>` and variable names are as from a store; the file's items are laid out as they were in
the store they were exported from (with any `export --use` taken off).

```bash
folio export --secrets server --use @app2 -o app2.folio                 # here
folio exec --from app2.folio --secrets --vars server.vars --all --use @prod -- ./deploy.sh   # there
```

The file is opened as `folio import` opens it: gpg asks for its passphrase (or it comes from
`--file-passphrase-fd`), or, when it is locked to your public key, uses your secret key from your
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
{ rm /dev/shm/pass ; folio exec --from items.folio --file-passphrase-fd 3 -a -- ./deploy ; } 3< /dev/shm/pass
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
folio shell [-s|--secrets] [-a|--all] [-n|--names|--debug|--confirm] [--plain] [--use <@namespace>]... [--vars <file>]... [--store-passphrase-fd <n>] [--from <file> [--file-passphrase-fd <n>]] <entry>...
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. |
| `-a`, `--all` | Load every entry outside the namespaces, where it is typed, as in `folio exec`. |
| `-n`, `--names` | Only show which variable would get which entry, as in `folio exec`; no shell starts. |
| `--debug` | Show the same on stderr, then start the shell. |
| `--confirm` | Show the same on stderr, and start the shell only when you say yes, as in `folio exec`. |
| `--plain` | With `--names`, `--debug` or `--confirm`: mark secrets (S) and texts (T), with no colour, even on a screen. |
| `--use <@namespace>` | Take every entry under `<@namespace>`, named without it, as in `folio exec`; can be given more than once. Experimental: it may change. |
| `--vars <file>` | Set the variables a vars file says, as in `folio exec`; can be given more than once. |
| `--from <file>` | Take the entries from a file made by `folio export`, as in `folio exec`. |
| `--file-passphrase-fd <n>` | With `--from`: the file's passphrase, from file descriptor `<n>`, as in `folio exec`. |
| `--store-passphrase-fd <n>` | Without `--from`: the store key's passphrase, as in `folio exec`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Entries, `--use`, vars files, variable names, values and errors are as in `folio exec`. Before the shell starts, EnvFolio
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

### From a vars file

```bash
folio shell -s --vars work.vars
```

A shell with the variables `work.vars` sets — see [From a vars file](#from-a-vars-file). The line
it prints counts them as `from vars files`.

---

## `folio check vars`

Checks vars files — the ones `folio exec --vars` and `folio shell --vars` read — for mistakes in
how they are written: every line a `VAR=<value>` or an `@{…}` of its own, every `${…}` and `@{…}`
whole, nothing that would run. Needs no store and reads nothing from one, so it fits in CI or an
editor's save hook. Whether the entries are there, and where each variable would come from, is
what [`folio exec --names --vars`](#check-a-vars-file-against-the-store-first) shows.

```
folio check vars <file>...
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. |

### A good file

```bash
folio check vars prod-deploy.vars
```

```
prod-deploy.vars: fine (5 line(s) to load).
```

### Every mistake, with its line

```bash
folio check vars bad.vars
```

```
folio: check vars: bad.vars:2: not VAR=<value>, nor @{<entry>}: 'BAD LINE'.
folio: check vars: bad.vars:3: a $ starts ${NAME} or ${NAME:-<fallback>}; write \$ for a $ itself.
folio: check vars: bad.vars:5: ${HOME is not closed with }.
```

Every mistake in every file is shown, not only the first; it fails when there is any.

## `folio completion`

Prints the script that makes **Tab** complete `folio`'s commands, their options, and the names of
texts and secrets, in bash or zsh. Names only: completing never reads, decrypts or checks an entry,
so it is quick and never asks for a passphrase.

```
folio completion bash|zsh
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. |

What Tab offers:

- the commands, and after an action the kinds it is for (`show` → `text`, `secret`; zsh shows what
  each does);
- a command's options, from its help — so only the ones it takes;
- text names after `… text`, secret names after `… secret`, both after `export`, `exec` and
  `shell` (also after `VAR=`), folders only after `ls`. A level at a time: `web/` first, then what
  is in it; a folder that is the only choice opens at once;
- file names where a file goes (`restore`, `import`, `backup`, `--from`, `-o`, `--to`), and after
  `exec … --` the command to run;
- topics after `folio help`.

The script runs `folio` by the name typed (`folio`, `./folio`, …), so it follows
`FOLIO_STORE_DIR` and always matches the version you have.

### bash

```bash
# in ~/.bashrc
eval "$(folio completion bash)"
```

```
$ folio show s<Tab>             → folio show secret
$ folio show secret web/<Tab>
web/github   web/gitlab   web/deep/
```

Works with the bash macOS ships (3.2), without the `bash-completion` package.

### zsh

```zsh
# in ~/.zshrc
eval "$(folio completion zsh)"
```

Uses zsh's own completion system (it runs `compinit` if your `.zshrc` has not, skipping completion files zsh does not trust
rather than stopping to ask), with a description
beside each choice:

```
$ folio secret <Tab>
cp        -- Copy a secret
edit      -- Edit a secret in $EDITOR
…
```

### No shell named

```bash
folio completion
```

Says which line to add to `~/.bashrc` or `~/.zshrc`, and fails, so `eval "$(folio completion)"`
loads nothing by mistake.

---

## `folio backup`

Saves the whole EnvFolio store and its GPG key into one file, to get it all back with
`folio restore` — on this machine or a new one.

```
folio backup [--history] [--encrypt [--file-passphrase-stdin|--file-passphrase-fd <n>]] [--store-passphrase-fd <n>] [<file>|<folder>]
```

| Option | Meaning |
| --- | --- |
| `--history` | Keep the store's git history too. Without it, a restore starts a new one. |
| `--encrypt` | Encrypt the backup with a passphrase of its own (`gpg --symmetric`); the file ends in `--folio.gpg` instead of `--folio.tar.gz`. |
| `--file-passphrase-stdin` | Read that passphrase from the first line of stdin instead of gpg's prompt. Needs `--encrypt`. An empty passphrase is refused. |
| `--file-passphrase-fd <n>` | The same, from the first line of file descriptor `<n>`. Needs `--encrypt`. |
| `--store-passphrase-fd <n>` | The store key's passphrase (to copy the key into the backup), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
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
for it again. With `--file-passphrase-stdin`, the first line of stdin is the passphrase — feed it from
a file or another secret tool, not with `echo`.

---

## `folio restore`

Brings back an EnvFolio store from a file made by `folio backup`.

```
folio restore [--file-passphrase-stdin|--file-passphrase-fd <n>] [--allow-unsafe-folder] <file>
```

| Option | Meaning |
| --- | --- |
| `--file-passphrase-stdin` | Read the passphrase of an encrypted backup (`--folio.gpg`) from the first line of stdin instead of gpg's prompt. |
| `--file-passphrase-fd <n>` | The same, from the first line of file descriptor `<n>`. |
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
folio export [-s|--secrets] [--to <key>|--file-passphrase-stdin|--file-passphrase-fd <n>] [--store-passphrase-fd <n>] [--use <@namespace>]... [--vars <file>]... [-o|--output <file>|<folder>] [<name>...]
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Take the secrets in a folder, or under a `--use`, too. A secret named on its own always goes; one a vars file names needs it. |
| `--to <key>` | Lock the file to this public key — a key file (`.asc`) or a key in your keyring (fingerprint, key id or email) — instead of a passphrase. Only its secret key can open the file. A key file is never added to your keyring. |
| `--file-passphrase-stdin` | Read the file's passphrase from the first line of stdin instead of gpg's prompt. Not with `--to`. Needs a `<name>`, `--use` or `--vars`. An empty passphrase is refused. |
| `--file-passphrase-fd <n>` | Read the file's passphrase from the first line of file descriptor `<n>`. Not with `--to`. stdin stays free, so the items can still be picked. An empty passphrase is refused. |
| `--store-passphrase-fd <n>` | The store key's passphrase (to read the secrets), from the first line of file descriptor `<n>`, instead of gpg's prompt. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
| `--use <@namespace>` | Take every item under `<@namespace>` (e.g. `@app2`, or `@app2/@prod`), named without it. Can be given more than once. See [One environment, with --use](#one-environment-with---use). Experimental: it may change. |
| `--vars <file>` | Take the items a [vars file](#from-a-vars-file) names. Can be given more than once. See [The items a vars file names](#the-items-a-vars-file-names). |
| `-o`, `--output <file>\|<folder>` | Where to write the file. With no `-o`, EnvFolio asks. |
| `-h`, `--help` | Show the options and stop. |

A `<name>` is a text or a secret, or a folder: every text under it, and its secrets with
`--secrets`. With `--use`, the items under a namespace are taken, named without it, as
[`folio exec --use`](#peel-a-namespace-with---use) does. With `--vars`, the items a vars file names
are taken too. With no `<name>`, `--use` or `--vars`, EnvFolio lists every item, numbered, and asks
which ones (`1 3 5-7`, or `all`).

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

### The items a vars file names

```bash
folio export -s --vars prod-deploy.vars -o deploy.folio
# there, with the same vars file — no store needed:
folio exec -s --from deploy.folio --vars prod-deploy.vars -- ./deploy
```

Takes every item the [vars file](#from-a-vars-file) names — each `@{name}` and `@{folder/*}`,
wherever it is — and nothing else; `${…}` and constants are not items, and stay in the file. An
`@{…}` in a fallback is taken too when it is there (whether it is needed depends on the
environment where the command runs), and left out with a note when it is not:

```
folio export: prod-deploy.vars:4: 'gh/token' is not a text or secret in the store; left out (it has a fallback or is one).
```

A `${NAME}` is not an item either. When the file is fed by entries or `--use` at run time (see
[Feeding a command](#feeding-a-command-contract-store-and-namespaces)), give them here too, and
the file holds what feeds it:

```bash
folio export -s --vars server.vars server --use @app2/@prod -o app2-prod.folio
folio exec -s --from app2-prod.folio --vars server.vars --all -- ./deploy.sh
```

### One environment, with --use

> **Experimental:** `--use` may change in a later version.

```
server/port                       (T)  22
@app2/@prod/server/{db, user}     (T)
@app2/@prod/server/password       (S)
@app2/@staging/server/{db, user}  (T)
@app2/@staging/server/port        (T)  2222
@app2/@staging/server/password    (S)
```

```bash
folio export --secrets server --use @app2/@staging -o app2-staging.folio
```

Takes `server/port`, then every item under `@app2/@staging`, laid over it with `@app2/@staging/`
taken off the front of the path: the file holds `server/{port, db, user, password}` — the port
being staging's `2222`, as `--use` came last — and nothing of `@app2/@prod`. Typed the other way
round, `--use @app2/@staging server`, the shared `server/port` would win.

`--use @app2` alone takes both environments, as `@prod/…` and `@staging/…`: whoever opens that
file has both, and picks one with `folio exec --from … --use @prod`. A file for each environment
gives each only its own.

One with no fallback that is not there stops the export, as it would stop `folio exec`. Any secret
in the file needs `--secrets`, as in `folio exec`. `<name>`s can be given too; each item goes
once. The closing box shows the `folio exec --from` line — with `--all` when `<name>`s or `--use` were
given, so what they brought feeds the `${NAME}`s there too.

---

## `folio import`

Brings items from a file made by `folio export` into the EnvFolio store.

```
folio import [-a|--all] [--overwrite|--skip-existing] [--key <id>] [--file-passphrase-stdin|--file-passphrase-fd <n>] [--store-passphrase-fd <n>] [--allow-unsafe-folder] [<file> [<name>...]]
```

| Option | Meaning |
| --- | --- |
| `-a`, `--all` | Take every item in the export. |
| `--overwrite` | Replace the items already in the store. |
| `--skip-existing` | Keep the items already in the store; take only the new ones. |
| `--key <id>` | With no store yet: make it with this key, as `folio init --key`. |
| `--file-passphrase-stdin` | Read the file's passphrase (or your key's, for a file locked to it) from the first line of stdin. Needs `<file>`, and `--all` or a `<name>`; with no store yet, `--key` too. |
| `--file-passphrase-fd <n>` | The same, from the first line of file descriptor `<n>`. stdin stays free, so anything not given is still asked for. |
| `--store-passphrase-fd <n>` | The store key's passphrase (to sign the texts), from the first line of file descriptor `<n>`, instead of gpg's prompt. With no store yet and a new key made for it, that new key's passphrase. See [Passphrases without a prompt](#passphrases-without-a-prompt). |
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
(`folio show secret`, `folio insert text`, `folio export`, …) asks the same way.

### Good to know

- The `--store-passphrase-…` and `--file-passphrase-…` options never open a window: the
  passphrase comes from stdin or the file descriptor instead (see
  [Passphrases without a prompt](#passphrases-without-a-prompt)).
- With no display — over SSH, in a container or a booth — keep a terminal pinentry
  (`pinentry-curses` or `pinentry-tty`). The GUI ones usually fall back to the terminal when
  there is no display.
- A terminal pinentry asks on the terminal in `GPG_TTY`. When it is not set, EnvFolio sets it to
  the terminal it runs in, so gpg can still ask when stdin is a pipe or a file
  (`echo x | folio insert text x`, `--file-passphrase-stdin`). A `GPG_TTY` you set is kept, and
  the command `exec` and `shell` run gets the one you had, if any.
- If the window opens on the wrong screen, or never opens and gpg waits, the agent was started
  from another session: run `gpg-connect-agent updatestartuptty /bye` in the current one.
- How long the agent remembers a passphrase is `default-cache-ttl` and `max-cache-ttl` (seconds)
  in the same file. To have it forget the store key's as soon as a command is done, see
  [Leave no passphrase behind](#leave-no-passphrase-behind).

---

## Passphrases without a prompt

EnvFolio deals with two kinds of passphrase, and each has its own options:

| Option | Gives | Taken by |
| --- | --- | --- |
| `--store-passphrase-fd <n>` | The store key's passphrase: to read secrets, sign texts, and copy the key into a backup. | `init` (a new key), `backup`, `export`, `import`, `exec`, `shell`, `insert text`, `edit text`, `generate text`, `show secret`, `grep secret`, `edit secret`, `generate secret` |
| `--store-passphrase-stdin` | The same, from stdin. | `init` only |
| `--file-passphrase-fd <n>` | A file's own passphrase: an encrypted backup, or an export. | `backup --encrypt`, `restore`, `export`, `import`, `exec --from`, `shell --from` |
| `--file-passphrase-stdin` | The same, from stdin. | `backup --encrypt`, `restore`, `export`, `import` |

Each reads the **first line** of file descriptor `<n>` (or stdin) and refuses an empty one. The
shell opens the file on `<n>`; the option takes the number, not a path:

```bash
folio show secret --store-passphrase-fd 3 web/github 3< ~/.store-pass
folio export --secrets --store-passphrase-fd 3 --file-passphrase-fd 4 web 3< ~/.store-pass 4< ~/.export-pass
```

- EnvFolio closes the fd once it is read, so a command that `folio exec` runs never gets it.
- With `--store-passphrase-fd`, EnvFolio first hands the passphrase to gpg-agent (gpg's loopback
  mode), then works as usual. A wrong passphrase stops it there, before anything changes. The agent
  then remembers the passphrase for its cache time, as when you type it — so a `folio` command
  just after may not need it at all.
- A passphrase in a file is only as safe as the file: make it under `umask 077`, or keep it in
  `/dev/shm` and remove it once opened (as in [From an export file](#from-an-export-file)).
- These were `--passphrase-stdin` and `--passphrase-fd` before 0.7.0. The old names stop and say
  the new one.

---

## Never asked, on a machine you trust

On your own machine, you may not want to type the store key's passphrase at all. Put it in a file
only you can read, and name the file in your shell's profile:

```bash
mkdir -p ~/.config/folio
(umask 077; printf '%s\n' 'the store key passphrase' > ~/.config/folio/store-pass)
export FOLIO_STORE_PASSPHRASE_FILE=~/.config/folio/store-pass
```

Then every command that takes `--store-passphrase-fd` reads the passphrase from the file's first
line instead, and nothing is asked: `show secret`, `insert text`, `exec --secrets`, `backup`, …
`init` makes a new key with it.

- `--store-passphrase-fd` given on a command wins over the file.
- The file must be yours, and no one else may read or write it (`chmod 600`): otherwise EnvFolio
  stops and says so, as ssh does with a key. An empty first line is refused too.
- A wrong passphrase stops the command before anything changes, as with `--store-passphrase-fd`.
- The command `exec` and `shell` run does not get `FOLIO_STORE_PASSPHRASE_FILE`.
- The key itself keeps its passphrase: a backup of the store, which copies the key, is still
  locked by it. Keep the file out of your backups.
- **Anyone who can read that file — or run commands as you — can open the store.** Use it only
  where you would leave the store unlocked. On a desktop, a pinentry that keeps the passphrase in
  the login keychain (see [Passphrase prompts in a window](#passphrase-prompts-in-a-window-gui))
  or a long `default-cache-ttl` asks less often while keeping it out of a file.
- With [`--fresh-passphrase`](#leave-no-passphrase-behind) too, the passphrase still comes from
  the file, and gpg-agent forgets it when the command is done.

---

## Leave no passphrase behind

gpg-agent remembers a passphrase for its cache time, so the next `folio`, `pass` or `gpg` needs
none. On a machine you trust less — a shared server, a booth in the cloud — `--fresh-passphrase`
has it forget the store key's passphrase when the command starts and again when it ends. It goes
with every command, anywhere before a `--`:

```bash
folio show secret --fresh-passphrase web/github
folio exec --fresh-passphrase --secrets gh/token -- gh release list
```

Or for every command, from your shell's profile:

```bash
export FOLIO_FRESH_PASSPHRASE=1     # 0, or unset, to turn it off
```

- **At the start**, so the store key's passphrase is asked (or taken from
  `--store-passphrase-fd`), even when the agent had it.
- **During the command**, the agent keeps it as usual, so it is asked once.
- **At the end**, also when the command fails. `exec` and `shell` do it before the command or the
  shell starts, every value read by then: they hold the values, not the passphrase. A key the
  agent did not have at the start and has at the end is forgotten too — the key a `--from` file
  is locked to.
- The passphrase that locks an encrypted backup or an export is not kept at all
  (gpg's `--no-symkey-cache`), whether typed or given with `--file-passphrase-…`.
- **Other keys stay as they were**: your git signing key, or one gpg-agent holds for SSH. But
  gpg-agent tries the passphrases it has on a key it has none for: **if another key it remembers
  has the same passphrase as the store key, the store key still opens without asking.** Give the
  store key a passphrase of its own, or run `gpgconf --reload gpg-agent` to have it forget them
  all.
- It needs `gpg-connect-agent`, which comes with gpg. A command killed outright (`kill -9`) cannot
  make the agent forget.


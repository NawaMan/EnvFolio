# Keep Manual

One section per command, one subsection per example. Every example that can run without a
keyboard has a matching test in `tests/` named `MANUAL: <command> — <example>`.

---

## `keep help`

```
keep help [command]
```

### List the commands

```bash
keep help
```

Lists every command, one line each. Commands not built yet say *(not yet)*.

### Help for one command

```bash
keep help store init
```

The usage and options of `keep store init` — the same as `keep store init --help`.

---

## `keep store init`

Creates the Keep store (`$KEEP_STORE_DIR`, default `~/.keep`): picks or creates the GPG key that
encrypts it, runs `pass init`, and starts the store's git history.

```
keep store init [--key <id>]
keep store init [--new-key] [--name <name>] [--email <email>] [--passphrase-stdin]
```

| Option | Meaning |
| --- | --- |
| `--key <id>` | Use an existing secret key — fingerprint, key id or email; must match exactly one key. No passphrase is needed: the store only encrypts to the key. |
| `--new-key` | Create a new key. Implied by any of the options below. |
| `--name <name>` | The new key's name. |
| `--email <email>` | The new key's email. |
| `--passphrase-stdin` | Read the new key's passphrase from the first line of stdin instead of gpg's prompt. Needs `--name` and `--email`. An empty passphrase is refused. |
| `-h`, `--help` | Show the options and stop. Nothing is created. |

`--opt=value` works as well as `--opt value`. Anything not given is asked for. `--key` cannot be
combined with the new-key options. It fails if anything already exists at `$KEEP_STORE_DIR`.

### Ask for everything

```bash
keep store init
```

Shows a menu of your secret keys plus *Create a new key* (straight to creating one if you have
none). A new key asks for your name and email — pre-filled from git — then gpg asks for the
passphrase.

*Interactive — checked by hand, no automated test.*

### Use an existing key, no prompts

```bash
keep store init --key jane@example.com < /dev/null
```

Uses the one secret key matching `jane@example.com`. Nothing is asked, so this works in a script.

### Create a new key, no prompts

```bash
keep store init --name "Jane Doe" --email jane@example.com --passphrase-stdin < passphrase-file
```

Creates a key for `Jane Doe <jane@example.com>` protected by the first line of `passphrase-file`.
Feed the passphrase from a file (made under `umask 077`) or another secret tool — not with
`echo`, which leaves it in your shell history.

### Use another store folder

```bash
KEEP_STORE_DIR=~/work-keep keep store init --key jane@example.com
```

Creates the store in `~/work-keep` instead of `~/.keep`. Every later `keep` command needs the
same `KEEP_STORE_DIR` to use it.

### When the store folder already exists

`keep store init` refuses to run if the store folder already exists, and changes nothing:

- **A ready Keep store** (it has `.gpg-id` and a git history) — says the store already exists.
- **Anything else**, even an empty folder — says it is not a ready Keep store. This is what an
  earlier `keep store init` leaves if it stopped partway (an error, Ctrl-C, a closed terminal):
  remove the folder and run `keep store init` again. A key created by the earlier
run is kept, and shows up in the key menu.

---

## `keep ls`

Lists the texts and secrets in the Keep store together as one tree: names only, never values.
Each name is marked **(S)** for a secret or **(T)** for a text. A name that is both shows twice.
Signatures (`.txt.sig`) are left out.

```
keep ls [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. It needs a ready store (`keep store init`).

### List everything

```bash
keep ls
```

```
Keep Store
├── (T) note
└── web
    ├── (S) github
    ├── (T) github
    └── (T) home
```

### List one folder

```bash
keep ls web
```

Lists only what is under `web`.

---

## `keep text ls`

Lists the texts in the Keep store as a tree: names only. It mirrors `keep secret ls`: the same
tree as `pass ls`, but with the texts instead of the secrets. Signatures (`.txt.sig`) and folders
holding no texts are left out.

```
keep text ls [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed; a text's own name is refused (use `keep text show` once it exists).
It needs a ready store (`keep store init`).

### List every text

```bash
keep text ls
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
keep text ls web
```

Lists only what is under `web`.

---

## `keep text find`

Lists the texts whose names contain any of the given parts, ignoring case, as a tree: names
only. It mirrors `keep secret find`: `pass find`, for the texts.

```
keep text find <part>...
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

It needs a ready store (`keep store init`).

### Find by name

```bash
keep text find home
```

```
Search Terms: home
└── web
    └── home
```

---

## `keep text grep`

Prints the lines of every text that match, each under its text's name. It mirrors
`keep secret grep`: the same loop as `pass grep`, reading the plain texts instead of decrypting
secrets. Secrets are never searched. Signatures are not checked here (`keep text show` will).

```
keep text grep [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `-h`, `--help` | Show the options and stop. Works without a store. In Keep, `-h` is always help, never grep's `-h`. |

It needs a ready store (`keep store init`).

### Find by value

```bash
keep text grep jane
```

```
web/user:
jane
```

---

## `keep text show`

Prints a text, after checking its signature: `<name>.txt.sig` must be there, match the text, and
be by the store's key (the first key in `.gpg-id`). Checking needs no passphrase.

```
keep text show <name>
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a text can be shown; a folder or a secret is refused (use `keep secret show` for secrets).
It needs a ready store (`keep store init`).

### Show a text

```bash
keep text show web/user
```

Prints the text exactly as it was inserted.

### A text changed outside Keep is not shown

If the signature is missing, does not match, or is by another key — even one you trust — the text
is not printed and the command fails. The message says how to see what changed
(`git diff` / `git log -p` in the store), and how to sign it again if the text is right:

```bash
keep text insert -f -m web/user < ~/.keep/web/user.txt
```

---

## `keep text insert`

Adds a text to the Keep store. A text is **not a secret**: it is kept plain, not encrypted, as
`<name>.txt` in the same folders as the secrets, and signed with the store's key as
`<name>.txt.sig`, so a changed text can be told. Both are committed to the store's git history.
Signing uses the key's secret half, so gpg may ask for its passphrase.

```
keep text insert [-m|--multiline] [-f|--force] [-t|--text <text>] <name>
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
(`keep store init`).

### Give the text

```bash
keep text insert -t "https://example.com" web/home
```

### Type a text

```bash
keep text insert web/user
```

Asks for the text once, and shows it as you type.

*Interactive — checked by hand, no automated test.*

### Pipe a text in

```bash
whoami | keep text insert web/user
```

Only the first line is the text. For more, use `-m` below.

### Several lines

```bash
keep text insert -m notes/todo < todo.txt
```

All of stdin is the text, kept exactly.

---

## `keep text edit`

Opens a text in `$EDITOR` (`vi` if unset), or adds it if it is new, then signs and commits it. It
mirrors `keep secret edit` (`pass edit`): you edit a temporary copy, removed afterwards, and the
text is saved only if you changed it. Signing may ask for the key's passphrase.

```
keep text edit <name>
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

**The signature is checked first**, as `keep text show` does: a text changed outside Keep is not
opened, so editing never signs it by accident. If you save it unchanged, it fails with *Text
unchanged.* and nothing is committed. It needs a ready store (`keep store init`).

### Edit a text

```bash
keep text edit web/user
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `keep text generate`

Generates a random text, saves, signs and commits it, then prints it. It mirrors
`keep secret generate` (`pass generate`): the same characters and default length. It is kept
plain, so use it for things like IDs, not passwords. Signing may ask for the key's passphrase.

```
keep text generate [-n|--no-symbols] [-i|--in-place|-f|--force] <name> [<length>]
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
keep text generate -n id/session 12
```

Saves a 12-character text of letters and digits as `id/session`, and prints it.

---

## `keep text rm`

Removes a text, or every text in a folder with `-r`, and commits the removal. The text stays in
the store's git history. It mirrors `keep secret rm` (`pass rm`), but **only texts are removed**:
`-r` on a folder keeps the secrets in it.

```
keep text rm [-r|--recursive] [-f|--force] <name>
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
keep text rm -f mail/work
```

---

## `keep text mv`

Renames or moves a text, or every text in a folder, and commits the change. It mirrors
`keep secret mv` (`pass mv`), but **only texts are moved**: secrets in a moved folder stay where
they are. A signature covers the text, not its name, so a moved text still verifies.

```
keep text mv [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

A `<new-name>` ending in `/`, or an existing folder, is a folder: the text keeps its name inside
it. At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Rename a text

```bash
keep text mv web/user web/login
```

---

## `keep text cp`

Copies a text, or every text in a folder, and commits the copy. It mirrors `keep secret cp`
(`pass cp`), but **only texts are copied**.

```
keep text cp [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.**

### Copy a text

```bash
keep text cp web/user web/user-copy
```

---

## `keep secret ls`

Lists the secrets in the Keep store as a tree: names only, never their values. It is `pass ls`
without the texts: the same tree, minus `*.txt`/`*.txt.sig` files and folders holding only texts.

```
keep secret ls [<subfolder>]
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a folder can be listed. A secret's own name is refused, because `pass ls <name>` would
print the secret (use `keep secret show` once it exists). The same goes for `pass`'s other
options, such as `-c`. It needs a ready store (`keep store init`).

### List every secret

```bash
keep secret ls
```

```
Secret Store
├── note
└── web
    └── github
```

### List one folder

```bash
keep secret ls web
```

Lists only what is under `web`.

---

## `keep secret find`

Lists the secrets whose names contain any of the given parts, ignoring case, as a tree. It shows
names only, never values. It is `pass find` without the texts.

```
keep secret find <part>...
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Find by name

```bash
keep secret find git
```

```
Search Terms: git
└── web
    └── github
```

---

## `keep secret grep`

Decrypts every secret and prints the lines that match, each under its secret's name. **The
matching lines are secret values, and they are shown on screen.** It is `pass grep`, so gpg may
ask for the key's passphrase.

```
keep secret grep [<grep-option>...] <pattern>
```

| Option | Meaning |
| --- | --- |
| `<grep-option>` | Any option of `grep`, e.g. `-i` to ignore case. |
| `-h`, `--help` | Show the options and stop. Works without a store. In Keep, `-h` is always help, never grep's `-h`. |

### Find by value

```bash
keep secret grep jane
```

```
web/github:
user: jane
```

---

## `keep secret show`

Decrypts a secret and prints it, or copies it to the clipboard. It is `pass show`, so gpg may
ask for the key's passphrase.

```
keep secret show [-c|--clip[=<line>]] <name>
```

| Option | Meaning |
| --- | --- |
| `-c`, `--clip[=<line>]` | Copy the secret, or only line `<line>` of it, to the clipboard and print nothing. The clipboard is cleared after 45 seconds (`PASSWORD_STORE_CLIP_TIME`). Needs `pbcopy`, `wl-copy` or `xclip`. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Only a secret can be shown. A folder is refused, because `pass show <folder>` would list it
(use `keep secret ls`). `pass`'s `-q`/`--qrcode` is not offered. It needs a ready store
(`keep store init`).

### Print a secret

```bash
keep secret show web/github
```

Prints the whole secret, every line of it.

### Copy to the clipboard

```bash
keep secret show -c web/github
```

Copies the secret without showing it, and says when the clipboard will clear.

### Copy one line

```bash
keep secret show --clip=2 note
```

Copies only line 2 of `note`, e.g. the user name kept under a password.

---

## `keep secret insert`

Adds a secret to the Keep store, encrypted with the store's key, and commits it to the store's git
history. It is a plain `pass` entry, so `PASSWORD_STORE_DIR=~/.keep pass show <name>` reads it too.

```
keep secret insert [-m|--multiline] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-m`, `--multiline` | The secret is several lines; end it with Ctrl-D. |
| `-f`, `--force` | Overwrite an existing secret without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Everything except `--help` goes straight to `pass insert`, so it behaves exactly like `pass`.
`pass`'s `-e`/`--echo` is refused: it would show the secret on screen. The secret is never taken
as an argument. It needs a ready store (`keep store init`).

### Type a secret

```bash
keep secret insert web/github
```

Asks for the secret twice, without echo. If `web/github` already exists, asks before overwriting it.

*Interactive — checked by hand, no automated test.*

### Pipe a secret in

```bash
printf '%s\n%s\n' "$value" "$value" | keep secret insert web/github
```

As at the prompt, the secret is given twice — one per line — and must match. Nothing is asked:
**an existing secret is overwritten**, as `pass insert` does (the old one stays in the store's git
history). For a single copy, use `-m` below.

### Several lines

```bash
keep secret insert -m note < note.txt
```

All of stdin is the secret.

---

## `keep secret edit`

Opens a secret in `$EDITOR` (vi if unset), or adds it if it is new, and commits the change. It
is `pass edit`: the secret is decrypted to a temporary file for the editor, in `/dev/shm` (a RAM
disk) where there is one, and removed afterwards. Without `/dev/shm` (macOS), `pass` warns and
asks first. If you save it unchanged, nothing is committed.

```
keep secret edit <name>
```

| Option | Meaning |
| --- | --- |
| `-h`, `--help` | Show the options and stop. Works without a store. |

### Edit a secret

```bash
keep secret edit web/github
```

*Interactive — checked by hand, and tested with a stand-in editor.*

---

## `keep secret generate`

Generates a random secret, saves and commits it, then prints it, or copies it with `-c`. It is
`pass generate`.

```
keep secret generate [-n|--no-symbols] [-c|--clip] [-i|--in-place|-f|--force] <name> [<length>]
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
keep secret generate -n api 12
```

Saves a 12-character secret of letters and digits as `api`, and prints it.

### Copy to the clipboard

```bash
keep secret generate -c api
```

Saves the new secret and copies it without showing it.

---

## `keep secret rm`

Removes a secret, or a folder with `-r`, and commits the removal. The secret stays in the store's
git history. It is `pass rm`.

```
keep secret rm [-r|--recursive] [-f|--force] <name>
```

| Option | Meaning |
| --- | --- |
| `-r`, `--recursive` | Remove a folder and everything in it. |
| `-f`, `--force` | Do not ask. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal it asks first. **From a script or pipe, it does not ask.** On a folder, `-r` removes
everything in it, **texts included** — `pass` acts on the whole folder. (`keep text rm -r` removes
only the texts.)

### Remove a secret

```bash
keep secret rm -f mail/work
```

---

## `keep secret mv`

Renames or moves a secret or a folder, and commits the change. It is `pass mv`.

```
keep secret mv [-f|--force] <old-name> <new-name>
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
keep secret mv web/github web/gh
```

---

## `keep secret cp`

Copies a secret or a folder, and commits the copy. It is `pass cp`.

```
keep secret cp [-f|--force] <old-name> <new-name>
```

| Option | Meaning |
| --- | --- |
| `-f`, `--force` | Overwrite without asking. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

At a terminal, it asks before overwriting. **From a script or pipe, it overwrites.** A folder is
copied with everything in it, **texts included**.

### Copy a secret

```bash
keep secret cp web/github web/github-copy
```

---

## `keep exec`

Runs a command with entries from the Keep store as environment variables, the way `op run` and
`aws-vault exec` do. Texts load by default; secrets load only with `--secrets`. Values never go
on a command line, into a file, or on the screen.

```
keep exec [-s|--secrets] <entry>... -- <command> [<arg>...]
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. Without it, a secret named directly is refused, and the secrets in a folder are skipped. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

An `<entry>` is one of:

| Form | Loads |
| --- | --- |
| `<name>` | One text (or, with `--secrets`, one secret). |
| `<folder>` | Every text under the folder, at any depth; with `--secrets`, every secret too. |
| `VAR=<name>` | One entry, as the variable `VAR`, exactly as written. |

At least one `<entry>` is needed; the whole store is never loaded by default. The `--` is
needed, and everything after it is the command, which Keep never parses. It needs a ready store
(`keep store init`).

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
path. Without `--secrets` only the text loads, so there is no conflict.

**Values.** An entry's whole content, with trailing newlines removed (as `$(pass show x)` gives
it), so multi-line values such as keys come through whole. Each text's signature is checked as
in `keep text show`; each secret is decrypted with `pass show`, so gpg may ask for the key's
passphrase. **All or nothing:** every entry is checked and read before the command starts; if one
fails, the command does not run and Keep exits 1.

**The command** replaces Keep (`exec`), so its exit status, signals and input/output are its own.
It gets the caller's environment plus the loaded variables, which override any of the same name.
Keep's own `PASSWORD_STORE_DIR` is not passed on: the caller's value is put back, or it is unset.

### Run a command with texts

```bash
keep exec git -- git commit
```

Runs `git commit` with every text under `git/` set, e.g. `git/user_name` as `GIT_USER_NAME`.

### Add secrets

```bash
keep exec --secrets gh -- gh repo list
```

Also loads the secrets under `gh/`, e.g. `gh/token` as `GH_TOKEN`.

### Layer a namespace

```bash
keep exec --secrets gh @nawa -- gh repo list
```

Loads `gh/`, then everything in `@nawa/` over it: `@nawa/gh/token` gives `GH_TOKEN`, replacing
`gh/token`'s. `keep exec @nawa -- cmd` alone loads only what is in the namespace.

### Pick the variable name

```bash
keep exec --secrets GITHUB_TOKEN=gh/token gh -- ./deploy
```

Sets `GITHUB_TOKEN` from `gh/token`, and loads the rest of `gh/` by the rule. `gh/token` is
claimed, so it does not also give `GH_TOKEN`.

---

## `keep shell`

Starts your shell (`$SHELL`, or `/bin/sh`) with entries from the Keep store as environment
variables. It is `keep exec <entry>... -- "$SHELL"`, plus a line saying what was loaded.

```
keep shell [-s|--secrets] <entry>...
```

| Option | Meaning |
| --- | --- |
| `-s`, `--secrets` | Also load secrets. |
| `-h`, `--help` | Show the options and stop. Works without a store. |

Entries, variable names, values and errors are as in `keep exec`. Before the shell starts, Keep
prints the loaded variable names, never their values, to stderr. It sets `KEEP_SHELL=1`, so your
own prompt can show it; Keep does not change the prompt. `exit` leaves the shell. It needs a
ready store (`keep store init`).

### Open a shell

```bash
keep shell --secrets gh @nawa
```

```
keep shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave.
```

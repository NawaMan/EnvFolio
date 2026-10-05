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

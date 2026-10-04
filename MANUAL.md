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
combined with the new-key options. It fails if a store already exists at `$KEEP_STORE_DIR`, or if
that folder is not empty.

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

### Resume an interrupted init

```bash
keep store init
```

If an earlier `keep store init` stopped partway (an error, Ctrl-C, a closed terminal), the store
folder still holds `.keep-init`, a list of the steps already done. Running `keep store init`
again shows those steps and asks:

- **Continue where it stopped** — uses the same key and runs only the steps not done yet.
  Fails if that key is no longer in your keyring.
- **Start over** — after a confirm, deletes the store folder and starts from the key choice.
  A key created by the earlier run is kept, and shows up in the key menu.
- **Cancel** — changes nothing.

This needs a terminal: without one (e.g. `< /dev/null`) it stops, and says so. `--key` with a
different key than the earlier run, or `--new-key`, is refused. Other `keep` commands treat an
unfinished store as not ready.

# EnvFolio

A command-line tool for password management. It is built heavily on top of [`pass`](https://www.passwordstore.org/),
    the standard Unix password manager.

- EnvFolio adds a store for plain-text values alongside the secrets -- "item" is the term used to mean both.
- EnvFolio will make it easy to init/backup/restore/export/import items.
- EnvFolio makes it easy to use items when executing a program or in a subshell.
- One motivation for EnvFolio is to allow using items in environments like CodingBooth in the cloud,
    where users can safely put their sensitive items for themselves to use inside the booth,
    in a way that `CodingBooths.online` (the provider) never needs to touch the actual secrets.

# Design Principles

- Follow what `pass` does as much as possible.
- Users of `pass` should be able to get to their secrets using `pass` directly.
- It must be clear when secrets are involved. The CLI must use the word "secret" explicitly to avoid
    exposing secrets accidentally.
- Simplify things when possible (opinionated).
- Explain clearly so there is no confusion.

# High-Level CLI Design

- `folio init`, `backup`, `restore`, `export`, `import`, `path` to deal with the store itself.
- `folio text ...`   to deal with text-related actions like: show, insert, generate, edit, find, ...
- `folio secret ...` to deal with secret-related actions like: show, insert, generate, edit, find, ...
- `folio ls`         to list both types of items (texts/secrets) together, as a tree or flat.
- `folio exec ...`   to run a command with items as environment variables (secrets only with `--secrets`),
  named on the command line or in a vars file (`--vars prod-deploy.vars`; `folio vars check` checks one).
- `folio shell ...`  to start a shell with items as environment variables.
- `folio completion bash|zsh` for Tab completion of commands, options and item names.

Every command, with examples: [MANUAL.md](MANUAL.md).

## Naming the variables

An item's variable name comes from its path: a top `@namespace` folder is dropped, `/` turns into
`_`, and it is uppercased (`@nawa/gh/token` -> `GH_TOKEN`). To pick the name yourself, write
`VAR=<name>` on the command line, or `VAR=@{name}` in a vars file:

```bash
folio exec --secrets GITHUB_TOKEN=gh/token -- gh release list
```

```bash
# deploy.vars
GITHUB_TOKEN=@{gh/token}                  # gh/token, as GITHUB_TOKEN
AUTH=Bearer @{gh/token}                   # put into a longer value
REGION=@{aws/region:-${AWS_REGION}}       # with a fallback when the item is not there
@{aws/*}                                  # every item under aws/, each named by its path
```

```bash
folio exec --secrets --vars deploy.vars -- ./deploy.sh
folio exec --names --vars deploy.vars -- true   # only show which variable gets what
```

A secret still needs `--secrets`. See [From a vars file](MANUAL.md#from-a-vars-file).

# Install

EnvFolio is one bash script. Download `folio` from the
[latest release](https://github.com/NawaMan/EnvFolio/releases/latest), check it against
`SHA256SUMS` (`sha256sum -c SHA256SUMS`, or `shasum -a 256 -c SHA256SUMS` on macOS), make it
executable and put it on your `PATH`:

```bash
chmod +x folio && mv folio ~/.local/bin/
folio version
```

For Tab completion, add `eval "$(folio completion bash)"` to `~/.bashrc`, or
`eval "$(folio completion zsh)"` to `~/.zshrc`.

# Dependencies

- `bash` 3.2 or newer (the one macOS ships is enough)
- `pass`
- `gpg` — 2.4 is fine; 2.5.21 or later can also make a post-quantum key (see `folio init` in
  the MANUAL, and [Updating gpg for post-quantum keys](#updating-gpg-for-post-quantum-keys)).
- `git`
- `tar`
- `gzip`
- `tree` (already needed by `pass`)
- one clipboard tool, only for `-c`: `pbcopy` (macOS), `wl-copy` (Wayland) or `xclip` (X11)
- optionally, a GUI pinentry to have gpg ask for passphrases in a window — see
  [Passphrase prompts in a window](MANUAL.md#passphrase-prompts-in-a-window-gui)

# Common Environment Variables

- `FOLIO_STORE_DIR` - the path to the EnvFolio store. Defaults to `$HOME/.folio`. The store has the same
  layout as a `pass` store, but is kept apart from your own `~/.password-store`.

# Updating gpg for post-quantum keys

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

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

- `envfolio store ...`  to deal with store-related actions like: init, backup, restore, import and export.
- `envfolio text ...`   to deal with text-related actions like: show, insert, generate, edit, find, ...
- `envfolio secret ...` to deal with secret-related actions like: show, insert, generate, edit, find, ...
- `envfolio ls`         to list both types of items (texts/secrets) together, as a tree or flat.
- `envfolio exec ...`   to run a command with items as environment variables (secrets only with `--secrets`).
- `envfolio shell ...`  to start a shell with items as environment variables.

Every command, with examples: [MANUAL.md](MANUAL.md).

# Install

EnvFolio is one bash script. Download `envfolio` from the
[latest release](https://github.com/NawaMan/EnvFolio/releases/latest), check it against
`SHA256SUMS` (`sha256sum -c SHA256SUMS`, or `shasum -a 256 -c SHA256SUMS` on macOS), make it
executable and put it on your `PATH`:

```bash
chmod +x envfolio && mv envfolio ~/.local/bin/
envfolio version
```

# Dependencies

- `bash` 3.2 or newer (the one macOS ships is enough)
- `pass`
- `gpg`
- `git`
- `tar`
- `gzip`
- `tree` (already needed by `pass`)
- one clipboard tool, only for `-c`: `pbcopy` (macOS), `wl-copy` (Wayland) or `xclip` (X11)

# Common Environment Variables

- `ENVFOLIO_STORE_DIR` - the path to the EnvFolio store. Defaults to `$HOME/.envfolio`. The store has the same
  layout as a `pass` store, but is kept apart from your own `~/.password-store`.

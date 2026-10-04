# Keep

A terminal UI for password management. It is built heavily on top of [`pass`](https://www.passwordstore.org/),
    the standard Unix password manager.

- Keep adds a store for plain-text values alongside the secrets -- "item" is the term used to mean both.
- Keep will make it easy to init/backup/restore/export/import items.
- Keep will make it easy to use items when executing a program or in a subshell.
- One motivation for Keep is to allow using items in environments like CodingBooth in the cloud,
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

- `keep store ...`  to deal with store-related actions like: init, backup, restore, import and export.
- `keep text ...`   to deal with text-related actions like: show, insert, generate, edit, find, ...
- `keep secret ...` to deal with secret-related actions like: show, insert, generate, edit, find, ...
- `keep ls`         to list both types of items (texts/secrets) together, as a tree or flat.

Every command, with examples: [MANUAL.md](MANUAL.md).

# Dependencies

- `pass`
- `gpg`
- `gum`
- `git`
- `tar`
- `gzip`
- `pbcopy`

# Common Environment Variables

- `KEEP_STORE_DIR` - the path to the Keep store. Defaults to `$HOME/.keep`. The store has the same
  layout as a `pass` store, but is kept apart from your own `~/.password-store`.

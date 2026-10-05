# Changelog

User-visible changes to Keep. Newest first.

## Unreleased

### Added

- `keep store init` — creates the Keep store (`$KEEP_STORE_DIR`, default `~/.keep`): picks or
  creates the GPG key, runs `pass init`, and starts the store's git history. Options: `--key`,
  `--new-key`, `--name`, `--email`, `--passphrase-stdin`.
- `keep store path` — prints the store's folder.
- `keep secret ls | find | grep | show | insert | edit | generate | rm | mv | cp` — thin
  pass-throughs to the matching `pass` commands, run against the Keep store. Options that would
  put a secret on screen without asking are refused: `insert --echo`, and `--qrcode` on `show`
  and `generate`. `secret ls` lists folders only; `secret show` shows entries only.
- `keep help [command]` and `--help` on every command; `keep version`.
- A dependency check on every run: if `pass`, `gpg` or `git` is missing (or the clipboard tool for
  `-c`), Keep shows what to install and stops.

# TODO

## Store key expiry and rotation

The store key can expire, and EnvFolio says nothing until a command fails.

What happens once it expires (checked with gpg 2.4.4):

- Encrypting fails, so `secret insert/edit/generate` stop working.
- Signing fails, so `text insert/edit/generate` stop working.
- Decrypting and checking existing text signatures still work: gpg still reports `VALIDSIG`.

Things to know:

- The primary key and the encryption subkey each have their own expiry date. gpg 2.4's default key
  has a primary key that expires in 3 years and an encryption subkey that never expires. Keys made
  by older gpg (2.2), or imported, often have an encryption subkey that expires separately.
  `key-expiry` reads only the primary key's date.
- `gpg --quick-set-expire <fpr> 2y` extends only the primary key. The subkeys need a second call
  with `'*'` as the third argument. Init's closing box gives only the first command, which can
  leave the encryption subkey expired.

Ideas:

- **Warning:** in `require-store`, on stderr, once per command, when the primary key or the
  encryption subkey expires within 30 days or has expired. It needs one `gpg --list-keys` and no
  passphrase. Commands that write say "expired" plainly instead of gpg's "unusable public key".
- **`folio key info`:** the fingerprint, user id, and expiry of the primary key and its subkeys.
- **`folio key extend [<period>]`:** extend the primary key and its subkeys, with
  `--store-passphrase-fd`. Init's box points here.
- **`folio key rotate [--key <id>]`:** pick or make a new key as init does.
  1. Check every text's signature first.
  2. Run `pass init <new>` to re-encrypt.
  3. Re-sign every text: `verify-text` needs the signer to be the first key in `.gpg-id`.
  4. Commit once. If any step fails, roll back to the starting commit.

  Passphrases come from `--store-passphrase-fd` (old key) and `--new-store-passphrase-fd` (new
  key). It ends by saying to run `folio backup` and to keep the old key, because the history and
  old backups are still locked to it.
- **Open questions:** a `folio key` group, or a top-level `folio rekey`? Is 30 days the right
  warning window?
- **Not included:** revoking or deleting the old key, and adding old keys to `backup --history`.

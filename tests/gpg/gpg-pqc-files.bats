#!/usr/bin/env bats

# Backups and exports of a post-quantum key: the note in backup's and export's summary, and the
# refusal of restore, import and --from when this gpg cannot open them. The booth's gpg cannot make
# a post-quantum key, so has-pqc-key and gpg-has-pqc are faked as functions where one is needed;
# everything else is real, against a throwaway GPG home and store.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" && mkdir -m 700 "$GNUPGHOME"

    # shellcheck source=SCRIPTDIR/../../folio
    source "$BATS_TEST_DIRNAME/../../folio"
    [[ $STORE_PATH == "$SANDBOX"/* && $PASSWORD_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store with a secret, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    Init --key test@example.com < /dev/null >/dev/null 2>&1
    printf 's3cr3t\ns3cr3t\n' | pass insert web/github >/dev/null
}

# fake-packets <line>...: gpg --list-packets prints these lines.
fake-packets() {
    printf '%s\n' "$@" > "$SANDBOX/packets"
    eval "gpg() { cat '$SANDBOX/packets' ; }"
}

# Fake: the files are post-quantum, and this gpg cannot open them.
# shellcheck disable=SC2317  # called by the command under test
old-gpg-meets-pqc() {
    has-pqc-key() { return 0; }
    gpg-has-pqc() { return 1; }
    gpg-version() { echo 2.4.4; }
}

@test "has-pqc-key: a key whose subkey is Kyber (algo 8)" {
    fake-packets ':secret key packet:' $'\tversion 4, algo 19, created 1, expires 0' \
                 ':secret sub key packet:' $'\tversion 5, algo 8, created 1, expires 0, pkbytes 1265'
    has-pqc-key "$SANDBOX/any"
}

@test "has-pqc-key: a file locked to a Kyber key" {
    fake-packets ':pubkey enc packet: version 3, algo 8, keyid 92DB6B60C67A6212'
    has-pqc-key "$SANDBOX/any"
}

@test "has-pqc-key: no for a classical key, a file locked to one, or a passphrase" {
    fake-packets ':secret key packet:' $'\tversion 4, algo 22, created 1, expires 0' \
                 ':secret sub key packet:' $'\tversion 4, algo 18, created 1, expires 0'
    run has-pqc-key "$SANDBOX/any"
    [ "$status" -ne 0 ]
    fake-packets ':pubkey enc packet: version 3, algo 18, keyid 1234567890ABCDEF'
    run has-pqc-key "$SANDBOX/any"
    [ "$status" -ne 0 ]
    fake-packets ':symkey enc packet: version 4, cipher 9, aead 0, s2k 3, hash 2'
    run has-pqc-key "$SANDBOX/any"
    [ "$status" -ne 0 ]
}

@test "has-pqc-key: no for a real classical key" {
    make-store
    gpg --armor --export-secret-keys test@example.com > "$SANDBOX/key.asc"
    run has-pqc-key "$SANDBOX/key.asc"
    [ "$status" -ne 0 ]
}

@test "backup: a post-quantum key — the summary says restoring needs gpg 2.5.21 or later" {
    make-store
    # shellcheck disable=SC2317  # called by Backup
    has-pqc-key() { return 0; }
    run Backup "$SANDBOX/out"
    [ "$status" -eq 0 ]
    [[ $output == *"That needs the key's passphrase, and gpg 2.5.21 or later (the key is post-quantum)."* ]]
}

@test "backup: a classical key — no word of it" {
    make-store
    run Backup "$SANDBOX/out"
    [ "$status" -eq 0 ]
    [[ $output == *"That needs the key's passphrase."* ]]
    [[ $output != *"ost-quantum"* ]]
}

@test "restore: a post-quantum backup on a gpg that cannot use it — refused, nothing changed" {
    make-store
    # In run: Backup's EXIT trap would take the place of bats' own.
    run Backup "$SANDBOX/out"
    [ "$status" -eq 0 ]
    local file=("$SANDBOX"/out/*)
    gpgconf --kill all
    rm -rf "$FOLIO_STORE_DIR" "$GNUPGHOME" && mkdir -m 700 "$GNUPGHOME"
    old-gpg-meets-pqc
    run Restore "${file[0]}"
    [ "$status" -eq 1 ]
    [[ $output == *"This backup's key is post-quantum: restoring it needs gpg 2.5.21 or later (this one is 2.4.4). Nothing changed."*"EnvFolio#updating-gpg-for-post-quantum-keys"* ]]
    [ ! -e "$FOLIO_STORE_DIR" ]
    [ -z "$(gpg --list-secret-keys 2>/dev/null)" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.folio-restore.*')" ]
}

@test "export: --to a post-quantum key — the summary says opening needs gpg 2.5.21 or later" {
    make-store
    key-kind() { echo "post-quantum (ky768_bp256)"; }
    run Export --secrets --to test@example.com -o "$SANDBOX/out/to-me" web/github < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"That needs the secret key of Test User <test@example.com>, and gpg 2.5.21 or later (the key is post-quantum)."* ]]
}

@test "export: --to a classical key — no word of it" {
    make-store
    run Export --secrets --to test@example.com -o "$SANDBOX/out/to-me" web/github < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"That needs the secret key of Test User <test@example.com>."* ]]
}

@test "import and --from: a file locked to a post-quantum key on a gpg that cannot use it — refused" {
    make-store
    run Export --secrets --to test@example.com -o "$SANDBOX/out/to-me" web/github < /dev/null
    [ "$status" -eq 0 ]
    old-gpg-meets-pqc
    run Import --all "$SANDBOX/out/to-me.folio" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"to-me.folio is locked to a post-quantum key: opening it needs gpg 2.5.21 or later (this one is 2.4.4)."*"EnvFolio#updating-gpg-for-post-quantum-keys"* ]]
    run Exec --secrets --from "$SANDBOX/out/to-me.folio" web/github -- true
    [ "$status" -eq 1 ]
    [[ $output == *"is locked to a post-quantum key"*"#updating-gpg-for-post-quantum-keys"* ]]
}

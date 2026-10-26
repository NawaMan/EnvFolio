#!/usr/bin/env bats

# folio backup and restore, through the real ./folio, against a throwaway GPG home and store.
# A restore is checked on a "new machine": the store and the GPG home wiped first.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store with a text and a secret, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" insert text -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" insert secret web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
}

# Wipe the store and the keyring, as on a new machine.
new-machine() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$FOLIO_STORE_DIR" "$GNUPGHOME"
    mkdir -m 700 "$GNUPGHOME"
}

# The one backup file in $SANDBOX/out.
backup-file() {
    local files=("$SANDBOX"/out/*)
    [ "${#files[@]}" -eq 1 ] || return 1
    [ -f "${files[0]}" ]     || return 1
    printf '%s\n' "${files[0]}"
}

# The restored store works: the text verifies, the secret decrypts, the history is clean.
is-restored() {
    [ "$("$FOLIO" show text web/home)" = "https://example.com" ]
    [ "$("$FOLIO" show secret web/github)" = "s3cr3t" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.folio-restore.*')" ]
}

@test "MANUAL: backup — back up into the current folder" {
    make-store
    cd "$SANDBOX/out"
    run "$FOLIO" backup
    [ "$status" -eq 0 ]
    local file ; file=$(backup-file)
    [[ ${file##*/} =~ ^backup-[0-9]{8}-[0-9]{6}--folio\.tar\.gz$ ]] || false
    [ "$(stat -c %a "$file" 2>/dev/null || stat -f %Lp "$file")" = "600" ]
    local list ; list=$(tar -tzf "$file")
    [[ $list == *folio-backup.txt* && $list == *key.asc* && $list == *store/.gpg-id* ]] || false
    [[ $list == *store/web/home.txt.sig* && $list == *store/web/github.gpg* ]] || false
    [[ $list != *store/.git/* ]] || false
    [ ! -e "$file.partial" ]
}

@test "MANUAL: backup — restore on a new machine" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    run "$FOLIO" restore "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Your EnvFolio store is restored."* && $output == *"History: new"* ]] || false
    is-restored
    # A new history: one commit, of everything restored.
    [ "$(git -C "$FOLIO_STORE_DIR" log --format=%s)" = "Add current contents of password store." ]
    git -C "$FOLIO_STORE_DIR" ls-files --error-unmatch web/home.txt web/home.txt.sig web/github.gpg >/dev/null
    # The key is trusted, so pass can add to the restored store.
    "$FOLIO" insert secret web/new < <(printf 'x\nx\n') >/dev/null
}

@test "MANUAL: backup — with the git history" {
    make-store
    local head ; head=$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)
    "$FOLIO" backup --history "$SANDBOX/out" >/dev/null 2>&1
    [[ $(tar -tzf "$(backup-file)") == *store/.git/* ]] || false
    new-machine
    run "$FOLIO" restore "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"History: from the backup"* ]] || false
    is-restored
    [ "$(git -C "$FOLIO_STORE_DIR" rev-parse HEAD)" = "$head" ]
}

@test "MANUAL: backup — encrypted" {
    make-store
    run "$FOLIO" backup --encrypt --file-passphrase-stdin "$SANDBOX/out" < <(printf 'backup pass\n')
    [ "$status" -eq 0 ]
    local file ; file=$(backup-file)
    [[ $file == *--folio.gpg ]] || false
    run tar -tzf "$file"
    [ "$status" -ne 0 ]
    new-machine
    run "$FOLIO" restore --file-passphrase-stdin "$file" < <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
    run "$FOLIO" restore --file-passphrase-stdin "$file" < <(printf 'backup pass\n')
    [ "$status" -eq 0 ]
    is-restored
}

@test "backup: a name without the suffix gets it; an existing file is never replaced" {
    make-store
    "$FOLIO" backup "$SANDBOX/out/mine" >/dev/null 2>&1
    [ -f "$SANDBOX/out/mine--folio.tar.gz" ]
    run "$FOLIO" backup "$SANDBOX/out/mine--folio.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]] || false
}

@test "backup: bad arguments fail and write nothing" {
    make-store
    run "$FOLIO" backup --file-passphrase-stdin "$SANDBOX/out"
    [ "$status" -eq 1 ]
    [[ $output == *"needs --encrypt"* ]] || false
    run "$FOLIO" backup --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]] || false
    run "$FOLIO" backup "$SANDBOX/out/a" "$SANDBOX/out/b"
    [ "$status" -eq 1 ]
    run "$FOLIO" backup --encrypt --file-passphrase-stdin "$SANDBOX/out" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase"* ]] || false
    run "$FOLIO" backup "$SANDBOX/nowhere/x"
    [ "$status" -eq 1 ]
    [[ $output == *"no folder"* ]] || false
    [ -z "$(ls -A "$SANDBOX/out")" ]
}

@test "backup: no store fails" {
    run "$FOLIO" backup "$SANDBOX/out"
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"* ]] || false
}

@test "restore: refuses when the store folder exists, and changes nothing" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    run "$FOLIO" restore "$(backup-file)"
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]] || false
    [ "$("$FOLIO" show text web/home)" = "https://example.com" ]
}

@test "restore: an open existing empty folder is asked about; no answer, nothing changed" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    mkdir -p "$FOLIO_STORE_DIR" && chmod 755 "$FOLIO_STORE_DIR"
    run "$FOLIO" restore "$(backup-file)" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"other users can get into"*"anyway? [y/N]"*"Nothing changed"* ]] || false
    [ -z "$(ls -A "$FOLIO_STORE_DIR")" ]
    [ -z "$(gpg --list-secret-keys 2>/dev/null)" ]
}

@test "restore: into an existing empty folder (a mount point, say), kept as it is with a warning" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    mkdir -p "$SANDBOX/mnt" && chmod 755 "$SANDBOX/mnt"
    ln -s "$SANDBOX/mnt" "$FOLIO_STORE_DIR"
    run "$FOLIO" restore --allow-unsafe-folder "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Your EnvFolio store is restored."* ]] || false
    [[ $output == *"warning: other users can get into $FOLIO_STORE_DIR"* ]] || false
    [ -L "$FOLIO_STORE_DIR" ]
    [ -s "$SANDBOX/mnt/.gpg-id" ] && [ -d "$SANDBOX/mnt/.git" ] || false
    [ "$(stat -c %a "$SANDBOX/mnt" 2>/dev/null || stat -f %Lp "$SANDBOX/mnt")" = "755" ]
    is-restored
}

@test "store: every command warns about an open store folder, and still works" {
    make-store
    chmod 755 "$FOLIO_STORE_DIR"
    run "$FOLIO" show text web/home
    [ "$status" -eq 0 ]
    [[ $output == *"warning: other users can get into $FOLIO_STORE_DIR"* && $output == *"https://example.com"* ]] || false
    [ "$("$FOLIO" show text web/home 2>/dev/null)" = "https://example.com" ]
}

@test "restore: a store folder it makes is private (700), no warning" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    run "$FOLIO" restore "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output != *warning* ]] || false
    [ "$(stat -c %a "$FOLIO_STORE_DIR" 2>/dev/null || stat -f %Lp "$FOLIO_STORE_DIR")" = "700" ]
}

@test "restore: refuses a folder with only a hidden file, and changes nothing" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    mkdir -p "$FOLIO_STORE_DIR" && : > "$FOLIO_STORE_DIR/.keep"
    run "$FOLIO" restore "$(backup-file)" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]] || false
    [ "$(ls -A "$FOLIO_STORE_DIR")" = ".keep" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.folio-restore.*')" ]
}

@test "restore: a backup made before 0.4.0 (envfolio-backup.txt), renamed by hand, is restored" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    # Re-pack it as 0.3.0 made it: the manifest was envfolio-backup.txt, "envfolio-backup 1".
    mkdir "$SANDBOX/x"
    tar -xzf "$(backup-file)" -C "$SANDBOX/x" && rm "$(backup-file)"
    sed 's/^folio-backup /envfolio-backup /' "$SANDBOX/x/folio-backup.txt" > "$SANDBOX/x/envfolio-backup.txt"
    rm "$SANDBOX/x/folio-backup.txt"
    tar -czf "$SANDBOX/out/old--folio.tar.gz" -C "$SANDBOX/x" envfolio-backup.txt key.asc store
    new-machine
    run "$FOLIO" restore "$SANDBOX/out/old--folio.tar.gz" < /dev/null
    [ "$status" -eq 0 ]
    is-restored
}

@test "restore: a file that is not an EnvFolio backup is refused, nothing left behind" {
    mkdir -p "$SANDBOX/junk" && echo hi > "$SANDBOX/junk/x"
    tar -czf "$SANDBOX/out/junk--folio.tar.gz" -C "$SANDBOX/junk" x
    cp "$SANDBOX/out/junk--folio.tar.gz" "$SANDBOX/out/junk.tgz"
    run "$FOLIO" restore "$SANDBOX/out/junk.tgz"
    [ "$status" -eq 1 ]
    [[ $output == *"not an EnvFolio backup"* ]] || false
    run "$FOLIO" restore "$SANDBOX/out/junk--folio.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"no folio-backup.txt"* ]] || false
    run "$FOLIO" restore "$SANDBOX/out/missing--folio.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"no file"* ]] || false
    run "$FOLIO" restore
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio restore"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.folio-restore.*')" ]
}

@test "backup --help, restore --help: work without a store" {
    run "$FOLIO" backup --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio backup"* ]] || false
    run "$FOLIO" help restore
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio restore"* ]] || false
}

@test "restore: a damaged backup — no store, no key, or a key file without the secret key — refused" {
    make-store
    "$FOLIO" backup "$SANDBOX/out" >/dev/null 2>&1
    local good="$SANDBOX/good" bad="$SANDBOX/bad" file
    file=$(backup-file)
    mkdir -p "$good" && tar -xzf "$file" -C "$good"
    gpg --armor --export test@example.com > "$SANDBOX/public.asc"
    rm -f "$file"
    new-machine
    # repack <name> <message>: the good one, as changed in $bad, refused with <message>.
    repack() {
        tar -czf "$SANDBOX/out/$1--folio.tar.gz" -C "$bad" .
        run "$FOLIO" restore "$SANDBOX/out/$1--folio.tar.gz" < /dev/null
        [ "$status" -eq 1 ]
        [[ $output == *"$2"* ]] || false
        [ ! -e "$FOLIO_STORE_DIR" ]
        [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.folio-restore.*')" ]
    }
    rm -rf "$bad" && cp -R "$good" "$bad" && rm -rf "$bad/store"
    repack no-store "has no store in it."
    rm -rf "$bad" && cp -R "$good" "$bad" && rm "$bad/key.asc"
    repack no-key "has no key in it."
    rm -rf "$bad" && cp -R "$good" "$bad" && cp "$SANDBOX/public.asc" "$bad/key.asc"
    repack no-secret "The backup's key.asc has no secret key"
}

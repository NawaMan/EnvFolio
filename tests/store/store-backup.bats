#!/usr/bin/env bats

# keep store backup and restore, through the real ./keep, against a throwaway GPG home and store.
# A restore is checked on a "new machine": the store and the GPG home wiped first.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export KEEP_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$KEEP_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" && mkdir -m 700 "$GNUPGHOME"
    [[ $KEEP_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    KEEP="$BATS_TEST_DIRNAME/../../keep"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store with a text and a secret, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$KEEP" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
}

# Wipe the store and the keyring, as on a new machine.
new-machine() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$KEEP_STORE_DIR" "$GNUPGHOME"
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
    [ "$("$KEEP" text show web/home)" = "https://example.com" ]
    [ "$("$KEEP" secret show web/github)" = "s3cr3t" ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.keep-restore.*')" ]
}

@test "MANUAL: store backup — back up into the current folder" {
    make-store
    cd "$SANDBOX/out"
    run "$KEEP" store backup
    [ "$status" -eq 0 ]
    local file ; file=$(backup-file)
    [[ ${file##*/} =~ ^backup-[0-9]{8}-[0-9]{6}--keep\.tar\.gz$ ]]
    [ "$(stat -c %a "$file" 2>/dev/null || stat -f %Lp "$file")" = "600" ]
    local list ; list=$(tar -tzf "$file")
    [[ $list == *keep-backup.txt* && $list == *key.asc* && $list == *store/.gpg-id* ]]
    [[ $list == *store/web/home.txt.sig* && $list == *store/web/github.gpg* ]]
    [[ $list != *store/.git/* ]]
    [ ! -e "$file.partial" ]
}

@test "MANUAL: store backup — restore on a new machine" {
    make-store
    "$KEEP" store backup "$SANDBOX/out" >/dev/null 2>&1
    new-machine
    run "$KEEP" store restore "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Your Keep store is restored."* && $output == *"History: new"* ]]
    is-restored
    # A new history: one commit, of everything restored.
    [ "$(git -C "$KEEP_STORE_DIR" log --format=%s)" = "Add current contents of password store." ]
    git -C "$KEEP_STORE_DIR" ls-files --error-unmatch web/home.txt web/home.txt.sig web/github.gpg >/dev/null
    # The key is trusted, so pass can add to the restored store.
    "$KEEP" secret insert web/new < <(printf 'x\nx\n') >/dev/null
}

@test "MANUAL: store backup — with the git history" {
    make-store
    local head ; head=$(git -C "$KEEP_STORE_DIR" rev-parse HEAD)
    "$KEEP" store backup --history "$SANDBOX/out" >/dev/null 2>&1
    [[ $(tar -tzf "$(backup-file)") == *store/.git/* ]]
    new-machine
    run "$KEEP" store restore "$(backup-file)" < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"History: from the backup"* ]]
    is-restored
    [ "$(git -C "$KEEP_STORE_DIR" rev-parse HEAD)" = "$head" ]
}

@test "MANUAL: store backup — encrypted" {
    make-store
    run "$KEEP" store backup --encrypt --passphrase-stdin "$SANDBOX/out" < <(printf 'backup pass\n')
    [ "$status" -eq 0 ]
    local file ; file=$(backup-file)
    [[ $file == *--keep.gpg ]]
    run tar -tzf "$file"
    [ "$status" -ne 0 ]
    new-machine
    run "$KEEP" store restore --passphrase-stdin "$file" < <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [ ! -e "$KEEP_STORE_DIR" ]
    run "$KEEP" store restore --passphrase-stdin "$file" < <(printf 'backup pass\n')
    [ "$status" -eq 0 ]
    is-restored
}

@test "store backup: a name without the suffix gets it; an existing file is never replaced" {
    make-store
    "$KEEP" store backup "$SANDBOX/out/mine" >/dev/null 2>&1
    [ -f "$SANDBOX/out/mine--keep.tar.gz" ]
    run "$KEEP" store backup "$SANDBOX/out/mine--keep.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]]
}

@test "store backup: bad arguments fail and write nothing" {
    make-store
    run "$KEEP" store backup --passphrase-stdin "$SANDBOX/out"
    [ "$status" -eq 1 ]
    [[ $output == *"needs --encrypt"* ]]
    run "$KEEP" store backup --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    run "$KEEP" store backup "$SANDBOX/out/a" "$SANDBOX/out/b"
    [ "$status" -eq 1 ]
    run "$KEEP" store backup --encrypt --passphrase-stdin "$SANDBOX/out" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase"* ]]
    run "$KEEP" store backup "$SANDBOX/nowhere/x"
    [ "$status" -eq 1 ]
    [[ $output == *"no folder"* ]]
    [ -z "$(ls -A "$SANDBOX/out")" ]
}

@test "store backup: no store fails" {
    run "$KEEP" store backup "$SANDBOX/out"
    [ "$status" -eq 1 ]
    [[ $output == *"No ready Keep store"* ]]
}

@test "store restore: refuses when the store folder exists, and changes nothing" {
    make-store
    "$KEEP" store backup "$SANDBOX/out" >/dev/null 2>&1
    run "$KEEP" store restore "$(backup-file)"
    [ "$status" -eq 1 ]
    [[ $output == *"already exists"* ]]
    [ "$("$KEEP" text show web/home)" = "https://example.com" ]
}

@test "store restore: a file that is not a Keep backup is refused, nothing left behind" {
    mkdir -p "$SANDBOX/junk" && echo hi > "$SANDBOX/junk/x"
    tar -czf "$SANDBOX/out/junk--keep.tar.gz" -C "$SANDBOX/junk" x
    cp "$SANDBOX/out/junk--keep.tar.gz" "$SANDBOX/out/junk.tgz"
    run "$KEEP" store restore "$SANDBOX/out/junk.tgz"
    [ "$status" -eq 1 ]
    [[ $output == *"not a Keep backup"* ]]
    run "$KEEP" store restore "$SANDBOX/out/junk--keep.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"no keep-backup.txt"* ]]
    run "$KEEP" store restore "$SANDBOX/out/missing--keep.tar.gz"
    [ "$status" -eq 1 ]
    [[ $output == *"no file"* ]]
    run "$KEEP" store restore
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep store restore"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    [ -z "$(find "$SANDBOX" -maxdepth 1 -name '.keep-restore.*')" ]
}

@test "store backup --help, store restore --help: work without a store" {
    run "$KEEP" store backup --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep store backup"* ]]
    run "$KEEP" help store restore
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep store restore"* ]]
}

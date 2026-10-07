#!/usr/bin/env bats

# keep store export and import, through the real ./keep, against throwaway GPG homes and stores.
# "There" — where the export goes — is another GPG home and store, with a key of its own.

bats_require_minimum_version 1.5.0    # run --separate-stderr

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
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $KEEP_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    KEEP="$BATS_TEST_DIRNAME/../../keep"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with two texts and two secrets, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$KEEP" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$KEEP" text insert -t "jane" web/user < /dev/null >/dev/null
    "$KEEP" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    "$KEEP" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
}

# Switch to "there": its own GPG home, with a key for the server, and its own store folder.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export KEEP_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$KEEP_STORE_DIR"
    gpg --batch --passphrase '' --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
}

# The one export file in $SANDBOX/out.
export-file() {
    local files=("$SANDBOX"/out/*)
    [ "${#files[@]}" -eq 1 ] && [ -f "${files[0]}" ] && printf '%s\n' "${files[0]}"
}

# Nothing left in TMPDIR, and the export's key never in the keyring.
left-clean() {
    [ -z "$(ls -A "$TMPDIR")" ]
    ! gpg --list-keys "Keep export" >/dev/null 2>&1
}

@test "MANUAL: store export — export with a passphrase" {
    make-store
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  2 (texts: 2, secrets: 0)"* ]]
    [[ $output == *"left out 1 secret(s) under 'web'"* ]]
    local file ; file=$(export-file)
    [[ ${file##*/} =~ ^export-[0-9]{8}-[0-9]{6}\.keep$ ]]
    [ "$(stat -c %a "$file" 2>/dev/null || stat -f %Lp "$file")" = "600" ]
    # Locked: not a readable tar.
    run tar -tzf "$file"
    [ "$status" -ne 0 ]
    left-clean
}

@test "MANUAL: store import — into a new store" {
    make-store
    "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web/home web/github < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$KEEP" store import --all --key server@example.com --passphrase-stdin "$(export-file)" < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* ]]
    [ "$("$KEEP" text show web/home)" = "https://example.com" ]
    [ "$("$KEEP" secret show web/github)" = "s3cr3t" ]
    [ ! -e "$KEEP_STORE_DIR/web/user.txt" ]
    [ -z "$(git -C "$KEEP_STORE_DIR" status --porcelain)" ]
    left-clean
}

@test "MANUAL: store export — lock it to the server's public key" {
    make-store
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    run "$KEEP" store export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  3 (texts: 2, secrets: 1)"* && $output == *"Server <server@example.com>"* ]]
    # The server's key stayed out of this keyring; this keyring cannot open the file.
    ! gpg --list-keys server@example.com >/dev/null 2>&1
    run gpg --batch --decrypt --output /dev/null "$(export-file)"
    [ "$status" -ne 0 ]
    left-clean

    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" KEEP_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    run "$KEEP" store import --key server@example.com "$(export-file)" web/github web/user < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$KEEP" secret show web/github)" = "s3cr3t" ]
    [ "$("$KEEP" text show web/user)" = "jane" ]
    [ ! -e "$KEEP_STORE_DIR/web/home.txt" ]
}

@test "MANUAL: store import — merge into a store, keeping what is there" {
    make-store
    "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin --secrets web aws < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$KEEP" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "old" web/user < /dev/null >/dev/null
    run "$KEEP" store import --skip-existing --passphrase-stdin "$(export-file)" aws/key web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Skipped: 1"* ]]
    [ "$("$KEEP" secret show aws/key)" = "AKIA" ]
    [ "$("$KEEP" text show web/user)" = "old" ]
}

@test "store import: --overwrite replaces an item already in the store" {
    make-store
    "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web/user web/home < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$KEEP" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "old" web/user < /dev/null >/dev/null
    run "$KEEP" store import --overwrite --passphrase-stdin "$(export-file)" web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$("$KEEP" text show web/user)" = "jane" ]
}

@test "store import: the picker and the clash question read their answers from stdin" {
    make-store
    # An unlocked symmetric passphrase cannot be typed here, so lock to "there"'s key instead.
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    "$KEEP" store export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web aws < /dev/null >/dev/null 2>&1
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" KEEP_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    "$KEEP" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$KEEP" text insert -t "old" web/user < /dev/null >/dev/null
    # 1) aws/key 2) web/github 3) web/home 4) web/user — "9" is out of range, asked again; then
    # web/user clashes: "2" skips it.
    run --separate-stderr "$KEEP" store import "$(export-file)" < <(printf '9\n1 3-4\n2\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"   4) (T) web/user"* && $stderr == *"Not a choice: '9'"* ]]
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* && $output == *"Skipped: 1"* ]]
    [ "$("$KEEP" secret show aws/key)" = "AKIA" ]
    [ "$("$KEEP" text show web/home)" = "https://example.com" ]
    [ "$("$KEEP" text show web/user)" = "old" ]
    [ ! -e "$KEEP_STORE_DIR/web/github.gpg" ]
}

@test "store export: bad arguments fail and write nothing" {
    make-store
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"needs the items named"* ]]
    run "$KEEP" store export -o "$SANDBOX/out" --to x --passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin aws < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"only secrets under 'aws' (1); add --secrets"* ]]
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin nope < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not an item"* ]]
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin ../x < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"not a valid name"* ]]
    run "$KEEP" store export -o "$SANDBOX/out" --to nobody@example.com web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No public key"* ]]
    run "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase"* ]]
    run "$KEEP" store export -o "$KEEP_STORE_DIR/web" --passphrase-stdin web < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"is inside the store"* ]]
    [ ! -e "$KEEP_STORE_DIR/web"/*.keep ]
    run "$KEEP" store export --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [ -z "$(ls -A "$SANDBOX/out")" ]
    left-clean
}

@test "store import: a wrong passphrase or a file that is not an export is refused, nothing made" {
    make-store
    "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    go-there
    run "$KEEP" store import --all --passphrase-stdin "$(export-file)" < <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [ ! -e "$KEEP_STORE_DIR" ]
    echo hi > "$SANDBOX/x.tgz"
    run "$KEEP" store import --all "$SANDBOX/x.tgz"
    [ "$status" -eq 1 ]
    [[ $output == *"not a Keep export"* ]]
    run "$KEEP" store import --all "$(export-file)" web
    [ "$status" -eq 1 ]
    [[ $output == *"give no <name> with it"* ]]
    run "$KEEP" store import
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: keep store import"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
    left-clean
}

@test "store import: a text changed inside the export is refused before anything is written" {
    make-store
    "$KEEP" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    # Re-pack the export with a changed text, under the same passphrase.
    mkdir "$SANDBOX/x"
    gpg --batch --pinentry-mode loopback --passphrase p --decrypt "$(export-file)" 2>/dev/null | tar -xzf - -C "$SANDBOX/x"
    echo "https://evil.example" > "$SANDBOX/x/store/web/home.txt"
    tar -czf - -C "$SANDBOX/x" keep-export.txt key.asc store \
        | gpg --batch --pinentry-mode loopback --passphrase p --symmetric --output "$SANDBOX/bad.keep"
    go-there
    run "$KEEP" store import --all --key server@example.com --passphrase-stdin "$SANDBOX/bad.keep" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"signature of 'web/home' in the export does not verify"* ]]
    [ ! -e "$KEEP_STORE_DIR" ]
}

@test "store export --help, store import --help: work without a store" {
    run "$KEEP" store export --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep store export"* ]]
    run "$KEEP" help store import
    [ "$status" -eq 0 ]
    [[ $output == "Usage: keep store import"* ]]
}

@test "parse-picks: numbers, ranges, all; once each, in order; nothing out of range" {
    # shellcheck source=SCRIPTDIR/../../keep
    source "$KEEP"
    [ "$(parse-picks 5 '3 1,2-3')" = $'1\n2\n3' ]
    [ "$(parse-picks 3 'all')" = $'1\n2\n3' ]
    [ "$(parse-picks 10 '08 10')" = $'8\n10' ]
    ! parse-picks 3 ''
    ! parse-picks 3 '0'
    ! parse-picks 3 '4'
    ! parse-picks 3 '3-1'
    ! parse-picks 3 '1-'
    ! parse-picks 3 'x'
    ! parse-picks 3 '*'
}

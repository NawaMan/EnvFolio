#!/usr/bin/env bats

# envfolio store export and import, through the real ./envfolio, against throwaway GPG homes and stores.
# "There" — where the export goes — is another GPG home and store, with a key of its own.

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$ENVFOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $ENVFOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    ENVFOLIO="$BATS_TEST_DIRNAME/../../envfolio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with two texts and two secrets, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$ENVFOLIO" store init --key test@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$ENVFOLIO" text insert -t "jane" web/user < /dev/null >/dev/null
    "$ENVFOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    "$ENVFOLIO" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
}

# Switch to "there": its own GPG home, with a key for the server, and its own store folder.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export ENVFOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$ENVFOLIO_STORE_DIR"
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
    ! gpg --list-keys "EnvFolio export" >/dev/null 2>&1
}

@test "MANUAL: store export — export with a passphrase" {
    make-store
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  2 (texts: 2, secrets: 0)"* ]]
    [[ $output == *"left out 1 secret(s) under 'web'"* ]]
    local file ; file=$(export-file)
    [[ ${file##*/} =~ ^store-[0-9]{8}\.envfolio$ ]]
    [ "$(stat -c %a "$file" 2>/dev/null || stat -f %Lp "$file")" = "600" ]
    # Locked: not a readable tar.
    run tar -tzf "$file"
    [ "$status" -ne 0 ]
    left-clean
}

@test "MANUAL: store import — into a new store" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web/home web/github < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$ENVFOLIO" store import --all --key server@example.com --passphrase-stdin "$(export-file)" < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* ]]
    [ "$("$ENVFOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$ENVFOLIO" secret show web/github)" = "s3cr3t" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/web/user.txt" ]
    [ -z "$(git -C "$ENVFOLIO_STORE_DIR" status --porcelain)" ]
    left-clean
}

@test "MANUAL: store export — lock it to the server's public key" {
    make-store
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  3 (texts: 2, secrets: 1)"* && $output == *"Server <server@example.com>"* ]]
    # The server's key stayed out of this keyring; this keyring cannot open the file.
    ! gpg --list-keys server@example.com >/dev/null 2>&1
    run gpg --batch --decrypt --output /dev/null "$(export-file)"
    [ "$status" -ne 0 ]
    left-clean

    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" ENVFOLIO_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    run "$ENVFOLIO" store import --key server@example.com "$(export-file)" web/github web/user < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" secret show web/github)" = "s3cr3t" ]
    [ "$("$ENVFOLIO" text show web/user)" = "jane" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/web/home.txt" ]
}

@test "MANUAL: store import — merge into a store, keeping what is there" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin --secrets web aws < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$ENVFOLIO" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    run "$ENVFOLIO" store import --skip-existing --passphrase-stdin "$(export-file)" aws/key web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Skipped: 1"* ]]
    [ "$("$ENVFOLIO" secret show aws/key)" = "AKIA" ]
    [ "$("$ENVFOLIO" text show web/user)" = "old" ]
}

@test "store import: --overwrite replaces an item already in the store" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web/user web/home < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$ENVFOLIO" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    run "$ENVFOLIO" store import --overwrite --passphrase-stdin "$(export-file)" web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$("$ENVFOLIO" text show web/user)" = "jane" ]
}

@test "store import: into an open store folder, asked; stdin with the passphrase cannot answer" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web/user < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$ENVFOLIO" store init --key server@example.com < /dev/null >/dev/null 2>&1
    chmod 755 "$ENVFOLIO_STORE_DIR"
    run "$ENVFOLIO" store import --all --passphrase-stdin "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"other users can get into"*"stdin carries the passphrase"*"--allow-unsafe-folder"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR/web/user.txt" ]
    run "$ENVFOLIO" store import --all --passphrase-stdin --allow-unsafe-folder "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    [ "$("$ENVFOLIO" text show web/user 2>/dev/null)" = "jane" ]
}

@test "store import: making a store in an open empty folder is asked once, then made" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web/user < <(printf 'p\n') >/dev/null 2>&1
    go-there
    mkdir -m 755 "$ENVFOLIO_STORE_DIR"
    run "$ENVFOLIO" store import --all --key server@example.com --passphrase-stdin "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [ -z "$(ls -A "$ENVFOLIO_STORE_DIR")" ]
    run "$ENVFOLIO" store import --all --key server@example.com --passphrase-stdin --allow-unsafe-folder "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    [ "$("$ENVFOLIO" text show web/user 2>/dev/null)" = "jane" ]
}

@test "store import: the picker and the clash question read their answers from stdin" {
    make-store
    # An unlocked symmetric passphrase cannot be typed here, so lock to "there"'s key instead.
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    "$ENVFOLIO" store export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web aws < /dev/null >/dev/null 2>&1
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" ENVFOLIO_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    "$ENVFOLIO" store init --key server@example.com < /dev/null >/dev/null 2>&1
    "$ENVFOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    # 1) aws/key 2) web/github 3) web/home 4) web/user — "9" is out of range, asked again; then
    # web/user clashes: "2" skips it.
    run --separate-stderr "$ENVFOLIO" store import "$(export-file)" < <(printf '9\n1 3-4\n2\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"   4) (T) web/user"* && $stderr == *"Not a choice: '9'"* ]]
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* && $output == *"Skipped: 1"* ]]
    [ "$("$ENVFOLIO" secret show aws/key)" = "AKIA" ]
    [ "$("$ENVFOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$ENVFOLIO" text show web/user)" = "old" ]
    [ ! -e "$ENVFOLIO_STORE_DIR/web/github.gpg" ]
}

@test "store export: bad arguments fail and write nothing" {
    make-store
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"needs the items named"* ]]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --to x --passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin aws < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"only secrets under 'aws' (1); add --secrets"* ]]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin nope < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not an item"* ]]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin ../x < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"not a valid name"* ]]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --to nobody@example.com web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No public key"* ]]
    run "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase"* ]]
    run "$ENVFOLIO" store export -o "$ENVFOLIO_STORE_DIR/web" --passphrase-stdin web < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"is inside the store"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR/web"/*.envfolio ]
    run "$ENVFOLIO" store export --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]]
    [ -z "$(ls -A "$SANDBOX/out")" ]
    left-clean
}

@test "store import: a wrong passphrase or a file that is not an export is refused, nothing made" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    go-there
    run "$ENVFOLIO" store import --all --passphrase-stdin "$(export-file)" < <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
    echo hi > "$SANDBOX/x.tgz"
    run "$ENVFOLIO" store import --all "$SANDBOX/x.tgz"
    [ "$status" -eq 1 ]
    [[ $output == *"not an EnvFolio export"* ]]
    run "$ENVFOLIO" store import --all "$(export-file)" web
    [ "$status" -eq 1 ]
    [[ $output == *"give no <name> with it"* ]]
    run "$ENVFOLIO" store import
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: envfolio store import"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
    left-clean
}

@test "store import: a text changed inside the export is refused before anything is written" {
    make-store
    "$ENVFOLIO" store export -o "$SANDBOX/out" --passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    # Re-pack the export with a changed text, under the same passphrase.
    mkdir "$SANDBOX/x"
    gpg --batch --pinentry-mode loopback --passphrase p --decrypt "$(export-file)" 2>/dev/null | tar -xzf - -C "$SANDBOX/x"
    echo "https://evil.example" > "$SANDBOX/x/store/web/home.txt"
    tar -czf - -C "$SANDBOX/x" envfolio-export.txt key.asc store \
        | gpg --batch --pinentry-mode loopback --passphrase p --symmetric --output "$SANDBOX/bad.envfolio"
    go-there
    run "$ENVFOLIO" store import --all --key server@example.com --passphrase-stdin "$SANDBOX/bad.envfolio" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"signature of 'web/home' in the export does not verify"* ]]
    [ ! -e "$ENVFOLIO_STORE_DIR" ]
}

@test "store export --help, store import --help: work without a store" {
    run "$ENVFOLIO" store export --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: envfolio store export"* ]]
    run "$ENVFOLIO" help store import
    [ "$status" -eq 0 ]
    [[ $output == "Usage: envfolio store import"* ]]
}

@test "parse-picks: numbers, ranges, all; once each, in order; nothing out of range" {
    # shellcheck source=SCRIPTDIR/../../envfolio
    source "$ENVFOLIO"
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

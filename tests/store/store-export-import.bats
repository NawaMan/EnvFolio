#!/usr/bin/env bats

# folio export and import, through the real ./folio, against throwaway GPG homes and stores.
# "There" — where the export goes — is another GPG home and store, with a key of its own.

bats_require_minimum_version 1.5.0    # run --separate-stderr

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
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME" "$SANDBOX/there-gnupg"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    GNUPGHOME="$SANDBOX/there-gnupg" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A store with two texts and two secrets, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" text insert -t "jane" web/user < /dev/null >/dev/null
    "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    "$FOLIO" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
}

# Switch to "there": its own GPG home, with a key for the server, and its own store folder.
go-there() {
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/there"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
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
    run gpg --list-keys "EnvFolio export"
    [ "$status" -ne 0 ]
}

@test "MANUAL: export — export with a passphrase" {
    make-store
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  2 (texts: 2, secrets: 0)"* ]] || false
    [[ $output == *"left out 1 secret(s) under 'web'"* ]] || false
    local file ; file=$(export-file)
    [[ ${file##*/} =~ ^store-[0-9]{8}\.folio$ ]] || false
    [ "$(stat -c %a "$file" 2>/dev/null || stat -f %Lp "$file")" = "600" ]
    # Locked: not a readable tar.
    run tar -tzf "$file"
    [ "$status" -ne 0 ]
    left-clean
}

@test "MANUAL: import — into a new store" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web/home web/github < <(printf 'export pass\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$(export-file)" < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* ]] || false
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$FOLIO" secret show web/github)" = "s3cr3t" ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    left-clean
}

@test "MANUAL: export — lock it to the server's public key" {
    make-store
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    run "$FOLIO" export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web < /dev/null
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  3 (texts: 2, secrets: 1)"* && $output == *"Server <server@example.com>"* ]] || false
    # The server's key stayed out of this keyring; this keyring cannot open the file.
    run gpg --list-keys server@example.com
    [ "$status" -ne 0 ]
    run gpg --batch --decrypt --output /dev/null "$(export-file)"
    [ "$status" -ne 0 ]
    left-clean

    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" FOLIO_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    run "$FOLIO" import --key server@example.com "$(export-file)" web/github web/user < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" secret show web/github)" = "s3cr3t" ]
    [ "$("$FOLIO" text show web/user)" = "jane" ]
    [ ! -e "$FOLIO_STORE_DIR/web/home.txt" ]
}

@test "MANUAL: import — merge into a store, keeping what is there" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin --secrets web aws < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$FOLIO" init --key server@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    run "$FOLIO" import --skip-existing --file-passphrase-stdin "$(export-file)" aws/key web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Skipped: 1"* ]] || false
    [ "$("$FOLIO" secret show aws/key)" = "AKIA" ]
    [ "$("$FOLIO" text show web/user)" = "old" ]
}

@test "import: --overwrite replaces an item already in the store" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web/user web/home < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$FOLIO" init --key server@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    run "$FOLIO" import --overwrite --file-passphrase-stdin "$(export-file)" web/user < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/user)" = "jane" ]
}

@test "import: into an open store folder, asked; stdin with the passphrase cannot answer" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web/user < <(printf 'p\n') >/dev/null 2>&1
    go-there
    "$FOLIO" init --key server@example.com < /dev/null >/dev/null 2>&1
    chmod 755 "$FOLIO_STORE_DIR"
    run "$FOLIO" import --all --file-passphrase-stdin "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"other users can get into"*"stdin carries the passphrase"*"--allow-unsafe-folder"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
    run "$FOLIO" import --all --file-passphrase-stdin --allow-unsafe-folder "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    [ "$("$FOLIO" text show web/user 2>/dev/null)" = "jane" ]
}

@test "import: making a store in an open empty folder is asked once, then made" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web/user < <(printf 'p\n') >/dev/null 2>&1
    go-there
    mkdir -m 755 "$FOLIO_STORE_DIR"
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [ -z "$(ls -A "$FOLIO_STORE_DIR")" ]
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin --allow-unsafe-folder "$(export-file)" < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$(grep -c 'warning:' <<< "$output")" -eq 1 ]
    [ "$("$FOLIO" text show web/user 2>/dev/null)" = "jane" ]
}

@test "import: the picker and the clash question read their answers from stdin" {
    make-store
    # An unlocked symmetric passphrase cannot be typed here, so lock to "there"'s key instead.
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --batch --passphrase '' \
        --quick-generate-key "Server <server@example.com>" default default never 2>/dev/null
    GNUPGHOME="$SANDBOX/there-gnupg" gpg --armor --export server@example.com > "$SANDBOX/server.asc"
    "$FOLIO" export -o "$SANDBOX/out" --secrets --to "$SANDBOX/server.asc" web aws < /dev/null >/dev/null 2>&1
    gpgconf --kill all 2>/dev/null || true
    export GNUPGHOME="$SANDBOX/there-gnupg" FOLIO_STORE_DIR="$SANDBOX/there" PASSWORD_STORE_DIR="$SANDBOX/there"
    "$FOLIO" init --key server@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "old" web/user < /dev/null >/dev/null
    # 1) aws/key 2) web/github 3) web/home 4) web/user — "9" is out of range, asked again; then
    # web/user clashes: "2" skips it.
    run --separate-stderr "$FOLIO" import "$(export-file)" < <(printf '9\n1 3-4\n2\n')
    [ "$status" -eq 0 ]
    [[ $stderr == *"   4) (T)web/user"* && $stderr == *"Not a choice: '9'"* ]] || false
    [[ $output == *"Texts:   1"* && $output == *"Secrets: 1"* && $output == *"Skipped: 1"* ]] || false
    [ "$("$FOLIO" secret show aws/key)" = "AKIA" ]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$FOLIO" text show web/user)" = "old" ]
    [ ! -e "$FOLIO_STORE_DIR/web/github.gpg" ]
}

@test "MANUAL: export — the items a vars file names; there, exec --from runs with the same file" {
    make-store
    cat > "$SANDBOX/deploy.vars" <<'V'
HOME_URL=@{web/home}
TOKEN=${NO_SUCH_ENV_FOR_TEST:-@{web/github}}
KEY=@{no/such:-@{aws/key}}
@{web/user}
V
    run "$FOLIO" export -s -o "$SANDBOX/out" --vars "$SANDBOX/deploy.vars" --file-passphrase-stdin \
        < <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Vars files: $SANDBOX/deploy.vars"* ]] || false
    [[ $output == *"Items:  4 (texts: 2, secrets: 2)"* ]] || false
    [[ $output == *"deploy.vars:3: 'no/such' is not a text or secret in the store; left out"* ]] || false
    [[ $output == *"folio exec -s --from $SANDBOX/out/"*".folio --vars $SANDBOX/deploy.vars -- <command>"* ]] || false
    local file ; file=$(export-file)
    left-clean
    go-there
    run --separate-stderr "$FOLIO" exec -s --from "$file" --file-passphrase-fd 3 --vars "$SANDBOX/deploy.vars" \
        -- sh -c 'echo "$HOME_URL $TOKEN $KEY $WEB_USER"' 3< <(printf 'export pass\n')
    [ "$status" -eq 0 ]
    [ "$output" = "https://example.com s3cr3t AKIA jane" ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "export --vars: with <name>s too, each item once; only texts, no -s in the exec line" {
    make-store
    printf '%s\n' 'A=@{web/home}' 'B=@{web/home}-again' > "$SANDBOX/a.vars"
    run "$FOLIO" export -o "$SANDBOX/out" --vars="$SANDBOX/a.vars" web/user web/home --file-passphrase-stdin \
        < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [[ $output == *"Items:  2 (texts: 2, secrets: 0)"* ]] || false
    [[ $output == *"folio exec --from "* ]] || false
    left-clean
}

@test "export --vars: a secret needs -s anywhere; a missing entry with no fallback stops it; nothing written" {
    make-store
    printf '%s\n' 'A=@{web/home}' 'T=${NO_SUCH_ENV_FOR_TEST:-@{web/github}}' > "$SANDBOX/a.vars"
    run "$FOLIO" export -o "$SANDBOX/out" --vars "$SANDBOX/a.vars" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:2: 'web/github' is a secret; add --secrets to load it."* ]] || false
    printf '%s\n' '@{aws/*}' > "$SANDBOX/a.vars"
    run "$FOLIO" export -o "$SANDBOX/out" --vars "$SANDBOX/a.vars" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:1: 'aws' has 1 secret(s); add --secrets to load them."* ]] || false
    printf '%s\n' 'A=@{web/home}' 'B=x-@{web}' > "$SANDBOX/a.vars"
    run "$FOLIO" export -s -o "$SANDBOX/out" --vars "$SANDBOX/a.vars" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:2: 'web' is not a text or secret in the store, and there is no fallback."* ]] || false
    printf '%s\n' 'A=@{no/such:-x}' 'B=${HOME}' > "$SANDBOX/a.vars"
    run "$FOLIO" export -o "$SANDBOX/out" --vars "$SANDBOX/a.vars" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"the vars files name no item that is there."* ]] || false
    printf '%s\n' 'A=$(touch x)' > "$SANDBOX/a.vars"
    run "$FOLIO" export -o "$SANDBOX/out" --vars "$SANDBOX/a.vars" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"a.vars:1: a \$ starts"* ]] || false
    [ -z "$(ls -A "$SANDBOX/out")" ]
    left-clean
}

@test "export: bad arguments fail and write nothing" {
    make-store
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"needs the items named"* ]] || false
    run "$FOLIO" export -o "$SANDBOX/out" --to x --file-passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin aws < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"only secrets under 'aws' (1); add --secrets"* ]] || false
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin nope < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"'nope' is not an item"* ]] || false
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin ../x < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"not a valid name"* ]] || false
    run "$FOLIO" export -o "$SANDBOX/out" --to nobody@example.com web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No public key"* ]] || false
    run "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"No passphrase"* ]] || false
    run "$FOLIO" export -o "$FOLIO_STORE_DIR/web" --file-passphrase-stdin web < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"is inside the store"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/web"/*.folio ]
    run "$FOLIO" export --nope
    [ "$status" -eq 1 ]
    [[ $output == *"unknown option: --nope"* ]] || false
    [ -z "$(ls -A "$SANDBOX/out")" ]
    left-clean
}

@test "import: a wrong passphrase or a file that is not an export is refused, nothing made" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$(export-file)" < <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [ ! -e "$FOLIO_STORE_DIR" ]
    echo hi > "$SANDBOX/x.tgz"
    run "$FOLIO" import --all "$SANDBOX/x.tgz"
    [ "$status" -eq 1 ]
    [[ $output == *"not an EnvFolio export"* ]] || false
    run "$FOLIO" import --all "$(export-file)" web
    [ "$status" -eq 1 ]
    [[ $output == *"give no <name> with it"* ]] || false
    # No file, and no input to answer the questions (the new store's key, then the file).
    run "$FOLIO" import < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Cancelled"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
    left-clean
}

@test "import: a text changed inside the export is refused before anything is written" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    # Re-pack the export with a changed text, under the same passphrase.
    mkdir "$SANDBOX/x"
    gpg --batch --pinentry-mode loopback --passphrase p --decrypt "$(export-file)" 2>/dev/null | tar -xzf - -C "$SANDBOX/x"
    echo "https://evil.example" > "$SANDBOX/x/store/web/home.txt"
    tar -czf - -C "$SANDBOX/x" folio-export.txt key.asc store \
        | gpg --batch --pinentry-mode loopback --passphrase p --symmetric --output "$SANDBOX/bad.folio"
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/bad.folio" < <(printf 'p\n')
    [ "$status" -eq 1 ]
    [[ $output == *"signature of 'web/home' in the export does not verify"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "import: an export made before 0.4.0 (envfolio-export.txt), renamed by hand, is imported" {
    make-store
    "$FOLIO" export -o "$SANDBOX/out" --file-passphrase-stdin web < <(printf 'p\n') >/dev/null 2>&1
    # Re-pack it as 0.3.0 made it: the manifest was envfolio-export.txt, "envfolio-export 1".
    mkdir "$SANDBOX/x"
    gpg --batch --pinentry-mode loopback --passphrase p --decrypt "$(export-file)" 2>/dev/null | tar -xzf - -C "$SANDBOX/x"
    sed 's/^folio-export /envfolio-export /' "$SANDBOX/x/folio-export.txt" > "$SANDBOX/x/envfolio-export.txt"
    rm "$SANDBOX/x/folio-export.txt"
    tar -czf - -C "$SANDBOX/x" envfolio-export.txt key.asc store \
        | gpg --batch --pinentry-mode loopback --passphrase p --symmetric --output "$SANDBOX/old.folio"
    go-there
    run "$FOLIO" import --all --key server@example.com --file-passphrase-stdin "$SANDBOX/old.folio" < <(printf 'p\n')
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    [ "$("$FOLIO" text show web/user)" = "jane" ]
}

@test "export --help, import --help: work without a store" {
    run "$FOLIO" export --help
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio export"* ]] || false
    run "$FOLIO" help import
    [ "$status" -eq 0 ]
    [[ $output == "Usage: folio import"* ]] || false
}

@test "parse-picks: numbers, ranges, all; once each, in order; nothing out of range" {
    # shellcheck source=SCRIPTDIR/../../folio
    source "$FOLIO"
    [ "$(parse-picks 5 '3 1,2-3')" = $'1\n2\n3' ]
    [ "$(parse-picks 3 'all')" = $'1\n2\n3' ]
    [ "$(parse-picks 10 '08 10')" = $'8\n10' ]
    run parse-picks 3 ''
    [ "$status" -ne 0 ]
    run parse-picks 3 '0'
    [ "$status" -ne 0 ]
    run parse-picks 3 '4'
    [ "$status" -ne 0 ]
    run parse-picks 3 '3-1'
    [ "$status" -ne 0 ]
    run parse-picks 3 '1-'
    [ "$status" -ne 0 ]
    run parse-picks 3 'x'
    [ "$status" -ne 0 ]
    run parse-picks 3 '*'
    [ "$status" -ne 0 ]
}

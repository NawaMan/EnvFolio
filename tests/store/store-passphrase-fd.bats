#!/usr/bin/env bats

# --store-passphrase-fd and --file-passphrase-fd, through the real ./folio. The store's key has a
# passphrase ("pw"), and gpg's own prompt is a fake pinentry that cancels: a command that works
# here got the passphrase from the fd, never from a prompt. The agent is restarted before each
# command, so nothing is left in its cache from the one before.

bats_require_minimum_version 1.5.0    # run --separate-stderr
load fake-pinentry

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export TMPDIR="$SANDBOX/tmp"
    export USER=sb-test-nobody
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" "$SANDBOX/out" "$TMPDIR" && mkdir -m 700 "$GNUPGHOME"
    [[ $GNUPGHOME == "$SANDBOX"/* && $FOLIO_STORE_DIR == "$SANDBOX"/* && $HOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # A store with a text and a secret, its key protected by "pw".
    gpg --batch --pinentry-mode loopback --passphrase pw \
        --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    use-pinentry pw
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    use-pinentry --cancel
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# Forget any passphrase the agent has.
forget() { gpgconf --kill gpg-agent ; }

# --- The store's passphrase ------------------------------------------------------

@test "store passphrase: without it, gpg's prompt is all there is (here it cancels)" {
    forget
    run "$FOLIO" secret show web/github
    [ "$status" -ne 0 ]
}

@test "MANUAL: passphrases without a prompt — secret show with --store-passphrase-fd" {
    forget
    run --separate-stderr "$FOLIO" secret show --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "store passphrase: --store-passphrase-fd=<n> works too" {
    forget
    run --separate-stderr "$FOLIO" secret show --store-passphrase-fd=3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
}

@test "store passphrase: secret grep, over several secrets (one fd, read once)" {
    "$FOLIO" secret insert aws/key < <(printf 'AKIA\nAKIA\n') >/dev/null
    forget
    run "$FOLIO" secret grep --store-passphrase-fd 3 -e s3cr3t -e AKIA 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [[ $output == *s3cr3t* && $output == *AKIA* ]]
}

@test "store passphrase: secret edit" {
    printf '#!/bin/sh\nprintf "n3w\\n" > "$1"\n' > "$SANDBOX/editor" && chmod +x "$SANDBOX/editor"
    forget
    EDITOR="$SANDBOX/editor" run "$FOLIO" secret edit --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    forget
    [ "$("$FOLIO" secret show --store-passphrase-fd 3 web/github 3< <(printf 'pw\n'))" = "n3w" ]
}

@test "store passphrase: secret generate --in-place keeps the rest" {
    "$FOLIO" secret insert -m -f web/github < <(printf 'old\nuser: jane\n') >/dev/null
    forget
    run --separate-stderr "$FOLIO" secret generate --in-place --store-passphrase-fd 3 web/github 12 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    forget
    run --separate-stderr "$FOLIO" secret show --store-passphrase-fd 3 web/github 3< <(printf 'pw\n')
    [ "${#lines[0]}" -eq 12 ] && [ "${lines[1]}" = "user: jane" ]
}

@test "store passphrase: text insert, edit and generate sign with it" {
    forget
    run "$FOLIO" text insert --store-passphrase-fd 3 -t "jane" web/user 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    printf '#!/bin/sh\nprintf "joe\\n" > "$1"\n' > "$SANDBOX/editor" && chmod +x "$SANDBOX/editor"
    forget
    EDITOR="$SANDBOX/editor" run "$FOLIO" text edit --store-passphrase-fd 3 web/user 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    forget
    run "$FOLIO" text generate --store-passphrase-fd 3 web/id 8 3< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/user)" = "joe" ]
    "$FOLIO" text show web/id >/dev/null
}

@test "store passphrase: text insert without it — not saved" {
    forget
    run "$FOLIO" text insert -t "jane" web/user < /dev/null
    [ "$status" -ne 0 ]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
}

@test "store passphrase: exec --secrets, and the command does not get the fd" {
    forget
    run --separate-stderr "$FOLIO" exec --secrets --store-passphrase-fd 5 web -- \
        sh -c 'printf "%s %s\n" "$WEB_GITHUB" "$WEB_HOME"; [ ! -e /dev/fd/5 ] && echo closed' 5< <(printf 'pw\n')
    [ "$status" -eq 0 ]
    [ "${lines[0]}" = "s3cr3t https://example.com" ]
    [ "${lines[1]}" = "closed" ]
}

@test "store passphrase: shell --secrets" {
    forget
    SHELL=/bin/sh run "$FOLIO" shell --secrets --store-passphrase-fd 5 web/github 5< <(printf 'pw\n') \
        < <(echo 'echo "got $WEB_GITHUB"')
    [ "$status" -eq 0 ]
    [[ $output == *"got s3cr3t"* ]]
}

@test "store passphrase: exec --from does not take it" {
    "$FOLIO" export -o "$SANDBOX/out/items" --file-passphrase-fd 3 --store-passphrase-fd 4 web/home \
        3< <(printf 'x\n') 4< <(printf 'pw\n') >/dev/null 2>&1
    run "$FOLIO" exec --from "$SANDBOX/out/items.folio" --store-passphrase-fd 5 web/home -- true \
        5< <(printf 'pw\n')
    [ "$status" -eq 1 ]
    [[ $output == *"--store-passphrase-fd is for the store; --from does not use it."* ]]
}

@test "store passphrase: a wrong one stops before anything changes" {
    forget
    run "$FOLIO" text insert --store-passphrase-fd 3 -t "jane" web/user 3< <(printf 'wrong\n')
    [ "$status" -eq 1 ]
    [[ $output == *"The passphrase on file descriptor 3 does not unlock the store's key"* ]]
    [ ! -e "$FOLIO_STORE_DIR/web/user.txt" ]
}

@test "store passphrase: an empty one, a closed fd, or not a number — refused" {
    run "$FOLIO" secret show --store-passphrase-fd 3 web/github 3< /dev/null
    [ "$status" -eq 1 ] && [[ $output == *"No passphrase on file descriptor 3."* ]]
    run "$FOLIO" secret show --store-passphrase-fd 7 web/github
    [ "$status" -eq 1 ] && [[ $output == *"--store-passphrase-fd 7: no such file descriptor is open."* ]]
    run "$FOLIO" secret show --store-passphrase-fd x web/github
    [ "$status" -eq 1 ] && [[ $output == *"--store-passphrase-fd needs a file descriptor number, not 'x'."* ]]
}

@test "store passphrase: a command that never needs it does not take it" {
    run "$FOLIO" ls --store-passphrase-fd 3 3< <(printf 'pw\n')
    [ "$status" -ne 0 ]
}

# --- Export, import, backup, restore: both passphrases ---------------------------

@test "MANUAL: passphrases without a prompt — export with both passphrases, each from its own fd" {
    forget
    run "$FOLIO" export --secrets -o "$SANDBOX/out/items" --file-passphrase-fd 3 --store-passphrase-fd 4 web \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') < /dev/null
    [ "$status" -eq 0 ]
    run --separate-stderr "$FOLIO" exec --secrets --from "$SANDBOX/out/items.folio" --file-passphrase-fd 3 web -- \
        sh -c 'echo "$WEB_GITHUB"' 3< <(printf 'file-pw\n')
    [ "$output" = "s3cr3t" ]
}

@test "import into a store: the texts are signed with the store's passphrase" {
    "$FOLIO" export -o "$SANDBOX/out/items" --file-passphrase-fd 3 --store-passphrase-fd 4 web/home \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') >/dev/null 2>&1
    "$FOLIO" text rm -f web/home >/dev/null
    forget
    run "$FOLIO" import --all --file-passphrase-fd 3 --store-passphrase-fd 4 "$SANDBOX/out/items.folio" \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
}

@test "import with no store, a new key: --store-passphrase-fd is that key's passphrase" {
    "$FOLIO" export -o "$SANDBOX/out/items" --file-passphrase-fd 3 --store-passphrase-fd 4 web/home \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') >/dev/null 2>&1
    export FOLIO_STORE_DIR="$SANDBOX/there"
    # Key picker: 1) Test User 2) Create a new key; then name and email.
    run "$FOLIO" import --all --file-passphrase-fd 3 --store-passphrase-fd 4 "$SANDBOX/out/items.folio" \
        3< <(printf 'file-pw\n') 4< <(printf 'new-pw\n') < <(printf '2\nJane Doe\njane@example.com\n')
    [ "$status" -eq 0 ]
    [[ $output == *"its passphrase from --store-passphrase-fd"* ]]
    [ "$("$FOLIO" text show web/home)" = "https://example.com" ]
    forget
    "$FOLIO" text insert --store-passphrase-fd 3 -t x web/x 3< <(printf 'new-pw\n') >/dev/null
}

@test "backup --encrypt: the store's passphrase and the file's; restore with --file-passphrase-fd" {
    forget
    run "$FOLIO" backup --encrypt --file-passphrase-fd 3 --store-passphrase-fd 4 "$SANDBOX/out" \
        3< <(printf 'file-pw\n') 4< <(printf 'pw\n') < /dev/null
    [ "$status" -eq 0 ]
    local file=("$SANDBOX"/out/*--folio.gpg)
    gpgconf --kill all
    rm -rf "$FOLIO_STORE_DIR" "$GNUPGHOME" && mkdir -m 700 "$GNUPGHOME"
    use-pinentry --cancel
    run "$FOLIO" restore --file-passphrase-fd 3 "${file[0]}" 3< <(printf 'file-pw\n') < /dev/null
    [ "$status" -eq 0 ]
    [ "$("$FOLIO" secret show --store-passphrase-fd 3 web/github 3< <(printf 'pw\n'))" = "s3cr3t" ]
}

@test "backup without the store's passphrase: the key cannot be exported (the prompt cancels)" {
    forget
    run "$FOLIO" backup "$SANDBOX/out" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Exporting the key failed."* ]]
}

@test "backup --file-passphrase-fd needs --encrypt; restore's only for an encrypted backup" {
    run "$FOLIO" backup --file-passphrase-fd 3 "$SANDBOX/out" 3< <(printf 'x\n')
    [ "$status" -eq 1 ] && [[ $output == *"--file-passphrase-fd needs --encrypt."* ]]
    "$FOLIO" backup --store-passphrase-fd 3 "$SANDBOX/out" 3< <(printf 'pw\n') >/dev/null 2>&1
    local file=("$SANDBOX"/out/*--folio.tar.gz)
    rm -rf "$FOLIO_STORE_DIR"
    run "$FOLIO" restore --file-passphrase-fd 3 "${file[0]}" 3< <(printf 'x\n')
    [ "$status" -eq 1 ] && [[ $output == *"are only for an encrypted backup"* ]]
}

# --- The old names stop and say the new ones -------------------------------------

@test "old names: --passphrase-stdin / --passphrase-fd say what to use instead" {
    run "$FOLIO" init --passphrase-stdin
    [ "$status" -eq 1 ] && [[ $output == *"init: --passphrase-stdin is now --store-passphrase-stdin."* ]]
    run "$FOLIO" init --passphrase-fd=3
    [ "$status" -eq 1 ] && [[ $output == *"init: --passphrase-fd is now --store-passphrase-fd."* ]]
    run "$FOLIO" export --passphrase-fd 3 web
    [ "$status" -eq 1 ] && [[ $output == *"export: --passphrase-fd is now --file-passphrase-fd."* ]]
    run "$FOLIO" import --passphrase-stdin x.folio
    [ "$status" -eq 1 ] && [[ $output == *"import: --passphrase-stdin is now --file-passphrase-stdin."* ]]
    run "$FOLIO" backup --encrypt --passphrase-stdin
    [ "$status" -eq 1 ] && [[ $output == *"backup: --passphrase-stdin is now --file-passphrase-stdin."* ]]
    run "$FOLIO" restore --passphrase-stdin x--folio.gpg
    [ "$status" -eq 1 ] && [[ $output == *"restore: --passphrase-stdin is now --file-passphrase-stdin."* ]]
    run "$FOLIO" exec --from x.folio --passphrase-fd 3 a -- true
    [ "$status" -eq 1 ] && [[ $output == *"exec: --passphrase-fd is now --file-passphrase-fd."* ]]
    # After --, it is the command's own.
    run "$FOLIO" exec web/home -- echo --passphrase-fd
    [ "$status" -eq 0 ] && [ "$output" = "--passphrase-fd" ]
}

#!/usr/bin/env bats

# A post-quantum backup and export, made by a gpg that can (2.5.21 or later), then opened by one
# that cannot (2.4): restore, import and exec --from refuse, nothing changed. Both gpgs are real;
# nothing is faked. Skipped unless both are on this machine — in the booth with gnupg:2.5.24
# (/usr/local/bin and Ubuntu's /usr/bin), and in CI's macOS bash 3.2 job (its own 2.4.7 and
# Homebrew's, which pass brings).

bats_require_minimum_version 1.5.0    # run --separate-stderr

setup() {
    local real_home=$HOME
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL EMAIL
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    unset PASSWORD_STORE_DIR
    mkdir -p "$HOME" "$SANDBOX/out" && mkdir -m 700 "$SANDBOX/new-gnupg" "$SANDBOX/old-gnupg"
    FOLIO="$BATS_TEST_DIRNAME/../../folio"

    # The gpg on PATH, and the other places one is found.
    local dir new="" old=""
    for dir in "$(dirname "$(command -v gpg)")" /usr/local/bin /usr/bin /opt/homebrew/bin \
               /home/linuxbrew/.linuxbrew/bin "$real_home/gnupg-2.4.7/bin"; do
        [[ -x $dir/gpg ]] || continue
        if gpg-in "$dir" bash -c 'source "$1" && gpg-has-pqc' _ "$FOLIO"; then
            [[ -n $new ]] || new=$dir
        else
            [[ -n $old ]] || old=$dir
        fi
    done
    [[ -n $new && -n $old ]] || skip "needs a gpg that can make a post-quantum key and one that cannot"
    NEW_GPG=$new OLD_GPG=$old
}

teardown() {
    [[ -z ${NEW_GPG:-} ]] || GNUPGHOME="$SANDBOX/new-gnupg" gpg-in "$NEW_GPG" gpgconf --kill all 2>/dev/null || true
    [[ -z ${OLD_GPG:-} ]] || GNUPGHOME="$SANDBOX/old-gnupg" gpg-in "$OLD_GPG" gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# gpg-in <dir> <command>...: run <command> with the gpg tools of <dir> first on PATH — only those
# (a bin of their own), so bash, pass and the rest stay the ones this run uses.
gpg-in() {
    local dir=$1 bin tool ; shift
    bin="$SANDBOX/gpg-of-$(printf '%s' "$dir" | tr -c 'A-Za-z0-9' _)"
    if [[ ! -d $bin ]]; then
        mkdir -p "$bin"
        for tool in gpg gpg-agent gpgconf gpg-connect-agent gpgsm dirmngr keyboxd scdaemon; do
            [[ ! -x $dir/$tool ]] || ln -s "$dir/$tool" "$bin/$tool"
        done
    fi
    PATH="$bin:$PATH" "$@"
}

# On the new gpg: a store with a text and a secret, its key post-quantum; a backup of it, and an
# export of both locked to that key ($SANDBOX/out/items.folio).
make-files() {
    export GNUPGHOME="$SANDBOX/new-gnupg" FOLIO_STORE_DIR="$SANDBOX/store"
    gpg-in "$NEW_GPG" gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" pqc default never 2>/dev/null
    gpg-in "$NEW_GPG" "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    gpg-in "$NEW_GPG" "$FOLIO" text insert -t "https://example.com" web/home < /dev/null >/dev/null
    gpg-in "$NEW_GPG" "$FOLIO" secret insert web/github < <(printf 's3cr3t\ns3cr3t\n') >/dev/null
    gpg-in "$NEW_GPG" "$FOLIO" backup "$SANDBOX/out" < /dev/null >/dev/null 2>&1
    gpg-in "$NEW_GPG" "$FOLIO" export -o "$SANDBOX/out/items" --secrets --to test@example.com web < /dev/null >/dev/null 2>&1
    gpg-in "$NEW_GPG" gpg --armor --export test@example.com > "$SANDBOX/test.asc"
    GNUPGHOME="$SANDBOX/new-gnupg" gpg-in "$NEW_GPG" gpgconf --kill all
    BACKUP=$(find "$SANDBOX/out" -name '*--folio.tar.gz')
    [[ -f $BACKUP && -f $SANDBOX/out/items.folio ]] || false
    # On the old gpg's machine, from here on: no store yet.
    export GNUPGHOME="$SANDBOX/old-gnupg" FOLIO_STORE_DIR="$SANDBOX/there"
}

@test "old gpg, real files: restore refuses a post-quantum backup — nothing changed" {
    make-files
    run gpg-in "$OLD_GPG" "$FOLIO" restore "$BACKUP" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"This backup's key is post-quantum: restoring it needs gpg 2.5.21 or later"*"Nothing changed."* ]] || false
    [ ! -e "$SANDBOX/there" ]
    run --separate-stderr gpg-in "$OLD_GPG" gpg --list-secret-keys
    [ -z "$output" ]
}

@test "old gpg, real files: import and exec --from refuse a file locked to a post-quantum key" {
    make-files
    run gpg-in "$OLD_GPG" "$FOLIO" import --all "$SANDBOX/out/items.folio" < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"items.folio is locked to a post-quantum key: opening it needs gpg 2.5.21 or later"* ]] || false
    [ ! -e "$SANDBOX/there" ]
    run --separate-stderr gpg-in "$OLD_GPG" "$FOLIO" exec --secrets --from "$SANDBOX/out/items.folio" web -- touch "$SANDBOX/ran"
    [ "$status" -eq 1 ]
    [[ $stderr == *"is locked to a post-quantum key"* ]] || false
    [ ! -e "$SANDBOX/ran" ]
}

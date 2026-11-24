#!/usr/bin/env bats

# Names: the characters a new name may have (MANUAL "Names"), through the real ./folio, against a
# throwaway GPG home and store. A name already in the store is taken as it is.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GIT_CONFIG_GLOBAL="$SANDBOX/no-gitconfig"
    export GIT_CONFIG_NOSYSTEM=1
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export PASSWORD_STORE_DIR="$FOLIO_STORE_DIR"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
}

teardown() {
    gpgconf --kill all 2>/dev/null || true
    rm -rf "$SANDBOX"
}

# A ready store, encrypted to a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
}

# The names no command may make, one of each kind of mistake.
BAD_NAMES=('db=prod' 'a b' 'gh/api+key' 'x:y' 'a$b' 'a{b}' 'a*b' 'a#b' "it's" 'gh/@work/token' '@prod' 'é')

@test "MANUAL: names — A name that is refused" {
    make-store
    run "$FOLIO" insert text db=prod --text deploy
    [ "$status" -eq 1 ]
    [[ $output == *"insert text: 'db=prod' is not a valid name: '=' is not allowed. A name is letters, digits, _ . - and /;"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/db=prod.txt" ]
}

@test "MANUAL: names — A namespace" {
    make-store
    run "$FOLIO" insert text @app2/@prod/server/user --text deploy
    [ "$status" -eq 0 ]
    [ "$(cat "$FOLIO_STORE_DIR/@app2/@prod/server/user.txt")" = "deploy" ]
}

@test "MANUAL: names — A name from before" {
    make-store
    printf 's3cr3t\n' | pass insert --multiline gh/api+key >/dev/null
    run "$FOLIO" mv secret gh/api+key gh/api-key
    [ "$status" -eq 0 ]
    [ -f "$FOLIO_STORE_DIR/gh/api-key.gpg" ]
    [ ! -e "$FOLIO_STORE_DIR/gh/api+key.gpg" ]
}

@test "names: insert text refuses each kind of bad name, and writes nothing" {
    make-store
    local name
    for name in "${BAD_NAMES[@]}"; do
        run "$FOLIO" insert text "$name" --text x
        [ "$status" -eq 1 ] || { echo "accepted: $name" ; false ; }
        [[ $output == *"is not a valid name:"* ]] || false
    done
    [ -z "$(find "$FOLIO_STORE_DIR" -name '*.txt' -not -path '*/.git/*')" ]
}

@test "names: the message says which character, a blank, or where @ may go" {
    make-store
    run "$FOLIO" insert text 'gh/api+key' --text x
    [[ $output == *"'+' is not allowed."* ]] || false
    run "$FOLIO" insert text 'a b' --text x
    [[ $output == *"a blank is not allowed."* ]] || false
    run "$FOLIO" insert text 'gh/@work/token' --text x
    [[ $output == *"@ only starts a namespace folder at the front."* ]] || false
}

@test "names: letters, digits, _ - . and nested namespaces are fine" {
    make-store
    local name
    for name in a.b-c_D/e 2fa @nawa/gh/token @app2/@prod/db/pass; do
        run "$FOLIO" insert text "$name" --text x
        [ "$status" -eq 0 ] || { echo "refused: $name: $output" ; false ; }
    done
}

@test "names: insert secret refuses a bad name before pass sees it" {
    make-store
    run "$FOLIO" insert secret db=prod < <(printf 's3cr3t\ns3cr3t\n')
    [ "$status" -eq 1 ]
    [[ $output == *"insert secret: 'db=prod' is not a valid name: '=' is not allowed."* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/db=prod.gpg" ]
}

@test "names: generate text and generate secret refuse a bad name" {
    make-store
    run "$FOLIO" generate text 'a b' 12
    [ "$status" -eq 1 ]
    [[ $output == *"generate text: 'a b' is not a valid name: a blank is not allowed."* ]] || false
    run "$FOLIO" generate secret db=prod 12
    [ "$status" -eq 1 ]
    [[ $output == *"generate secret: 'db=prod' is not a valid name"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR/db=prod.gpg" ]
}

@test "names: edit text and edit secret refuse a new bad name" {
    make-store
    EDITOR=true run "$FOLIO" edit text db=prod
    [ "$status" -eq 1 ]
    [[ $output == *"edit text: 'db=prod' is not a valid name"* ]] || false
    EDITOR=true run "$FOLIO" edit secret db=prod
    [ "$status" -eq 1 ]
    [[ $output == *"edit secret: 'db=prod' is not a valid name"* ]] || false
}

@test "names: mv and cp refuse a bad new name, text and secret, and leave the old one" {
    make-store
    "$FOLIO" insert text gh/user --text octo >/dev/null
    printf 's3cr3t\n' | pass insert --multiline gh/token >/dev/null
    run "$FOLIO" mv text gh/user gh/user=x
    [ "$status" -eq 1 ]
    [[ $output == *"mv text: 'gh/user=x' is not a valid name"* ]] || false
    run "$FOLIO" cp text gh/user 'gh/a b'
    [ "$status" -eq 1 ]
    run "$FOLIO" mv secret gh/token gh/token+1
    [ "$status" -eq 1 ]
    [[ $output == *"mv secret: 'gh/token+1' is not a valid name"* ]] || false
    run "$FOLIO" cp secret gh/token @work
    [ "$status" -eq 1 ]
    [ -f "$FOLIO_STORE_DIR/gh/user.txt" ]
    [ -f "$FOLIO_STORE_DIR/gh/token.gpg" ]
    # Into a new namespace folder is fine.
    run "$FOLIO" cp secret gh/token @work/
    [ "$status" -eq 0 ]
    [ -f "$FOLIO_STORE_DIR/@work/token.gpg" ]
}

@test "names: a name already in the store is taken as it is" {
    make-store
    printf 's3cr3t\n' | pass insert --multiline gh/api+key >/dev/null
    run "$FOLIO" show secret gh/api+key
    [ "$status" -eq 0 ]
    [ "$output" = "s3cr3t" ]
    # Over itself (insert, generate in place) — it is there already.
    run "$FOLIO" insert secret --force gh/api+key < <(printf 'n3w\nn3w\n')
    [ "$status" -eq 0 ]
    run "$FOLIO" generate secret --in-place gh/api+key 12
    [ "$status" -eq 0 ]
    run "$FOLIO" rm secret --force gh/api+key
    [ "$status" -eq 0 ]
    [ ! -e "$FOLIO_STORE_DIR/gh/api+key.gpg" ]
}

@test "names: a bad name is refused even when it is there, if no name can be like it" {
    make-store
    run "$FOLIO" insert text 'a//b' --text x
    [ "$status" -eq 1 ]
    [[ $output == *"not a valid name"* ]] || false
    run "$FOLIO" insert secret ./x < <(printf 's\ns\n')
    [ "$status" -eq 1 ]
    [[ $output == *"it has a '.' part"* ]] || false
}

@test "names: a name may start with - after --" {
    make-store
    run "$FOLIO" insert secret -- -dash < <(printf 's\ns\n')
    [ "$status" -eq 0 ]
    [ -f "$FOLIO_STORE_DIR/-dash.gpg" ]
}

@test "names: help still works with any argument" {
    run "$FOLIO" insert secret --help db=prod
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio insert secret"* ]] || false
}

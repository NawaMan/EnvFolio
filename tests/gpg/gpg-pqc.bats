#!/usr/bin/env bats

# gpg-has-pqc, the key-kind menu, and the algorithm init gives generate-key. gpg's answers (or
# generate-key itself) are faked as functions: no key is made, and no gpg with Kyber is needed.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    export GNUPGHOME="$SANDBOX/gnupg"
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"

    # shellcheck source=SCRIPTDIR/../../folio
    source "$BATS_TEST_DIRNAME/../../folio"
    [[ $STORE_PATH == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
}

teardown() {
    rm -rf "$SANDBOX"
}

# fake-gpg <version> <pubkey names>: gpg answers --list-config as that gpg would. Asked to make a key,
# it records its arguments in $SANDBOX/args and says it made one.
fake-gpg() {
    eval "gpg() {
        case \"\$*\" in
            *'--list-config pubkeyname') echo 'cfg:pubkeyname:$2' ;;
            *'--list-config version')    echo 'cfg:version:$1' ;;
            *--quick-generate-key*)      printf '%s\n' \"\$@\" > '$SANDBOX/args'
                                         echo '[GNUPG:] KEY_CREATED P ABCDEF0123456789' >&3 ;;
        esac
    }"
}

@test "gpg-has-pqc: yes for a gpg with Kyber, 2.5.21 or later" {
    local version
    for version in 2.5.21 2.5.24 2.6.0 3.0.1 2.5.30-beta12; do
        fake-gpg "$version" 'RSA;Kyber;ELG;DSA;ECDH;ECDSA;EDDSA'
        gpg-has-pqc
    done
}

@test "gpg-has-pqc: no for a gpg without Kyber" {
    fake-gpg 2.4.4 'RSA;ELG;DSA;ECDH;ECDSA;EDDSA'
    run gpg-has-pqc
    [ "$status" -ne 0 ]
}

@test "gpg-has-pqc: no for a gpg with Kyber that cannot restore its secret key (before 2.5.21)" {
    local version
    for version in 2.5.0 2.5.14 2.5.20; do
        fake-gpg "$version" 'RSA;Kyber;ELG;DSA;ECDH;ECDSA;EDDSA'
        run gpg-has-pqc
        [ "$status" -ne 0 ]
    done
}

@test "generate-key: asks gpg for the algorithm it is given" {
    local algo
    fake-gpg 2.5.24 'RSA;Kyber;ELG;DSA;ECDH;ECDSA;EDDSA'
    for algo in pqc default; do
        run generate-key "New User" new@example.com 0 "$algo"
        [ "$status" -eq 0 ]
        [ "${lines[${#lines[@]}-1]}" = ABCDEF0123456789 ]
        [ "$(tail -n 1 "$SANDBOX/args")" = "$algo" ]
    done
}

@test "ask-key-kind: 1 is post-quantum, 2 classical; each shows its algorithms" {
    # The menu is on stderr, its prompt with no newline: the answer ends the output.
    run ask-key-kind <<< 1
    [ "$status" -eq 0 ]
    [[ $output == *": pqc" ]]
    [[ $output == *"1) Post-quantum (recommended) — ML-KEM-768 + Brainpool P-256, Brainpool P-384"* ]]
    [[ $output == *"2) Classical — X25519, Ed25519"* ]]
    run ask-key-kind <<< 2
    [ "$status" -eq 0 ]
    [[ $output == *": default" ]]
}

@test "ask-key-kind: cancelled (Ctrl-D) fails" {
    run ask-key-kind < /dev/null
    [ "$status" -eq 1 ]
    [[ $output == *"Cancelled."* ]]
}

# init-new-key <stdin> <option>...: Init with a new key, up to making it. gpg-has-pqc says yes; the
# algorithm generate-key is given lands in $SANDBOX/algo, and Init stops there.
# shellcheck disable=SC2317  # called by Init
init-new-key() {
    local input=$1; shift
    gpg-has-pqc()  { return 0; }
    generate-key() { echo "$4" > "$SANDBOX/algo"; return 1; }
    ask-text()     { echo "Asked"; }
    acknowledge()  { :; }
    run Init "$@" <<< "$input"
}

@test "init: a new key with everything from options is post-quantum, not asked" {
    init-new-key "correct horse" --name "New User" --email new@example.com --store-passphrase-stdin
    [ "$(cat "$SANDBOX/algo")" = pqc ]
    [[ $output != *"Which kind of key?"* ]]
    [[ $output == *"Key type: Post-quantum — ML-KEM-768"* ]]
}

@test "init: a new key with something asked: the kind is asked too" {
    init-new-key 2 --name "New User" --email new@example.com
    [[ $output == *"Which kind of key?"* ]]
    [[ $output == *"make it with gpg first"* ]]
    [ "$(cat "$SANDBOX/algo")" = default ]
    init-new-key 1 --name "New User"
    [[ $output == *"Which kind of key?"* ]]
    [ "$(cat "$SANDBOX/algo")" = pqc ]
}

@test "init: no menu when this gpg can't make a post-quantum key" {
    # shellcheck disable=SC2317  # called by Init
    gpg-has-pqc()  { return 1; }
    acknowledge()  { :; }
    generate-key() { echo "$4" > "$SANDBOX/algo"; return 1; }
    run Init --name "New User" --email new@example.com
    [[ $output != *"Which kind of key?"* ]]
    [[ $output == *"Key type: gpg's default"* ]]
    [[ $output != *"ost-quantum"* ]]
    [ "$(cat "$SANDBOX/algo")" = default ]
}

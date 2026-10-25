#!/usr/bin/env bats

# folio ls, through the real ./folio, against a throwaway GPG home and store.

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

# A ready store holding text note, secret web/github, text web/github and text web/home.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
    "$FOLIO" text insert -t hello                 note       < /dev/null
    "$FOLIO" secret insert -m web/github < <(printf 's3cr3t\n') >/dev/null
    "$FOLIO" text insert -t jane                  web/github < /dev/null
    "$FOLIO" text insert -t "https://example.com" web/home   < /dev/null
}

# The output with tree's colours taken out.
plain() { printf '%s\n' "$output" | sed $'s/\e\\[[0-9;]*m//g' ; }

@test "MANUAL: ls — list everything" {
    make-store
    run "$FOLIO" ls
    [ "$status" -eq 0 ]
    [ "$(plain)" = "EnvFolio Store
├── (T)note
└── web
    ├── (S)github
    ├── (T)github
    └── (T)home" ]
}

@test "MANUAL: ls — list one folder" {
    make-store
    run "$FOLIO" ls web
    [ "$status" -eq 0 ]
    [ "$(plain)" = "EnvFolio Store
web
├── (S)github
├── (T)github
└── (T)home" ]
}

@test "MANUAL: ls — list flat" {
    make-store
    run "$FOLIO" ls --flat
    [ "$status" -eq 0 ]
    [ "$output" = "(T)note
(S)web/github
(T)web/github
(T)web/home" ]
}

@test "ls --flat: one folder, full names, either place; text ls and secret ls too" {
    make-store
    run "$FOLIO" ls web/ --flat
    [ "$output" = $'(S)web/github\n(T)web/github\n(T)web/home' ]
    run "$FOLIO" text ls --flat
    [ "$output" = $'note\nweb/github\nweb/home' ]
    run "$FOLIO" secret ls --flat web
    [ "$output" = "web/github" ]
    # No values, signatures, or the store's own files.
    run "$FOLIO" ls --flat
    [[ $output != *"s3cr3t"* && $output != *".sig"* && $output != *".gpg-id"* && $output != *".git"* ]] || false
    run "$FOLIO" ls --flat web extra
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio ls [--flat] [--plain] [<subfolder>]"* ]] || false
}

@test "ls: never shows values, signatures or extensions" {
    make-store
    run "$FOLIO" ls
    [ "$status" -eq 0 ]
    [[ $output != *"s3cr3t"* && $output != *"jane"* && $output != *"hello"* ]] || false
    [[ $output != *".sig"* && $output != *".txt"* && $output != *".gpg"* ]] || false
}

@test "ls: outside UTF-8, the ASCII tree is marked too" {
    make-store
    LC_ALL=C run "$FOLIO" ls web
    [ "$status" -eq 0 ]
    [[ $(plain) == *"-- (S)github"*"-- (T)github"*"-- (T)home"* ]] || false
}

@test "ls: an entry's name, an option, .. or an unknown folder is refused" {
    make-store
    local arg
    for arg in note web/github -c .. web/../.. nope; do
        run "$FOLIO" ls "$arg"
        [ "$status" -eq 1 ]
        [[ $output == *"'$arg' is not a folder"* ]] || false
    done
    run "$FOLIO" ls web note
    [ "$status" -eq 1 ]
    [[ $output == *"Usage: folio ls"* ]] || false
}

@test "ls: no store fails and creates nothing" {
    run "$FOLIO" ls
    [ "$status" -eq 1 ]
    [[ $output == *"No ready EnvFolio store"*"folio init"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "ls --help: works without a store" {
    run "$FOLIO" ls --help
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls"* ]] || false
    run "$FOLIO" help ls
    [ "$status" -eq 0 ]
    [[ $output == *"Usage: folio ls"* ]] || false
    [ ! -e "$FOLIO_STORE_DIR" ]
}

@test "ls: not to a screen (a pipe, a file), no colour at all — tree, flat, text, secret, find" {
    make-store
    local esc=$'\e' cmd
    for cmd in "ls" "ls --flat" "text ls" "secret ls --flat" "text find git" "secret find git"; do
        # shellcheck disable=SC2086  # the words of the command
        run "$FOLIO" $cmd
        [ "$status" -eq 0 ]
        [[ $output != *"$esc"* ]] || false
    done
}

# Run folio as if stdout were a screen (on-screen says yes); TERM and the locale as given around it.
on-screen() { bash -c 'source "$1"; shift; function on-screen() { return 0; }; Main "$@"' _ "$FOLIO" "$@" ; }

@test "ls: on a screen with colour, secrets are yellow and texts green" {
    make-store
    local y=$'\e[33m' g=$'\e[32m' off=$'\e[0m'
    TERM=xterm LC_ALL=C run on-screen ls
    [ "$status" -eq 0 ]
    [[ $output == *"-- $g(T)note$off"* && $output == *"-- $y(S)github$off"* && $output == *"-- $g(T)home$off"* ]] || false
    TERM=xterm LC_ALL=C run on-screen ls --flat
    [ "$output" = "$g(T)note$off
$y(S)web/github$off
$g(T)web/github$off
$g(T)web/home$off" ]
    TERM=xterm LC_ALL=C run on-screen secret ls
    [[ $output == *"-- $y""github$off"* ]] || false
    TERM=xterm LC_ALL=C run on-screen text find home
    [[ $output == *"-- $g""home$off"* ]] || false
    # No extension left behind, colour or not.
    [[ $(plain) != *".txt"* && $(plain) != *".gpg"* ]] || false
}

@test "ls: on a screen with UTF-8, the same (S)/(T) and colours; NO_COLOR takes the colours away" {
    make-store
    local y=$'\e[33m' g=$'\e[32m' off=$'\e[0m'
    TERM=xterm LC_ALL=C.UTF-8 run on-screen ls
    [[ $output == *"── ${g}(T)note$off"* && $output == *"── ${y}(S)github$off"* ]] || false
    TERM=xterm LC_ALL=C.UTF-8 run on-screen ls --flat web
    [ "$output" = "${y}(S)web/github$off
${g}(T)web/github$off
${g}(T)web/home$off" ]
    TERM=xterm LC_ALL=C.UTF-8 NO_COLOR=1 run on-screen ls --flat web
    [ "$output" = $'(S)web/github\n(T)web/github\n(T)web/home' ]
}

@test "ls: --plain or TERM=dumb: no colour; the Linux console has colour" {
    make-store
    local esc=$'\e' cmd
    for cmd in "ls --plain" "ls --flat --plain" "text ls --plain" "secret find --plain git" "text find git --plain"; do
        # shellcheck disable=SC2086  # the words of the command
        TERM=xterm LC_ALL=C.UTF-8 run on-screen $cmd
        [ "$status" -eq 0 ]
        [[ $output != *"$esc"* ]] || false
    done
    TERM=xterm LC_ALL=C.UTF-8 run on-screen ls --plain --flat web
    [ "$output" = $'(S)web/github\n(T)web/github\n(T)web/home' ]
    TERM=dumb LC_ALL=C.UTF-8 run on-screen ls --flat web
    [ "$output" = $'(S)web/github\n(T)web/github\n(T)web/home' ]
    TERM=linux LC_ALL=C.UTF-8 run on-screen ls --flat web
    [ "$output" = $'\e[33m(S)web/github\e[0m\n\e[32m(T)web/github\e[0m\n\e[32m(T)web/home\e[0m' ]
    run "$FOLIO" ls --plain web extra
    [[ $output == *"Usage: folio ls [--flat] [--plain] [<subfolder>]"* ]] || false
}

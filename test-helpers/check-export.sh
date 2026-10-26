#!/usr/bin/env bash
# check-export.sh: run `folio export` the ways names, namespaces and --use can be mixed, each to a
# file of its own, and check what the file holds against what it should — a ✓ or a ✗ (with what
# was expected and what came) per command, to see at a glance that they still behave.
#
# What a file holds is listed as (T)<name>=<value> for a text and (S)<name> for a secret (never
# its value), sorted. For a command that should be refused, it is the folio: line it stops with,
# and no file may be left.
#
# Run it on a store filled by test-helpers/basic-store.sh (and nothing else under these names):
#   test-helpers/basic-store.sh && test-helpers/check-export.sh
# It reads the secrets, so gpg may ask for the store key's passphrase (once). The store is not
# changed; the files go in a temporary folder, removed at the end, locked with a passphrase of the
# script's own. It runs this checkout's folio; set FOLIO to run another. Exits 1 when any check
# fails.
#
# Options:
#   -v, --verbose   Under each ✓ too, show what the file held (as a ✗ always does), indented.

set -uo pipefail

FOLIO=${FOLIO:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/folio}
PASS=check-export-pass

verbose=0
for arg in "$@"; do
    case $arg in
        -v|--verbose) verbose=1 ;;
        -h|--help)    sed -n '2,/^$/s/^# \{0,1\}//p' "${BASH_SOURCE[0]}" ; exit 0 ;;
        *)            echo "check-export.sh: unknown option: $arg (try --help)" >&2 ; exit 2 ;;
    esac
done

# Reading a secret needs the store key's passphrase: tell gpg's pinentry which terminal to ask on.
if [[ -z ${GPG_TTY:-} ]] && tty -s; then
    GPG_TTY=$(tty)
    export GPG_TTY
fi

if [[ -t 1 ]]; then OK=$'\e[32m✓\e[0m' BAD=$'\e[31m✗\e[0m' DIM=$'\e[2m' OFF=$'\e[0m'
else                OK='✓' BAD='✗' DIM='' OFF=''
fi
passed=0 failed=0 n=0

WORK=$(umask 077 && mktemp -d) || exit 1
trap 'rm -rf "$WORK"' EXIT

# list-export <file>: what <file> holds — unlocked with PASS and unpacked in WORK — one item a line.
function list-export() {
    local unpack=$WORK/unpack item
    rm -rf "$unpack" && mkdir "$unpack"
    printf '%s\n' "$PASS" | gpg --batch --quiet --pinentry-mode loopback --passphrase-fd 0 --decrypt "$1" 2>/dev/null \
        | tar -xzf - -C "$unpack" || { echo "(cannot open $1)" ; return 0 ; }
    (cd "$unpack/store" && find . -type f \( -name '*.txt' -o -name '*.gpg' \) | sed 's#^\./##' | LC_ALL=C sort) \
        | while IFS= read -r item; do
              case $item in
                  *.txt) printf '(T)%s=%s\n' "${item%.txt}" "$(cat "$unpack/store/$item")" ;;
                  *.gpg) printf '(S)%s\n' "${item%.gpg}" ;;
              esac
          done
}

# report <ok:0|1> <title> <status> <expected> <code> <got>: one ✓ or ✗ line, and what came.
function report() {
    local ok=$1 title=$2 status=$3 expected=$4 code=$5 got=$6
    if (( ok )); then
        printf '%s %s\n' "$OK" "$title"
        if (( verbose )); then
            printf '%s%s%s\n' "$DIM" "$(printf '%s\n' "$got" | sed 's/^/    /')" "$OFF"
            [[ $code == 0 ]] || printf '%s    (exit %s)%s\n' "$DIM" "$code" "$OFF"
        fi
        passed=$(( passed + 1 ))
    else
        printf '%s %s\n' "$BAD" "$title"
        printf '    expected (status %s):\n%s\n' "$status" "$(printf '%s\n' "$expected" | sed 's/^/      /')"
        printf '    got      (status %s):\n%s\n' "$code" "$(printf '%s\n' "$got" | sed 's/^/      /')"
        failed=$(( failed + 1 ))
    fi
}

# check <status> <expected> <arg>...: run `folio export <arg>...` to a file of its own; what it
# gives is what the file holds or, when it fails, its folio: lines (and that no file was left).
# Compare with <expected> (lines joined with \n) and the exit status with <status>.
function check() {
    local status=$1 expected=$2 file got code
    shift 2
    n=$(( n + 1 )) file=$WORK/$n.folio
    printf '%s\n' "$PASS" | "$FOLIO" export -o "$file" --file-passphrase-stdin "$@" > /dev/null 2> "$WORK/err"
    code=$?
    if [[ $code == 0 ]]; then
        got=$(list-export "$file")
    else
        got=$(grep '^folio:' "$WORK/err")
        [[ ! -e $file ]] || got+=$'\n'"(a file was left: $file)"
    fi
    LAST_FILE=$file
    report "$([[ $got == "$expected" && $code == "$status" ]] && echo 1 || echo 0)" \
        "folio export $*" "$status" "$expected" "$code" "$got"
}

# check-from <expected> <arg>...: `folio exec --from <the last file> <arg>... -- env`; what it gives
# is its SERVER_* and GH_* variables, sorted.
function check-from() {
    local expected=$1 got code
    shift
    got=$("$FOLIO" exec --from "$LAST_FILE" --file-passphrase-fd 3 "$@" -- env 3< <(printf '%s\n' "$PASS") 2> "$WORK/err" \
            | grep -E '^(GH_|SERVER_)' | LC_ALL=C sort)
    code=${PIPESTATUS[0]}
    report "$([[ $got == "$expected" && $code == 0 ]] && echo 1 || echo 0)" \
        "  then: folio exec --from <that file> $* -- env" 0 "$expected" "$code" "$got"
}

echo "-- Names and folders: taken with their full path, namespaces and all"
check 0 '(T)gh/user=other
(T)server/port=22' gh server
check 0 '(T)@app1/server/db=db.app1
(T)@app1/server/user=app1' @app1
check 0 '(T)@app1/server/db=db.app1
(S)@app1/server/password
(T)@app1/server/user=app1' -s @app1
check 0 '(T)@app2/@prod/server/db=db.prod
(S)@app2/@prod/server/password
(T)@app2/@prod/server/user=deploy
(T)@app2/@staging/server/db=db.stg
(S)@app2/@staging/server/password
(T)@app2/@staging/server/port=2222
(T)@app2/@staging/server/user=stg' -s @app2
check 0 '(T)@app2/@prod/server/db=db.prod
(S)@app2/@prod/server/password
(T)@app2/@prod/server/user=deploy' -s @app2/@prod

echo "-- --use: the items under it, written without it"
check 0 '(T)server/db=db.stg
(S)server/password
(T)server/port=2222
(T)server/user=stg' -s --use @app2/@staging
check 0 '(T)server/db=db.stg
(T)server/port=2222
(T)server/user=stg' --use @app2/@staging
check 0 '(T)@prod/server/db=db.prod
(S)@prod/server/password
(T)@prod/server/user=deploy
(T)@staging/server/db=db.stg
(S)@staging/server/password
(T)@staging/server/port=2222
(T)@staging/server/user=stg' -s --use @app2

echo "-- Layers: in the order typed, the last one wins"
check 0 '(T)server/db=db.stg
(S)server/password
(T)server/port=2222
(T)server/user=stg' -s server --use @app2/@staging
check 0 '(T)server/db=db.stg
(S)server/password
(T)server/port=22
(T)server/user=stg' -s --use @app2/@staging server
check 0 '(T)server/db=db.stg
(S)server/password
(T)server/port=2222
(T)server/user=stg' -s --use @app2/@prod --use @app2/@staging
check 0 '(T)@app1/server/db=db.app1
(S)@app1/server/password
(T)@app1/server/user=app1
(T)server/db=db.prod
(S)server/password
(T)server/port=22
(T)server/user=deploy' -s @app1 server --use @app2/@prod

echo "-- Refused: nothing written"
check 1 "folio: export: --use @app2/server: 'server' is not a namespace (one starting with @)." --use @app2/server
check 1 "folio: export: --use @app2/@stg: there is no '@app2/@stg' in the store." --use @app2/@stg

echo "-- One environment to a file, then run with it — no namespace needed there"
check 0 '(T)server/db=db.prod
(S)server/password
(T)server/port=22
(T)server/user=deploy' -s server --use @app2/@prod
check-from 'SERVER_DB=db.prod
SERVER_PASSWORD=p-secret
SERVER_PORT=22
SERVER_USER=deploy' -s --all

echo
if (( failed == 0 )); then
    printf '%s all %d checks passed\n' "$OK" "$passed"
else
    printf '%s %d of %d checks failed\n' "$BAD" "$failed" "$(( passed + failed ))"
    exit 1
fi

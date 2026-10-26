#!/usr/bin/env bash
# check-namespaces.sh: run `folio exec` the ways namespaces, --use and VAR=<name> can be mixed, and
# check each against what it should give — a ✓ or a ✗ (with what was expected and what came) per
# command, to see at a glance that they still behave.
#
# Run it on a store filled by test-helpers/basic-store.sh (and nothing else under these names):
#   test-helpers/basic-store.sh && test-helpers/check-namespaces.sh
# It reads the secrets, so gpg may ask for the store key's passphrase (once). Nothing is changed.
# It runs this checkout's folio; set FOLIO to run another. Exits 1 when any check fails.
#
# Options:
#   -v, --verbose   Under each ✓ too, show what the command gave (as a ✗ always does), indented.

set -uo pipefail

FOLIO=${FOLIO:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/folio}

# Reading a secret needs the store key's passphrase: tell gpg's pinentry which terminal to ask on.
if [[ -z ${GPG_TTY:-} ]] && tty -s; then
    GPG_TTY=$(tty)
    export GPG_TTY
fi

verbose=0
for arg in "$@"; do
    case $arg in
        -v|--verbose) verbose=1 ;;
        -h|--help)    sed -n '2,/^$/s/^# \{0,1\}//p' "${BASH_SOURCE[0]}" ; exit 0 ;;
        *)            echo "check-namespaces.sh: unknown option: $arg (try --help)" >&2 ; exit 2 ;;
    esac
done

if [[ -t 1 ]]; then OK=$'\e[32m✓\e[0m' BAD=$'\e[31m✗\e[0m' DIM=$'\e[2m' OFF=$'\e[0m'
else                OK='✓' BAD='✗' DIM='' OFF=''
fi
passed=0 failed=0

# check <status> <expected> <arg>...: run `folio exec <arg>... -- env`; what it gives is its GH_*,
# SERVER_* and MY_* variables, sorted, then what it says on stderr. Compare with <expected> (lines
# joined with \n) and the exit status with <status>.
function check() {
    local status=$1 expected=$2 got code out err
    shift 2
    out=$(mktemp) && err=$(mktemp) || exit 1
    "$FOLIO" exec "$@" -- env > "$out" 2> "$err"
    code=$?
    got=$(grep -E '^(GH_|SERVER_|MY_)' "$out" | LC_ALL=C sort)
    [[ ! -s $err ]] || got+=${got:+$'\n'}$(cat "$err")
    rm -f "$out" "$err"
    if [[ $got == "$expected" && $code == "$status" ]]; then
        printf '%s folio exec %s\n' "$OK" "$*"
        if (( verbose )); then
            printf '%s%s%s\n' "$DIM" "$(printf '%s\n' "$got" | sed 's/^/    /')" "$OFF"
            [[ $code == 0 ]] || printf '%s    (exit %s)%s\n' "$DIM" "$code" "$OFF"
        fi
        passed=$(( passed + 1 ))
    else
        printf '%s folio exec %s\n' "$BAD" "$*"
        printf '    expected (status %s):\n%s\n' "$status" "$(printf '%s\n' "$expected" | sed 's/^/      /')"
        printf '    got      (status %s):\n%s\n' "$code" "$(printf '%s\n' "$got" | sed 's/^/      /')"
        failed=$(( failed + 1 ))
    fi
}

echo "-- A folder; a namespace one deep (its top @folder is dropped from the names)"
check 0 'GH_USER=other' -s gh
check 0 'SERVER_PORT=22' -s server
check 0 'SERVER_DB=db.app1
SERVER_PASSWORD=a1-secret
SERVER_USER=app1' -s @app1

echo "-- A namespace inside a namespace: left out, with a pointer to --use"
check 1 "folio exec: '@app2/@prod' is a namespace inside a namespace: its entries are left out. To load them, add --use @app2/@prod.
folio exec: '@app2/@staging' is a namespace inside a namespace: its entries are left out. To load them, add --use @app2/@staging.
folio: exec: nothing to load." -s @app2
check 1 "folio exec: '@app2/@prod' is a namespace inside a namespace: its entries are left out. To load them, add --use @app2/@prod.
folio: exec: nothing to load." -s @app2/@prod

echo "-- --use: peel the namespace off"
check 0 'SERVER_DB=db.app1
SERVER_PASSWORD=a1-secret
SERVER_USER=app1' -s --use @app1
check 0 'SERVER_DB=db.prod
SERVER_PASSWORD=p-secret
SERVER_USER=deploy' -s --use @app2/@prod
check 0 'SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s --use @app2/@staging
check 1 "folio: exec: --use @app2: '@app2/@prod/server/db' and '@app2/@staging/server/db' would both be SERVER_DB; pick one, e.g. --use @app2/@prod." -s --use @app2
check 1 "folio: exec: --use @app2/@stg: there is no '@app2/@stg' in the store." -s --use @app2/@stg

echo "-- Layers: in the order typed, the last one wins"
check 0 'SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s server --use @app2/@staging
check 0 'SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=22
SERVER_USER=stg' -s --use @app2/@staging server
check 0 'SERVER_DB=db.prod
SERVER_PASSWORD=p-secret
SERVER_PORT=22
SERVER_USER=deploy' -s server --use @app2/@prod

echo "-- VAR=<name>: picks from what the layers made (else the store); its item keeps its own name too"
check 0 'MY_PORT=22' -s MY_PORT=server/port
check 0 'MY_PORT=22
SERVER_PORT=22' -s server MY_PORT=server/port
check 0 'MY_PORT=2222
SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s MY_PORT=server/port --use @app2/@staging
check 0 'MY_PORT=2222
SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s --use @app2/@staging MY_PORT=server/port
check 0 'MY_USER=stg
SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s --use @app2/@staging MY_USER=server/user
check 0 'MY_GH=other
SERVER_DB=db.stg
SERVER_PASSWORD=s-secret
SERVER_PORT=2222
SERVER_USER=stg' -s --use @app2/@staging MY_GH=gh/user

echo
if (( failed == 0 )); then
    printf '%s all %d checks passed\n' "$OK" "$passed"
else
    printf '%s %d of %d checks failed\n' "$BAD" "$failed" "$(( passed + failed ))"
    exit 1
fi

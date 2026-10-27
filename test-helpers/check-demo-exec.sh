#!/usr/bin/env bash
# check-demo-exec.sh: run `folio exec` with test-helpers/demo.vars and the --use's of the demo
# store, and check each against what it should give — a ✓ or a ✗ (with what was expected and what
# came) per command, to see at a glance that they still behave.
#
# Run it on a store filled by test-helpers/demo-data.sh (and nothing else under these names):
#   test-helpers/demo-data.sh && test-helpers/check-demo-exec.sh
# It reads the secrets, so gpg may ask for the store key's passphrase (once). Nothing is changed.
# It runs this checkout's folio; set FOLIO to run another. Exits 1 when any check fails.
#
# Options:
#   -v, --verbose   Under each ✓ too, show what the command gave (as a ✗ always does), indented.

set -uo pipefail

HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
FOLIO=${FOLIO:-$HERE/../folio}
VARS=$HERE/demo.vars

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
        *)            echo "check-demo-exec.sh: unknown option: $arg (try --help)" >&2 ; exit 2 ;;
    esac
done

if [[ -t 1 ]]; then OK=$'\e[32m✓\e[0m' BAD=$'\e[31m✗\e[0m' DIM=$'\e[2m' OFF=$'\e[0m'
else                OK='✓' BAD='✗' DIM='' OFF=''
fi
passed=0 failed=0

# check <status> <expected> <arg>...: run `folio exec <arg>... -- env`; what it gives is its GH_*,
# DB_*, LOG_*, API_*, SMTP_* and REGION variables, sorted, then what it says on stderr. Compare
# with <expected> (lines joined with \n) and the exit status with <status>. demo.vars is named
# vars.
function check() {
    local status=$1 expected=$2 got code out err
    shift 2
    out=$(mktemp) && err=$(mktemp) || exit 1
    "$FOLIO" exec "$@" -- env > "$out" 2> "$err"
    code=$?
    got=$(grep -E '^(GH_|DB_|LOG_|API_|SMTP_|REGION=)' "$out" | LC_ALL=C sort)
    [[ ! -s $err ]] || got+=${got:+$'\n'}$(sed "s#$VARS#demo.vars#g" "$err")
    rm -f "$out" "$err"
    local title="folio exec ${*//$VARS/demo.vars}"
    if [[ $got == "$expected" && $code == "$status" ]]; then
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

echo "-- One environment, through demo.vars: the command gets only what it sets"
check 0 'DB_URL=pg://app_prod:demo-db-prod@db.prod.example/app
GH_TOKEN=demo-gh-prod
LOG_LEVEL=info' -s --use @first-app/@prod --vars "$VARS"
check 0 'DB_URL=pg://app_stg:demo-db-stg@db.staging.example/app
GH_TOKEN=demo-gh-staging
LOG_LEVEL=info' -s --use @first-app/@staging --vars "$VARS"

echo "-- Layers: the last --use wins; another app's items only feed demo.vars, and it uses none"
check 0 'DB_URL=pg://app_stg:demo-db-stg@db.staging.example/app
GH_TOKEN=demo-gh-staging
LOG_LEVEL=info' -s --use @first-app/@prod --use @first-app/@staging --vars "$VARS"
check 0 'DB_URL=pg://app_prod:demo-db-prod@db.prod.example/app
GH_TOKEN=demo-gh-prod
LOG_LEVEL=info' -s --use @first-app/@prod --use @second-app --vars "$VARS"

echo "-- No vars file: every item under the --use, named by the rule"
check 0 'DB_HOST=db.prod.example
DB_PASS=demo-db-prod
DB_USER=app_prod
GH_TOKEN=demo-gh-prod' -s --use @first-app/@prod
check 0 'API_KEY=demo-api-key
REGION=ca-central
SMTP_HOST=smtp.example
SMTP_PASS=demo-smtp-pass
SMTP_USER=mailer' -s --use @second-app

echo "-- Refused: nothing runs"
check 1 "folio exec: left out 2 secret(s) under '@first-app/@prod'; add --secrets to load them.
folio: exec: demo.vars:8: 'gh/token' is not a text or secret in the store, and there is no fallback." \
    --use @first-app/@prod --vars "$VARS"
check 1 "folio: exec: demo.vars:8: 'gh/token' is not a text or secret in the store, and there is no fallback." \
    -s --vars "$VARS"
check 1 "folio: exec: --use @first-app: '@first-app/@prod/db/host' and '@first-app/@staging/db/host' would both be DB_HOST; pick one, e.g. --use @first-app/@prod." \
    -s --use @first-app --vars "$VARS"

echo
if (( failed == 0 )); then
    printf '%s all %d checks passed\n' "$OK" "$passed"
else
    printf '%s %d of %d checks failed\n' "$BAD" "$failed" "$(( passed + failed ))"
    exit 1
fi

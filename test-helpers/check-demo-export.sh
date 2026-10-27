#!/usr/bin/env bash
# check-demo-export.sh: export one environment of the demo store with test-helpers/demo.vars, then
# run with the file as the export's closing box says — `folio exec --from` — and check each step
# against what it should give: a ✓ or a ✗ (with what was expected and what came) per command.
#
# What a file holds is listed as (T)<name>=<value> for a text and (S)<name> for a secret (never
# its value), sorted. For a command that should be refused, it is the folio: line it stops with,
# and no file may be left.
#
# Run it on a store filled by test-helpers/demo-data.sh (and nothing else under these names):
#   test-helpers/demo-data.sh && test-helpers/check-demo-export.sh
# It reads the secrets, so gpg may ask for the store key's passphrase (once). The store is not
# changed; the files go in a temporary folder, removed at the end, locked with a passphrase of the
# script's own. It runs this checkout's folio; set FOLIO to run another. Exits 1 when any check
# fails.
#
# Options:
#   -v, --verbose   Under each ✓ too, show what came (as a ✗ always does), indented.

set -uo pipefail

HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
FOLIO=${FOLIO:-$HERE/../folio}
VARS=$HERE/demo.vars
PASS=check-demo-export-pass

verbose=0
for arg in "$@"; do
    case $arg in
        -v|--verbose) verbose=1 ;;
        -h|--help)    sed -n '2,/^$/s/^# \{0,1\}//p' "${BASH_SOURCE[0]}" ; exit 0 ;;
        *)            echo "check-demo-export.sh: unknown option: $arg (try --help)" >&2 ; exit 2 ;;
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

# short <text>: <text> with demo.vars and the last file named so, for titles and what came.
function short() {
    local text=${1//$VARS/demo.vars}
    [[ -z ${LAST_FILE:-} ]] || text=${text//$LAST_FILE/<that file>}
    printf '%s' "$text"
}

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
# Compare with <expected> (lines joined with \n) and the exit status with <status>. The closing
# box's `folio exec` line, if any, is kept in BOX_LINE.
function check() {
    local status=$1 expected=$2 file got code
    shift 2
    n=$(( n + 1 )) file=$WORK/$n.folio
    printf '%s\n' "$PASS" | "$FOLIO" export -o "$file" --file-passphrase-stdin "$@" > "$WORK/out" 2> "$WORK/err"
    code=$?
    if [[ $code == 0 ]]; then
        got=$(list-export "$file")
    else
        got=$(grep '^folio:' "$WORK/err" | sed "s#$VARS#demo.vars#g")
        [[ ! -e $file ]] || got+=$'\n'"(a file was left: $file)"
    fi
    LAST_FILE=$file
    BOX_LINE=$(cat "$WORK/out" "$WORK/err" | grep -o 'folio exec .*-- <command>' || true)
    report "$([[ $got == "$expected" && $code == "$status" ]] && echo 1 || echo 0)" \
        "folio export $(short "$*")" "$status" "$expected" "$code" "$got"
}

# check-box <expected>: the closing box's `folio exec` line, the last file and demo.vars named so.
function check-box() {
    local got
    got=$(short "$BOX_LINE")
    report "$([[ $got == "$1" ]] && echo 1 || echo 0)" "  the box says: $1" 0 "$1" 0 "$got"
}

# check-from <expected> <arg>...: `folio exec --from <the last file> <arg>... -- env`; what it gives
# is its GH_*, DB_* and LOG_* variables, sorted.
function check-from() {
    local expected=$1 got code
    shift
    got=$("$FOLIO" exec --from "$LAST_FILE" --file-passphrase-fd 3 "$@" -- env 3< <(printf '%s\n' "$PASS") 2> "$WORK/err" \
            | grep -E '^(GH_|DB_|LOG_)' | LC_ALL=C sort)
    code=${PIPESTATUS[0]}
    report "$([[ $got == "$expected" && $code == 0 ]] && echo 1 || echo 0)" \
        "  then: folio exec --from <that file> $(short "$*") -- env" 0 "$expected" "$code" "$got"
}

for env in prod staging; do
    case $env in
        prod)    user=app_prod pass=demo-db-prod host=db.prod.example    token=demo-gh-prod ;;
        staging) user=app_stg  pass=demo-db-stg  host=db.staging.example token=demo-gh-staging ;;
    esac
    echo "-- @first-app/@$env to a file: the --use's items, named without it"
    check 0 "(T)db/host=$host
(S)db/pass
(T)db/user=$user
(S)gh/token" -s --use "@first-app/@$env" --vars "$VARS"
    check-box "folio exec -s --from <that file> --all --vars demo.vars -- <command>"
    check-from "DB_URL=pg://$user:$pass@$host/app
GH_TOKEN=$token
LOG_LEVEL=info" -s --all --vars "$VARS"
    # Without --all only demo.vars' @{…} are loaded: nothing feeds ${DB_HOST}, so it is empty.
    check-from "DB_URL=pg://$user:$pass@/app
GH_TOKEN=$token
LOG_LEVEL=info" -s --vars "$VARS"
done

echo "-- Refused: nothing written"
check 1 "folio: export: demo.vars:8: 'gh/token' is not a text or secret in the store, and there is no fallback." \
    --use @first-app/@prod --vars "$VARS"
check 1 "folio: export: demo.vars:8: 'gh/token' is not a text or secret in the store, and there is no fallback." \
    -s --vars "$VARS"

echo
if (( failed == 0 )); then
    printf '%s all %d checks passed\n' "$OK" "$passed"
else
    printf '%s %d of %d checks failed\n' "$BAD" "$failed" "$(( passed + failed ))"
    exit 1
fi

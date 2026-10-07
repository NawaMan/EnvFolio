#!/usr/bin/env bash

# x-ray.sh — a dev tool: show how the gpg files Keep makes are locked and what they hold, without
# ever showing a secret value, a text's contents or a key.
#
# Usage: tools/x-ray.sh [--open] <file|folder>...
#   <name>.gpg             Who it is encrypted to (key ids, and user ids when known), or that it
#                          is locked with a passphrase.
#   <name>.txt.sig         Who signed it and when; with <name>.txt next to it, whether it verifies.
#   <folder>               A store: every secret, text (name only) and signature in it, as above.
#   *--keep.tar.gz         A backup: its manifest, its key (fingerprint and user id), its store.
#   *.keep, *--keep.gpg    An export, or an encrypted backup: how it is locked. With --open, unlock
#                          it (gpg may ask) and show what is inside, as for a backup.
#
# Packets are only ever listed in an empty keyring, so no secret can be decrypted by x-ray — gpg
# --list-packets decrypts whatever the keyring can. An unlocked file is unpacked into a temporary
# folder (umask 077) that is removed on exit, as `keep store import` does.

umask 077
TMP=$(mktemp -d) || exit 1
# Each *-home is a keyring of x-ray's own: stop its gpg-agent before removing it.
# shellcheck disable=SC2154  # h is the trap's own loop variable
trap 'for h in "$TMP"/*-home; do GNUPGHOME=$h gpgconf --kill gpg-agent; done 2>/dev/null; rm -rf -- "$TMP"' EXIT
EMPTY=$TMP/empty-home
mkdir -m 700 "$EMPTY"

# on-keyring <home> <gpg-arg>...: gpg on keyring <home>, or on the usual one when <home> is empty.
function on-keyring() {
    local home=$1 ; shift
    if [[ -n $home ]]; then GNUPGHOME=$home gpg "$@" ; else gpg "$@" ; fi
}

# packets <file>: gpg's packet list, made in the empty keyring so nothing is decrypted.
function packets() {
    GNUPGHOME=$EMPTY gpg --batch --pinentry-mode cancel --list-packets -- "$1" 2>/dev/null
}

# who <key-id> [<home>]: the key's user id, or that the keyring does not have it.
function who() {
    local uid
    uid=$(on-keyring "${2:-}" --list-keys --with-colons -- "$1" 2>/dev/null | awk -F: '$1 == "uid" { print $10 ; exit }')
    printf '%s\n' "${uid:-(not in the keyring)}"
}

# locks <file> [<home>]: how a gpg file is locked — each key it is encrypted to, or a passphrase.
function locks() {
    local kind id count=0
    while read -r kind id; do
        count=$(( count + 1 ))
        case $kind in
            key)  echo "encrypted to $id $(who "$id" "${2:-}")" ;;
            pass) echo "locked with a passphrase ($id)" ;;
        esac
    done < <(packets "$1" | awk '
        /^:pubkey enc packet:/ { print "key", $NF }
        /^:symkey enc packet:/ { match($0, /cipher [0-9]+/) ; c = substr($0, RSTART + 7, RLENGTH - 7)
                                 print "pass", (c == 7 ? "AES128" : c == 8 ? "AES192" : c == 9 ? "AES256" : "cipher " c) }')
    (( count > 0 )) || echo "no lock found: not an encrypted gpg file"
}

# signer <file.sig> [<home>]: who signed it, when, and — with the signed file next to it —
# whether it verifies.
function signer() {
    local sig=$1 home=${2:-} id created when check=""
    read -r id created < <(packets "$sig" | awk '
        /^:signature packet:/  { id = $NF }
        id && /created [0-9]+/ { match($0, /created [0-9]+/) ; print id, substr($0, RSTART + 8, RLENGTH - 8) ; exit }')
    [[ -n $id ]] || { echo "no signature found" ; return ; }
    # GNU date takes -d @<epoch>; BSD (macOS) date takes -r <epoch>.
    when=$(date -u -d "@$created" '+%F %T' 2>/dev/null || date -u -r "$created" '+%F %T')
    if [[ -f ${sig%.sig} ]]; then
        if on-keyring "$home" --batch --status-fd 1 --verify -- "$sig" "${sig%.sig}" 2>/dev/null | grep -q ' GOODSIG '
        then check=", verifies"
        else check=", DOES NOT VERIFY"
        fi
    fi
    echo "signed by $id $(who "$id" "$home"), $when UTC$check"
}

# show-store <folder> [<home>]: every secret, text and signature in a store. A text by name only.
function show-store() {
    local dir=$1 home=${2:-} file name
    [[ -f $dir/.gpg-id ]] && echo "  .gpg-id: $(paste -s -d ' ' "$dir/.gpg-id")"
    [[ -e $dir/.git ]]    && echo "  .git: $(git -C "$dir" rev-list --count HEAD 2>/dev/null || echo 0) commit(s)"
    while IFS= read -r file; do
        name=${file#"$dir"/}
        case $name in
            *.gpg)     echo "  (S) ${name%.gpg}" ; locks  "$file" "$home" | sed 's/^/        /' ;;
            *.txt)     echo "  (T) ${name%.txt}" ;;
            *.txt.sig) signer "$file" "$home" | sed 's/^/        /' ;;
        esac
    done < <(find "$dir" -name .git -prune -o -type f \( -name '*.gpg' -o -name '*.txt' -o -name '*.txt.sig' \) -print \
                | LC_ALL=C sort)
}

# show-inside <folder>: an unpacked backup or export — its manifest, its key and its store. The key
# goes into a keyring of x-ray's own, to name and check the signatures; only its id is shown.
function show-inside() {
    local dir=$1 home manifest store
    home=$(mktemp -d "$TMP/XXXXXX-home")
    for manifest in "$dir/keep-backup.txt" "$dir/keep-export.txt"; do
        [[ -f $manifest ]] && { echo "  ${manifest##*/}:" ; sed 's/^/    /' "$manifest" ; }
    done
    if [[ -f $dir/key.asc ]]; then
        echo "  key.asc (a secret key; not shown):"
        GNUPGHOME=$home gpg --batch --quiet --import "$dir/key.asc" 2>/dev/null
        GNUPGHOME=$home gpg --list-secret-keys --with-colons 2>/dev/null | awk -F: '
            $1 == "sec"         { want = 1 }
            $1 == "fpr" && want { fpr = $10 ; want = 0 }
            $1 == "uid" && fpr  { print "    " fpr "  " $10 ; fpr = "" }'
    fi
    for store in "$dir"/*/; do
        [[ -d $store ]] || continue
        echo "  ${store#"$dir"/}"
        show-store "${store%/}" "$home" | sed 's/^/  /'
    done
}

function usage() { sed -n 's/^# \{0,1\}//; 3,18p' "$0" ; }

open=0 files=() status=0
for arg in "$@"; do
    case $arg in
        --open)    open=1 ;;
        -h|--help) usage ; exit 0 ;;
        -*)        echo "x-ray: unknown option: $arg" >&2 ; usage >&2 ; exit 1 ;;
        *)         files+=("$arg") ;;
    esac
done
(( ${#files[@]} > 0 )) || { usage >&2 ; exit 1 ; }

for file in "${files[@]}"; do
    echo "$file"
    unpack=$(mktemp -d "$TMP/XXXXXX")
    if [[ -d $file ]]; then
        show-store "${file%/}"
    elif [[ ! -f $file ]]; then
        echo "  no such file" ; status=1
    else
        case $file in
            *--keep.tar.gz)
                if tar -xzf "$file" -C "$unpack"; then show-inside "$unpack" ; else status=1 ; fi ;;
            *.keep|*--keep.gpg)
                locks "$file" | sed 's/^/  /'
                if (( ! open )); then
                    echo "  (--open to unlock it and see inside)"
                elif gpg --decrypt --output - -- "$file" 2>/dev/null | tar -xzf - -C "$unpack" \
                        && [[ ${PIPESTATUS[0]} == 0 ]]; then
                    show-inside "$unpack"
                else
                    echo "  could not unlock it" ; status=1
                fi ;;
            *.sig) signer "$file" | sed 's/^/  /' ;;
            *.gpg) locks  "$file" | sed 's/^/  /' ;;
            *)     echo "  not a file x-ray knows" ; status=1 ;;
        esac
    fi
done
exit "$status"

# shellcheck shell=bash
# old-name.sh — for tests: give an item a name Folio would not make now (MANUAL "Names"), as a store
# made with plain pass, or before the names rule, may hold. Source it in a test file:
#
#   source "$BATS_TEST_DIRNAME/../../test-helpers/old-name.sh"
#   old-name <made-name> <old-name>   move the item <made-name> (a text and its signature, or a
#                                     secret) to <old-name>, on disk, inside the sandbox store

old-name() {
    local from=$1 to=$2 ext
    [[ -n ${SANDBOX:-} && $FOLIO_STORE_DIR == "$SANDBOX"/* ]] \
        || { echo "old-name: FOLIO_STORE_DIR is not in the sandbox" >&2 ; return 1 ; }
    mkdir -p "$FOLIO_STORE_DIR/$(dirname "$to")"
    for ext in txt txt.sig gpg; do
        [[ -e $FOLIO_STORE_DIR/$from.$ext ]] || continue
        mv -- "$FOLIO_STORE_DIR/$from.$ext" "$FOLIO_STORE_DIR/$to.$ext"
    done
}

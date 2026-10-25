#!/usr/bin/env bats

# Every check in a test must be able to fail it, under bash 3.2 too. bats runs a test with set -e,
# but set -e lets these through: in bash before 4.1 (macOS's 3.2) a failing [[ … ]] or (( … ));
# in any bash a failing `! cmd`, or a failing check before the last one in an `a && b` list. So
# such a line ends with `|| false` — or, for `! cmd`, is `run cmd` and a check of $status.

# unprotected <file>: each line in a @test of <file> where a failing check would go unnoticed.
unprotected() {
    awk '
        /^@test ".*" \{[[:space:]]*$/ { in_test = 1 ; next }
        /^}$/                         { in_test = 0 ; next }
        !in_test                      { next }
        {
            code = $0
            sub(/[[:space:]]+#.*$/, "", code)       # a trailing comment
            sub(/^[[:space:]]+/, "", code)
            sub(/[[:space:]]+$/, "", code)
            if (code ~ /\|\| false$/) next
            if (code ~ /(\|\||&&) (continue|break|return|skip)( |$)/) next   # control flow, not a check
            if (code ~ /^(\[\[|\(\() / || code ~ /^! / || (code ~ /^\[/ && code ~ /\]\]? && / && code ~ /\]$/))
                printf "%s:%d: %s\n", FILENAME, FNR, code
        }' "$1"
}

@test "lint: every [[ ]], (( )), ! and && check in the tests can fail them, under bash 3.2 too" {
    local file lines found=""
    while IFS= read -r file; do
        [[ $file -ef $BATS_TEST_FILENAME ]] && continue    # this file: its samples are meant to be found
        lines=$(unprotected "$file")
        [[ -z $lines ]] || found+="$lines"$'\n'
    done < <(find "$BATS_TEST_DIRNAME/.." -name '*.bats' | sort)
    if [[ -n $found ]]; then
        printf 'Add `|| false` (or, for `! cmd`, use `run cmd` and check $status):\n%s\n' "$found"
        false
    fi
}

@test "lint: it finds each kind of check that would go unnoticed" {
    local sample=$BATS_TEST_TMPDIR/sample.bats
    printf '%s\n' '@test "x" {' \
        '    [[ $a == b ]]' '    (( a > 1 ))' '    ! grep x y' '    [ "$s" -eq 1 ] && [[ $o == x ]]' \
        '    [[ $a == b ]] || false' '    [ "$s" -eq 1 ]' '    run grep x y' '}' > "$sample"
    run unprotected "$sample"
    [ "${#lines[@]}" -eq 4 ]
    [ "${lines[0]}" = "$sample:2: [[ \$a == b ]]" ]
    [ "${lines[3]}" = "$sample:5: [ \"\$s\" -eq 1 ] && [[ \$o == x ]]" ]
}

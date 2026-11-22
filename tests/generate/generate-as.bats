#!/usr/bin/env bats

# folio generate text|secret --as uuid|hex|int, and the recipe each generate keeps — through the
# real ./folio, against a throwaway GPG home and store; the value makers also by sourcing it.

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

# A ready store, with a throwaway no-passphrase key.
make-store() {
    gpg --batch --passphrase '' --quick-generate-key "Test User <test@example.com>" default default never 2>/dev/null
    "$FOLIO" init --key test@example.com < /dev/null >/dev/null 2>&1
}

# The recipe kept for a text (txt) or a secret (gpg).
recipe() { cat "$FOLIO_STORE_DIR/$2.$1.gen" ; }

UUID_RE='^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'

@test "MANUAL: generate text — a UUID" {
    make-store
    run "$FOLIO" generate text --as uuid app/id < /dev/null
    [ "$status" -eq 0 ]
    local text ; text=$(cat "$FOLIO_STORE_DIR/app/id.txt")
    [[ $text =~ $UUID_RE ]] || false
    [ "${text:14:1}" = 4 ]
    [ "${lines[1]}" = "$text" ]
    [ "$(recipe txt app/id)" = "uuid 4" ]
    "$FOLIO" show text app/id >/dev/null
    # The recipe is in the same commit as the text.
    [ "$(git -C "$FOLIO_STORE_DIR" log -1 --format=%s)" = "Add generated text for app/id." ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
}

@test "generate text --as uuid: every version has its version and variant" {
    make-store
    local v text
    for v in 1 2 4 6 7 8; do
        "$FOLIO" generate text --as uuid "$v" "id/v$v" < /dev/null >/dev/null
        text=$(cat "$FOLIO_STORE_DIR/id/v$v.txt")
        [[ $text =~ $UUID_RE ]] || false
        [ "${text:14:1}" = "$v" ]
        [[ ${text:19:1} == [89ab] ]] || false
        [ "$(recipe txt "id/v$v")" = "uuid $v" ]
    done
    # v2 holds the user's id; the time ones hold no MAC address (the multicast bit is set).
    text=$(cat "$FOLIO_STORE_DIR/id/v2.txt")
    [ "$(( 16#${text:0:8} ))" -eq "$(id -u)" ]
    for v in 1 2 6; do
        text=$(cat "$FOLIO_STORE_DIR/id/v$v.txt")
        (( 16#${text:24:2} & 1 )) || false
    done
}

@test "generate text --as uuid: v1, v6 and v7 hold the time now" {
    source "$FOLIO"
    local now ; now=$(date +%s)
    local u1 u6 u7 t1 t6 t7
    u1=$(make-uuid 1) ; u6=$(make-uuid 6) ; u7=$(make-uuid 7)
    # 100 ns steps since 1582 back to seconds since 1970.
    t1=$(( 16#${u1:15:3}${u1:9:4}${u1:0:8} / 10000000 - 12219292800 ))
    t6=$(( 16#${u6:0:8}${u6:9:4}${u6:15:3} / 10000000 - 12219292800 ))
    t7=$(( 16#${u7:0:8}${u7:9:4} / 1000 ))
    local t
    for t in "$t1" "$t6" "$t7"; do
        (( t >= now - 2 && t <= now + 2 )) || false
    done <<'EOF'
--as|--as needs a type
--as base64 x|'base64' is not a type for --as
--as uuid 9 x|'9' is not a UUID version
--as uuid 5 x|is made from a namespace and a name
--as uuid 5:dns: x|is made from a namespace and a name
--as uuid 5:nowhere:a x|'nowhere' is not a UUID namespace
--as hex 0 x|must be 1 to 1024
--as hex 1025 x|must be 1 to 1024
--as hex abc x|must be 1 to 1024
--as int x|needs a range
--as int 5 x|needs a range
--as int -5-10 x|unknown option: -5
--as int 9-3 x|the smaller number first
--as int 0-99999999999999999 x|too wide
--as uuid -n x|--no-symbols is for characters
--as uuid a b c|Usage: folio generate text
EOF
    [ -z "$(find "$FOLIO_STORE_DIR" -name '*.txt' -o -name '*.gen')" ]
}

@test "generate --as: the recipe goes with mv and cp, and away with rm" {
    make-store
    "$FOLIO" generate text   --as int 1-6 dice  < /dev/null >/dev/null
    "$FOLIO" generate secret --as hex 8   s/key < /dev/null >/dev/null
    "$FOLIO" mv text dice game/dice < /dev/null
    [ "$(recipe txt game/dice)" = "int 1-6" ]
    [ ! -e "$FOLIO_STORE_DIR/dice.txt.gen" ]
    "$FOLIO" cp text game/dice game/die < /dev/null
    [ "$(recipe txt game/die)" = "int 1-6" ]
    "$FOLIO" mv secret s/key s/key2 < /dev/null >/dev/null
    [ "$(recipe gpg s/key2)" = "hex 8" ]
    [ ! -e "$FOLIO_STORE_DIR/s/key.gpg.gen" ]
    "$FOLIO" cp secret s/key2 s/key3 < /dev/null >/dev/null
    [ "$(recipe gpg s/key3)" = "hex 8" ]
    # A copy over an item that has a recipe, from one that has none, leaves it none.
    "$FOLIO" insert text -t typed typed < /dev/null
    "$FOLIO" cp text -f typed game/die < /dev/null
    [ ! -e "$FOLIO_STORE_DIR/game/die.txt.gen" ]
    "$FOLIO" rm secret -f s/key2 >/dev/null
    [ ! -e "$FOLIO_STORE_DIR/s/key2.gpg.gen" ]
    "$FOLIO" rm text -r -f game < /dev/null
    [ ! -e "$FOLIO_STORE_DIR/game" ]
    [ -z "$(git -C "$FOLIO_STORE_DIR" status --porcelain)" ]
    # Not listed as items.
    run "$FOLIO" ls --flat --plain
    [[ $output != *".gen"* ]] || false
}

@test "generate --as: info tells how an item was made" {
    make-store
    "$FOLIO" generate text   --as uuid 5:dns:python.org id < /dev/null >/dev/null
    "$FOLIO" generate secret --as hex 16 key < /dev/null >/dev/null
    "$FOLIO" insert text -t typed typed < /dev/null
    [[ $("$FOLIO" info id)    == *"Generated:    UUID v5 of 'python.org' in dns (always the same; not rotated)"* ]] || false
    [[ $("$FOLIO" info key)   == *"Generated:    16 random bytes, as hex"* ]] || false
    [[ $("$FOLIO" info typed) == *"Generated:    no (not made by folio generate)"* ]] || false
}

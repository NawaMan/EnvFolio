#!/usr/bin/env bats

# folio completion and the `folio __complete` it asks, through the real ./folio. The store holds
# empty files only: completion lists names and never reads, decrypts or checks anything.

setup() {
    SANDBOX=$(mktemp -d)
    export HOME="$SANDBOX/home"
    export GNUPGHOME="$SANDBOX/gnupg"
    export FOLIO_STORE_DIR="$SANDBOX/store"
    export XDG_STATE_HOME="$SANDBOX/state"
    export USER=sb-test-nobody
    mkdir -p "$HOME" && mkdir -m 700 "$GNUPGHOME"
    [[ $FOLIO_STORE_DIR == "$SANDBOX"/* && $GNUPGHOME == "$SANDBOX"/* ]]
    FOLIO="$BATS_TEST_DIRNAME/../../folio"
    # `folio` on PATH, as the scripts call it by the name typed.
    mkdir -p "$SANDBOX/bin" && ln -s "$(cd "$(dirname "$FOLIO")" && pwd)/folio" "$SANDBOX/bin/folio"
    export PATH="$SANDBOX/bin:$PATH"
}

teardown() {
    rm -rf "$SANDBOX"
}

# A store with text note, secret + text web/github, text web/home, secret web/deep/down/key —
# empty files, plus what completion must leave out.
make-names() {
    mkdir -p "$FOLIO_STORE_DIR/web/deep/down" "$FOLIO_STORE_DIR/.git"
    touch "$FOLIO_STORE_DIR/note.txt" "$FOLIO_STORE_DIR/note.txt.sig" \
          "$FOLIO_STORE_DIR/web/github.gpg" "$FOLIO_STORE_DIR/web/github.txt" \
          "$FOLIO_STORE_DIR/web/home.txt" "$FOLIO_STORE_DIR/web/deep/down/key.gpg" \
          "$FOLIO_STORE_DIR/.gpg-id" "$FOLIO_STORE_DIR/.git/hidden.gpg"
}

# The words of `folio __complete <word>...`, one line, comma-separated (descriptions left out);
# its first line (how) as $how.
words() {
    run "$FOLIO" __complete "$@"
    [ "$status" -eq 0 ]
    how=${lines[0]}
    printf '%s\n' "${lines[@]:1}" | cut -f1 | paste -sd, -
}

# What bash's Tab gives for <line>, cursor at its end: the script of `folio completion bash`, run
# by the bash under test (3.2 or 5).
bash-tab() {
    bash -c 'eval "$(folio completion bash)"
             COMP_LINE=$1 COMP_POINT=${#1} ; _folio
             IFS=, ; echo "${COMPREPLY[*]}"' _ "$1"
}

# --- What there is to complete --------------------------------------------------

@test "completion: every command in folio help has its arguments in completion-args" {
    # shellcheck source=SCRIPTDIR/../../folio
    source "$FOLIO"
    local line name missing=""
    while IFS= read -r line; do
        [[ $line == "  "[a-z]* ]] || continue
        line=${line#  } name=${line%%  *} name=${name%% \[*}
        completion-args "$name" >/dev/null || missing+=" '$name'"
    done < <(folio-help)
    [ -z "$missing" ] || { echo "Not in completion-args:$missing" ; false ; }
}

@test "completion: every option in a command's usage is in its Options, so it completes" {
    # shellcheck source=SCRIPTDIR/../../folio
    source "$FOLIO"
    local line name usage option missing=""
    while IFS= read -r line; do
        [[ $line == "  "[a-z]* ]] || continue
        line=${line#  } name=${line%%  *} name=${name%% \[*}
        [[ $name == version || $name == help ]] && continue
        usage=$(Help $name | sed -n '/^Usage:/,/^$/p')
        for option in $(grep -oE '(^|[][ |])--?[a-z][a-z-]*' <<< "$usage" | sed -E 's/^[][ |]//'); do
            help-options $name | cut -f1 | grep -qxe "$option" || missing+=" $name:$option"
        done
    done < <(folio-help)
    [ -z "$missing" ] || { echo "In the usage but not in Options:$missing" ; false ; }
}

# --- Commands and options --------------------------------------------------------

@test "completion: commands, and a group's own commands" {
    [ "$(words "")" = "init,path,backup,restore,export,import,text,secret,vars,ls,exec,shell,completion,version,help" ]
    words "" >/dev/null ; [ "$how" = words ]
    [ "$(words te)" = "text" ]
    [ "$(words secret "")" = "ls,find,grep,show,insert,edit,generate,rm,mv,cp" ]
    [ "$(words text g)" = "grep,generate" ]
}

@test "completion: commands come with their description from folio help" {
    run "$FOLIO" __complete secret sh
    [ "${lines[1]}" = $'show\tShow a secret, or copy it to the clipboard' ]
}

@test "completion: options from the command's help, long ones for - and --, with a description" {
    [ "$(words backup -)" = "--history,--encrypt,--file-passphrase-stdin,--file-passphrase-fd,--store-passphrase-fd,--help" ]
    [ "$(words backup --e)" = "--encrypt" ]
    [ "$(words secret show -c)" = "-c" ]
    run "$FOLIO" __complete backup --hi
    [ "${lines[1]}" = $'--history\tKeep the store\'s git history too' ]
}

@test "completion: what an option's value is" {
    words export -o "" >/dev/null ;              [ "$how" = files ]
    words export --to "" >/dev/null ;            [ "$how" = files ]
    words init --name "" >/dev/null ;            [ "$how" = none ]
    words secret show --store-passphrase-fd "" >/dev/null ; [ "$how" = none ]
    # --clip's value is optional (--clip=2): the next word is the name.
    make-names
    [ "$(words secret show --clip w)" = "web/deep/,web/github" ]
}

@test "completion: exec — entries, then after -- the command, then files" {
    words exec -s web/github -- "" >/dev/null ;    [ "$how" = commands ]
    words exec -s web/github -- ls "" >/dev/null ; [ "$how" = files ]
}

@test "completion: files for backup, restore and import's file; nothing for its names" {
    words backup "" >/dev/null ;          [ "$how" = files ]
    words restore "" >/dev/null ;         [ "$how" = files ]
    words import "" >/dev/null ;          [ "$how" = files ]
    words import x.folio "" >/dev/null ;  [ "$how" = none ]
}

@test "completion: help topics, completion shells, nothing for an unknown command" {
    [ "$(words help in)" = "init" ]
    [ "$(words help secret sh)" = "show" ]
    [ "$(words completion "")" = "bash,zsh" ]
    words nosuch "" >/dev/null ; [ "$how" = none ]
}

# --- Names in the store ----------------------------------------------------------

@test "completion: text names for text, secret names for secret, a level at a time" {
    make-names
    [ "$(words text show "")" = "note,web/" ]
    [ "$(words text show w)" = "web/github,web/home" ]
    [ "$(words secret show w)" = "web/deep/,web/github" ]
}

@test "completion: a folder that is the only choice is opened" {
    make-names
    [ "$(words secret show web/d)" = "web/deep/down/key" ]
    [ "$(words secret show "")" = "web/deep/,web/github" ]
}

@test "completion: exec and export take either kind; one that is both says so" {
    make-names
    [ "$(words exec "")" = "note,web/" ]
    run "$FOLIO" __complete export web/g
    [ "${lines[1]}" = $'web/github\tsecret, text' ]
}

@test "completion: exec's VAR=<name> completes the name after the =" {
    make-names
    [ "$(words exec -s GH=web/g)" = "GH=web/github" ]
}

@test "completion: ls takes only folders" {
    make-names
    [ "$(words ls "")" = "web/" ]
    [ "$(words ls web/)" = "web/deep/" ]
    [ "$(words text ls "")" = "web/" ]
}

@test "completion: no store yet — nothing to offer, and no error" {
    [ "$(words secret show "")" = "" ]
    words secret show "" >/dev/null ; [ "$how" = words ]
    [ ! -e "$FOLIO_STORE_DIR" ]
}

# --- folio completion ------------------------------------------------------------

@test "MANUAL: completion — no shell named: say how to load it" {
    run "$FOLIO" completion
    [ "$status" -eq 1 ]
    [[ $output == *'eval "$(folio completion bash)"'*'~/.bashrc'* ]]
    [[ $output == *'eval "$(folio completion zsh)"'*'~/.zshrc'* ]]
}

@test "completion: an unknown shell is refused" {
    run "$FOLIO" completion fish
    [ "$status" -eq 1 ]
    [[ $output == *"there is none for 'fish'"* ]]
}

@test "MANUAL: completion — bash" {
    make-names
    [ "$(bash-tab "folio secret sh")" = "show" ]
    [ "$(bash-tab "folio secret show w")" = "web/deep/,web/github" ]
    [ "$(bash-tab "folio secret show web/d")" = "web/deep/down/key" ]
    [ "$(bash-tab "folio backup --enc")" = "--encrypt" ]
    # bash replaces only what follows the =, so that is what it gets.
    [ "$(bash-tab "folio exec GH=web/h")" = "web/home" ]
}

@test "completion: bash — a file where a file goes" {
    touch "$SANDBOX/backup-1--folio.tar.gz"
    [ "$(cd "$SANDBOX" && bash-tab "folio restore backup-")" = "backup-1--folio.tar.gz" ]
}

@test "completion: the zsh script is valid zsh" {
    "$FOLIO" completion zsh > "$SANDBOX/folio.zsh"
    zsh -n "$SANDBOX/folio.zsh"
}

@test "completion: zsh — no compinit yet and a completion file zsh does not trust: still loads" {
    # A world-writable folder on fpath fails compinit's check. A plain compinit would ask whether
    # to go on; with no one to answer (stdin is /dev/null, as at instant prompt) it aborts and
    # takes compdef away. The script must skip that file instead.
    mkdir -m 777 "$SANDBOX/insecure" && echo '#compdef nothing' > "$SANDBOX/insecure/_nothing"
    "$FOLIO" completion zsh > "$SANDBOX/folio.zsh"
    run zsh -f -c "fpath=('$SANDBOX/insecure' \$fpath); source '$SANDBOX/folio.zsh'
                   print -r -- \"folio: \$_comps[folio]\"" < /dev/null
    [[ $output != *"initialization aborted"* ]]
    [[ $output != *"compdef"* ]]
    [[ $output == *"folio: _folio"* ]]
}

@test "MANUAL: completion — zsh" {
    make-names
    # A real interactive zsh, with its completion system, driven through a pseudo-terminal.
    # Ctrl-X prints the line as Tab left it (BUF:[…]), without running it; the driver waits for
    # that, up to 10 seconds, rather than a fixed sleep (too short on macOS). Escapes are taken
    # out in zsh: BSD sed has no \x1b.
    cat > "$SANDBOX/setup.zsh" <<'EOF'
PS1="> "
autoload -Uz compinit; compinit -u -d $HOME/.zcompdump
eval "$(folio completion zsh)"
show-buffer() { zle -I; print -r -- "BUF:[$BUFFER]" ; }
zle -N show-buffer; bindkey '^X' show-buffer
EOF
    cat > "$SANDBOX/drive.zsh" <<'EOF'
setopt extendedglob
zmodload zsh/zpty
zpty z zsh -f -i
zpty -w z "source ${0:h}/setup.zsh"
zpty -w -n z $1$'\t\C-x'
out= ; integer i
for (( i = 0; i < 100; i++ )); do
    while zpty -r -t z line; do out+=$line; done
    [[ $out == *BUF:\[*\]* ]] && break
    sleep 0.1
done
zpty -d z
out=${out//$'\e'\[[0-9;?]#[a-zA-Z]/} ; print -r -- ${out//$'\r'/}
EOF
    run zsh -f "$SANDBOX/drive.zsh" "folio secret sh"
    [[ $output == *"BUF:[folio secret show ]"* ]]
    run zsh -f "$SANDBOX/drive.zsh" "folio secret show web/d"
    [[ $output == *"BUF:[folio secret show web/deep/down/key"* ]]
}

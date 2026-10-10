# Shared by the store flow tests: `load fake-pinentry`.

# use-pinentry <passphrase> | --cancel: gpg-agent's pinentry answers every passphrase prompt with
# <passphrase> (and yes to any warning), or cancels. A script speaking pinentry's Assuan protocol.
use-pinentry() {
    local script="$SANDBOX/fake-pinentry" reply
    if [[ $1 == --cancel ]]; then reply='ERR 83886179 Operation cancelled'
    else                          reply="D $1"$'\n'"OK"
    fi
    {
        echo '#!/bin/sh'
        echo 'echo "OK Pleased to meet you"'
        echo 'while IFS= read -r line; do'
        echo '    case $line in'
        printf '        GETPIN*) cat <<"END"\n%s\nEND\n        ;;\n' "$reply"
        echo '        BYE*)    echo OK ; exit 0 ;;'
        echo '        *)       echo OK ;;'
        echo '    esac'
        echo 'done'
    } > "$script"
    chmod +x "$script"
    echo "pinentry-program $script" > "$GNUPGHOME/gpg-agent.conf"
    gpgconf --kill gpg-agent
}

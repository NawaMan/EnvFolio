#!/bin/bash
set -e
# Configured by: booth config --no-tui --overwrite --variant terminal --set silence-build --set writable-booth --select host-agent/tty-owner/apt-pkg:bats,pass,shellcheck,tmux/gh+token/bash/git-credential/shell-history/homebrew/envfolio+store-host/claude-code+auto-accept+credential+settings-cache

# Docker creates the folders above the mounted socket (/run/user/<uid> and its gnupg) owned by
# root, and gpg ignores a socket folder when it or its parent is not its own (it would start an
# agent of its own): give both to coder. Then, only when gpg does use the host's socket, point
# every booth shell's GPG_TTY at /dev/null, so the host's pinentry never asks on a wrong
# terminal. Otherwise gpg runs the booth's own agent and asks in the booth, as without this
# template. Nothing changes when the socket is not mounted. Runs in a subshell: never fails the
# start.
(
    profile=/etc/profile.d/95-host-agent--profile.sh
    sudo rm -f "$profile"
    run="/run/user/$(id -u)"
    [ -S "$run/gnupg/S.gpg-agent" ] || exit 0
    for d in "$run" "$run/gnupg"; do
        if [ ! -O "$d" ]; then
            sudo chown "$(id -u):$(id -g)" "$d" && sudo chmod 700 "$d"
        fi
    done
    [ "$(gpgconf --list-dirs agent-socket 2>/dev/null)" = "$run/gnupg/S.gpg-agent" ] || exit 0
    printf '%s\n' '# Written by the host-agent template: gpg uses the host agent.' \
                  'export GPG_TTY=/dev/null' \
        | sudo tee "$profile" >/dev/null
) || true

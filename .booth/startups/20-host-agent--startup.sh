#!/bin/bash
set -e
# Configured by: booth config --no-tui --overwrite --variant terminal --set silence-build --set writable-booth --select gnupg:2.5.24/tty-owner/apt-pkg:bats,pass,shellcheck,tmux/gh+token/bash/git-credential/shell-history/homebrew/envfolio+store-host/claude-code+auto-accept+credential+settings-cache/host-agent

# Docker creates the folder above the mounted socket owned by root, and gpg ignores a socket
# folder it does not own (it would start an agent of its own): give it to coder. Then point
# every booth shell's GPG_TTY at /dev/null, so the host's pinentry never asks on a wrong terminal.
# Nothing changes when the socket is not mounted. Runs in a subshell: never fails the start.
(
    dir="/run/user/$(id -u)/gnupg"
    [ -S "$dir/S.gpg-agent" ] || exit 0
    if [ ! -O "$dir" ]; then
        sudo chown "$(id -u):$(id -g)" "$dir" && sudo chmod 700 "$dir"
    fi
    printf '%s\n' '# Written by the host-agent template: gpg uses the host agent.' \
                  'export GPG_TTY=/dev/null' \
        | sudo tee /etc/profile.d/95-host-agent--profile.sh >/dev/null
) || true

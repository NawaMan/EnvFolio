#!/usr/bin/env bash

# Runs every bats test under tests/. Meant for the booth (`just test-all`).
# - Put the tests in a folder per area (tests/store/, ...) as *.bats files, not here.
# - Each test sets up its own throwaway store and GPG home; see AGENTS.md.
# - test-all.sh <major> fails unless that bash runs the tests (`just test-bash32`, `test-bash5`).

if [[ -n ${1:-} && ${BASH_VERSINFO[0]} != "$1" ]]; then
    echo "test-all: wanted bash $1, but $(command -v bash) is $BASH_VERSION." >&2
    exit 1
fi
echo "# bash $BASH_VERSION"
cd "$(dirname "$0")" && exec bats --recursive .

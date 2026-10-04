#!/usr/bin/env bash

# Runs every bats test under tests/. Meant for the booth (`just test-all`).
# - Put the tests in a folder per area (tests/store/, ...) as *.bats files, not here.
# - Each test sets up its own throwaway store and GPG home; see AGENTS.md.

cd "$(dirname "$0")" && exec bats --recursive .

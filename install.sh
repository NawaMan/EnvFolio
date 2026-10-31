#!/usr/bin/env bash

# EnvFolio installer: downloads `folio` and `SHA256SUMS` from a release, checks the one against the
# other, and puts `folio` in ~/.local/bin. No sudo, and nothing outside that folder is changed.
#
# Usage: curl -fsSL https://raw.githubusercontent.com/NawaMan/EnvFolio/main/install.sh | bash
#
# Environment:
#   FOLIO_INSTALL_DIR   Where to put `folio` (default ~/.local/bin).
#   FOLIO_VERSION       A release to install, e.g. 1.0.1 (default: the latest).
#   FOLIO_DOWNLOAD_URL  Where the releases are (default https://github.com/NawaMan/EnvFolio/releases).
#
# e.g.  curl -fsSL …/install.sh | FOLIO_INSTALL_DIR=/usr/local/bin bash
#
# To upgrade, run it again. To uninstall, delete the file.

set -euo pipefail

TEMP_DIR=""
trap '[[ -z $TEMP_DIR ]] || rm -rf "$TEMP_DIR"' EXIT

function fail() {
    echo "install.sh: $*" >&2
    exit 1
}

function install-folio() {
    local dir="${FOLIO_INSTALL_DIR:-$HOME/.local/bin}"
    local version="${FOLIO_VERSION:-latest}"
    local releases="${FOLIO_DOWNLOAD_URL:-https://github.com/NawaMan/EnvFolio/releases}"
    local from="$releases/latest/download"
    [[ $version == latest ]] || from="$releases/download/v${version#v}"

    command -v curl >/dev/null 2>&1 || fail "curl is needed to download folio."
    local sum
    if   command -v sha256sum >/dev/null 2>&1; then sum="sha256sum"
    elif command -v shasum    >/dev/null 2>&1; then sum="shasum -a 256"
    else fail "sha256sum or shasum is needed to check the download."
    fi

    TEMP_DIR=$(mktemp -d)
    echo "Downloading folio from $from"
    curl -fsSL -o "$TEMP_DIR/folio"      "$from/folio"      || fail "could not download $from/folio"
    curl -fsSL -o "$TEMP_DIR/SHA256SUMS" "$from/SHA256SUMS" || fail "could not download $from/SHA256SUMS"
    # $sum is one or more words on purpose: `shasum -a 256`.
    # shellcheck disable=SC2086
    (cd "$TEMP_DIR" && $sum -c SHA256SUMS) || fail "folio does not match SHA256SUMS; nothing installed."

    mkdir -p "$dir" 2>/dev/null && [[ -w $dir ]] \
        || fail "cannot write to $dir. Pick another folder with FOLIO_INSTALL_DIR=<folder>."
    chmod +x "$TEMP_DIR/folio"
    mv "$TEMP_DIR/folio" "$dir/folio"
    echo "Installed $dir/folio"
    echo ""

    # `folio version` also checks pass, gpg, git and tree, and lists any that are missing.
    if ! "$dir/folio" version; then
        echo "Install those, e.g.  sudo apt install pass gnupg git tree   (Debian / Ubuntu)"
        echo "                     brew install pass gnupg tree           (macOS)"
    fi

    case ":$PATH:" in
        *":$dir:"*) ;;
        *)  echo ""
            echo "$dir is not on your PATH. Add this line to your shell's rc file (~/.zshrc, ~/.bashrc):"
            echo "  export PATH=\"$dir:\$PATH\""
            ;;
    esac

    echo ""
    echo "For Tab completion, add  eval \"\$(folio completion bash)\"  to ~/.bashrc,"
    echo "                     or  eval \"\$(folio completion zsh)\"   to ~/.zshrc."
    echo "Start with: folio init"
}

# Last, so a download cut short runs nothing.
install-folio

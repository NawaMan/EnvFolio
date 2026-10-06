#!/usr/bin/env bash
# bash32: build bash 3.2.57 — the bash macOS still ships — so Keep's tests can run under it.
#
# Installed to /opt/bash-3.2/bin, which is NOT on PATH: the booth's own bash stays the default.
# `just test-bash32` puts it first on PATH for the test run only.
#
# Note: bash 3.2's Makefile ignores --program-suffix and installs plain `bash`, so it must never
# go into a folder on PATH (e.g. /usr/local), or it would replace the booth's bash.

set -Eeuo pipefail
trap 'echo "❌ Error on line $LINENO"; exit 1' ERR

[ "$EUID" -eq 0 ] || { echo "❌ Run as root (use sudo)"; exit 1; }

VERSION=3.2.57
SHA256=3fa9daf85ebf35068f090ce51283ddeeb3c75eb5bc70b1a4a7cb05868bfe06a4
PREFIX=/opt/bash-3.2

apt-get update
apt-get install -y --no-install-recommends build-essential bison libncurses-dev curl ca-certificates

BUILD=$(mktemp -d)
trap 'rm -rf -- "$BUILD"' EXIT
cd "$BUILD"

curl -fsSLo bash.tar.gz "https://ftp.gnu.org/gnu/bash/bash-${VERSION}.tar.gz"
echo "${SHA256}  bash.tar.gz" | sha256sum -c -
tar xf bash.tar.gz
cd "bash-${VERSION}"

./configure --prefix="$PREFIX" --without-bash-malloc
make -j"$(nproc)"
make install

# shellcheck disable=SC2016  # $BASH_VERSION is for the new bash to expand, not this one
"$PREFIX/bin/bash" -c '[[ $BASH_VERSION == 3.2.* ]]'
echo "✅ bash ${VERSION} installed: ${PREFIX}/bin/bash (not on PATH)"

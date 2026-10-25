#!/usr/bin/env bash
# gnupg: the gpg the booth uses — `none` keeps Ubuntu's own (2.4), `2.5.24` builds that one, which
# can make and open post-quantum keys (ML-KEM), so tests/gpg/gpg-pqc-real.bats runs here.
#
# Usage: gnupg--setup.sh <none|2.5.24>
#
# gpg 2.5 needs newer libraries than Ubuntu 24.04 ships (libgcrypt 1.11+ for Kyber, libassuan 3),
# so they are built too, all into /opt/gnupg-<version>, found there by rpath — the system's own
# libraries stay as they are. Its programs are linked into /usr/local/bin, ahead of /usr/bin on
# PATH, so pass, folio and the tests all get it. Ubuntu's gpg stays in /usr/bin. Upstream fixes a
# release lacks (as Homebrew applies them) are patched in, so the booth's gpg is the one users get.

set -Eeuo pipefail
trap 'echo "❌ Error on line $LINENO"; exit 1' ERR

[ "$EUID" -eq 0 ] || { echo "❌ Run as root (use sudo)"; exit 1; }

VERSION=${1:-none}
if [ "$VERSION" = none ]; then
    echo "✅ gnupg: none — the booth keeps Ubuntu's gpg."
    exit 0
fi

# Each tarball's SHA-256, taken when its signature had checked out against the GnuPG release keys
# (https://gnupg.org/signature_key.asc). The checksum, not the mirror, is what makes it trusted.
case $VERSION in
    2.5.24)
        PACKAGES=(
            "libgpg-error 1.61   7a85413f2bc354f4f8aa832b718af122e48965e9e0eb9012ee659c13c6385c93"
            "libgcrypt    1.12.4 d77f68f48879510e79a2f65977ccc68981781ea0923e5bdffac2a193ea3d660e"
            "libassuan    3.0.2  d2931cdad266e633510f9970e1a2f346055e351bb19f9b78912475b8074c36f6"
            "libksba      1.8.1  c2f84393011827219ae117131dba8e7684c2bed0961eed11b0642c2acba440b5"
            "npth         1.8    8bd24b4f23a3065d6e5b26e98aba9ce783ea4fd781069c1b35d149694e90ca3e"
            "gnupg        2.5.24 bf149d01a2b9fcc0e4589b8ae8697d3d5c557ea48ed95a3fa55dd3b1187e6039"
        )
        # Upstream fixes for https://dev.gnupg.org/T8469 (2.5.23, 2.5.24: a secret key imported
        # without a passphrase cannot decrypt — every .folio export's key), as Homebrew's 2.5.24_1
        # has them. Each SHA-256 matches the one in Homebrew's formula.
        GNUPG_PATCHES=(
            "42386bcf8861f04c1bdec5cbb139a03da83d8ef9 93817449be3f93dcade3d79960e33e72959f54f95ff6108f22176bef28111f2b"
            "5523cec6913bcbd1a374d183899a6f298d2c0e32 0a0acd2f7f25723f3f84ec5c4ecf03b786d73ca61c48487d4d00c0559be89d66"
        ) ;;
    *)  echo "❌ gnupg $VERSION is not known here: pick none or 2.5.24 (or add it to $0)."; exit 1 ;;
esac
PREFIX=/opt/gnupg-$VERSION

apt-get update
apt-get install -y --no-install-recommends build-essential bzip2 curl ca-certificates \
    libbz2-dev zlib1g-dev libreadline-dev libsqlite3-dev pinentry-curses

BUILD=$(mktemp -d)
trap 'rm -rf -- "$BUILD"' EXIT
cd "$BUILD"

BOOTH_PATH=$PATH
export PATH=$PREFIX/bin:$PATH
export LDFLAGS="-Wl,-rpath,$PREFIX/lib"
for entry in "${PACKAGES[@]}"; do
    read -r name version sha256 <<< "$entry"
    file=$name-$version.tar.bz2
    for MIRROR in https://gnupg.org/ftp/gcrypt https://www.gnupg.org/ftp/gcrypt https://mirrors.dotsrc.org/gcrypt; do
        curl -fsSL --connect-timeout 15 --max-time 600 -o "$file" "$MIRROR/$name/$file" && break
        echo "⚠ $MIRROR failed; trying the next mirror."
        rm -f "$file"
    done
    [ -f "$file" ] || { echo "❌ No mirror had $file"; exit 1; }
    echo "$sha256  $file" | sha256sum -c -
    tar xjf "$file"
    if [ "$name" = gnupg ]; then
        for patch in "${GNUPG_PATCHES[@]}"; do
            read -r commit sha256 <<< "$patch"
            curl -fsSL --connect-timeout 15 --max-time 120 -o "$commit.patch" \
                "https://github.com/gpg/gnupg/commit/$commit.patch?full_index=1"
            echo "$sha256  $commit.patch" | sha256sum -c -
            patch -d "$name-$version" -p1 < "$commit.patch"
        done
    fi

    options=(--prefix="$PREFIX" --disable-doc)
    case $name in
        libgpg-error) options+=(--disable-nls --disable-tests) ;;
        libgcrypt)    options+=(--with-libgpg-error-prefix="$PREFIX") ;;
        libassuan|libksba)
                      options+=(--with-libgpg-error-prefix="$PREFIX") ;;
        gnupg)        options+=(--with-libgpg-error-prefix="$PREFIX" --with-libgcrypt-prefix="$PREFIX"
                                --with-libassuan-prefix="$PREFIX" --with-ksba-prefix="$PREFIX"
                                --with-npth-prefix="$PREFIX" --with-pinentry-pgm=/usr/bin/pinentry
                                --disable-nls --disable-ldap --disable-gnutls --disable-ccid-driver
                                --disable-wks-tools) ;;
    esac
    (cd "$name-$version" && ./configure "${options[@]}" && make -j"$(nproc)" && make install)
done

for program in "$PREFIX"/bin/*; do
    case ${program##*/} in
        gpg|gpgv|gpg-agent|gpgconf|gpg-connect-agent|gpgsm|dirmngr|dirmngr-client|gpgtar|gpgsplit|gpg-card|keyboxd)
            ln -sf "$program" "/usr/local/bin/${program##*/}" ;;
    esac
done

# The gpg found first on the booth's PATH is this one, and it can make a post-quantum key.
export PATH=$BOOTH_PATH
hash -r
[ "$(command -v gpg)" = /usr/local/bin/gpg ]
gpg --version | head -n 1 | grep -qF " $VERSION"
gpg --with-colons --list-config pubkeyname | grep -q Kyber
# …and decrypts with a secret key it imported without a passphrase (T8469).
CHECK=$(mktemp -d)
mkdir -m 700 "$CHECK/a" "$CHECK/b"
GNUPGHOME=$CHECK/a gpg --batch --quiet --passphrase '' \
    --quick-generate-key "Check <check@example.com>" default default never 2>/dev/null
GNUPGHOME=$CHECK/a gpg --batch --armor --export-secret-keys | GNUPGHOME=$CHECK/b gpg --batch --quiet --import 2>/dev/null
echo ok | GNUPGHOME=$CHECK/b gpg --batch --trust-model always -e -r check@example.com \
    | GNUPGHOME=$CHECK/b gpg --batch --quiet -d | grep -qx ok
GNUPGHOME=$CHECK/a gpgconf --kill all ; GNUPGHOME=$CHECK/b gpgconf --kill all
rm -rf "$CHECK"
echo "✅ gnupg $VERSION installed: $PREFIX, linked into /usr/local/bin (Ubuntu's gpg stays in /usr/bin)"

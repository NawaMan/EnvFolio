#!/usr/bin/env bash
# basic-store.sh: fill an existing EnvFolio store with the sample items the --use tests use
# (tests/exec/exec-use.bats), plus @app1 — one namespace deep — to try exec/shell/export by hand:
#
#   server/port                         22
#   gh/user                             other
#   @app1/server/user                   app1
#   @app1/server/db                     db.app1
#   @app1/server/password          (S)  a1-secret
#   @app2/@prod/server/user             deploy
#   @app2/@prod/server/db               db.prod
#   @app2/@prod/server/password    (S)  p-secret
#   @app2/@staging/server/user          stg
#   @app2/@staging/server/db            db.stg
#   @app2/@staging/server/port          2222
#   @app2/@staging/server/password (S)  s-secret
#
# The store must exist already (folio init). It is the one folio uses: FOLIO_STORE_DIR, default
# ~/.folio. An item already there under one of these names is overwritten. The values are made-up
# samples, not secrets. It runs this checkout's folio (the one beside test-helpers/); set FOLIO to
# run another, e.g. FOLIO=folio test-helpers/basic-store.sh for the one on PATH.

set -euo pipefail

FOLIO=${FOLIO:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/folio}

# Signing a text needs the store key's passphrase. Each insert runs with stdin from /dev/null, so
# tell gpg's pinentry which terminal to ask on (gpg-agent then keeps it for the rest).
if [[ -z ${GPG_TTY:-} ]] && tty -s; then
    GPG_TTY=$(tty)
    export GPG_TTY
fi

text()   { "$FOLIO" text insert -f -t "$2" "$1" < /dev/null ; }
secret() { printf '%s\n' "$2" | "$FOLIO" secret insert -f -m "$1" > /dev/null ; }

text   server/port                    22
text   gh/user                        other
text   @app1/server/user              app1
text   @app1/server/db                db.app1
secret @app1/server/password          a1-secret
text   @app2/@prod/server/user        deploy
text   @app2/@prod/server/db          db.prod
secret @app2/@prod/server/password    p-secret
text   @app2/@staging/server/user     stg
text   @app2/@staging/server/db       db.stg
text   @app2/@staging/server/port     2222
secret @app2/@staging/server/password s-secret

"$FOLIO" ls

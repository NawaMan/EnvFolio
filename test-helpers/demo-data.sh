#!/usr/bin/env bash
# demo-data.sh: fill an existing EnvFolio store with demo items for test-helpers/demo.vars — two
# environments of @first-app, and @second-app with items of its own — to try exec/shell/export by
# hand:
#
#   @first-app/@prod/gh/token          (S)  demo-gh-prod
#   @first-app/@prod/db/user                app_prod
#   @first-app/@prod/db/pass           (S)  demo-db-prod
#   @first-app/@prod/db/host                db.prod.example
#   @first-app/@staging/gh/token       (S)  demo-gh-staging
#   @first-app/@staging/db/user             app_stg
#   @first-app/@staging/db/pass        (S)  demo-db-stg
#   @first-app/@staging/db/host             db.staging.example
#   @second-app/api/key                (S)  demo-api-key
#   @second-app/smtp/host                   smtp.example
#   @second-app/smtp/user                   mailer
#   @second-app/smtp/pass              (S)  demo-smtp-pass
#   @second-app/region                      ca-central
#
# Then, e.g.:
#
#   folio exec --secrets --use @first-app/@staging --vars test-helpers/demo.vars -- env
#
# The store must exist already (folio init). It is the one folio uses: FOLIO_STORE_DIR, default
# ~/.folio. An item already there under one of these names is overwritten. The values are made-up
# samples, not secrets. It runs this checkout's folio (the one beside test-helpers/); set FOLIO to
# run another, e.g. FOLIO=folio test-helpers/demo-data.sh for the one on PATH.

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

secret @first-app/@prod/gh/token    demo-gh-prod
text   @first-app/@prod/db/user     app_prod
secret @first-app/@prod/db/pass     demo-db-prod
text   @first-app/@prod/db/host     db.prod.example
secret @first-app/@staging/gh/token demo-gh-staging
text   @first-app/@staging/db/user  app_stg
secret @first-app/@staging/db/pass  demo-db-stg
text   @first-app/@staging/db/host  db.staging.example
secret @second-app/api/key          demo-api-key
text   @second-app/smtp/host        smtp.example
text   @second-app/smtp/user        mailer
secret @second-app/smtp/pass        demo-smtp-pass
text   @second-app/region           ca-central

"$FOLIO" ls

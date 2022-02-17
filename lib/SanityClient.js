import sanityClient from '@sanity/client'
// const sanityClient = require('@sanity/client')
export const client=sanityClient({
     projectId:'qgglyp2w',
     dataset:'production',
     apiVersion:'2021-03-25',
     token:'sk3ZMBnvUsL3kJ7yIugXmAEBgxhdpT00SZXmKAlIJc7qLv21MTx9f161x3wRn3p4gObjHCEaqrxa1G7vtqLVVA5GYd5EJivDCXmeQCT6KGqc1yFUKhOiyqhH2oXBHepDQpyLReiGSrD3BEQcOzDYpECqNwsjzUzzl3Xt6Z5eC8HLF7TxCYgn',
     useCdn: false,

}); 
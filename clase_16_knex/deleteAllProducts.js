const { options } = require("./db/mysql");
const knex = require("knex")(options);

knex.from('products')
    .del()
    .then(products => {
        console.log(`Productos eliminados: ${products}`)
    })
    .catch(err =>console.error(`Error: ${err.message}`))
    .finally(() => knex.destroy())



//Para correrlo
//DEBUG=knex:query node deleteAllProducts.js    
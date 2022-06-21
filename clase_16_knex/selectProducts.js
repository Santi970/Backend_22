const { options } = require("./db/mysql")
const knex = require("knex")(options)

knex.from('products').select('*')
    .then(products => {
        console.log(products)
        console.log(`Total de productos: ${products.length}`)
        products.forEach(product => console.log(`Producto: ${product.name}. Pecio: ${product.price}. Stock: ${product.stock}`))
    })
    .catch((err) => console.log(`Error: ${err.message}`))
    .finally(() => knex.destroy())

    //Para correrlo
//DEBUG=knex:query node selectProducts.js    
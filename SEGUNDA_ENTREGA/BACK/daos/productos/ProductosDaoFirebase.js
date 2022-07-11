const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

//super hace referencia  a la clase padre
class ProductosDAOFirebase extends ContenedorFirebase {
    constructor () {
        super('./productos.json')
    }
}

module.exports = ProductosDAOFirebase;
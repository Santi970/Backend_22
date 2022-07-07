const ContenedorMemoria = require("../../contenedores/ContenedorMemoria");
const options = require("../../db/mysql")

//super hace referencia  a la clase padre
class ProductosDAOMemoria extends ContenedorMemoria {
    constructor () {
        super('./productos.json')
    }
}

module.exports = ProductosDAOMemoria;
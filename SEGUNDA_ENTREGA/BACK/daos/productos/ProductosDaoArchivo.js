const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

//super hace referencia  a la clase padre
class ProductosDAOArchivo extends ContenedorArchivo {
    constructor () {
        super('./products.json')
    }
}

module.exports = ProductosDAOArchivo;
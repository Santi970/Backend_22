const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

//super hace referencia  a la clase padre
class UsusariosDAOArchivo extends ContenedorArchivo {
    constructor () {
        super('./products.json')
    }
}

module.exports = UsusariosDAOArchivo;
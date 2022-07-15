const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

//super hace referencia  a la clase padre
class CarritosDAOArchivo extends ContenedorArchivo {
    constructor () {
        super('./carritos.json')
    }
}

module.exports = CarritosDAOArchivo;
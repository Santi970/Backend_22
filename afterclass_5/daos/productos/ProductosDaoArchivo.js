const ContenedorArchivo = require("../../contenedores/ContenedorArchivo");

//super hace referencia  a la clase padre
class ProductosDAOArchivo extends ContenedorArchivo {
    constructor () {
        super('./products.json') //hace referencia al constructor de la clase padre -> (.products.json) seria el name que recibe por parametro ContenedorArchivo.js
    }
}

module.exports = ProductosDAOArchivo;
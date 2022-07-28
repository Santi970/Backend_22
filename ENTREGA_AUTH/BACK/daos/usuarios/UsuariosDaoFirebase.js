const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

//super hace referencia  a la clase padre
class UsuariosDAOFirebase extends ContenedorFirebase {
    constructor () {
        super('./productos.json')
    }
}

module.exports = UsuariosDAOFirebase;
const ContenedorMySQL= require("../../contenedores/ContenedorMySQL");

//super hace referencia  a la clase padre
class UsuariosDAOMySQL extends ContenedorMySQL {
    constructor () {
        super('./carritos.json')
    }
}

module.exports = UsuariosDAOMySQL;
const ContenedorMySQL= require("../../contenedores/ContenedorMySQL");

//super hace referencia  a la clase padre
class CarritosDAOMySQL extends ContenedorMySQL {
    constructor () {
        super('./carritos.json')
    }
}

module.exports = CarritosDAOMySQL;
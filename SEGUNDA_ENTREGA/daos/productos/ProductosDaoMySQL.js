const ContenedorMySQL = require("../../contenedores/ContenedorMySQL");
const options = require("../../db/mysql")
//super hace referencia  a la clase padre
class ProductosDAOMySQL extends ContenedorMySQL {
  constructor() {
    super(options, "products"); //esta es la tabla products 
  }
}

module.exports = ProductosDAOMySQL;

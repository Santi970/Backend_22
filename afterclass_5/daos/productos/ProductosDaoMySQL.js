const ContenedorMySQL = require("../../contenedores/ContenedorMySQL");

//super hace referencia  a la clase padre
class ProductosDAOMySQL extends ContenedorMySQL {
  constructor() {
    super(options, "products");
  }
}

module.exports = ProductosDAOMySQL;

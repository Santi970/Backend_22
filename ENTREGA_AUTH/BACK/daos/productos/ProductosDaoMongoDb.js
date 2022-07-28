const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDb");

//super hace referencia  a la clase padre
class ProductosDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super("carritos");
  }
}

module.exports = ProductosDAOMongoDB;

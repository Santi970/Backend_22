const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDb");

//super hace referencia  a la clase padre
class CarritosDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(options, "carritos");
  }
}

module.exports = CarritosDAOMongoDB;

const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDb");

//super hace referencia  a la clase padre
class UsuariosDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super( "carritos");
  }
}

module.exports = UsuariosDAOMongoDB;

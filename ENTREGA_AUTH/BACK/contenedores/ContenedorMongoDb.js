const db = require("../db/mongo");
// const productsModel = require('../schemas/products')

class ContenedorMongoDb {
  constructor(data) {
    this.db;
    this.data = data
  }
  
  findAll() {
    console.log('FIND --- ALL')
    return db
      .then((_) => this.data.find({}))
      .then((users) => console.log(users))
      .catch((err) => console.log(`Error: ${err.message}`))
      .finally(() => process.exit());
  }

  find(id) {}

  create(data) {
    console.log('CONTENEDOR MONGO  --- CREATE')
    return db
      .then((_) => this.data.save())
      .then((document) => console.log("User saved", document))
      .catch((err) => console.log(`Error: ${err.message}`))
      .finally(() => process.exit());
  }

  update(id, data) {}

  delete(id) {}
}

module.exports = ContenedorMongoDb;

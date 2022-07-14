const db = require("../db/mongo");

class ContenedorMongoDb {
  constructor(data) {
    this.db;
  }
  findAll() {
    return db
      .then((_) => data.find({}))
      .then((users) => console.log(users))
      .catch((err) => console.log(`Error: ${err.message}`))
      .finally(() => process.exit());
  }

  find(id) {}

  create(data) {
    return db
      .then((_) => data.save())
      .then((document) => console.log("User saved", document))
      .catch((err) => console.log(`Error: ${err.message}`))
      .finally(() => process.exit());
  }

  update(id, data) {}

  delete(id) {}
}

module.exports = ContenedorMongoDb;

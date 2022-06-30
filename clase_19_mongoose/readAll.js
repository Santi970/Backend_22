//coneccion a la BD
const db = require("./db");
const userModel = require("./models/user");

db.then((_) => userModel.find({}))
  .then(users => console.log(users))
  .catch((err) => console(`Error: ${err.message}`))
  .finally(() => process.exit());

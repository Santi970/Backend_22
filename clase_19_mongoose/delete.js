const db = require("./db");
const userModel = require("./models/user");

db
    .then(_ => userModel.deleteOne({name: 'santi'})) //obtenemos el documento que queremos actualizar
    .then(user => console.log(user))   
    .catch((err) => console(`Error: ${err.message}`))
    .finally(() => process.exit());
  
//coneccion a la BD
const db = require("./db");
const userModel = require("./models/user");

const data = {
  name: "santi",
  lastname: "cendra",
  email: "santi@gmail.com",
  username: "moky",
  password: "12345678",
};

//creamos instancia del modelo
const user = new userModel(data);

db.then((_) => user.save())
  .then((document) => console.log("User saved", document))
  .catch((err) => console(`Error: ${err.message}`))
  .finally(() => process.exit());

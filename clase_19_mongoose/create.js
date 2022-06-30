//coneccion a la BD
const db = require("./db");
const userModel = require("./models/user");

const data = {
  name: "santi",
  lastname: "Perez",
  email: "juan@gmail.com",
  username: "juancho",
  password: "12345678",
};

const user = new userModel(data);

db.then((_) => user.save())
  .then((document) => console.log("User saved", document))
  .catch((err) => console(`Error: ${err.message}`))
  .finally(() => process.exit());

const db = require("./db");
const userModel = require("./models/user");

db
    .then(_ => userModel.findOne({username: 'juancho'})) //obtenemos el documento que queremos actualizar
    .then(user => {
        console.log(user)
        return user.remove();
    })   
    .then(console.log)
    .catch((err) => console(`Error: ${err.message}`))
    .finally(() => process.exit());
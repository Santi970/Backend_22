const db = require("./db");
const userModel = require("./models/user");

db
    .then(_ => userModel.findOne({name: 'santi'})) //obtenemos el documento que queremos actualizar
    .then(user => { 
        console.log(user)
        user.password = 'contraseña 2' // una vez que lo tenemos lo modificamos
        return user.save() //lo gurardamos
    })
    .then(user => console.log(user))   
    .catch((err) => console(`Error: ${err.message}`))
    .finally(() => process.exit());
  
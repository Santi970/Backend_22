const db = require("./db");
const userModel = require("./models/user");

db.
    then(_ => userModel.updateOne({
        name: 'santi'
    }, {
        $set: {
            password: 'nuevo password'
        }
    }))
    .then(result => console.log(result))
    .catch((err) => console(`Error: ${err.message}`))
    .finally(() => process.exit());
  
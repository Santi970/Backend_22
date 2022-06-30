const mongoose = require("mongoose");

//Para conectar a la BD de mongoDB
const URL = "mongodb://127.0.0.1:27017/clase19";

const connection = mongoose.connect(URL, {
     useNewUrlParser: true 
    })

module.exports = connection;
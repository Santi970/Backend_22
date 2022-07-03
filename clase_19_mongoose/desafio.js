

const mongoose = require("mongoose");

//definimos la url a donde nos conectamos, en este caso una BD llamada colegio. 
const URL = "mongodb://127.0.0.1:27017/clase19"; //antes en db colegio

//Definimos nuestro schema
const estudiantesSchema = mongoose.Schema({
  nombre: { type: String, require: true},
  apellido: { type: String, require: true},
  edad: { type: Number, require: true },
  dni: { type: String, require: true, unique: true},
  curso: { type: String, require: true },
  nota: { type: Number, require: true}
});
//Creamos nuestro modelo
const estudianteModel = mongoose.model('Estudiante', estudiantesSchema)

//data a guardar
const estudiantes = [
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4},
    {nombre: "juan",apellido: "asdf",edad:23, dni: "34243248", curso: '5A', nota: 4}
]

//una vez que se conecta mandamos nuestros estudiantes. 
const connection = mongoose.connect(URL, {
  useNewUrlParser: true,
})
.then((_) => estudianteModel.insertMany(estudiantes))
.then(e => console.log(e))
.catch((err) => console(`Error: ${err.message}`))
.finally(() => process.exit());


module.exports = connection;

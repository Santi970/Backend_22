const  {Schema , model} = require('mongoose')

const estudiantesSchema = new Schema({
    nombre: { type: String, require: true},
    apellido: { type: String, require: true},
    edad: { type: Number, require: true },
    dni: { type: String, require: true, unique: true},
    curso: { type: String, require: true },
    nota: { type: Number, require: true}
  });

module.exports =  model('Estudiante', estudiantesSchema);
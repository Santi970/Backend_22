import  mongoose from 'mongoose';

const usearioSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100, unique: true},
    apellido: {type: String, require: true, max: 100},
    dni: {type: Number, require: true},
});


export default mongoose.model('Usuario', usearioSchema);
   
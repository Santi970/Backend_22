import  mongoose from 'mongoose';

const URL = "mongodb+srv://santicendra:Nuevacontra1987@cluster0.lavna26.mongodb.net/ecommerce?retryWrites=true&w=majority"

const connection = mongoose.connect(URL, {
    useNewUrlParser: true 
   }).then(_ => console.log('Aplicación conectada a MongoDB Atlas'))
   
export default connection

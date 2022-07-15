import mongoose from 'mongoose'

const URL = '	mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
}).then(_ => console.log('Aplicación conectada a MongoDB Atlas'))

export default connection
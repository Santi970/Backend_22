const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
  title: { type: String, required: true, max: 100, unique: true },
  price: { type: Number, required: true, max: 100 },
  thumbnail: { type: String, required: true, max: 300 },
  available_quantity: { type: Number, required: true, max: 100 },
  category: { type: String, required: true, max: 100 },
  condition: { type: String, required: true, max: 100 }
})

module.exports = model('Products', productsSchema)
const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
  price: { type: Number, max: 100 },
  time : { type : Date, default: Date.now },
  productos: { type: Object},
})

module.exports = model('Cart', cartSchema)
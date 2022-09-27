const mongoose = require('mongoose')

const User = mongoose.model('User', mongoose.Schema({
  email: String,
  password: String

}))

module.exports = User
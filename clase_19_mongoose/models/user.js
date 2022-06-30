const  {Schema , model} = require('mongoose')

const userSchema = new Schema({
    name: {type: String, require: true, max: 100},
    lastname: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    username: {type: String, require: true, max: 100},
    password: {type: String, require: true, max: 100}
});


module.exports =  model('User', userSchema);

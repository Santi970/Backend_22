const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://santicendra:contraseña@cluster0.lavna26.mongodb.net/clase24_sessions?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in: cluster0.vchky.mongodb.net');
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err);
});

module.exports = connection;
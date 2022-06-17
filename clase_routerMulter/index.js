const express = require('express');
const {Router} = express;
const mascotasRouter = require('./routes/mascotas.routes');
const personasRouter = require('./routes/personas.routes');

const app  = express();

//MIDDLEWARE DE RUTA
const middlewareRoot = (req, res, next) => {
    console.log('Request recibido en ruta raiz')
    return next()
}

//MIDDELWARE DE APLICACION hacemos que todas las rutas tengan el Date.now. 
app.use((req, res, next) => {
    console.log('Time', Date.now());
    return next();
});

//Obligamos a qeu suceda el error
app.get('/', middlewareRoot , (req, res) => {
    throw new Error('Error')
    return res .json({status: 'ok'})
})

app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(express.static(__dirname + '/public'));

app.use('/mascotas', mascotasRouter);
app.use('/personas', personasRouter);

//MIDDLEWARE de error
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({
        error: 'Error en el servidor papá'
    })
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});

server.on('error', err => console.error(`Error en el servidor: ${err.message}`));

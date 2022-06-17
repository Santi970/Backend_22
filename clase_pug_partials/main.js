//ESTE ES EL SERVIDOR
const express = require("express");
const morgan = require("morgan");
const app = express();

app.set('views', './views')
app.set('view engine', 'pug');

app.use(morgan("dev")); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('', (req, res) => res.json({ status: 'ok'}))

app.get('/hello', (req, res) => {
    const data = { 
        mensaje: 'Pug Js desde el endpoint'
    }
    return res.render('hello', data )
});

const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Error en el servidor ${error}`));

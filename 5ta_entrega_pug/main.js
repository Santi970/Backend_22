//ESTE ES EL SERVIDOR
const express = require("express");
const morgan = require("morgan");
const app = express();

app.set('views', './views')
app.set('view engine', 'pug');

app.use(morgan("dev")); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//tomar la longitud del arreglo , va a dar cero. Y ahi darle el id.
let productos = [];

//Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index', {productos})
});

app.get('/productos', (req, res) => {
  res.render('productos', {productos})
})

app.post('/productos', (req,res) => {
  productos.push(req.body) 
  console.log(productos)
  res.redirect('/') //ATENTO A ESTO!
})


const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Error en el servidor ${error}`));

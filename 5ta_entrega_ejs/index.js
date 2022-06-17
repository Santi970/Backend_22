const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); //Para entender los datos que vienen desde un formulario
app.use(express.json()); //De esta forma le decimos que soporte la request cuando le paso el objeto y lo parsea.

app.set("views", "./views/pages"); //Especifica la carpeta de plantillas
app.set("view engine", "ejs"); //Especifica el motor de plantillas


//tomar la longitud del arreglo , va a dar cero. Y ahi darle el id.
let productos = [];

//Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('inicio', {productos})
});

app.get('/productos', (req, res) => {
    res.render('productos', {productos})
})


app.post('/productos', (req,res) => {
    productos.push(req.body) 
    console.log(productos)
    res.redirect('/') //ATENTO A ESTO!
})


const PORT = 5300;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on(`error`, error => console.log(`Error en el servidor ${error}`))

const express = require('express');

const app = express();

app.set("view engine", "pug"); //Especifica el motor de plantillas
app.set("views", "./views"); //Especifica la carpeta de plantillas


app.get('/datos', (req, res) => {
    res.render('nivel', req.query)
})

const PORT = 5500;

app.listen(PORT, () => {
    console.log("Nuestro server esta en el puert " + PORT)
})
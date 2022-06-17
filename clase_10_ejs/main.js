const express = require('express');

const app = express();

app.set("view engine", "ejs"); //Especifica el motor de plantillas
app.set("views", "./views"); //Especifica la carpeta de plantillas


app.get('/message', (req, res) => {
    const data = {
        message: {
            name: "Santiago EJS"
        }
    }

    return res.render('message', data)
});

const PORT = 5500;

app.listen(PORT, () => {
    console.log("Nuestro server esta en el puert " + PORT)
})
const express = require('express')

const app  = express();

app.use(express.json());
app.use(express.urlencoded({extend: true}));

const mensajes = [
    { 
    id: 1,    
    title: "ok",
    message: ""
    },
    {
    id: 2,    
    title: "o",
    message: ""
    }
];

app.get('/api/mensajes/:id', (req, res) => {
    console.log("Request Recibido", req.query)

    const id = Number(req.params.id)  //OJO IMPORTANTE!! 
    const message = mensajes.find(message => message.id === id)
    if(!message) {
        return res.status(404).json({message: "FUERA DE RANGO"})  //RESPUESTA CON MENSAJE Y CODIGO
    }
    return res.json(message)
});

//----------------------------- EJERCICIO 1 -----------------------------------//

const frase = "Hola mundo cómo están?"

app.get('/api/frase', (req, res) => {
    return res.json({frase})
});

app.get('api/letras/:num', (req, res) => {

    const {num} = req.params
    if(isNaN(num)) {
        return res.status(400).json({error: "El parámetro no es un número"})
    }
    const letra = frase[num - 1]
    
    if(!letra){
        return res.status(400).json({error: "El parámetro está fuera de rango"})
    }
    
    return res.json({letra})
});

app.get('/api/palabras/:num', (req, res) => {
    
    const {num} = req.params
    let arrayPalabras = frase.split(' ')
    if(isNaN(Number(num))) {
        return res.json({err: "El parametro no es un número"});
    }else if(Number(num)>=frase.length){
        return res.json({err: "El parametro esta fuera de rango"});
    }else{
        let palabra = arrayPalabras[Number(num) -1];
        return res.json({palabra});
    }
});


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
});

server.on('error', err => console.error(`Error en el servidor: ${err.message}`));

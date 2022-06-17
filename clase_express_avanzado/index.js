const express = require('express')

const app  = express();

app.use(express.json());
app.use(express.urlencoded({extend: true})); //esto precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo strings. 

let mensajes = [
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

app.get('/api/mensajes', (req, res) => {
    return res.json(mensajes)
});

app.get('/api/mensajes/:id', (req, res) => {

    const id = Number(req.params.id)  //OJO IMPORTANTE!! 
    const message = mensajes.find(message => message.id === id)
    if(!message) {
        return res.status(404).json({message: "FUERA DE RANGO"})  //RESPUESTA CON MENSAJE Y CODIGO
    }
    return res.json(message)
});

app.post('/api/mensajes', function (req, res) {
    
    const newMessage = req.body

    newMessage.id = mensajes.length + 1

    mensajes.push(newMessage)

    return res.status(201).json({newMessage})
});

app.put('/api/mensajes/:id', (req, res) => {

    const id = Number(req.params.id)  //OJO IMPORTANTE!! 
    const messageIndex = mensajes.findIndex(message => message.id === id)
    if(messageIndex == -1) {
        return res.status(404).json({message: "FUERA DE RANGO"})  //RESPUESTA CON MENSAJE Y CODIGO
    }

    const body  = req.body

    mensajes[messageIndex].title = body.title,
    mensajes[messageIndex].message = body.message

    return res.json(mensajes[messageIndex])
});


app.delete('/api/mensajes/:id', (req, res) => {

    const id = Number(req.params.id)  //OJO IMPORTANTE!! 
    const messageIndex = mensajes.findIndex(message => message.id === id)
    if(messageIndex == -1) {
        return res.status(404).json({message: "FUERA DE RANGO"})  //RESPUESTA CON MENSAJE Y CODIGO
    }

    mensajes = mensajes.filter((message) => message.id !== messageIndex);

    return res.status(204).json({})
});


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
});

server.on('error', err => console.error(`Error en el servidor: ${err.message}`));

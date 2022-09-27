//ESTE ES EL SERVIDOR
const express = require("express");
//lo podemos renombrar..
const { Server: webSocketServer } = require("socket.io");
const { Server: http } = require("http");
const { v4: uuid } = require("uuid");

let notes = [];
let users = []
const messages = []

const app = express(); //Configurar app de express
const server = new http(app); //crea modulo http, al modulo de doy la config de expres q es http
const io = new webSocketServer(server); //le paso el servidor al socket.

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"));
app.set('views', '../src/public/views')
app.set('view engine', 'ejs')

io.on("connection", (socket) => {
  console.log("Nueva conexion: ", socket.id); //para obtener el id del cliente

  socket.emit("server:loadnotes", notes); //para renderizar el array de notas cuando se conecta

  socket.on("client:newnote", (newNote) => {
    const note = { ...newNote, id: uuid() }; //Le ponemos id
    notes.push(note);
    console.log(note);
    io.emit("server:newnote", note); //enviamos la nota que guardamos
  });

  socket.on("client:deletenote", (noteId) => {
    notes = notes.filter((note) => note.id !== noteId);
    io.emit("server:loadnotes", notes); //para volver a pintar todo
  });

  socket.on("client:getnote", (noteId) => {
    //VERIFICAR
    const note = notes.find((note) => note.id === noteId);
    socket.emit("server:selectednote", note);
  }); //este socket

  socket.on("client:updatenote", (updateNote) => {
    console.log("Este", updateNote);
    notes = notes.map((note) => {
      if (note.id === updateNote.id) {
        (note.title = updateNote.title),
          (note.description = updateNote.description),
          (note.codigo = updateNote.codigo),
          (note.foto = updateNote.foto),
          (note.precio = updateNote.precio),
          (note.stock = updateNote.stock);
      }
      return note;
    });
    io.emit("server:loadnotes", notes);
  });
});

// Rutas de login
app.get('/login', (req, res) => res.render('login'))

app.post('/login', (req, res) => {
  const { username } = req.body

  return res.redirect(`/chat?username=${username}`)
})

// Rutas de chat 
app.get('/chat', (req, res) => res.render('chat'))


// Evento de conexión de cliente

io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  // joinChat event
  socket.on('joinChat', ({ username }) => {
    /**
     * Agregamos al usuario que se unio al chat a nuestroa arreglo de usuario
     * Damos la bienvenida al usuario (socket.emit)
     * Notificamos al resto de usuarios que un usuario se conecto (socket.broadcast.emit)
     * Enviamos a todos la lista de usuarios actualizada
     */
    users.push({
      id: socket.id,
      username,
      avatarId: Math.ceil(Math.random() * 6)
    })

    socket.emit('notification', `Bienvenido ${username}`)
    socket.broadcast.emit('notification', `${username} se ha unido al chat`)
    io.sockets.emit('users', users)
  })

  // Handle cuando se recibe un mensaje desde el cliente

  socket.on('messageInput', data => {
    /**
     *  Armamos el objeto de mensaje para enviarselo tanto al cliente que escribio el mensaje como al resto de clientes
     * 
     */
    const now = new Date()
    const user = users.find(user => user.id === socket.id)
    const message = {
      text: data,
      time: `${now.getHours()}:${now.getMinutes()}`,
      user
    }
    messages.push(message)

    socket.emit('myMessage', message)

    socket.broadcast.emit('message', message)
  })

  // Handle cuando un cliente se desconecta
  socket.on('disconnect', reason => {
    /**
     * Buscamos el usuario antes de eliminarlo del arreglo de usuario y enviamos la lista actualizada de usuarios
     */
    const user = users.find(user => user.id === socket.id)
    users = users.filter(user => user.id !== socket.id)
    if (user) {
      socket.broadcast.emit('notification', `${user.username} se ha ido del chat`)
    }
    
    io.sockets.emit('users', users)

  })
})


server.listen(4600); 
console.log("listening on port 4600");

//Con socket.emit solo lo dejamos modificar a un cliente
//Con io.emit a todos los clientes

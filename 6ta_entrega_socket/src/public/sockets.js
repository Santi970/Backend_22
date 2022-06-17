//Este archivo guarda las conexiones de webSocket

const socket = io();

/** JS DOC --> AYUDA A DOCUMENTAR
 * Esto guarda una nueva nota
 * @param {string} title  //note title
 * @param {string} description  //note description
 * @param {string} codigo  //note title
 * @param {string} foto //note description
 * @param {string} precio  //note title
 * @param {string} stock  //note title
 */


const saveNote = (title, description, codigo, foto, precio, stock) => {
  //para guardar una nueva nota
  socket.emit("client:newnote", {
    title: title,
    description: description,
    codigo: codigo,
    foto: foto,
    precio: precio,
    stock: stock,
  });
};

const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

const getNote = (id) => {
  socket.emit("client:getnote", id);
};

const updateNote = (id, title, description, codigo, foto, precio, stock) => {
  socket.emit("client:updatenote", {
    id,
    title,
    description,
    codigo,
    foto,
    precio,
    stock,
  });
};

//escucha cunado una nota sea añadida
socket.on("server:newnote", appendNote);

socket.on("server:loadnotes", renderNotes);

socket.on("server:selectednote", (note) => {
  /// VERIFICAR
  console.log("este", note);
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const codigo = document.querySelector("#codigo");
  const foto = document.querySelector("#foto");
  const precio = document.querySelector("#precio");
  const stock = document.querySelector("#stock");

  title.value = note.title;
  description.value = note.description;
  codigo.value = note.codigo;
  foto.value = note.foto;
  precio.value = note.precio;
  stock.value = note.stock;

  savedId = note.id;
});

//------------------------CHAT----------------------------------------

const spanServerMessage = document.getElementById('serverNotification') // Elemento para mostrar las notificaciones recibidas del servidor
const usersContainer = document.getElementById('usersContainer') // Elemento para listar todos los usuarios
const sendMessage = document.getElementById('sendMessage') // Botón que envia el mensaje
const messageInput = document.getElementById('messageInput') // Caja de texto que contiene el mensaje
const messagesContainer = document.getElementById('messagesContainer') // Contenedor donde esta todo el chat

// Obtenemos el nombre de usario de los query params: ?username=iram
const { username } = Qs.parse(window.location.search, {
  ignoreQueryPrefix: true
})

// Notificamos al servidor que el cliente se ha unido al chat
socket.emit('joinChat', { username })

// Handler para recibir notificaciones del servidor y mostrarla en su contenedor
socket.on('notification', data => {
  spanServerMessage.innerHTML = data
})


// Handler para recibir la lista actualizada de usuario y mostrarlas en su contenedor
socket.on('users', data => {
  /**
   * Recibimos los usuarios como un arreglo de objetos y los transformamos en un HTML string para poder inyectarlo en su contenedor
   */
  const users = data
    .map(user => {
      const userTemplate = `
      <li class="clearfix active">
          <img src="https://bootdey.com/img/Content/avatar/avatar${user.avatarId}.png" alt="avatar">
          <div class="about">
              <div class="name">${user.username}</div>
              <div class="status"> <i class="fa fa-circle online"></i> online </div>
          </div>
      </li>
      `

      return userTemplate
    })
    .join('')

    usersContainer.innerHTML = users
})


// Listener para actuar cuando se le de click al botón de enviar
sendMessage.addEventListener('click', () => {
  /**
   * Tomamos el valor del input y lo enviamos al servidor
   * Una vez enviado, limpiamos el input para que el usuario pueda volver a escribir
   */
  socket.emit('messageInput', messageInput.value)
  messageInput.value = ''
})

// Handler para recibir un mensaje de otro cliente y mostrarlo en la conversación
socket.on('message', data => {
  const message = `
    <li class="clearfix">
        <div class="message-data">
            <span class="message-data-time">${data.time}, ${data.user.username}:</span>
        </div>
        <div class="message my-message">${data.text}</div>                                    
    </li>
  `

  messagesContainer.innerHTML += message
})

// Handler para recibir un mensaje propio y mostrarlo en la conversación
socket.on('myMessage', data => {
  const message = `
  <li class="clearfix">
    <div class="message-data text-right">
        <span class="message-data-time">${data.time}</span>
        <img src="https://bootdey.com/img/Content/avatar/avatar${data.user.avatarId}.png" alt="avatar">
    </div>
    <div class="message other-message float-right"> ${data.text} </div>
  </li>
  `

  messagesContainer.innerHTML += message
})
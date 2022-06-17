const express = require('express')

const app = express();

app.use(express.static('public'))

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", (err) =>
  console.log(`Ocurrio un error en el servidor ${err}`)
);

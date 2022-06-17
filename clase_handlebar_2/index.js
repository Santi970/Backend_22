
//QUEDE EN MINUTO 1:07 !!

const express = require("express");
const app = express();

// const html = `
//               <!DOCTYPE html>
//               <html lang="en">
//                 <head>
//                   <meta charset="UTF-8" />
//                   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                   <title>Document</title>
//                 </head>
//                 <body>
//                   <span>Contenido estatico </span>
//                 </body>
//               </html> `;


const compile  = html => {
  return html.replace('estatico', 'dinamico')
};

app.get("/", (req, res) => {
  return res.send(compile(html));
});

const PORT = 8050;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", (err) =>
  console.log(`Ocurrio un error en el servidor ${err}`)
);

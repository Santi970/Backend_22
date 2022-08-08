const express = require("express");


const app = express();
const PORT = process.argv.slice(2)[0] || 8080;
app.set("view engine", "pug");
app.use(express.static("public"));

/*setTimeout(() => {
  process.exit(3)
}, 2000)*/

app.get("/", (req, res) => {
  res.send(
    `Servidor express en PORT ${PORT} - PID ${process.pid} - ${new Date()}`
  );
});

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.statusCode).json({
      error: err.message,
      status: err.statusCode,
    });
  }
  next();
});

app.listen(PORT, () => {
  console.log(
    `Listening on http://localhost:${PORT} - PID ${process.pid}`
  );
});

//correr y renombrar el pm2-desafio.js con --name..
//pm2 start pm2-desafio.js --name="desafio-parte-1" -- 8080  

//NOTAS: 

//Para parar todos. 
//pm2 delete all

//Para saber que procesos tengo ejecutando:
//pm2 list

//Para pararlo: 
//pm2 stop (id) 

//pm2 logs

//Para que vaya escuchando los eventos:
//pm2 start forever.js --watch

//kill -9 65279 -> para matar el process

//MODO CLUSTER: 
//pm2 start forever.js -i max -> Levanta el maximo de procesos posibles asociados a nuestro nucleo
//Asi en todos tenemos una instancia de nuestra aplicacion

//INFO: 
// pm2 describe 0

//UNA INTERFAZ COMPLETA:
// pm2 monit 

//PASAR ARGUMENTOS A NUESTRO SCRIPT: 
// pm2 restart forever.js --watch -- 8081  -> parametros despues del doble guion. 
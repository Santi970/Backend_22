const http = require('http')

console.log(`Nodo corriendo en el proceso ${process.pid}`)

console.log(process.argv)

const PORT = process.argv[2] || 8080

http.createServer((req, res) => {
  console.log('Request')
  res.writeHead(200)
  res.end(`Process: ${process.pid}`)
}).listen(PORT)

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
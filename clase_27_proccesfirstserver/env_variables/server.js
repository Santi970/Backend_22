const express = require('express')
const config = require('./config')

const app  = express()

app.get('/', (req, res) => res.json({
  env: config.env,
  path: process.env.PATH
}))


app.listen(config.port, config.host, () => {
  console.log(`Servidor corriendo en http://${config.host}:${config.port}`)
})

//ejemplo  a ejecutar
//HOST=localhost PORT=3001 NODE_ENV=prod node server.js
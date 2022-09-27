const express = require('express')
const session = require('express-session')
const redis = require('redis')

//Generamos un nuevo cliente de redis. 
const client = redis.createClient({
  url: 'redis://default:Vw5BVveTykCaVwvQY0DJF4gpZQyRZEm0@redis-16746.c83.us-east-1-2.ec2.cloud.redislabs.com:16746',  
  legacyMode: true //esto hace falta ya que no usamos el await (mode)
})

client.connect()

//creamos el reids store .
const RedisStore = require('connect-redis')(session)
const app = express()

app.use(session({
  store: new RedisStore({
    client, 
    ttl: 60 
  }),
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))

app.get('/session', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    return res.send(`Has visitado ${req.session.contador} veces el sitio`)
  }

  req.session.contador = 1
  return res.send('Bienvenido')
})

app.get('/logout', (req, res) => {
  return req.session.destroy(err => {
    if (!err) {
      return res.send({ logout: true })
    }

    return res.send({ error: err })
  })
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
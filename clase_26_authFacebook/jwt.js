const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PRIVATE_KEY = 'PRIVATEKEYJWT' //nuestra llave privada. 

const users = []

const generateToken = user => { //el generateToken recibe el usuario, y nos permite GENERAR EL TOKEN.
  const token = jwt.sign({ id: user.id, username: user.username }, PRIVATE_KEY, { expiresIn: '24h' }) //JWT.sign le pasamos el user que queremos codificar.  (le pasamos la llave  privada y tiempo de vida de 24hs)
  return token
}

const generateLastId = () => {
  return users.length + 1
}

const jwtMiddleware = (req, res, next) => { //esta funcion se encarga de VALIDAR EL JWT 
  const authHeader = req.headers.authorization   //aca en el authorization (header) viene el header.

  if (!authHeader) {
    return res.status(401).json({
      error: 'Necesitas enviar un token'
    })
  }

  const token = authHeader.split(' ')[1] //convertimos en un arreglo y accedemos al indice 1. 

  jwt.verify(token, PRIVATE_KEY, (err, payload) => { //pasamos token y private key para verificar. 
    console.log({ err })
    if (err) {
      return res.status(401).json({
        error: 'Necesitas enviar un token válido'
      })
    }

    console.log({ payload })

    const user = users.find(user => user.id === payload.id)

    delete user.password

    if (!user) {
      return res.status(401).json({
        error: 'El usuario no existe'
      })
    }

    req.user = user //una vez que lo codificamos correctamente lo agregamos como req.user
    return next()
  })
}

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body

  const userExists = users.some(user => user.username === username)

  if (userExists) {
    return res.json({ error: 'El nombre de usuario ya existe' })
  }

  const id = generateLastId() 

  const user = { id, username, email, password } //creamos el user. 

  users.push(user)

  const access_token = generateToken(user) //generamos el token.

  return res.json({ //retornamos el user y el acces_token. 
    user,
    access_token
  })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username && user.password === password) //busco el usuario en la DB

  if (!user) {
    return res.status(401).json({ error: 'Credenciales incorectas' })
  }

  const access_token = generateToken(user)

  return res.json({
    user,
    access_token
  })
})

app.get('/profile', jwtMiddleware, (req, res) => {
  return res.json(req.user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
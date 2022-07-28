 const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')

const passport = require('passport') //middleware

//const LocalStrategy = require('passport-local').Strategy
const { Strategy: LocalStrategy } = require('passport-local')  //LocalStrategy es un middleware de express

const mongoose = require('mongoose')
const User = require('./models/user')

const { createHash, isValidPassword } = require('./utils')

mongoose.connect('mongodb://localhost:27017/clase25')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize()) //inicializamos passport
app.use(passport.session()) //para indicarle que vamos a usar sesiones. 

app.use(flash())
app.set('view engine', 'ejs')

//invocamos al metodo use desde passport. Este recibe 2 parametros, nombre de la estrategia que queremos hacer y la definicion de la estrategia.
passport.use('login', new LocalStrategy((username, password, done) => {
  return User.findOne({ username }) //que traiga el usuario que viene del parametro. 
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Nombre de usuario incorrecto' })
      }

      if (!isValidPassword(user.password, password)) {
        return done(null, false, { message: 'Contraseña incorrecta' })
      }

      return done(null, user) //le enviamos el user que hizo la query
    })
    .catch(err => done(err))
}))

//passReqToCallback: pasa el request al callback
passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, done) => {
  return User.findOne({ username })
    .then(user => {
      if (user) {
        return done(null, false, { message: 'El nombre de usuario ya existe' }) //done es el callback del parametro 
      }

      const newUser = new User()  //invocamos el modelo y creamos uno nuevo pasandole las mismas propiedades
      newUser.username = username
      newUser.password = createHash(password) //createHash: encriptamos la contraseña 
      newUser.email = req.body.email

      return newUser.save()
    })
    .then(user => done(null, user))
    .catch(err => done(err))
}))

//recibe todo el usuario y la funcion done. 
//serializamos el id del usuario y lo guardamos.
passport.serializeUser((user, done) => {
  console.log('serializeUser')
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser')
  User.findById(id, (err, user) => {
    done(err, user)
  })
})
// req.flash lo podemos usar porque usamos el middleware de flash...
app.get('/login', (req, res) => {
  return res.render('login', { message: req.flash('error') })
})

//usamos el middleware (controlador) para autenticar. 
app.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/signup', (req, res) => {
  return res.render('signup', { message: req.flash('error') })
})

app.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))

//isAuthenticated : ES UNA FUNCION que nos brinda passport... 
app.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }

  return res.redirect('/login') //en caso de error redirige a login
}, (req, res) => {
  return res.json(req.user)
})


const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

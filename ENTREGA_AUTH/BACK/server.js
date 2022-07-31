//ESTE ES EL SERVIDOR
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
const jwt = require('jsonwebtoken')
const passport = require("passport"); //middleware
dotenv.config();

//const LocalStrategy = require('passport-local').Strategy
const { Strategy: LocalStrategy } = require("passport-local"); //LocalStrategy es un middleware de express

const mongoose = require("mongoose");
const User = require("./schemas/user");

const { createHash, isValidPassword } = require("./utils");

mongoose.connect("mongodb://localhost:27017/clase25");

app.use(cors());
app.use(morgan("dev"));

app.use(
  session({
    secret: "qwerty",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize()); //inicializamos passport
app.use(passport.session()); //para indicarle que vamos a usar sesiones.

const routerProductos = require("./routers/productos.routes");
const routerCarritos = require("./routers/carritos.routes");
const routerUsuarios = require("./routers/usuarios.routes");

console.log(process.env.STORAGE); //le digo que mis entidades se conecte al tipo de persistencia de archivo.   STORAGE=archivo nodemon server.js

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos);
app.use("/api/carritos", routerCarritos);
app.use("/api/login", routerUsuarios);

//--------AUTH--------

const PRIVATE_KEY = "PRIVATEKEYJWT";

const users = [];

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    PRIVATE_KEY,
    { expiresIn: "24h" }
  );
  return token;
};

const generateLastId = () => {
  return users.length + 1;
};

const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Necesitas enviar un token",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, PRIVATE_KEY, (err, payload) => {
    console.log({ err });
    if (err) {
      return res.status(401).json({
        error: "Necesitas enviar un token válido",
      });
    }

    console.log({ payload });

    const user = users.find((user) => user.id === payload.id);

    delete user.password;

    if (!user) {
      return res.status(401).json({
        error: "El usuario no existe",
      });
    }

    req.user = user;
    return next();
  });
};

app.post("/signup", (req, res) => {
  const {  email, password } = req.body;

  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return res.json({ error: "El nombre de usuario ya existe" });
  }

  const id = generateLastId();

  const user = { id, email, password };

  users.push(user);

  const access_token = generateToken(user);

  return res.json({
    user,
    access_token,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorectas" });
  }

  const access_token = generateToken(user);

  return res.json({
    user,
    access_token,
  });
});

app.get("/profile", jwtMiddleware, (req, res) => {
  return res.json(req.user);
});

const PORT = 4000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Error en el servidor ${error}`));

// STORAGE=archivo nodemon server.js
//console.log(process.env.STORAGE)

// STORAGE=mysql nodemon server.js

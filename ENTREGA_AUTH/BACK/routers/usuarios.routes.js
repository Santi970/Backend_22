const express = require("express");
const controllersUsuairos = require("../controller/usuarios.controllers");
const { Router } = express;
const routerUsuarios = Router();

routerUsuarios
  .get("/", controllersUsuairos.getUsers)
  .get("/:id", controllersUsuairos.getUserForId)
  .post("/", controllersUsuairos.saveUser)
  .put("/:id", controllersUsuairos.upDateUser)
  .delete("/:id", controllersUsuairos.deleteUser);

module.exports = routerUsuarios;

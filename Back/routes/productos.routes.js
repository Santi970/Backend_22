const express = require("express");
const controllersProductos = require("../controllers/productos.controllers");
const { Router } = express;
const routerProductos = Router();

routerProductos
  .get("/", controllersProductos.getProducts)
  .get("/:id", controllersProductos.getProductForId)
  .post("/", controllersProductos.saveProduct)
  .put("/:id", controllersProductos.upDateProduct)
  .delete("/:id", controllersProductos.deleteProduct);

module.exports = routerProductos;

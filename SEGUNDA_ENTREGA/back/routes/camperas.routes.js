const express = require("express");
const controllersCamperas = require("../controllers/camperas.controllers");
const { Router } = express;
const routerProductos = Router();

routerProductos
  .get("/", controllersCamperas.getProducts)
  .get("/:id", controllersCamperas.getProductForId)
  .post("/", controllersCamperas.saveProduct)
  .put("/:id", controllersCamperas.upDateProduct)
  .delete("/:id", controllersCamperas.deleteProduct);

module.exports = routerProductos;

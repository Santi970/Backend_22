const express = require('express');
const controllersCart = require('../controller/carritos.controllers')
const { Router } = express;
const routerCarritos = Router();

routerCarritos.get("/", controllersCart.getCarts) //llamamos a la funcion del controlador para req y res
                .post("/", controllersCart.postCart)
                .post("/:id/productos", controllersCart.addProductToCart)
                .delete("/:id/productos/:id_prod", controllersCart.deleteProductFromCart)
                .delete("/:id", controllersCart.deleteCart)

module.exports = routerCarritos; 
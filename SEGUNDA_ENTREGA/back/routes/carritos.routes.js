const express = require('express');
const controlersCart = require('../controllers/carritos.controllers')
const { Router } = express;
const routerCarritos = Router();

routerCarritos.get("/:id/productos", controlersCart.getProductsFromCart) //llamamos a la funcion del controlador para req y res
                .post("/", controlersCart.postCart)
                .post("/:id/productos", controlersCart.addProductToCart)
                .delete("/:id/productos/:id_prod", controlersCart.deleteProductFromCart)
                .delete("/:id", controlersCart.deleteCart)

module.exports = routerCarritos;
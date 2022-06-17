//modelJS
const Carritos = require('../models/model_carritos')
const Productos = require('../models/model_productos')
// instancia modelTXT
let carritos = new Carritos('./models/carritos.json')
let productos = new Productos('./models/productos.json')

/* - - - - - - - - - CARRITO - - - - - - - - - */

//Busca un producto en el carrito o el carrito
const getProductsFromCart = async (req, res, next) => {
    try{
        const id = req.params.id;
        const productsOfCart = await carritos.getProductsFromCart(+id).then((res) => res); 
        if(!productsOfCart){ 
            throw new Error('El Carrito no existe o no tienes productos cargados!')
        }
        res.json(productsOfCart);
    }catch (error) {
        next(error);
    }
}

//CREA UN CARRITO
const postCart = async (req, res, next) => {
    try{
        const {id_product} = req.body;
        const producto = await carritos.getProductById(id_product).then((res) => res);
        if(!producto) {
            throw new Error('No se puede crear el carrito porque no existe el producto!')
        }
        const carrito = {productos: [producto]}
        const cart = await carritos.createCarts((carrito).then((res) => res));
        res.json(cart.id)
    }catch (error) {
        // next(error);
        console.log("error")
    }
}

//VERIFICAR
const addProductToCart = async (req, res, next) => {
    try{
        const id_product = +req.params.id_product;
        const id = +req.params.id;
        const cart = await carritos.getProductsFromCart(+id).then((res) => res);
        if(!cart) {
            throw new Error('El producto no se pudo agregar al carrito porque el mismo no existe!')
        }

        const producto = await productos.getProductForId(id_product).then((res) => res);
  
        const carrito_ = {productos: [producto]}
        cart = await carritos.createCart((carrito_).then((res) => res));
        res.json(cart.id)
    }catch (error) {
        next(error);
    }
}

//elimiar producto del carrito
const deleteProductFromCart = async (req, res, next) => {
    try{
        const id_product = +req.params.id_product;
        const id = +req.params.id;
        const producto = await productos.getProductForId(id_product).then((res) => res)
        if(!producto) {
            throw new Error('Producto no encontrado!')
        }
        const cart = await carritos.deleteProductFromCart(id, id_product).then((res) => res);
        if(!cart) {
            throw new Error('Carrito o producto no encontrado!')
        }
        res.json(cart)
    }catch{

    }
}


//DELETE CART
const deleteCart = async (req,res,next) => {
    try{
        const id = +req.params.id
        const cart = await carritos.deleteCartById(id).then((res) => res)
        if(!cart){
            throw new Error('Carrito no encontrado')
        }
        res.json(cart)
    }catch(error){
        next(error)   
    }
}


module.exports = {postCart, deleteCart, getProductsFromCart, addProductToCart, deleteProductFromCart};
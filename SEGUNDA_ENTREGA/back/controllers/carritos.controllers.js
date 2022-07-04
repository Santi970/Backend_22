//modelJS
const Carritos = require("../models/model_carritos");
const Productos = require("../models/model_productos");
// instancia modelTXT
let carritos = new Carritos("./models/carritos.txt");
let productos = new Productos("./models/productos.txt");

/* - - - - - - - - - CARRITO - - - - - - - - - */

//Busca un producto en el carrito o el carrito
const getProductsFromCart = async (req, res, next) => {
  const id = +req.params.id;
  const productsOfCart = await carritos.getProductsFromCart(+id);
  return res.json(productsOfCart);
};

//CREA UN CARRITO
const postCart = async (req, res, next) => {
  try {
    console.log(req.body, 'e la cuestion')
    const proudct = req.body
    const cart = await carritos.getAllCarts().then((res) => res);

    const carrito = {
      id: cart.length + 1,
      date: Date.now(),
      productos: [proudct],
    };
    const result = carritos.createCarts(carrito).then((res) => res);
    if (!result) {
      throw new Error("Carrito no creado!");
    }
    res.json(carrito.id);
  } catch (error) {
    console.log("error aca", error);
  }
};

//VERIFICAR
const addProductToCart = async (req, res, next) => {
  try {
    const id_product = +req.params.id_product;
    const id = +req.params.id;
    const cart = await carritos.getProductsFromCart(+id).then((res) => res);
    if (!cart) {
      throw new Error(
        "El producto no se pudo agregar al carrito porque el mismo no existe!"
      );
    }

    const producto = await productos
      .getProductForId(id_product)
      .then((res) => res);

    const carrito_ = { productos: [producto] };
    cart = await carritos.createCart(carrito_.then((res) => res));
    res.json(cart.id);
  } catch (error) {
    next(error);
  }
};

//elimiar producto del carrito
const deleteProductFromCart = async (req, res, next) => {
  try {
    const id_product = +req.params.id_product;
    const id = +req.params.id;
    const producto = await productos
      .getProductForId(id_product)
      .then((res) => res);
    if (!producto) {
      throw new Error("Producto no encontrado!");
    }
    const cart = await carritos
      .deleteProductFromCart(id, id_product)
      .then((res) => res);
    if (!cart) {
      throw new Error("Carrito o producto no encontrado!");
    }
    res.json(cart);
  } catch {}
};

//DELETE CART
const deleteCart = async (req, res, next) => {
  console.log('hasta aca llego')
  try {
    const id = +req.params.id;
    const cart = await carritos.deleteCartById(+id).then((res) => res);
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCart,
  deleteCart,
  getProductsFromCart,
  addProductToCart,
  deleteProductFromCart,
};

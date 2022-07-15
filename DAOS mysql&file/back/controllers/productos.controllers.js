//modelJS
const Productos = require("../models/model_productos");
const Carritos = require("../models/model_carritos");

// instancia modelTXT
let productosFile = new Productos("./models/productos.txt");
let carritos = new Carritos("./models/carritos.txt");

const ProductosDAOArchivo = require("../daos/productos/ProductosDaoArchivo");
const productosDAO = new ProductosDAOArchivo();

//GET
const getProducts = async (req, res, next) => {
  try {
    const products = await productosDAO.getAllProducts().then((res) => res);
    if (!products) {
      throw new Error("Producto no encontrado!");
    }
    const datos = JSON.parse(products);
    res.json(datos);
  } catch (error) {
    console.log("error", error);
  }
};

//GET POR ID
const getProductForId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productsOfCart = await productosDAO
      .getProductById(+id)
      .then((res) => res);
    if (!productsOfCart) {
      throw new Error("Producto no encontrado!");
    }
    res.json(productsOfCart);
  } catch (error) {
    console.log("error", error);
  }
};

//POST PRODUCT
const saveProduct = async (req, res, next) => {
  try {
    const result = await productosDAO.getAllProducts().then((res) => res);
    const productos = JSON.parse(result);
    
    const producto = req.body;
    // const ids = productos.map((producto) => producto.id);
    // const maxId = Math.max(...ids);

    const newProduct = {
      id: productos.length + 1,
      title: producto.title,
      price: producto.price,
      thumbnail: producto.thumbnail,
      available_quantity: producto.available_quantity,
      category: producto.category,
      condition: producto.condition
    }
    console.log('newProduct', newProduct)
    const product = productosDAO.saveProduct(newProduct).then((res) => res);
    if (!product) {
      throw new Error("Producto no guardado!");
    }
    res.json(newProduct);
  } catch (err) {
    console.log("Error  productos.controllers.js", err);
  }
};

//Actualiza producto por su id
const upDateProduct = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, price, thumbnail } = req.body;
    const products = await productosDAO.getAllProducts().then((res) => res);
    const result = JSON.parse(products);

    if (title && price && thumbnail) {
      result.forEach((item) => {
        if (item.id === id) {
          item.title = title;
          item.price = price;
          item.thumbnail = thumbnail;
        }
      });
    }
    const arrayNew = await productosDAO
      .upDateProduct(result)
      .then((res) => res);
    if (!arrayNew) {
      throw new Error("Producto sin actualizar!");
    }
    res.json(arrayNew);
  } catch (err) {
    console.log("El producto no existe, error: ", err);
  }
};

//Borra producto
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productsOfCart = await productosDAO
      .deleteById(+id)
      .then((res) => res);
    if (!productsOfCart) {
      console.log("El Producto no existe !");
    }
    res.json(productsOfCart);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  getProducts,
  getProductForId,
  saveProduct,
  upDateProduct,
  deleteProduct,
};

const { options } = require("../db/mysql");

const getStorage = require('../daos') //hacemos referencia al index de daos. 
const productsStorage = getStorage().products //accedemos al objeto products. dentro del switch de index de daos. 

// const ContenedorArchivo = require("../contenedores/ContenedorArchivo");
// const ContenedorMySQL = require("../contenedores/ContenedorMySQL");

// const ProductosDAOArchivo = require("../daos/productos/ProductosDaoArchivo");
// const productosDAO = new ProductosDAOArchivo();

// const contenedorArchivoProductos = new ContenedorArchivo("./products.json");
// const contenedorMySQLProductos = new ContenedorMySQL(options, "products");

//GET
const getProducts = async (req, res, next) => {
  return productsStorage.findAll().then((products) => {
    console.log(products);

    return res.json(products);
  });
};

//GET POR ID
const getProductForId = async (req, res, next) => {};

//POST PRODUCT
const saveProduct = async (req, res, next) => {
  const data = req.body;

  return productsStorage.create(data).then((newProduct) => {
    console.log(newProduct);
    return res.status(201).json(newProduct);
  });
};

//Actualiza producto por su id
const upDateProduct = async (req, res, next) => {};

//Borra producto
const deleteProduct = async (req, res, next) => {};

module.exports = {
  getProducts,
  getProductForId,
  saveProduct,
  upDateProduct,
  deleteProduct,
};

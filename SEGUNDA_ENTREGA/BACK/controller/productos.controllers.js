const { options } = require("../db/mysql");

const getStorage = require('../daos') //hacemdos referencia al index de daos. 
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
const getProductForId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productsOfCart = await productsStorage
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
  const data = req.body;

  return productsStorage.create(data).then((newProduct) => {
    console.log(newProduct);
    return res.status(201).json(newProduct);
  });
};

//Actualiza producto por su id
const upDateProduct = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, price, thumbnail } = req.body;
    const products = await productosFile.getAllProducts().then((res) => res);
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
    const arrayNew = await productosFile
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
const deleteProduct = async (req, res, next) => {};

module.exports = {
  getProducts,
  getProductForId,
  saveProduct,
  upDateProduct,
  deleteProduct,
};

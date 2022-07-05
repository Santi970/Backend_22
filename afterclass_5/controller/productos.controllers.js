const ContenedorArchivo = require("../contenedores/ContenedorArchivo");

const contenedorArchivoProductos = new ContenedorArchivo("./products.json");

//GET
const getProducts = async (req, res, next) => {
 
  return  contenedorArchivoProductos.findAll()
  .then(products => {
    console.log(products)
    
    return res.json(products);
  })
};

//GET POR ID
const getProductForId = async (req, res, next) => {};

//POST PRODUCT
const saveProduct = async (req, res, next) => {
  const data = req.body;
  
  return contenedorArchivoProductos.create(data)
    .then(newProduct => {
      console.log(newProduct);
      return res.status(201).json(newProduct);
    })
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

//Aca devolvemos la instancia que necesitamos, es donde hacemos uso del storage
//DEPENDIENDO del storage que nosotros estemos utilzando devolvemos uno u otro tipo de dao. 

const ProductosDAOArchivo = require("../daos/productos/ProductosDaoArchivo");
const CarritosDAOArchivo = require("../daos/carritos/CarritosDaoArchivo");

const ProductosDAOFirebase = require("../daos/productos/ProductosDaoFirebase");
const CarritosDAOFirebase = require("../daos/carritos/CarritosDaoFirebase");

const ProductosDAOMongoDb = require("../daos/productos/ProductosDaoMongoDb");
const CarritosDAOMongoDb = require("../daos/carritos/CarritosDaoMongoDb");

const ProductosDAOMySQL = require("../daos/productos/ProductosDaoMySQL");
const CarritosDAOAMySQL = require("../daos/carritos/CarritosDaoMySQL");

const ProductosDAOMemoria = require("../daos/productos/ProductosDaoMemoria");
const CarritosDAOAMemoria = require("../daos/carritos/CarritosDaoMemoria");


// Retornamos un objeto de products y carritos.
const getStorage = () => {
  const storage = process.env.STORAGE || "archivo"; 

  switch (storage) {
    case "archivo":
      return {
        products: new ProductosDAOArchivo(),
        carritos: new CarritosDAOArchivo(),
      };
      break;
    case "mysql":
      return {
        products: new ProductosDAOMySQL(),
        carritos: new CarritosDAOAMySQL(),
      };
      break;
    case "mongodb":
      return {
        products: new ProductosDAOMongoDb(),
        carritos: new CarritosDAOMongoDb(),
      };
      break;
    case "firebase":
      return {
        products: new ProductosDAOFirebase(),
        carritos: new CarritosDAOFirebase(),
      };
      break;
    case "memoria":
      return {
        products: new ProductosDAOMemoria(),
        carritos: new CarritosDAOAMemoria(),
      };

    default:
      return {
        products: new ProductosDAOArchivo(),
        carritos: new CarritosDAOArchivo(),
      };
      break;
  }
};

module.exports = getStorage;

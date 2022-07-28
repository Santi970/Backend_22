//Aca devolvemos la instancia que necesitamos, es donde hacemos uso del storage
//DEPENDIENDO del storage que nosotros estemos utilzando devolvemos uno u otro tipo de dao. 

const ProductosDAOArchivo = require("../daos/productos/ProductosDaoArchivo");
const CarritosDAOArchivo = require("../daos/carritos/CarritosDaoArchivo");
const UsuariosDAOArchivo = require("../daos/usuarios/UsuariosDAOArchivo");

const ProductosDAOFirebase = require("../daos/productos/ProductosDaoFirebase");
const CarritosDAOFirebase = require("../daos/carritos/CarritosDaoFirebase");
const UsuariosDAOFirebase = require("../daos/usuarios/UsuariosDAOFirebase");

const ProductosDAOMongoDb = require("../daos/productos/ProductosDaoMongoDb");
const CarritosDAOMongoDb = require("../daos/carritos/CarritosDaoMongoDb");
const UsuariosDAOMongoDb = require("../daos/usuarios/UsuariosDAOMongoDb");


const ProductosDAOMySQL = require("../daos/productos/ProductosDaoMySQL");
const CarritosDAOAMySQL = require("../daos/carritos/CarritosDaoMySQL");
const UsuariosDAOMySQL = require("../daos/usuarios/UsuariosDAOMySQL");

const ProductosDAOMemoria = require("../daos/productos/ProductosDaoMemoria");
const CarritosDAOAMemoria = require("../daos/carritos/CarritosDaoMemoria");
const UsuariosDAOMemoria = require("../daos/usuarios/UsuariosDaoMemoria");




// Retornamos un objeto de products y carritos.
const getStorage = () => {
  const storage = process.env.STORAGE || "archivo"; 
  console.log('storage = ', storage)
  

  switch (storage) {
    case "archivo":
      return {
        products: new ProductosDAOArchivo(),
        carritos: new CarritosDAOArchivo(),
        usuarios: new UsuariosDAOArchivo(),
      };
      break;
    case "mysql":
      return {
        products: new ProductosDAOMySQL(),
        carritos: new CarritosDAOAMySQL(),
        usuarios: new UsuariosDAOMySQL(),
      };
      break;
    case "mongodb":
      return {
        products: new ProductosDAOMongoDb(),
        carritos: new CarritosDAOMongoDb(),
        usuarios: new UsuariosDAOMongoDb(),
      };
      break;
    case "firebase":
      return {
        products: new ProductosDAOFirebase(),
        carritos: new CarritosDAOFirebase(),
        usuarios: new UsuariosDAOFirebase()
      };
      break;
    case "memoria":
      return {
        products: new ProductosDAOMemoria(),
        carritos: new CarritosDAOAMemoria(),
        usuarios: new UsuariosDAOMemoria(),
      };

    default:
      return {
        products: new ProductosDAOArchivo(),
        carritos: new CarritosDAOArchivo(),
        usuarios: new UsuariosDAOArchivo(),
      };
      break;
  }
};


module.exports = getStorage
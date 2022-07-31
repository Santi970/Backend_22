const { options } = require("../db/mysql");

const getStorage = require("../daos"); //hacemdos referencia al index de daos.
const usersStorage = getStorage().users; //accedemos al objeto products. dentro del switch de index de daos.

// const ContenedorArchivo = require("../contenedores/ContenedorArchivo");
// const ContenedorMySQL = require("../contenedores/ContenedorMySQL");

// const ProductosDAOArchivo = require("../daos/productos/ProductosDaoArchivo");
// const productosDAO = new ProductosDAOArchivo();

// const contenedorArchivoProductos = new ContenedorArchivo("./products.json");
// const contenedorMySQLProductos = new ContenedorMySQL(options, "products");

//GET
const getUsers = async (req, res, next) => {
  return usersStorage.findAll().then((users) => {
    console.log(users);

    return res.json(users);
  });
};

//GET POR ID
const getUserForId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await usersStorage
      .getUserById(+id)
      .then((res) => res);
    if (!user) {
      throw new Error("Usuario no encontrado!");
    }
    res.json(user);
  } catch (error) {
    console.log("error", error);
  }
};

//POST PRODUCT
const saveUser = async (req, res, next) => {
  const data = req.body;
  console.log("LLEGO saveUser", data);

  return usersStorage.create(data).then((newUser) => {
    return res.status(201).json(newUser);
  });
};

//Actualiza producto por su id
const upDateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { email , password } = req.body;
    const users = await usuariosFile.getAllUsers().then((res) => res);
    const result = JSON.parse(users);

    if (email && password) {
      result.forEach((item) => {
        if (item.id === id) {
          item.email = email;
          item.password = password;
        }
      });
    }
    const arrayNew = await usuariosFile
      .upDateUsers(result)
      .then((res) => res);
    if (!arrayNew) {
      throw new Error("Usuario sin actualizar!");
    }
    res.json(arrayNew);
  } catch (err) {
    console.log("El usuario no existe, error: ", err);
  }
};

//Borra producto
const deleteUser = async (req, res, next) => {};

module.exports = {
  getUsers,
  getUserForId,
  saveUser,
  upDateUser,
  deleteUser,
};

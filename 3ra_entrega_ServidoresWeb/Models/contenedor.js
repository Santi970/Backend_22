const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  //Lee todos los productos del archivo.
  async getAllProducts() {
    try {
      const contenido = await fs.promises.readFile(this.file, "utf8");
      if (!contenido) {
        console.log("No hay productos en el carrito");
      }
      return contenido;
    } catch (err) {
      console.log(err);
    }
  }

  //Leer archivo por id 
  async getProductById(id) {
      try {
        const array = await this.getAllProducts().then((res) => res).catch((err) => {
            console.log('Error', err)
          });
        const arrayParse = JSON.parse(array)
        const result = arrayParse.filter((product) => product.id == id)
        return result;
      } catch (err) {
        // throw error;
        console.log('Error', err)
      }
    }
}


module.exports = Contenedor;

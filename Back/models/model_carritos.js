const fs = require("fs");

class Carritos {
  constructor(archivo) {
    this.archivo = archivo;
  }

  async getAllCarts() {
    try {
      const contenido = await fs.promises.readFile(this.archivo, "utf8");
      if (!contenido) {
        const carts = [];
        fs.writeFileSync(this.archivo, JSON.stringify(carts));
        return carts;
      }
      const datos = JSON.parse(contenido);
      return datos;
    } catch (err) {
      throw error;
    }
  }

  async getProductsFromCart(id) {
    try {
      const array = await this.getAllCarts().then((res) => res).catch((err) => {
          throw err;
        });
      if (array.length <= 0) {
        return null;
      }
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
        }
      }
    } catch (err) {
      throw error;
    }
  }

  async createCart(carrito) {
      console.log(`llego al model carrito -> ${carrito}`)
      fs.writeFile(this.file, JSONstrgify(carrito), (error) => {
        if (error) {
          console.log(`Hubo un error ${error}`);
        }
      });
  }

  async deleteProductFromCart(id, id_product) {
    return console.log(" delete Cart");
  }

  async deleteCartById(id) {
    return console.log(" delete Car");
  }
}


module.exports = Carritos
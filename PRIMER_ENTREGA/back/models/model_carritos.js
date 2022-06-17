const fs = require("fs");

class Carritos {
  constructor(file) {
    this.file = file;
  }

  async getAllCarts() {
    console.log('Llego hasta acá!')
    try {
      const contenido = await fs.promises.readFile(this.file, "utf8");
      if (!contenido) {
        const carts = [];
        fs.writeFileSync(this.file, JSON.stringify(carts));
        return carts;
      }
      const datos = JSON.parse(contenido);
      return datos;
    } catch (err) {
      throw error;
    }
  }

  //Leer cart por id
  async getCartById(id) {
    if (this.exist()) {
      try {
        const data = await fs.promises.readFile(this.file, "utf8");
        const array = JSON.parse(data);
        const cart = array.filter((p) => p.id == id);
        return cart;
      } catch (err) {
        console.log("Error en lectura...", err);
      }
    } else {
      console.log([]);
    }
  }
  exist() {
    return fs.existsSync(this.file);
  }

  async getProductsFromCart(id) {
   if(!id){
    throw new Error('No se encontro el carrito')
   }
   const carts = await this.getAllCarts()
   const cart = carts.find((cart) => cart.cart === id);
   return cart.productos;
   
  }

  async createCarts(carrito) {
    if (this.exist()) {
      fs.promises.readFile(this.file).then((data) => {
        const json = JSON.parse(data.toString("utf-8"));
        json.push({ ...carrito });
        fs.promises
          .writeFile(this.file, JSON.stringify(json, null, "\t"))
          .then((_) => {
            console.log(`Agregado con exito... ${carrito.id}`);
          });
      });
    } else {
      fs.promises
        .writeFile(this.file, JSON.stringify([{ ...carrito, id: 0 }]))
        .then((data) => {
          console.log("Agregado ...");
        });
    }
  }
  exist() {
    return fs.existsSync(this.file);
  }


  async deleteProductFromCart(id, id_product) {
    return console.log(" delete Cart");
  }

  async deleteCartById(id) {
    console.log('Este es el id', id)
    if (this.exist())  {
      try {
        const data = await fs.promises.readFile(this.file, "utf8");
        console.log('data', data)
        const array = JSON.parse(data);
        const newArray = array.filter((produ) => produ.id !== id);

        const result = fs.promises.writeFile(
          this.file,
          JSON.stringify(newArray)
        );
        console.log(
          "Nuevo array con objeto eliminado " + JSON.stringify(result)
        );

        return result;
      } catch (err) {
        console.log("Error en lectura...", err);
      }
    } else {
      console.log([]);
    }
  }
  exist() {
    return fs.existsSync(this.file);
  }  
}



module.exports = Carritos
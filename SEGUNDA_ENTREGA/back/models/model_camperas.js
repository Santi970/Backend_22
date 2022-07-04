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
    if (this.exist()) {
      try {
        const data = await fs.promises.readFile(this.file, "utf8");
        const array = JSON.parse(data);
        const producto = array.filter((p) => p.id == id);
        return producto;
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

  //Guarda un producto devuelve su id.
  async saveProduct(producto) {
    if (this.exist()) {
      fs.promises.readFile(this.file).then((data) => {
        const json = JSON.parse(data.toString("utf-8"));
        json.push({ ...producto });
        fs.promises
          .writeFile(this.file, JSON.stringify(json, null, "\t"))
          .then((_) => {
            console.log(`Agregado con exito... ${producto.id}`);
          });
      });
    } else {
      fs.promises
        .writeFile(this.file, JSON.stringify([{ ...producto, id: 0 }]))
        .then((data) => {
          console.log("Agregado ...");
        });
    }
  }

  //update de producto
  async upDateProduct(productos) {
    try {
      const result = fs.promises
        .writeFile(this.file, JSON.stringify(productos))
        .then((data) => {
          console.log("Agregado ...", data);
          return result;
        });
      return result;
    } catch (err) {
      console.log("Error", err);
    }
  }

  //Eliminar archivo por id
  async deleteById(id) {
    if (this.exist()) {
      try {
        const data = await fs.promises.readFile(this.file, "utf8");
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

module.exports = Contenedor;

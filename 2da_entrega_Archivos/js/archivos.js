const fs = require("fs");

const producto = {
  id: 4,
  title: "Nuevo producto",
  precio: 3000,
  thumbnail:
    "https://http2.mlstatic.com/D_NQ_NP_2X_983745-MLA41071258804_032020-F.webp",
};


class Contenedor {
  constructor(file) {
    this.file = file;
  }

    //Creando archivo productos.json
    async  crearArchivo () {
    fs.writeFile('producto.json', 'textoDentro', (error)=> {
        if(error){
            console.log(`Hubo un error ${error}`)
        }
        })
    }

    //Lee todos los productos del archivo. 
    async getAll() {
        fs.readFile(this.file, 'utf8', (error, data) => {
            if(!error){
                console.log(`Estos son los productos: ${data}`)
            } else {
                console.log(`Error: ${error}`)
            }
        })
    }

    //Cambiar nombre al archivo
    async cambiarNombreArchivo(newName) {
        fs.rename(this.file, newName, (error) => {
            if(!error){
                console.log("Se le cambio el nombre al archivo, debes volver a renombrarlo")
            } else {
                console.log(`Error: ${error}`)
            }
        })
    }

    //Guarda un producto devuelve su id.
    async save(producto) {
        if (this.exist()) {
        fs.promises.readFile(this.file).then((data) => {
            const json = JSON.parse(data.toString("utf-8"));
            json.push({ ...producto, id: json.length });
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

    //Leer archivo por id  
    async leerArchivo(id) {
        if (this.exist()) {
          try {
            const data = await fs.promises.readFile(this.file, "utf8")
            const array = JSON.parse(data)
            const producto = array.filter(p => p.id == id)
            console.log("Este es el objeto: " + JSON.stringify(producto));
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

    //Eliminar archivo por id  
    async deleteById(id) {
            if (this.exist()) {
              try {
                const data = await fs.promises.readFile(this.file, "utf8")
                const array = JSON.parse(data)
                const producto = array.filter(produ => produ.id !== id);
                console.log("Nuevo array con objeto eliminado " + JSON.stringify(producto));
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


    //Lee todos los archivos
    async leerArchivo() {
        if (this.exist()) {
        try {
            const data = await fs.promises.readFile(this.file, "utf8");
            console.log(data);
        } catch (err) {
            consolo.log("Error en lectura...", err);
        }
        } else {
        console.log([]);
        }
    }

    exist() {
        return fs.existsSync(this.file);
    }

    

    //Borra el archivo completo
      async borrarArchivo() {
        try {
        fs.unlink(this.file, (error) => {
            if (error) {
            console.log("Error al borrar...");
            } else {
            console.log("Borrado!");
            }
        });
        } catch (err) {
        console.log("Error en lectura...", err);
        }
    }

    /*---------------------------------------------------------------*/

    //Guarda un producto async
    async saveAsync(producto) {
        try {
        const data = await fs.promises.readFile(this.file);
        const json = JSON.parse(data.toString("utf8"));
        json.push({ ...producto, id: json.length });
        try {
            await fs.promises.writeFile(
            this.file,
            JSON.stringify(json, null, "\t")
            );
        } catch (err) {
            throw new Error(err);
        }
        } catch (err) {
        console.log([]);
        try {
            await fs.promises.writeFile(
            this.file,
            JSON.stringify([{ ...producto, id: 0 }])
            );
        } catch (err) {
            throw new Error(err);
        }
        }
    }

}

let myFile = new Contenedor("./productos.json");


/*-- Crea el archivo productos.json --*/
// myFile.crearArchivo()

/*-- Lee todos los productos del archivo --*/
myFile.getAll()

/*-- Cambiar el nombre al archivo --*/
// myFile.cambiarNombreArchivo('productos.json')

/*-- Guardar un producto --*/
// myFile.save(producto)

/*-- Leer archivo por id --*/
// myFile.leerArchivo(1)

/*-- Leer archivo por id --*/
// myFile.deleteById(2)

// myFile.save(producto);
// myFile.saveAsync(producto);
// myFile.leerArchivo();
// myFile.borrarArchivo()


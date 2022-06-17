const express = require("express");
var morgan = require("morgan");
let app = express();
app.use(morgan("dev"));

const Contenedor = require("./../Models/contenedor.js");
let contenedor = new Contenedor("./../Models/productos.txt");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("La ruta está funcionando");
});

//GET TODOS
app.get("/productos", async (req, res) => {
  try {
    const products = await contenedor.getAllProducts().then((res) => res);
    if (!products) {
      throw new Error(
        "Los productos no existen o no tienes productos cargados!"
      );
    }
    res.send(products);
  } catch (error) {
    console.log(`Error... ${error}`);
  }
});

//GET POR ID
app.get("/productoRandom/", async (req, res) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  try{

    const products = await contenedor.getAllProducts().then((res) => res);
    if (!products) {
      throw new Error(
        "Los productos no existen o no tienes productos cargados!"
      );
    }

    const id = getRandomInt(4); //Acá deberia ir el products.length pero no se porque me da un numero grande, como que lee caracteres. 
    console.log(id)
    
    const productsOfCart = await contenedor.getProductById(+id).then((res) => res); 
    if(!productsOfCart){ 
        throw new Error('El Carrito no existe o no tienes productos cargados!')
    }

    res.json(productsOfCart);
}catch (error) {
    // next(error);
    console.log('error', error)
}

});

const PORT = 8020;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", (err) =>
  console.log(`Ocurrio un error en el servidor ${err}`)
);

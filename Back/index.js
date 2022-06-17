//ESTE ES EL SERVIDOR
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const routerProductos = require("./routes/productos.routes");
const routerCarritos = require("./routes/carritos.routes");

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos);
app.use("/api/carrito", routerCarritos);

//MIDDLEWARE de error
app.use((error, req, res, next) => {
  res.status(500).json({
    error: "Error en el servidor ",
  });
});

const PORT = 3000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Error en el servidor ${error}`));

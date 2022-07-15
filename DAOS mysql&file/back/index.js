//ESTE ES EL SERVIDOR
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(morgan("dev"));

const routerProductos = require("./routes/productos.routes");
const routerCarritos = require("./routes/carritos.routes");
const routerCamperas = require("./routes/camperas.routes");


app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos);
app.use("/api/carritos", routerCarritos);
app.use("/api/camperas", routerCamperas);

const PORT = 4000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Error en el servidor ${error}`));

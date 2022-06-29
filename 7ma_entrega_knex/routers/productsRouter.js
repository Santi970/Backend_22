const { Router } = require("express");
const ProductsController = require("../controllers/productsController");

const productsRouter = Router();

const productsController = new ProductsController();

const isAdminMiddleware = (req, res, next) => {
  if (req.query.admin == "true") {
    return next();
  }

  return res.status(401).json({
    error: "No estas autorizado como admin",
  });
};

productsRouter.get("", productsController.listProducts);

productsRouter.post("", isAdminMiddleware, productsController.createProduct);  //asi deberia ser el endpoint http://localhost:8080/api/products?admin=true

productsRouter.delete("/id", productsController.deleteProductsForId);


module.exports = productsRouter;

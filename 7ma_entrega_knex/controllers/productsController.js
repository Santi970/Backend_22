const db = require("../db/mysql");
const ProductsModel = require("../models/productsModel");

class ProductsController {
  constructor() {
    this.model = new ProductsModel(db);
  }

  listProducts = (req, res) => {
    return this.model.getProducts()
      .then((products) => {
        return res.json(products);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Error del servidore",
        });
      });
  };

  createProduct = (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.body.category_id,
      stock: req.body.stock,
    };

    return this.model.newProduct(product)
      .then((productId) => {
        product.id = productId;
        return res.status(201).json(product);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Error del servidor",
        });
      });
  };

  deleteProductsForId = (req, res) => {
    const id = req.params.id;
    return this.model.deleteProduct(id)
    .then((product) => {
      return res.status(201).json(product);
    })
    .catch((err) => {
      return res.status(500).json({
        error: "Error del servidor",
      });
    });
    }
}
module.exports = ProductsController;

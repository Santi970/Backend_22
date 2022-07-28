// const { options } = require("./db/mysql")
const { options } = require("../db/mysql");
const knex = require("knex")(options);

knex.schema
  .createTable("carrito", (table) => {
    table.increments("id");
    table.timestamps();
    table.object("productos");
  })
  .then(() => {
    console.log("Tabla de categorias creada.");
    return knex.schema.createTable("products", (table) => {
      table.increments("id");
      table.string("title", 30);
      table.float("price");
      table.string("thumbnail", 355);
      table.integer("available_quantity");
      table.string("category", 30)
      table.string("condition", 30)
      table.integer("category_id").unsigned().references("categories.id");
    });
  })
  .then(() => console.log("Tabla de productos creada"))
  .catch((err) => console.log(`Error: ${err.message}`));

// Para correrlo:
// DEBUG=knex:query node createTables.js

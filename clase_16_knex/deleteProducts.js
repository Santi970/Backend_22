const { options } = require("./db/mysql");
const knex = require("knex")(options);

(async () => {
  try {
    const products = await knex.from("products").where("category_id", 1).del();

    console.log(`Productos eliminados: ${products}`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  } finally {
    knex.destroy();
  }
})();

//Para correrlo
//DEBUG=knex:query node deleteProducts.js

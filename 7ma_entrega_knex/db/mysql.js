const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "192.168.0.252",
    port: 3306,
    user: "root",
    password: "",
    database: "AfterClassKnex",
  },
});

module.exports = knex;

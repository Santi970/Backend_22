// module.exports = {
//   client: "mysql",
//   connection: {
//     host: process.env.DB_HOST,
//     port: 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: "ecommerce",
//   },
//   pool: { min: 0, max: 10 },
// };

const options = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "ecommerce",
    insecureAuth : true

  },
  pool: { min: 0, max: 10 },
};

module.exports = { options };

//DEBUG=knex:query node createTables.js 
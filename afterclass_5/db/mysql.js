module.exports = {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      port : 3306,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : 'clase16',
    },
    pool: {min: 0 , max: 10},
  }
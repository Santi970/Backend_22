class Contenedor {
    constructor(config){
        this.knex = require('knex')(config)
    }
}

//mysql
const mysqlConfig = {
    client: 'mysql',
    connection: {
      host : '192.168.0.252',
      port : 3306,
      user : 'root',
      password : '',
      database : 'ecommerce'
    }
  }
  
  //Sqlite
  const sqliteConfig = {
    client: 'sqlite3', 
    // connection: { filename: './mydb.sqlite'}
    connection: { filename: './mydb-desafio.sqlite'}
  
  }
  
const mysqlContenedor = new Contenedor(mysqlConfig)
const sqliteContenedor = Contenedor(sqliteConfig)
  
const mysql = {
    client: 'mysql',
    connection: {
        host: "192.168.0.252",
        port: 3306,
        user: 'root',
        password: '',
        database: 'mydb'
    },
    pool: { min: 0, max: 7 }
}

const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/../db/dbmensajes.sqlite'
    },
    useNullAsDefault: true
}

module.exports = {sqlite3, mysql};
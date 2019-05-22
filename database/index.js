var mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'jano123',
    database: 'remed',
    port : 3306
})

module.exports = conn
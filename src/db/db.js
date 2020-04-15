const mysql = require('mysql');
require('dotenv').config();

const mysqlConexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

mysqlConexion.connect(err => err ? console.log(err) : console.log('DB connected'));

module.exports = mysqlConexion;
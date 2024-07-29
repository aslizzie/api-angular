const mysql = require('mysql2');

// Configurar lo siguiente de acuerdo a nuestro servidor 
const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
});

module.exports = pool.promise(); 

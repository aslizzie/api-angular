const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',  // Cambia esto por la dirección de tu servidor MySQL
    user: 'root',       // Tu usuario de MySQL
    password: 'root',  // Tu contraseña de MySQL
    database: 'wave'  // El nombre de tu base de datos
});

module.exports = pool.promise();  // Usamos .promise() para habilitar el uso de promesas

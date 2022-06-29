const mysql = require('mysql2');

// connect the application to the MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL Username
        user: 'root',
        // Your mySQL password
        password: 'Bootcampsqlpassword*',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// testing if the connection is working
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query('SELECT * FROM candidates', (err, rows) =>{
    console.log(rows);
});

// handle user requests that aren't support by the app
// default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
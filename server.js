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

// db.query('SELECT * FROM candidates', (err, rows) =>{
//     console.log(rows);
// });

// create query for read opertaion
// db.query('SELECT * FROM candidates WHERE id = 1', (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// create query for create operation
// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// create query for delete operation
// delete a candidate
// db.query('DELETE FROM candidates WHERE id = ?', 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// handle user requests that aren't support by the app
// default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// testing if the connection is working
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// handle user requests that aren't support by the app
// default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
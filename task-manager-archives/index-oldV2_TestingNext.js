const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// app.post('/users', (req, res) => {

// });

// app.post('/tasks', (req, res) => {

// });

app.get('/users', (req, res, next) => {

    console.log('Hello from users !');
    next('abc');
    console.log('next has been invoked !');
});

app.get('/users', (req, res, next) => {

    console.log('Hello from users second !');
    next();
});

app.get('/users', (req, res) => {

    console.log('Hello from users third !');
});

// app.get('/tasks', (req, res) => {

//     console.log('Hello from tasks !');
// });

// app.get('/task/:id', (req, res) => {

// });

// app.listen(port, () => {
//     console.log('server started on port', port);
// });
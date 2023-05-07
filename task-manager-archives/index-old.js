// ReplacedBy: src/index.js
const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.post('/users', (req, res) => {

    // User(req.body).save().then((result) => {
    //     res.status(200).send(result);
    // }).catch((error) => {
    //     res.status(401).send(error)
    // })

    const user = new User(req.body);

    user.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(401).send(error);
    })
})

app.get('/users', (req, res) => {

    User.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.get('/user/:id', (req, res) => {

    const _Id = req.params.id;

    User.findById(_Id).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.get('/tasks', (req, res) => {

    Task.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.get('/task/:id', (req, res) => {

    const _Id = req.params.id;

    Task.findById(_Id).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log('server started on port', port);
});
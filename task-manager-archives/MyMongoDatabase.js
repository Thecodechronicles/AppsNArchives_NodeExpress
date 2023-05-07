// ReplacedBy: src/db/mongoose.js
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectionUrl, { 'useNewUrlParser': true }, (error, client) => {
    if (error) {
        console.log("There's an error ! ", error);
        return;
    }

    const db = client.db(databaseName);
    // db.collection('UsersData').insertOne({
    //     name: 'Ankit',
    //     email: 'mindingthemint@gmail.com'
    // });

    // db.collection('Tasks').insertMany([{
    //     description: 'Bathing',
    //     completed: true
    // }, {
    //     description: 'Brushing',
    //     completed: true
    // }, {
    //     description: 'Watching movie',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         console.log('Error inserting the documents ! '.error);
    //         return;
    //     }

    //     console.log('Here are the results ', result);
    // });

    db.collection('UsersData').insertMany([{
        name: 'Peter Parker',
        email: 'peter_parker@spiderman.com'
    }, {
        name: 'Bruce Wayne',
        email: 'bruce_wayne@batman.com'
    }, {
        name: 'Steve Rogers',
        email: 'steve_rogers@captainamerica.com'
    }], (error, result) => {
        if (error) {
            console.log('Error inserting the documents ! '.error);
            return;
        }
        console.log('Here are the results ', result);
    });
    console.log('connection established !!');
});
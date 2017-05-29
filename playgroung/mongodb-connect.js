// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to Mongo DB server')
    }
    console.log('Connected to mongoDB server');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert todo');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Sharan',
        age: 26,
        location: 'Bangalore'
    }, (err, result) => {
        if (err) {
            return console.log('Inable to connect to server');
        }
        console.log(result.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();

});
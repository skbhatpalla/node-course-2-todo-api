const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to Mongo DB server')
    }
    console.log('Connected to mongoDB server');
    db.collection('Todos').find({ _id: new ObjectID('592c0fdf3b06c212785eb887'),
    text: 'Something to do',
    completed: false }).toArray().then((docs) => {
        console.log('Result is ');
        console.log(docs);
        if(err){
            console.log('Data not found');
        }
    });
    db.close();

});
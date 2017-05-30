const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    // db.collection('Todos').deleteMany({
    //     "text": "Something to do",
    //     "completed": false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     "text": "Something to do",
    //     "completed": false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     "text": "Something to do",
    //     "completed": false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Sharan'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('592c0fdf3b06c212785eb888')}).then((res) =>{
        console.log(res);
    });

});
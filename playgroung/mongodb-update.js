const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to ')
    }

    // db.collection('Todos').findOneAndUpdate({text : "Walk a dog"},{$set:{completed : false}},{returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({name:'Sharan'},{$set:{name:'Sharan'},$inc:{age:2} },{returnOriginal:false}).then((result) => {
        console.log(result);
    });
});
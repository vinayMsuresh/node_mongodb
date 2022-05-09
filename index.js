const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/fruits';
mongoClient.connect(url, (err, db1) => {
    if(err) throw err;
    console.log('Connected');
    const db = db1.db('fruits');
    const appleConnection = db.collection('apples');
    
    const doc1 = {name: 'Red apple', color: 'Red'};
    const doc2 = {name: 'Green apple', color: 'Green'};

    appleConnection.insertMany([doc1, doc2], (err, res) => {
        if(err) throw err;
        console.log('Inserted');
    })
    setTimeout(()=>{
        db1.close();
    },5000)
})
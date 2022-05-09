const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/fruits';
mongoClient.connect(url, (err, db1) => {
    if(err) throw err;
    console.log('Connected');
    const db = db1.db('fruits');
    const appleConnection = db.collection('apples');
    
    appleConnection.updateOne({name: 'Red apple'},{$set:{name: 'Blue apple', color: 'Blue'}},(err, res)=>{
        if(err) throw err;
        else{
            console.log("Updated");
        }
    })
    setTimeout(()=>{
        db1.close();
    },5000)
})
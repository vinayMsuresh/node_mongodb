const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/fruits';
mongoClient.connect(url, (err, db1) => {
    if(err) throw err;
    console.log('Connected');
    const db = db1.db('fruits');
    const appleConnection = db.collection('apples');
    
    appleConnection.find().toArray((err, res)=>{
        if(err) throw err;
        else if(res.length >= 1){
            console.log(res);
        }
        else{
            console.log("No matches found");
        }
    })
    setTimeout(()=>{
        db1.close();
    },5000)
})
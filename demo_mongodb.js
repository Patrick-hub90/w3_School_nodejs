var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/myDb";;

mongoDb.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Dataase created");
    db.close();
})
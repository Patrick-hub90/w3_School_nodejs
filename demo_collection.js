var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/";;

mongoDb.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    dbo.createCollection('customers',function(err,res){
        if(err) throw err;
        console.log("Collection created");
        db.close();
    });
});

var mongo = require('mongodb')
var url = 'mongodb://localhost/27017/'
mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    dbo.collection("customers").drop(function(err,result){
        if(err) throw err;
        if(result) console.log("deleted");
        db.close();
    })
    /*
    dbo.collection("customers").dropCollection("customers",function(err,result){
        if(err) throw err;
        if(result) console.log("deleted");
        db.close();
    })
    */
});
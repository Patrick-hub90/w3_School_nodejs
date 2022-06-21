
var mongo = require('mongodb')
var url = 'mongodb://localhost/27017/'
mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    dbo.collection("customers").find({nom:/^L/},{projection:{_id:0}}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
    })
});

var mongo = require('mongodb')
var url = 'mongodb://localhost/27017/'
mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    dbo.collection("customers").findOne({},function(err,result){
        if(err) throw err;
        console.log(result.nom);
        db.close();
    })
});
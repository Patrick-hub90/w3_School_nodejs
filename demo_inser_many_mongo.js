var mongo = require('mongodb');
var url = "mongodb://localhost/27017"
mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    var myvalue = [
        {_id:12,prenom:"BAGuido"},
        {_id:15,prenom:"BAGUIdi"}
    ]
    dbo.collection("products").insertMany(myvalue,function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
})
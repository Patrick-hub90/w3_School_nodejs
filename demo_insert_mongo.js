var mongo=require('mongodb');

var url = 'mongodb://localhost/27017/';
mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('myDb');
    var myValue = {nom:'Patrick',premon:'Charles'};
    dbo.collection('customers').insertOne(myValue,function(err,res){
        if(err) throw err;
        console.log("1 documents");
        db.close();
    })
})
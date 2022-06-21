var mongo =require('mongodb');
const { double } = require('webidl-conversions');
var url ="mongodb://localhost/27017";

mongo.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var db0 = db.db('myDb');

    db0.collection("customers").updateOne({nom:"Lydie"},{$set:{name:"Patrick"}},function(err,result){
        if(err) throw err;
        console.log("update")
    })
    /* 
    db0.collection("customers").updateMany({nom:/^L/},{$set:{name:"Patrick"}},function(err,result){
        if(err) throw err;
        console.log("update")
    })*/
})
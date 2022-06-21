var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
})
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "create table User (nom varchar(200),prenom varchar(200))";
    con.query(sql,function(err,resultat){
        if(err) throw err;
        console.log("Table created");
    })
})
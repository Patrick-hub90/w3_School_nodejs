var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
})
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "ALTER TABLE User ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql,function(err,resultat){
        if(err) throw err;
        console.log("Table altered");
    })
})
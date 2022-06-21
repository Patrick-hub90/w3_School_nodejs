var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "select * from User where prenom = 'Charles'";
    con.query(sql,function(err,resultat){
        if(err) throw err;
        console.log(resultat);
    
    });
})
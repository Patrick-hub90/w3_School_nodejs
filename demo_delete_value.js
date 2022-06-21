var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
});
con.connect(function(err){
    if(err) throw err;
    console.log("connnected");
    var prenom = "Charles"
    var sql = "delete from User where prenom = 'Charles'";
    con.query(sql,[prenom],function(err,resultas){
        if(err) throw err;
        console.log(resultas.affectedRows);
    })
})
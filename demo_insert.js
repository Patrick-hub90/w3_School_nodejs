var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "insert into User(nom,prenom) values?";
    var values = [
        ["Patrick","Charles"],
        ['Betty','Santos'],
        ['William','ERTe']
    ];
    con.query(sql,[values],function(err,resultat){
        if(err) throw err;
        console.log("Number of records: "+ resultat.affectedRows);
        console.log("ID:" + resultat.insertId);
    
    });
})
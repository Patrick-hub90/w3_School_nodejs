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
    var pat = "Popo"
    var sql = "update User set prenom= 'Popo' where prenom ='Charles'";
    con.query(sql,[pat,prenom],function(err,resultas){
        if(err) throw err;
        console.log(resultas.affectedRows + "records updated");
    })
})
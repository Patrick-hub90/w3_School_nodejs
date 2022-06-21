var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'myDb'
});
con.connect(function(err){
    if(err) throw err;
    console.log("connnected");
    var sql = "create table if not exists myProduct(id INT AUTO_INCREMENT PRIMARY KEY,flag varchar(200));";
    con.query(sql,function(err,resultas){
        if(err) throw err;
        console.log("Created");
    })
    sql = "insert into myProduct (flag) value ('Charles');";
    con.query(sql,function(err,resultas){
        if(err) throw err;
        console.log("Insertedd");
    })
    sql = 'select User.prenom as prenom ,myProduct.flag as flag FROM User JOIN myProduct on User.prenom = myProduct.flag;';
    con.query(sql,function(err,resultas){
        if(err) throw err;
        console.log(resultats);
    })
})
var mysql2 = require('mysql');

var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
var fs = require('fs');
fs.writeFile('myFile.txt','New COntent!',function(err){
    if(err) throw err;
    console.log("Saved .");
});
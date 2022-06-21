var fs = require('fs');
fs.open('myfile.txt','w',function(err){
    if(err) throw err;
    console.log("Saved!");
});
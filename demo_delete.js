var fs = require('fs');
fs.open('myFile_2.txt','w',function(err){
    if(err) throw err;
    console.log("OPen!");
})
fs.unlink('myFile_2.txt',function(err){
    if(err) throw err;
    console.log("Removed");
})
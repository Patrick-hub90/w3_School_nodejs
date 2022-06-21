var fs = require('fs');
fs.rename('myfile.txt','myFile_2.txt',function(err)
{
    if(err) throw err;
    console.log("Renamed"); 
})
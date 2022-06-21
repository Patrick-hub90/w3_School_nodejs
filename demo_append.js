
var fs = require('fs');

fs.appendFile('myfile.txt','Hello world',function(err){
    if(err) throw err;
    console.log('Saved');
})

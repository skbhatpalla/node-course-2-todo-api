const fs = require('fs');
var data = 'Test data \n';
fs.appendFile('filesdara.txt',data,()=>{
    console.log('Data appended');
});
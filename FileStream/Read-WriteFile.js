var fs = require('fs');
var readStream = fs.createReadStream('fileStream.txt');
var writeStream = fs.createWriteStream('pipeoutStream.txt');
readStream.pipe(writeStream);
console.log('Data is Written Successfuly');
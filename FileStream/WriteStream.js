var fs = require('fs');
var writeStream = fs.createWriteStream('fileStream.txt');
writeStream.write('This is The First Example', 'utf8');
writeStream.on('finish', function () {
    console.log('Data Written Successfully');

});
writeStream.on('error', function (err) {
    console.log('Generate Error');

});
writeStream.end('program end');
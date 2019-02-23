var fs = require('fs');
var readStream = fs.createReadStream('fileStream.txt');
var data = "";
readStream.setEncoding('utf8');
readStream.on('data', function (chunk) {
    data += chunk;
});
readStream.on('end', function () {
    console.log(data);

});
readStream.on('error', function () {
    console.log('Generate Error');

});
console.log('Data is Written Successfully');
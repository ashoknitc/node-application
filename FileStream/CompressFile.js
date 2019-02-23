var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('fileStream.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('fileStream.txt-gz'));
console.log('file compressed Successfully');
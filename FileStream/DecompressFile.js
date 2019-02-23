var fs = require('fs');
var zlib = require('zlib');
const input = fs.createReadStream("fileStream.txt.gz");
const unzip = zlib.createUnzip();
const ouput = fs.createWriteStream("decompressfile.txt");
input.pipe(unzip).pipe(ouput);
console.log("Data DecCompressed Sucessfully");
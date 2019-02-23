var fs = require('fs');
var http = require('http');
var data = "";
var readStreamData = fs.createReadStream('fileStream.txt');
http.createServer(function (req, res) {
    readStreamData.setEncoding('utf8');
    readStreamData.on('data', function (chunk) {
        data += chunk;
    });
    readStreamData.on('end', function () {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
    readStreamData.on('error', function (err) {
        console.log('error');

    });
}).listen(8081);
console.log('listening http://127.0.0.1:8081/');
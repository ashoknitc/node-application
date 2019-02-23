var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('student-data.JSON', function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}).listen(8081);
console.log('Listening at http://127.0.0.1:8081/');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/Views'));
app.listen(3000);
console.log('listening at localhost://3000');
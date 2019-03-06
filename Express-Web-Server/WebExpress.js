const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send("Hi, Welcome To First Express Example");
});
app.use("/static", express.static(path.join(__dirname + '/public')));
app.listen(3131);
console.log("Listening at localhost://3131");
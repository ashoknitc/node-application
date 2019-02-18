var mysql = require('mysql');
mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
}).connect(function (err) {
    if (err) throw err;
    console.log("Connection established successfully");

});
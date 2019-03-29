var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected Successfully');
    con.query("Create Database nodedb", function (err) {
        if (err) throw err;
        console.log('Database Created Successfully');

    });
});
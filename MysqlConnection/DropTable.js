var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("drop table employee1", function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " Record Deleted Successfully");

    });
});
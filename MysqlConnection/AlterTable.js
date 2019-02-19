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
    var sql = "alter table employee add column emp_phone varchar(20)";
    con.query(sql, function (err) {
        if (err) throw err;
        console.log("Table altered Successfully");

    });
});
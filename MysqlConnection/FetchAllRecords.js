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
    con.query("select * from employee", function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
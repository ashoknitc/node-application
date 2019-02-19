var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});
con.connect(function (err) {
    if (err) throw err;
    con.query("select * from employee limit 2 offset 2", function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
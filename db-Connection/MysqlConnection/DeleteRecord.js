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
    var sql = "delete from employee where emp_name='vikash'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " One Record Deleted Successfully");

    });
});
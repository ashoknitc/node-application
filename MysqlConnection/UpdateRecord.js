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
    var sql = "update employee set emp_name='vikash' where emp_phone='7878787878'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("One Record Updated Successfully");

    });
});
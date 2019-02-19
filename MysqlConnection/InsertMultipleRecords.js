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
    var sql = "insert into employee(emp_id, emp_name, emp_address, emp_phone) values ?";
    var values = [
        ['emp03', 'abhay', 'bangalore', '9090919192'],
        ['emp04', 'sumit', 'Karnataka', '9090919193'],
        ['emp05', 'Mohit', 'Mangalore', '9090919194']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " Records inseretd Successfully");

    });
});
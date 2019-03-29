var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connection Established Successfully");
    con.query("Create Table Employee(emp_id varchar(20) primary key,emp_name varchar(20),emp_address varchar(20),emp_phone varchar(20))", function (err) {
        if (err) throw err;
        console.log("Table Created");

    });

});
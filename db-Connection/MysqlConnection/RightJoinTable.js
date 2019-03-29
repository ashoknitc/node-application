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
    var sql = "select e.emp_id,e.emp_name,p.prod_name,p.prod_quantity from employee as e right join product as p on e.emp_id=p.prod_id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
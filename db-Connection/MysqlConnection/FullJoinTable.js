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
    con.query("select e.emp_id,e.emp_name,p.prod_name, p.prod_quantity from employee as e join product as p on e.emp_id=p.prod_id", function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
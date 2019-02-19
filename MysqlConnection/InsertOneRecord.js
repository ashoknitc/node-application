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
    var sql = "insert into employee values('emp02','akash','akash@balihans.com','9898787878')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " Inseretd Successsfully");

    });

});
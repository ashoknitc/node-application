var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongodbClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db("nodedb");
        var myQuery = {
            name: "Chandan Kumar"
        };
        dbase.collection("monodbCollection").deleteMany(myQuery, function (err, data) {
            if (err) throw err;
            console.log(data.result.n + " document Deleted Successfully");

        });
    }
});
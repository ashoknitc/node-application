var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongodbClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db("nodedb");
        dbase.collection("mongodbCollection").findOne({}, function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log(data.name + '  ' + data.email + '  ' + data.phone);
            }
        });
    }
});
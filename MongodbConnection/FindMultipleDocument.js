var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db('nodedb');
        dbase.collection("mongodbCollection").find({}).toArray(function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log(data);

            }
        });
    }
});
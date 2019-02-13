var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db('nodedb');
        dbase.createCollection("mongodbCollection", function (err, res) {
            if (err) {
                throw err;
            } else {
                console.log('Collection Created Successfully');
            }

        });

    }
});
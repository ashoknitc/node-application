var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongodbClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db("nodedb");
        dbase.collection("mongodbCollection").find({}, {
            projection: {
                _id: 0,
                //name: 1,
                //email: 1,
                phone: 0
            }
        }).toArray(function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log(data);

            }
        });
    }
});
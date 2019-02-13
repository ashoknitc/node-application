var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db("nodedb");
        var myobj = {
            name: "Ashok Kumar Sharma",
            email: "ashok@balihans",
            phone: "8891313237"
        };
        dbase.collection("mongodbCollection").insertOne(myobj, function (err, db) {
            if (err) {
                throw err;
            } else {
                console.log('1 Document inserted Successfully');

            }
        });
    }
});
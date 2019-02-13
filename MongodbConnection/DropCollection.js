var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongodbClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("nodedb");
    /*dbase.collection("mongodbCollection1").drop(function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log('Collection Deleted Succesfully');

        }
    });*/
    dbase.dropCollection("mongoCollection", function (err, data) {
        if (err) {
            throw err;
        } else {
            console.log('Collection Droped Successfully');

        }
    });
});
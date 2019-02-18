var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("nodedb");
    var oldValue = {
        name: "Ashok Kumar Sharma"
    };
    var newValue = {
        $set: {
            email: "ashoknitc@gmail.com"
        }
    };
    dbase.collection("mongodbCollection").updateMany(oldValue, newValue, function (err, result) {
        if (err) throw err;
        console.log("One Record Updated Successfully");

    });
});
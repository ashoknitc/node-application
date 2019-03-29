var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbase = db.db("nodedb");
    dbase.collection("mongodbCollection").find().sort({
        name: -1
    }).toArray((err, data) => {
        if (err) throw err;
        console.log(data);

    });

});
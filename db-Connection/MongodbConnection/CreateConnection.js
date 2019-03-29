var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ashokdb";
MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('connection estableished successfully');

    }
});
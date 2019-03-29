var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongodbClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("nodedb");
    var delQuery = {
        name: 'Fulen Kumar'
    };

    dbase.collection("mongodbCollection").deleteOne(delQuery, function (err, data) {
            if (err) throw err;
            console.log(data.result.n + '  Document Deleted Successfully');
        }

    );
});
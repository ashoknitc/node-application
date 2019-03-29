var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbase = db.db("nodedb");
    var myObj = {
        name: "Ganesh Kumar"
    }
    dbase.collection("mongodbCollection").remove(myObj, (err, obj) => {
        if (err) throw err;
        console.log(obj.result.n + " Documnet Deleted Successfully");

    });
});
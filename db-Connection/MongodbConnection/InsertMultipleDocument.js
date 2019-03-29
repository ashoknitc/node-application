var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        var dbase = db.db("nodedb");
        var myobj = [{
                name: 'Bikash Kumar',
                email: 'bikash@balihans.com',
                phone: '7887878780'
            },
            {
                name: 'Chandan Kumar',
                email: 'chandan@balihans.com',
                phone: '7887878781'
            },
            {
                name: 'Dharam Kumar',
                email: 'dharam@balihans.com',
                phone: '7887878782'
            },
            {
                name: 'Fulen Kumar',
                email: 'fulen@balihans.com',
                phone: '7887878783'
            },
            {
                name: 'Ganesh Kumar',
                email: 'ganesh@balihans.com',
                phone: '7887878783'
            }
        ];
        dbase.collection('mongodbCollection').insertMany(myobj, function (err, res) {
            if (err) {
                throw err;
            } else {
                console.log(res.insertedCount + ' Document Inserted Successfully');

            }
        });
    }
});
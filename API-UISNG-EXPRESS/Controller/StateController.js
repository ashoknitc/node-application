var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var {
    ObjectID
} = require('mongodb');
var {
    mongoose
} = require('../db/mongoose');
var {
    StateModel
} = require('../models/StateInfo');
var app = express();
app.use(bodyParser.json());

//Post StateInfo 
app.post('/addStateInfo', (req, res) => {
    console.log(req.body);
    var stateData = new StateModel({
        stateName: req.body.stateName
    });
    stateData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});

//get all State Info
app.get('/getStateInfo', (req, res) => {
    console.log(req.body);
    StateModel.find().then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
//getSingle State Info
app.get('/getSingleStateInfo/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    StateModel.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })

});

//Update Single StateInfo
app.patch('/upateSingleStateInfo/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    var body = _.pick(req.body, ["stateName"]);
    body.stateName = "Karnataka";
    StateModel.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
//Delete Single State INfo
app.delete('/deleSingleSatte/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    StateModel.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.delete('/deleteAllStateInfo', (req, res) => {
    console.log(req.body);
    StateModel.remove({}).then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.send(e);
    })
});
app.listen(3000);
console.log("listening at localhost:3000");
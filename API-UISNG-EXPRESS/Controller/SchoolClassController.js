var express = require("express");
var bodyParser = require("body-parser");
var _ = require('lodash');
var {
    mongoose
} = require('../db/mongoose');
var {
    ObjectID
} = require('mongodb');
var {
    SchoolClassModel
} = require('../models/SchoolClassModel');
var app = express();
app.use(bodyParser.json());

//add School Class
app.post('/addSchoolClassInfo', (req, res) => {
    console.log(req.body);
    var addSchooClass = new SchoolClassModel({
        createdBy: req.body.createdBy,
        createTime: req.body.createTime,
        Timestamp: req.body.Timestamp,
        schoolId: req.body.schoolId,
        classNum: req.body.classNum,
        sessionYear: req.body.sessionYear
    });
    addSchooClass.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.get('/getSchoolClassInfo', (req, res) => {
    console.log(req.body);
    SchoolClassModel.find().then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});

//get School Class List

//get Single School Classs Info
app.get('/getSingleSchoolClassInfo/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    SchoolClassModel.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});

//update Single Class Info
app.patch('/updateSchoolClassInfo/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    var body = _.pick(req.body, ["schoolId", "sessionYear"]);
    body.schoolId = 13;
    body.sessionYear = "2017-18";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    SchoolClassModel.findByIdAndUpdate(id, {
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
    })
});

//delete School Class Info
app.delete('/deleteSchoolClassInfo/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    SchoolClassModel.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});

app.listen(3000);
console.log("Listening at localhost:3000");
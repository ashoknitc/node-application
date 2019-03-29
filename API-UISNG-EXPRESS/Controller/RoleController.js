var express = require('express');
var _ = require('lodash');
var {
    ObjectID
} = require('mongodb');
var {
    mongoose
} = require('../db/mongoose');
var bodyParser = require('body-parser');
var {
    RoleModel
} = require('../models/RoleModel');
var app = express();
app.use(bodyParser.json());

//POst Role Information
app.post('/addStaffRole', (req, res) => {
    console.log(req.body);
    var roleDate = new RoleModel({
        roleTitle: req.body.roleTitle,
        createdBy: req.body.createdBy,
        createTime: req.body.createTime
    });
    roleDate.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
//get All Role INfo
app.get('/getRolInfo', (req, res) => {
    console.log(req.body);
    RoleModel.find().then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })

});

//get Single role Info
app.get('/singleRoleInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    RoleModel.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
//delete
app.delete('/singleroledelete/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();

    }
    RoleModel.findByIdAndDelete(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
//update
app.patch('/updaterstaff/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["roleTitle"]);
    body.roleTitle = "ClassTeacher";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    RoleModel.findByIdAndUpdate(id, {
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

app.listen(3000);
console.log("Listening at http:localhost:3000");
var express = require('express');
var bodyParser = require('body-parser');
var {
    mongoose
} = require('../db/mongoose');
var {
    ObjectID
} = require('mongodb');
var {
    AnnualActivity
} = require('../models/AnnualActivityModel');
var router = express.Router();

//Add Annual Activity 
router.use(bodyParser.json());
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


router.post('/addActivity', (req, res) => {
    console.log(req.body);
    var activityDate = new AnnualActivity({
        id: req.body.id,
        createdBy: req.body.createdBy,
        createTime: req.body.createTime,
        schoolId: req.body.schoolId,
        activityTitle: req.body.activityTitle,
        partClassStartId: req.body.partClassStartId,
        partClassEndId: req.body.partClassEndId,
        partSectionStartId: req.body.partSectionStartId,
        partSectionEndId: req.body.partSectionEndId,
        activityDescription: req.body.activityDescription,
        participationType: req.body.participationType,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        awardDescription: req.body.awardDescription,
        session: req.body.session,
        partSectionEndName: req.body.partSectionEndName,
        partClassEndName: req.body.partClassEndName,
        partClassStartName: req.body.partClassStartName,
        partSectionStartName: req.body.partSectionStartName
    });
    activityDate.save().then((result) => {
        res.send(JSON.stringify(result, undefined, 2));
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.end();
    });
});
router.all('/getAllActivity', (req, res) => {
    console.log(req.body);
    AnnualActivity.find().then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.end();
    })
});
router.get('/getSingleActivity/:id', (req, res) => {
    AnnualActivity.findOne({
        '_id': req.params.id
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.status(404).send();
        res.end();
    })
});
router.put('/updateOne', (req, res) => {
    console.log(req.body);
    var activityData = new AnnualActivity(req.body);
    AnnualActivity.updateOne({
        '_id': req.body._id
    }, activityData).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.send(err);
    })
});
router.delete('/deleteActivity/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    AnnualActivity.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;
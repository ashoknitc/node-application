var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var {
    ObjectId
} = require('mongodb');
var {
    mongoose
} = require('../db/mongoose');
var {
    HolidayInfo
} = require('../models/AcademicHolidayModel');

var router = express.Router();
router.use(bodyParser.json());
router.post('/addActivity', (req, res) => {
    console.log(req.body);
    var holidayDate = new HolidayInfo({

        createdBy: req.body.createdBy,
        createTime: req.body.createTime,
        holidayDescription: req.body.holidayDescription,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        schoolId: req.body.schoolId,
        holidayType: req.body.holidayType,
        holidayTypeId: req.body.holidayTypeId,
        holidayTypeTitle: req.body.holidayTypeTitle,
        holidayTitle: req.body.holidayTitle,
        holidayImagePath: req.body.holidayImagePath,
        session: req.body.session
    });
    holidayDate.save().then((doc) => {
        res.send(JSON.stringify(doc, undefined, 2));
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.end();
    })
});
router.get('/getActivity', (req, res) => {
    console.log(req.body);
    HolidayInfo.find({}).then((doc) => {
        res.send(JSON.stringify(doc, undefined, 2));
        res.end();
    }).catch((e) => {
        res.send(JSON.stringify(e, undefined, 2));
    });
});
router.get('/getActivity/:id', (req, res) => {
    console.log(req.body);
    HolidayInfo.find({
        "_id": req.params.id
    }).then((doc) => {
        res.send(JSON.stringify(doc, undefined, 2));
        res.end();
    }).catch((e) => {
        res.send(JSON.stringify(e, undefined, 2));
        res.end();
    });
});
//update Activity 
router.put("/update", (req, res) => {
    var updateActivity = new HolidayInfo(req.body);
    HolidayInfo.updateOne({
        '_id': req.body._id
    }, updateActivity).then((doc) => {
        res.send(JSON.stringify(doc, undefined, 2));
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.end();
    });
});
//update Activity by id
router.put('/update/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    var body = _.pick(req.body, ["holidayDescription"]);
    body.holidayDescription = "Update Academic Holiday ";
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }
    HolidayInfo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.status(404).send();
    });
});
router.delete('deleteActivity/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }
    HolidayInfo.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
//delete all activity 

router.delete('/deleteAllActivity', (req, res) => {
    console.log(req.body);
    HolidayInfo.remove({}).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.status(404).send();
    });
});
module.exports = router;
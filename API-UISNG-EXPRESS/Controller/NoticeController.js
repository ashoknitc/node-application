var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var {
    ObjectID
} = require('mongodb');
var {
    mongoose
} = require('../db/mongoose');
var app = express();
app.use(bodyParser.json());
var {
    Notice
} = require('../models/NoticeModel');


//Post Notice Information
app.post('/noticeInfo', (req, res) => {
    console.log(req.body);
    var noticeData = new Notice({
        staff_id: req.body.staff_id,
        notice_title: req.body.notice_title,
        notice_content: req.body.notice_content,
        schoolId: req.body.schoolId
    });
    noticeData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.send(e);
    });
});

//Get Notice Information
app.get('/getNoticeInfo', (req, res) => {
    console.log(req.body);
    Notice.find().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.send(e);
    });
});

//get Single Notice Info
app.get('/getSingleNoticeInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Notice.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});

//Update Single Notice Information
app.patch('/updateSingleNoticeInfo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["staff_id",
        "notice_title",
        "notice_content",
        "schoolId"
    ]);
    body.staff_id = 123;
    body.notice_title = "Exam Notice";
    body.notice_content = "Final Year Examination Will be Start from Tomorrow Onwards";
    body.schoolId = 122;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Notice.findByIdAndUpdate(id, {
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

//Delete Single Notice Info
app.delete('/deleteSingleNoticeInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Notice.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
//delete All School Notice 
app.delete('/deleteAllNoticeInfo', (req, res) => {
    console.log(req.body);
    Notice.remove({}).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });

});

app.listen(3000);
console.log("listening at localhost:30000/");
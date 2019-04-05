var express = require('express');
var bodyParser = require('body-parser');
var {
    mongoose
} = require('../db/mongoose');
var {
    ObjectID
} = require('mongodb');
var {
    BoardClassModel
} = require('../models/Board-Class- Model');
var router = express.Router();

//Add Annual Activity 
router.use(bodyParser.json());
// router.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });


router.post('/addBoardClass', (req, res) => {
    console.log(req.body);
    var boardClassData = new BoardClassModel({
        _id: req.body._id,
        createTime: req.body.createTime,
        boardId: req.body.boardId,
        className: req.body.className
    });
    boardClassData.save().then((result) => {
        res.send(JSON.stringify(result, undefined, 2));
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.end();
    });
});
router.all('/getBoardClass', (req, res) => {
    console.log(req.body);
    BoardClassModel.find().then((doc) => {
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
router.get('/getSingleBoardClass/:id', (req, res) => {
    BoardClassModel.findOne({
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
router.put('/updateSingleBoardClass', (req, res) => {
    console.log(req.body);
    var activityData = new BoardClassModel(req.body);
    BoardClassModel.updateOne({
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
router.delete('/updateSingleBoardClass/:id', (req, res) => {
    console.log(req.body);
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    BoardClassModel.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;
var express = require('express');
var bodyParser = require('body-parser');
var {
    mongoose
} = require('../db/mongoose');
var {
    CityModel
} = require('../models/CityInfoModel');
var router = express.Router();
router.use(bodyParser.json());

router.post('/add', (req, res) => {
    console.log(req.body);
    var postCity = new CityModel({
        cityName: req.body.cityName
    });
    postCity.save().then((result) => {
        res.send(JSON.stringify(result, undefined, 2));
        res.end();
    }).catch((err) => {
        res.send(JSON.stringify(err, undefined, 2));
        res.send();
    });
});
module.exports = router;
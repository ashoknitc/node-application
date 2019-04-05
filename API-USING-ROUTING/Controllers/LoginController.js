var express = require('express');
var bodyParser = require('body-parser');
var {
    mongoose
} = require('../db/mongoose');
var {
    authenticate
} = require('../db/Middleware/authenticate');
const {
    LoginModule
} = require('../models/LoginModule');
var {
    ObjectID
} = require('mongodb');
var _ = require('lodash');

var app = express();
app.use(bodyParser.json());
app.post('/staffLogin', (req, res) => {
    var body = _.pick(req.body, ['username', 'email', 'session']);
    var loginData = new LoginModule(body);
    loginData.save().then((loginData) => {
        return loginData.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(loginData);
    }).catch((err) => {
        res.status(404).send(err);
    });
});
/*
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');
    LoginModule.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
        //res.send(loginData);
    }).catch((e) => {
        res.status(404).send();
    });
};*/
app.get('/find/me', authenticate, (req, res) => {
    res.send(req.user);
});
app.listen(3005);
console.log("Listening at http://localhost:3005");
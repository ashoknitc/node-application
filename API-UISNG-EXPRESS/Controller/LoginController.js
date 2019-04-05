var {
    mongoose
} = require('../db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var {
    ObjectID
} = require('mongodb');
var {
    LoginModule
} = require('../models/LoginModel');
var app = express();
app.use(bodyParser.json());
app.post('/loging', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'session']);
    var loginData = new LoginModule(body);

    loginData.save().then((loginData) => {
        return loginData.generateAuthToken();
        //res.send(loginData);
    }).then((token) => {
        res.header('x-auth', token).send(loginData);
    }).catch((err) => {
        res.status(404).send(err);
    });
});
//Use Middleware to make toekn as private authentication
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');
    LoginModule.findByToken(token).then((loginData) => {
        if (!loginData) {
            return Promise.reject();
        }
        // res.send(loginData);
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(404).send();
    });
};

app.get('/user/me', (req, res) => {
    res.send(req.user);
});
app.listen(3003);
console.log('Listening at http://localhost:3000');
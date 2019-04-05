const {
    LoginModule
} = require('../../models/LoginModule');
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
};
module.exports = {
    authenticate: authenticate
}
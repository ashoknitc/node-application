var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
var UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please Enter Valid Email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    session: {
        type: String,
        default: "2018-19"
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
UserSchema.methods.toJSON = function () {
    var user = this;
    var UserObject = user.toObject();
    return _.pick(UserObject, ["_id", "email", "password", "session"]);
}
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({
        _id: user._id.toHexString(),
        access
    }, 'abc123').toString();
    user.tokens.push({
        access,
        token
    });
    return user.save().then(() => {
        return token;
    });

}
UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;
    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        /* return new Promise((resolve, reject) => {
             reject();
         });*/
        //above code is same as below code 
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};
var LoginModule = mongoose.model('LoginModule', UserSchema);
module.exports = {
    LoginModule
}
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Parent = mongoose.model("Parent", {
    fatherName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    motherName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    guardianName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    relationship: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    alternateNumber: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    adharNumber: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    currentAddress: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    permanentAddress: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});
module.exports = {
    Parent: Parent
}
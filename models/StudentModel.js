var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Student = mongoose.model("Student", {
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    presentAddress: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    permanentAddress: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    adhar: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});
module.exports = {
    Student: Student
}
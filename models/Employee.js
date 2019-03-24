var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Employee = mongoose.model("Employee", {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    id: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    country: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});
module.exports = {
    Employee: Employee
}
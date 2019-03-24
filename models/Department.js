var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Department = mongoose.model("Department", {
    name: {
        type: String,
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
    }
});
module.exports = {
    Department: Department
}
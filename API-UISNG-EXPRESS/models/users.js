var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        trim: true
    }
});
module.exports = {
    User: User
}
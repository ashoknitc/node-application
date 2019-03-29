var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MyNoticeSchem = mongoose.Schema({
    staff_id: {
        type: Number,
        require: true,
        unique: true,
        minlength: 1
    },
    notice_title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    notice_content: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    schoolId: {
        type: Number,
        required: true,
        minlength: 1,
        required: true
    }
});
var Notice = mongoose.model("Notice", MyNoticeSchem);
module.exports = {
    Notice: Notice
}
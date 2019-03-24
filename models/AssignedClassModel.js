var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var AssignClass = mongoose.model("AssignClass", {
    classId: {
        type: Number,
        require: true
    },
    subjectId: {
        type: Number,
        require: true
    },
    classSubjectMapId: {
        type: Number,
        require: true
    },
    subjectName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    classNum: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    classSection: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    classRoom: {
        type: Number,
        required: true,
        minlength: 1
    },
    isClassTeacher: {
        type: Boolean,
        required: true
    },
    sessionYear: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    periodType: {
        type: String,
        default: "First"
    },
    classStartTime: {
        type: Date,
        default: new Date().getMilliseconds()
    },
    classEndTime: {
        type: Date,
        default: new Date().getMilliseconds()
    },
    onMonday: {
        type: Boolean,
        default: true
    },
    onTuesday: {
        type: Boolean,
        default: false
    },
    onWednesday: {
        type: Boolean,
        default: false
    },
    onthursday: {
        type: Boolean,
        default: true
    },
    onFriday: {
        type: Boolean,
        default: true
    },
    onSaturday: {
        type: Boolean,
        default: true
    },
    maxStrength: {
        type: Number,
        default: 0
    }
});
module.exports = {
    AssignClass: AssignClass
}
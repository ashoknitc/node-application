var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var ClassSchema = mongoose.Schema({
    createdBy: {
        type: Number,
        required: [true, "Created BY Is Required"]
    },
    createTime: {
        type: Number,
        required: [true, "Created Time Is Required"]
    },
    Timestamp: {
        type: Number,
        default: new Date().getMilliseconds()
    },
    schoolId: {
        type: Number,
        required: [true, "SchoolId is Required"]
    },
    classNum: {
        type: String,
        required: [true, "Class Number Is Required"]
    },
    sessionYear: {
        type: String,
        default: "2018-19"
    }
});
var SchoolClassModel = mongoose.model("SchoolClassModel", ClassSchema);
module.exports = {
    SchoolClassModel: SchoolClassModel
}
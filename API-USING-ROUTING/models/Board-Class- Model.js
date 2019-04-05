var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var UserSchema = mongoose.Schema({
    _id: {
        type: Number,
        default: new Date().getMilliseconds()
    },
    createTime: {
        type: Number,
        default: Date.now()
    },
    boardId: {
        type: Number,
        required: [true, 'boardId required']
    },
    className: {
        type: String,
        required: [true, 'className required']
    }
});
var BoardClassModel = mongoose.model("BoardClassModel", UserSchema);
module.exports = {
    BoardClassModel
}
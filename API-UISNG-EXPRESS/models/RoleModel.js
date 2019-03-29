var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MySchema = mongoose.Schema({
    roleTitle: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    createdBy: {
        type: Number,
        default: Date.now()
    },
    createTime: {
        type: Number,
        default: Date.now()
    }
});
var RoleModel = mongoose.model("RoleModel", MySchema);
module.exports = {
    RoleModel: RoleModel
}
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var StateSchema = mongoose.Schema({

    stateName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
        unique: true
    }
});
var StateModel = mongoose.model("StateModel", StateSchema);
module.exports = {
    StateModel: StateModel
}
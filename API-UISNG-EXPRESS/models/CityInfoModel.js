var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MySchema = mongoose.Schema({
    cityName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 1
    }
});
var CityModel = mongoose.model("CityModel", MySchema);
module.exports = {
    CityModel: CityModel
}
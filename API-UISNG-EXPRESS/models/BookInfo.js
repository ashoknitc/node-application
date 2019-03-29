var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mySchema = mongoose.Schema({

    createTime: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: String,
        default: "Ashok"
    },
    schoolId: {
        type: Number,
        default: 121
    },
    authorName: {
        type: String,
        default: "Ashok"
    },
    bookName: {
        type: String,
        default: "A.N Kamathane"
    },
    price: {
        type: String,
        trim: true,
        minlnegth: 1,
        required: true,

    },
    publisher: {
        type: String,
        default: "Akashay"
    },
    session: {
        type: String,
        default: "2018-19"
    }

});
var bookInfo = mongoose.model("bookInfo", mySchema);
module.exports = {
    bookInfo: bookInfo
}
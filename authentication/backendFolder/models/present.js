var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    receiver: String,
    purchased: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Present', presentSchema);
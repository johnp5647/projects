var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

var achSchema = new Schema ({
	title: String,
	owner: {
		type: Schema.Types.ObjectId,
        ref: 'User'
	}
});

module.exports = mongoose.model('Achievement', achSchema);
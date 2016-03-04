var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

var badgeSchema = new Schema ({
	number: Number,
	title: String,
	description: String,
	owner: [{
		type: Schema.Types.Mixed,
        ref: 'User'
	}],
	imgTag: String
});

module.exports = mongoose.model('Badge', badgeSchema);
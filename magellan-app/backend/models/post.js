var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

var commentsSchema = new Schema({
	bodyText: String,
	submitter: {
		type: Schema.Types.Mixed,
		ref: 'User'
	}
});

var postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	postText: {
		type: String,
		required: true
	},
	submitter: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [commentsSchema]
});

module.exports = mongoose.model('Post', postSchema);
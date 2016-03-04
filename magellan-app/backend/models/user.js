var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
var badgeSchema = require('./badge').schema;

var userSchema = new Schema({
    firstname: {
        type: String,
		required: true
    },
	lastname: {
		type: String,
		required: true
	},
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    email: String,
	badges: [badgeSchema]
});

userSchema.pre("save", function (next) {
    var user = this;
    
    if (!user.isModified("password")) {
        next();
    }
    
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        
        user.password = hash;
        next();
    }); 
});

module.exports = mongoose.model('User', userSchema);
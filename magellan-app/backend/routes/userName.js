var express = require('express');
var userRouter = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

userRouter.route('/:userId')
	.put(function (req, res) {
		User.findById(req.params.userId, function (err, user) {
			if (err) res.status(500).send(err);
			user.badges.push(req.body);
			user.save(function (err, updatedUser) {
				if (err) res.status(500).send(err);
				res.send(updatedUser);
			});
		});
	});


module.exports = userRouter;
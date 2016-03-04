var express = require('express');
var postRouter = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post');

postRouter.post('/', function (req, res) {
	var post = new Post(req.body);
	post.submitter = req.user;
	post.save(function (err, newPost) {
		if (err) res.status(500).send(err);
		res.send(newPost);

	});
});

postRouter.route('/:postId')
	.put(function (req, res) {
	console.log(req.body);
		Post.findById(req.params.postId, function (err, post) {
			if (err) res.status(500).send(err);
			console.log(post);
			post.comments.push(req.body);
			for(var i = 0; i < post.comments.length; i++) {
				if (post.comments[i].bodyText === req.body.bodyText) {
					post.comments[i].submitter = req.user;
				}
			}
			post.save(function (err, updatedPost) {
				if (err) res.status(500).send(err);
				res.send(updatedPost);
			});
		});
	});

module.exports = postRouter;
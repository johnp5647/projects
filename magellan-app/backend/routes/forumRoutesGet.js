var express = require('express');
var postRouter = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post');

postRouter.route('/')
    .get(function (req, res) {
        Post.find(function (err, posts) {
            if (err) res.status(500).send(err);
            res.send(posts);
        })
    });

postRouter.route('/:postId')
    .get(function (req, res) {
        Post.findById(req.params.postId, function (err, post) {
            if (err) res.status(500).send(err);
            res.send(post);
        });
    });

module.exports = postRouter;
var express = require('express');
var userNameRouter = express.Router();
var mongoose = require('mongoose');
var Username = require('../models/user');

userNameRouter.route('/:userId')
    .get(function (req, res) {
        Username.findById(req.params.userId, function (err, submitter) {
            if (err) res.status(500).send(err);
            res.send(submitter.username);
        });
    });


module.exports = userNameRouter;
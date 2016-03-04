var express = require('express');
var badgeRouter = express.Router();
var mongoose = require('mongoose');
var Badge = require('../models/badge');

badgeRouter.route('/')
    .get(function (req, res) {
        Badge.find(function (err, badges) {
            if (err) res.status(500).send(err);
            res.send(badges);
        })
    });

module.exports = badgeRouter;
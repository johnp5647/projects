var express = require('express');
var authRouter = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config');
var bcrypt = require("bcrypt");

authRouter.post('/signup', function (req, res) {
	console.log(req.body);
    var user = new User(req.body);
    user.save(function (err, newUser) {
        if (err) res.status(500).send(err);
        res.send(newUser);

    });
});

authRouter.post('/login', function (req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) res.status(500).send(err);
        if (!user) res.status(401).send('The username you entered does not exist');
        else if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
                if (err) throw (err);
                if (!match) res.status(401).send("Incorrect Password");
                else {
                    var token = jwt.sign(user, config.secret);
                    res.send({
                        user: user,
                        token: token
                    });
                }
            });
        }
    });
});

module.exports = authRouter;
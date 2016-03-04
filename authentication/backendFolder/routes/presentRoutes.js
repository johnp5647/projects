var express = require('express');
var presentRouter = express.Router();
var Present = require('../models/present');

presentRouter.route('/')
    .get(function (req, res){
        Present.find({user: req.user._id}, function(err, presents) {
            if (err) res.status(500).send(err);
            res.send(presents);
        });
    })
    .post(function (req, res){
        var present = new Present(req.body);
        present.user = req.user;
        present.save(function(err, newPresent) {
            if (err) res.status(500).send(err);
            res.send(newPresent);
        });
    });

presentRouter.route('/:presentId')
    .get(function (req, res){
        Present.findById(req.params.presentId, function(err, present) {
            if (err) res.status(500).send(err);
            res.send(present);
        });
    })
    .put(function (req, res){
        Present.findByIdAndUpdate(req.params.presentId, req.body, {new: true}, function(err, present) {
            if (err) res.status(500).send(err);
            res.send(present);
        });
    })
    .delete(function (req, res){
        Present.findByIdAndRemove(req.params.presentId, function(err, removedPresent) {
            if (err) res.status(500).send(err);
            res.send(removedPresent);
        });
    });


module.exports = presentRouter;

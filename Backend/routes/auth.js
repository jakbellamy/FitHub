const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../config/keys');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Trainer = require("../models/trainer");

router.post('/login', function(req, res) {
    Trainer.findOne({
      username: req.body.username
    }, function(err, trainer) {
      if (err) throw err;
  
      if (!trainer) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        trainer.comparePassword(req.body.password, function (err, isMatch) {
           console.log(req.body.password)
           console.log(trainer)
          if (trainer.password === req.body.password) {
            let token = jwt.sign(trainer.toJSON(), keys.jwtSecret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: ('Authentication failed. Wrong password.', req.body)});
          }
        });
      }
    });
  });
  
  module.exports = router;
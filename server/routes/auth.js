const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;

router.post('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ msg: 'Please pass username and password.' });
  } else {
    User.create({
      email: req.body.username,
      password: req.body.password,
    })
      .then(user => res.status(201).send(user))
      .catch(error => {
        res.status(400).send(error);
      });
  }
});

router.post('/signin', function(req, res) {
  User.find({
    where: {
      email: req.body.username,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: 'Authentication failed. User not found.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign(
            JSON.parse(JSON.stringify(user)),
            config.secret
          );
          res.json({ success: true, token: token });
        } else {
          res.status(401).send({
            success: false,
            msg: 'Authentication failed. Wrong password.',
          });
        }
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;

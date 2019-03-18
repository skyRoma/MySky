const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models').User;

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ msg: 'Please pass email and password.' });
  } else {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(user => res.status(201).send(user))
      .catch(error => {
        if ((error.parent.code = 23505)) {
          res
            .status(409)
            .send({ success: false, msg: 'This email is already taken.' });
        } else {
          res.status(400).send(error);
        }
      });
  }
});

router.post('/signin', function(req, res) {
  User.find({
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: 'Incorrect email or password.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const payload = {
            sub: user.id,
          };
          var token = jwt.sign(payload, config.secret);
          res.json({ success: true, token: token });
        } else {
          res.status(401).send({
            success: false,
            msg: 'Incorrect email or password.',
          });
        }
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;

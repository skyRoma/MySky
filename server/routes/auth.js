const env = process.env.NODE_ENV || 'development';
const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('../config/config')[env];
const userService = require('../services/user-service');

const router = express.Router();

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      success: false,
      msg: 'Пожалуйста введите адресс электронной почты и пароль.',
    });
  } else {
    userService
      .create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })
      .then(() =>
        res
          .status(201)
          .send({ success: true, msg: 'Вы успешно зарегистрировались.' })
      )
      .catch(error => {
        if ((error.parent.code = 23505)) {
          res.status(409).send({
            success: false,
            msg: 'Этот адресс электронной почты уже используется.',
          });
        } else {
          res.status(400).send(error);
        }
      });
  }
});

router.post('/signin', function(req, res) {
  userService
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          success: false,
          msg: 'Неправильный адрес электронной почты или пароль.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const payload = {
            sub: user.id,
          };
          const options = {
            expiresIn: 350,
          };

          var token = jwt.sign(payload, config.secret, options);
          res.json({ success: true, msg: token });
        } else {
          res.status(401).send({
            success: false,
            msg: 'Неправильный адрес электронной почты или пароль.',
          });
        }
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;

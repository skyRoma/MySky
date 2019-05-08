const env = process.env.NODE_ENV || 'development';
const express = require('express');
const jwt = require('jsonwebtoken');
const winston = require('../config/winston');

const config = require('../config/config')[env];
const userService = require('../services/user-service');
const httpCodes = require('../config/httpCodes');

const router = express.Router();

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(httpCodes.BAD_REQUEST).send({
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
          .status(httpCodes.CREATED)
          .send({ success: true, msg: 'Вы успешно зарегистрировались.' })
      )
      .catch(error => {
        if (error.parent && error.parent.code === '23505') {
          res.status(httpCodes.CONFLICT).send({
            success: false,
            msg: 'Этот адресс электронной почты уже используется.',
          });
        } else {
          winston.error(error);
          res.status(httpCodes.BAD_REQUEST).send(error);
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
        return res.status(httpCodes.UNAUTHORIZED).send({
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
            expiresIn: 750,
          };

          const token = jwt.sign(payload, config.secret, options);
          res.json({ success: true, msg: token });
        } else {
          res.status(httpCodes.UNAUTHORIZED).send({
            success: false,
            msg: 'Неправильный адрес электронной почты или пароль.',
          });
        }
      });
    })
    .catch(error => {
      winston.error(error);
      res.status(httpCodes.BAD_REQUEST).send(error);
    });
});

module.exports = router;

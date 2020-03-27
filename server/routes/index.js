const express = require('express');
const passport = require('passport');

const authRouter = require('./auth');
const jumpingDayRouter = require('./jumping-day');
const newsRouter = require('./news');
const responseHandler = require('../middlewares/responseHandler');
const userRouter = require('./user');
const weatherRouter = require('./weather');

const router = express.Router();

router.use('/auth', authRouter);

router.use(
  '/users',
  passport.authenticate('jwt', { session: false }),
  userRouter
);

router.use(
  '/weather',
  passport.authenticate('jwt', { session: false }),
  weatherRouter
);

router.use(
  '/news',
  passport.authenticate('jwt', { session: false }),
  newsRouter
);

router.use(
  '/jumping-days',
  passport.authenticate('jwt', { session: false }),
  jumpingDayRouter
);

router.get('/ping', responseHandler.handleSuccess(() => ({})));

module.exports = router;

const express = require('express');
const passport = require('passport');

const responseHandler = require('../middlewares/responseHandler');
const authRouter = require('./auth');
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

router.get('/ping', responseHandler.handleSuccess(() => ({})));

module.exports = router;

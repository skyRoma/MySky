const express = require('express');
const passport = require('passport');

const responseHandler = require('../middlewares/responseHandler');
const authRouter = require('./auth');
const poductRouter = require('./product');
const userRouter = require('./user');

const router = express.Router();

router.use('/auth', authRouter);
router.use(
  '/users',
  passport.authenticate('jwt', { session: false }),
  userRouter
);
router.use(
  '/products',
  passport.authenticate('jwt', { session: false }),
  poductRouter
);

router.get('/ping', responseHandler.handleSuccess(() => ({})));

module.exports = router;

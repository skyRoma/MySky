require('dotenv').config();
const db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const authRouter = require('./routes/auth');
const poductRouter = require('./routes/product');
const passport = require('passport');

db.User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'demo@demo.com',
  password: 'mockValue',
})
  .then(user =>
    user.comparePassword('mockValue1', (err, isMatch) => {
      if (isMatch) {
        console.log('MATCH!');
      } else {
        console.log('DO NOT MATCH');
      }
    })
  )
  .then(() =>
    db.User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      password: 'mockValue',
    })
  )
  .catch(err => console.log(err));

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use(
  '/products',
  passport.authenticate('jwt', { session: false }),
  poductRouter
);

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

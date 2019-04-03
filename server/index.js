require('dotenv').config();
// const db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./routes/auth');
const poductRouter = require('./routes/product');
const winston = require('./config/winston');
const passport = require('passport');
require('./middlewares/passport')(passport);

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

// db.User.create({
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'demo@demo1.com',
//   password: 'mockValue',
// })
//   .then(user =>
//     user.comparePassword('mockValue1', (err, isMatch) => {
//       if (isMatch) {
//         console.log('MATCH!');
//       } else {
//         console.log('DO NOT MATCH');
//       }
//     })
//   )
//   .then(() =>
//     db.User.create({
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'demo@demo.com',
//       password: 'mockValue',
//     })
//   )
//   .catch(err => console.log(err));

const app = express();

app.use(cors(corsOptions));
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use(
  '/products',
  passport.authenticate('jwt', { session: false }),
  poductRouter
);

app.listen(3000, () => {
  winston.info('Server is up on port 3000');
});

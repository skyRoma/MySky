require('dotenv').config();
const db = require('./models');

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
  .catch(err => console.log(err));

require('dotenv').config();
const db = require('./models');

db.User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'demo@demo.com',
}).catch(err => console.log(err));

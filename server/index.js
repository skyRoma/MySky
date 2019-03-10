require('dotenv').config();
const Sequelize = require('sequelize');

const connectionString = `postgres://${process.env.DB_USER}:${
  process.env.DB_PASS
}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

console.log(connectionString);

const sequelize = new Sequelize(connectionString, {
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

User.sync({ force: true }).then(() => {
  return User.create({
    firstName: 'John',
    lastName: 'Hancock',
  });
});

// User.findAll().then(users => {
//   console.log(users);
// });

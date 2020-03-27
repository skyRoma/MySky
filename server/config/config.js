require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASS,
    database: 'postgres',
    host: '127.0.0.1',
    secret: 'secret',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};

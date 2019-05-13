'use strict';

const { USERS } = require('./data/user');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', USERS);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

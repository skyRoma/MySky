'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com',
          password: 'mockValue',
          role: 'admin',
          id: uuidv4(),
        },
        {
          firstName: 'John2',
          lastName: 'Doe2',
          email: 'demo@demo2.com',
          password: 'mockValue',
          id: uuidv4(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

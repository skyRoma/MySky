'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Пользователь',
      },
      {
        name: 'Администратор',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Roles', null);
  },
};

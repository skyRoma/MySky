'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Администратор',
      },
      {
        name: 'Клиент',
      },
      {
        name: 'Cпортсмен',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Roles', null);
  },
};

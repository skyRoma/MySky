'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Клиент',
      },
      {
        name: 'Администратор',
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

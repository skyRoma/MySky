'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Parachutes', [
      {
        name: 'Д-5',
      },
      {
        name: 'Д-6',
      },
      {
        name: 'Юниор',
      },
      {
        name: 'Студент',
      },
      {
        name: 'Мальва',
      },
      {
        name: 'Парафойл',
      },
      {
        name: 'Тандем',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Parachutes', null);
  },
};

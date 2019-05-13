'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Aircrafts', [
      {
        name: 'Ан-2',
      },
      {
        name: 'ТВС-2МС',
      },
      {
        name: 'Як-52',
      },
      {
        name: 'Ми-2',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Aircrafts', null);
  },
};

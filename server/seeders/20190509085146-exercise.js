'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Exercises', [
      {
        name: 'Точность',
      },
      {
        name: 'Акробатика',
      },
      {
        name: 'Тандем',
      },
      {
        name: 'Десантный',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Exercises', null);
  },
};

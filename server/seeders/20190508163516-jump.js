'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Jumps', [
      {
        date: new Date(),
        exercise: 'Точность',
        parachute: 'Мальва',
        aircrafType: 'Ан-2',
        height: 1200,
        freeFallTime: 15,
        result: 23,
        userId: 'da074df9-75d0-4a60-8b4c-90a184aa1d67',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Jumps', null);
  },
};

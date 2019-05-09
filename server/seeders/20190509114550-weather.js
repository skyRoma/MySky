'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Weather', [
      {
        clouds: 40,
        windSpeed: 5,
        rain: false,
        snow: false,
        icon: '02d',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Weather', null);
  },
};

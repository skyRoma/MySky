'use strict';

const { DAYS } = require('./data/jumping-day');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('JumpingDays', DAYS);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('JumpingDays', null);
  },
};

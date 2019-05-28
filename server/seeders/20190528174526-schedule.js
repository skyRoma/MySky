'use strict';

const { SCHEDULE } = require('./data/schedule');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Schedule', SCHEDULE);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Schedule', null);
  },
};

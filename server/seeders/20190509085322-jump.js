'use strict';

const { JUMPS } = require('./data/jump');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Jumps', JUMPS);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Jumps', null);
  },
};

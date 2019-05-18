'use strict';

const { USER_IDS } = require('./data/user');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('News', [
      {
        authorId: USER_IDS[0],
        content: 'Внимани! Прыжковый сезон открыт!',
      },
      {
        authorId: USER_IDS[0],
        content:
          'Уважаемые клиенты! Обращаем ваше внимание, что в июле прыжки будут проводиться на аэроклубе Хожево, который находится в Молодечненском районе',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('News', null);
  },
};

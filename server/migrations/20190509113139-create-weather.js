'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      clouds: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      windSpeed: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rain: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      snow: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      temp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      icon: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('Weather');
  },
};

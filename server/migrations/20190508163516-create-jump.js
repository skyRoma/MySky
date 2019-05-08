'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jumps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      exercise: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      parachute: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      aircrafType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      height: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      freeFallTime: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      result: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        type: Sequelize.UUID,
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
    return queryInterface.dropTable('Jumps');
  },
};

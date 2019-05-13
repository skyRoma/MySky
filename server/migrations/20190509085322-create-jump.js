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
      exerciseId: {
        allowNull: false,
        references: {
          model: 'Exercises',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      parachuteId: {
        allowNull: false,
        references: {
          model: 'Parachutes',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      aircraftId: {
        allowNull: false,
        references: {
          model: 'Aircrafts',
          key: 'id',
        },
        type: Sequelize.INTEGER,
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
        type: Sequelize.STRING,
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

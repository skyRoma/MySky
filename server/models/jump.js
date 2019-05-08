'use strict';

module.exports = (sequelize, DataTypes) => {
  const Jump = sequelize.define('Jump', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    exercise: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    parachute: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    aircrafType: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    freeFallTime: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    result: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      type: DataTypes.UUID,
    },
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE,
    },
  });

  Jump.associate = function(models) {
    Jump.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Jump;
};

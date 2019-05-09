'use strict';

module.exports = (sequelize, DataTypes) => {
  const Aircraft = sequelize.define('Aircraft', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
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
  Aircraft.associate = function(models) {
    Aircraft.hasMany(models.Jump, {
      foreignKey: 'aircraftId',
    });
  };
  return Aircraft;
};

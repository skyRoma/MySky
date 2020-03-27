'use strict';

module.exports = (sequelize, DataTypes) => {
  const Parachute = sequelize.define('Parachute', {
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
  Parachute.associate = function(models) {
    Parachute.hasMany(models.Jump, {
      foreignKey: 'parachuteId',
    });
  };
  return Parachute;
};

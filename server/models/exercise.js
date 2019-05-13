'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
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
  Exercise.associate = function(models) {
    Exercise.hasMany(models.Jump, {
      foreignKey: 'exerciseId',
    });
  };
  return Exercise;
};

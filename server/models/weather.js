'use strict';

module.exports = (sequelize, DataTypes) => {
  const Weather = sequelize.define('Weather', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    clouds: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    windSpeed: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    rain: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    snow: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    temp: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    icon: {
      allowNull: false,
      type: DataTypes.STRING,
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

  return Weather;
};

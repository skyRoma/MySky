'use strict';

module.exports = (sequelize, DataTypes) => {
  const JumpingDay = sequelize.define('JumpingDay', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    date: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE,
    },
    size: {
      allowNull: false,
      defaultValue: 30,
      type: DataTypes.INTEGER,
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
  JumpingDay.associate = function(models) {
    JumpingDay.belongsToMany(models.User, {
      as: 'users',
      through: 'Schedule',
      foreignKey: 'jumpingDayId',
    });
  };
  return JumpingDay;
};

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
    exerciseId: {
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    parachuteId: {
      allowNull: false,
      references: {
        model: 'Parachutes',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    aircraftId: {
      allowNull: false,
      references: {
        model: 'Aircrafts',
        key: 'id',
      },
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING,
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
    Jump.belongsTo(models.Aircraft, {
      foreignKey: 'aircraftId',
    });
    Jump.belongsTo(models.Exercise, {
      foreignKey: 'exerciseId',
    });
    Jump.belongsTo(models.Parachute, {
      foreignKey: 'parachuteId',
    });
  };
  return Jump;
};

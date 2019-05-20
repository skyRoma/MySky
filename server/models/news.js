'use strict';

module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    'News',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      authorId: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        type: DataTypes.UUID,
      },
      content: {
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
    },
    {}
  );

  News.associate = function(models) {
    News.belongsTo(models.User, {
      foreignKey: 'authorId',
    });
  };
  return News;
};

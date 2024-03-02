const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});


module.exports = Category;
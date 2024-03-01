const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const User = require("./users");
const Habit = require("./habit");
const Category = require("./category");

const Task = sequelize.define("Task", {
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
    allowNull: true,
    type: DataTypes.STRING,
  },
  iconType: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  color: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  repeat: {
    allowNull: true,
    type: DataTypes.ENUM("none", "daily", "weekly", "monthly"),
  },
  repeatDays: {
    allowNull: true,
    type: DataTypes.STRING, // Ex: "monday,tuesday,wednesday"
  },
  repeatWeeks: {
    allowNull: true,
    type: DataTypes.STRING, // Ex: "1,2,3,4,5,6"
  },
  repeatMonths: {
    allowNull: true,
    type: DataTypes.STRING, // Ex: "1,14,31,15"
  },
  endDate: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  reminder: {
    allowNull: true,
    type: DataTypes.ENUM("morning", "afternoon", "evening", "all day"),
  },
  sound: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  is_completed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  completedDate: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  habitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Habit,
      key: "id",
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

Task.associate = (db) => {
  Task.belongsTo(User, { foreignKey: "userId" });
  Task.belongsTo(Habit, { foreignKey: "habitId" });
  Task.belongsTo(Category, { foreignKey: "categoryId" });
};

module.exports = Task;

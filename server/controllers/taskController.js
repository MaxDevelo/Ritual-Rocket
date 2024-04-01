const { Task } = require("../models");

const createTask = async (req, res) => {
  try {
    const { name, description, iconType, color, repeat, repeatDays, repeatWeeks, repeatMonths, endDate, reminder, sound, is_completed, rappelTime, completedDate, habitId, userId, categoryId, startDate } = req.body;
    const task = await Task.create({ 
      name, 
      description, 
      iconType, 
      color, 
      repeat, 
      repeatDays, 
      repeatWeeks, 
      repeatMonths, 
      startDate: new Date(startDate) || new Date(), 
      reminder, 
      sound, 
      is_completed, 
      completedDate, 
      HabitId: habitId, 
      UserId: userId, 
      CategoryId: categoryId,
      rappelTime,
      endDate: new Date(endDate) || new Date(),
    });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTasksByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const tasks = await Task.findAll({ where: { userId } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findByPk(taskId);
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const updatedTask = await Task.update(req.body, { where: { id: taskId } });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getTasksByUserId,
  getTaskById,
  updateTask,
  deleteTask,
  createTask,
  getAllTasks,
};

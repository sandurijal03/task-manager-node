import Task from '../models/Task';

export const getAllTask = (req, res, next) => {
  res.status(200).json('all tasks');
};

export const createTask = async (req, res, next) => {
  const { name, completed } = req.body;
  try {
    const newTask = await new Task({
      name,
      completed,
    });
    const task = await newTask.save();
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getTask = (req, res, next) => {};

export const updateTask = (req, res, next) => {};

export const removeTask = (req, res, next) => {};

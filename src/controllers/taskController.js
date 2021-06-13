import Task from '../models/Task';

export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
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
    return res.status(500).json({ msg: err });
  }
};

export const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

export const updateTask = (req, res, next) => {};

export const removeTask = (req, res, next) => {};

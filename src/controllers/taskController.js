import Task from '../models/Task';
import asyncWrapper from '../middlewares/async';

export const getAllTask = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  return res.status(200).json({ tasks, success: true, amount: tasks.length });
});

export const createTask = asyncWrapper(async (req, res, next) => {
  const { name, completed } = req.body;
  const newTask = await new Task({
    name,
    completed,
  });
  const task = await newTask.save();
  return res.status(200).json(task);
});

export const getTask = asyncWrapper(async (req, res, next) => {
  const { taskId } = req.params;

  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: 'No any task with that id' });
  }

  return res.status(200).json({ task });
});

export const updateTask = asyncWrapper(async (req, res, next) => {
  const { taskId } = req.params;

  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: 'No any task with that id' });
  }

  return res.status(200).json({ task });
});

export const removeTask = asyncWrapper(async (req, res, next) => {
  const { taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: 'No any task with that id' });
  }

  return res.status(200).json({ task });
});

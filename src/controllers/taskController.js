import Task from '../models/Task';

export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
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
    const { taskId } = req.params;

    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: 'No any task with that id' });
    }

    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

    if (!task) {
      return res.status(404).json({ msg: 'No any task with that id' });
    }

    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

export const removeTask = async (req, res, next) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: 'No any task with that id' });
    }

    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

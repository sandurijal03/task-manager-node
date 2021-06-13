import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const Task = model('Task', taskSchema);

export default Task;

import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'must provide name'],
    maxlength: [20, 'length of name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model('Task', taskSchema);

export default Task;

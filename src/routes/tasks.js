import { Router } from 'express';
import {
  createTask,
  getAllTask,
  getTask,
  removeTask,
  updateTask,
} from '../controllers/taskController';

const router = Router();

router.route('/').get(getAllTask).post(createTask);

router.route('/:taskId').get(getTask).patch(updateTask).delete(removeTask);

export default router;

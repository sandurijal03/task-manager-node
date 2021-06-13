import express from 'express';
import connectDB from './helpers/connectDB';
import tasksRouter from './routes/tasks';

const server = async () => {
  try {
    await connectDB();
    const app = express();
    app.use(express.json());

    app.use('/api/v1/tasks', tasksRouter);

    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`listening to server on port ${port}`));
  } catch (err) {
    console.error(`Failed to create to server ${err}`);
  }
};

server();

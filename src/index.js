import express from 'express';
import path from 'path';

import connectDB from './helpers/connectDB';
import notFound from './middlewares/not-found';
import tasksRouter from './routes/tasks';
import errorHandler from './middlewares/errorHandler';

const server = async () => {
  try {
    await connectDB();
    const app = express();
    app.use(express.json());
    app.use(express.static(path.join(__dirname, './public')));

    app.use('/api/v1/tasks', tasksRouter);
    app.use(notFound);
    app.use(errorHandler);

    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`listening to server on port ${port}`));
  } catch (err) {
    console.error(`Failed to create to server ${err}`);
  }
};

server();

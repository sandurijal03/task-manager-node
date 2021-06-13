import express from 'express';

const server = async () => {
  try {
    const app = express();
    app.get('/', (req, res) => {
      res.json('hello world');
    });

    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`listening to server on port ${port}`));
  } catch (err) {
    console.error(`Failed to create to server ${err}`);
  }
};

server();

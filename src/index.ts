import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
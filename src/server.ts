import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import cors from 'cors';
const wilderController = require('../controllers/wilders');
const app = express();
const router = express.Router();

// Database
mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/api/wilders', asyncHandler(wilderController.create));
router.get('/api/wilders', asyncHandler(wilderController.read));
router.put('/api/wilders', asyncHandler(wilderController.update));
router.delete('/api/wilders', asyncHandler(wilderController.delete));

app.get('*', (req, res) => {
  res.status(404);
  res.send({ success: false, message: 'Wrong adress' });
});

app.use((error:any, req:Request, res:Response) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    res.status(400);
    res.json({ success: false, message: 'The name is already used' });
  }
});

// Start Server
app.listen(3000, () => console.log('Server started on 3000'));

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import UserRoutes from './routes/user.route.js';



connectDB();

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', UserRoutes);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



export default app;
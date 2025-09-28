import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import UserRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import Captainrouter from './routes/captain.routes.js';



connectDB();

dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', UserRoutes);
app.use('/captains', Captainrouter);



app.get('/', (req, res) => {
  res.send('Hello, World!');
});



export default app;
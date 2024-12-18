import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import stripeRoutes from './routes/stripe/index.js';
import { AppError } from './utils/errors.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
// Use raw body for Stripe webhooks
app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
// Use JSON parser for other routes
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stripe', stripeRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      errors: err.errors,
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
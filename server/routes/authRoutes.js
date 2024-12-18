import express from 'express';
import { register, login, registerValidation, loginValidation } from '../controllers/authController.js';
import { validate } from '../middleware/validate.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = express.Router();

router.post('/register', registerValidation, validate, catchAsync(register));
router.post('/login', loginValidation, validate, catchAsync(login));

export default router;
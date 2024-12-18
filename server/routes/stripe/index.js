import express from 'express';
import checkoutRoutes from './checkout.js';
import webhookRoutes from './webhook.js';

const router = express.Router();

router.use('/checkout', checkoutRoutes);
router.use('/webhook', webhookRoutes);

export default router;
import express from 'express';
import { handleWebhookEvent } from '../../services/stripe/webhook.js';

const router = express.Router();

router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    try {
      await handleWebhookEvent(req.body);
      res.json({ received: true });
    } catch (err) {
      console.error('Webhook error:', err);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

export default router;
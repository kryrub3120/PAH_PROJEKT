import express from 'express';
import { validateCheckoutRequest } from './middleware/validateCheckout.js';
import { getProductById } from './services/productService.js';
import { createCheckoutSession } from './services/stripeService.js';

const router = express.Router();

// Change the route to match the client's request
router.post('/create-checkout-session', validateCheckoutRequest, async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await getProductById(productId);
    
    if (!product) {
      return res.status(404).json({ 
        error: 'Product not found',
        code: 'PRODUCT_NOT_FOUND'
      });
    }

    const session = await createCheckoutSession(product);
    res.json({ sessionId: session.id });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ 
      error: 'Payment processing failed',
      code: 'PAYMENT_FAILED'
    });
  }
});

export default router;
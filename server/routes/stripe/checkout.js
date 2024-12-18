import express from 'express';
import { validateCheckoutRequest } from '../../middleware/validateCheckout.js';
import { getProductById } from '../../services/productService.js';
import { createCheckoutSession } from '../../services/stripe/session.js';
import { handleStripeError } from '../../utils/errorHandlers.js';

const router = express.Router();

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
    handleStripeError(err, res);
  }
});
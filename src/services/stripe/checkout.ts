import { getStripeInstance } from './config';
import { stripeApi } from '../api/stripe';
import { StripeError, StripeSessionError } from './errors';

export const initiateCheckout = async (productId: string): Promise<void> => {
  try {
    // Validate productId
    if (!productId) {
      throw new StripeError('Invalid product ID');
    }

    // Get checkout session from our API
    const { sessionId } = await stripeApi.createCheckoutSession(productId);
    if (!sessionId) {
      throw new StripeSessionError('Invalid checkout session');
    }
    
    // Get Stripe instance
    const stripe = await getStripeInstance();
    if (!stripe) {
      throw new StripeError('Failed to initialize Stripe');
    }

    // Redirect to Stripe checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      throw new StripeError(error.message);
    }
  } catch (err) {
    console.error('Checkout error:', err);
    if (err instanceof StripeError) {
      throw err;
    }
    throw new StripeError('Payment processing failed. Please try again.');
  }
};
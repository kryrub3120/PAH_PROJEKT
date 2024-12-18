import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const createCheckoutSession = async (productId: string): Promise<void> => {
  try {
    const response = await axios.post('/api/stripe/checkout/create-checkout-session', {
      productId,
    });
    
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.data.sessionId,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.error('Stripe error:', err);
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.error || 'Payment failed');
    }
    throw new Error(err instanceof Error ? err.message : 'Payment failed');
  }
};
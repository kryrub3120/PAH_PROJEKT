import { loadStripe } from '@stripe/stripe-js';

let stripePromise: ReturnType<typeof loadStripe>;

export const getStripeInstance = () => {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    if (!key) {
      throw new Error('Stripe public key is not configured');
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};
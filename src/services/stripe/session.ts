import { StripeSessionError } from './errors';
import { validateCheckoutParams } from './validation';
import { getStripeInstance } from './config';
import { stripeApi } from '../api/stripe';
import type { CheckoutResponse } from './types';

export const createCheckoutSession = async (productId: string): Promise<CheckoutResponse> => {
  try {
    validateCheckoutParams(productId);
    
    const { sessionId } = await stripeApi.createCheckoutSession(productId);
    if (!sessionId) {
      throw new StripeSessionError('Invalid checkout session');
    }

    return { sessionId };
  } catch (err) {
    if (err instanceof StripeSessionError) {
      throw err;
    }
    throw new StripeSessionError(
      err instanceof Error ? err.message : 'Failed to create checkout session'
    );
  }
};

export const redirectToCheckout = async (sessionId: string): Promise<void> => {
  try {
    const stripe = await getStripeInstance();
    const { error } = await stripe.redirectToCheckout({ sessionId });
    
    if (error) {
      throw new StripeSessionError(error.message);
    }
  } catch (err) {
    throw new StripeSessionError(
      err instanceof Error ? err.message : 'Failed to redirect to checkout'
    );
  }
};
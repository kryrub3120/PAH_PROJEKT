import { StripeSessionError } from './errors';

export const validateCheckoutParams = (productId: string): void => {
  if (!productId) {
    throw new StripeSessionError('Product ID is required');
  }
  
  if (typeof productId !== 'string') {
    throw new StripeSessionError('Invalid product ID format');
  }
};
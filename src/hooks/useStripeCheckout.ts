import { useState } from 'react';
import { createCheckoutSession, redirectToCheckout } from '../services/stripe/session';
import type { StripeError } from '../services/stripe/errors';

interface UseStripeCheckout {
  isProcessing: boolean;
  error: string | null;
  initiateCheckout: (productId: string) => Promise<void>;
}

export const useStripeCheckout = (): UseStripeCheckout => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiateCheckout = async (productId: string): Promise<void> => {
    try {
      setIsProcessing(true);
      setError(null);

      const { sessionId } = await createCheckoutSession(productId);
      await redirectToCheckout(sessionId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    error,
    initiateCheckout,
  };
};
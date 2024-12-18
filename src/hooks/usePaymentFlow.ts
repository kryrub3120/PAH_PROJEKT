import { useState } from 'react';
import { initiateCheckout } from '../services/stripe/checkout';

export const usePaymentFlow = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async (productId: string) => {
    try {
      setIsProcessing(true);
      setError(null);
      await initiateCheckout(productId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    error,
    handlePurchase,
  };
};
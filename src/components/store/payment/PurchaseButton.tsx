import React from 'react';
import { Download, Loader } from 'lucide-react';
import { useStripeCheckout } from '../../../hooks/useStripeCheckout';
import { formatPrice } from '../../../utils/format';

interface PurchaseButtonProps {
  productId: string;
  price: number;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({
  productId,
  price,
}) => {
  const { initiateCheckout, isProcessing, error } = useStripeCheckout();

  const handlePurchase = async () => {
    try {
      await initiateCheckout(productId);
    } catch (err) {
      // Error is handled by the hook
      console.error('Purchase failed:', err);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handlePurchase}
        disabled={isProcessing}
        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Purchase Now ({formatPrice(price)})
          </>
        )}
      </button>
      {error && (
        <div 
          className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200" 
          role="alert"
        >
          <p className="font-medium">Payment Error</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
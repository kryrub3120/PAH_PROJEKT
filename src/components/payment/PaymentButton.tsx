import React from 'react';
import { FileText, Loader } from 'lucide-react';

interface PaymentButtonProps {
  onPayment: () => Promise<void>;
  price: string;
  isLoading?: boolean;
  disabled?: boolean;
  t: any;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  onPayment,
  price,
  isLoading = false,
  disabled = false,
  t,
}) => {
  return (
    <button
      onClick={onPayment}
      disabled={isLoading || disabled}
      className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader className="w-5 h-5 mr-2 animate-spin" />
      ) : (
        <FileText className="w-5 h-5 mr-2" />
      )}
      {t.getPdfReport} ({price})
    </button>
  );
};
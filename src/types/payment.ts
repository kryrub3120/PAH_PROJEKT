export type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';

export interface PaymentError {
  message: string;
  code?: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
}
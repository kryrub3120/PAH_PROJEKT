export interface StripeSession {
  id: string;
  url: string;
}

export interface StripeError {
  type: string;
  message: string;
}

export interface CheckoutResponse {
  sessionId: string;
  error?: StripeError;
}
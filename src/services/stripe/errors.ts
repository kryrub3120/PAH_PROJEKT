export class StripeError extends Error {
  constructor(
    message: string,
    public code: string = 'STRIPE_ERROR',
    public status: number = 500
  ) {
    super(message);
    this.name = 'StripeError';
  }
}

export class StripeConfigError extends StripeError {
  constructor(message: string) {
    super(message, 'STRIPE_CONFIG_ERROR', 500);
  }
}

export class StripeSessionError extends StripeError {
  constructor(message: string) {
    super(message, 'STRIPE_SESSION_ERROR', 400);
  }
}
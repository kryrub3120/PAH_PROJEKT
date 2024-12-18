export const handleStripeError = (err, res) => {
  console.error('Stripe error:', err);

  // Handle specific Stripe errors
  if (err.type === 'StripeCardError') {
    return res.status(402).json({
      error: err.message,
      code: 'CARD_ERROR'
    });
  }

  if (err.type === 'StripeInvalidRequestError') {
    return res.status(400).json({
      error: 'Invalid request to payment service',
      code: 'INVALID_REQUEST'
    });
  }

  // Generic error response
  res.status(500).json({
    error: 'Payment processing failed',
    code: 'PAYMENT_FAILED'
  });
};
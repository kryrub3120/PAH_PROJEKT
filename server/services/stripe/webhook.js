import Stripe from 'stripe';
import { STRIPE_CONFIG } from '../../config/stripe.js';

const stripe = new Stripe(STRIPE_CONFIG.secretKey);

export const handleWebhookEvent = async (event) => {
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutComplete(event.data.object);
      break;
    // Add more event handlers as needed
  }
};

const handleCheckoutComplete = async (session) => {
  // Implement order fulfillment logic here
  console.log('Payment successful:', session);
};
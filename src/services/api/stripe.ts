import axios from 'axios';

export const stripeApi = {
  createCheckoutSession: async (productId: string) => {
    try {
      const { data } = await axios.post('/api/stripe/checkout/create-checkout-session', {
        productId,
      });
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data?.error || 'Payment service unavailable');
      }
      throw err;
    }
  },
};
export const STRIPE_CONFIG = {
  publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
  successUrl: '/store/success',
  cancelUrl: '/store/cancel',
  currency: 'usd',
};
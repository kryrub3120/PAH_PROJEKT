import { stripe } from '../../config/stripe.js';

export const createCheckoutSession = async (product) => {
  if (!product?.price || !product?.title) {
    throw new Error('Invalid product data');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.title,
              description: product.description,
              images: product.coverImage ? [product.coverImage] : undefined,
            },
            unit_amount: Math.round(product.price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/store/cancel`,
      metadata: {
        productId: product.id,
      },
    });

    return session;
  } catch (err) {
    console.error('Stripe session creation error:', err);
    throw err;
  }
};
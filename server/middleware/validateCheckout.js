export const validateCheckoutRequest = (req, res, next) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      error: 'Product ID is required',
      code: 'INVALID_REQUEST'
    });
  }

  next();
};
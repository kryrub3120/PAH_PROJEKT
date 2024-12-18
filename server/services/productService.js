import { products } from '../data/products.js';

export const getProductById = async (id) => {
  return products.find(p => p.id === id) || null;
};
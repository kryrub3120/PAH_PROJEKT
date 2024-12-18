import { useState, useEffect } from 'react';
import { Product } from '../types/store';
import { products } from '../data/products';

export const useProduct = (slug: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundProduct = products.find(p => p.slug === slug);
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        setProduct(foundProduct);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        setIsLoading(false);
      }
    };

    if (slug) {
      loadProduct();
    }
  }, [slug]);

  return {
    product,
    isLoading,
    error,
  };
};
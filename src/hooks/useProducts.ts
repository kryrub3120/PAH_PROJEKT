import { useState, useEffect } from 'react';
import { Product } from '../types/store';
import { products } from '../data/products';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
  };
};
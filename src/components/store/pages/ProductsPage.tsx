import React from 'react';
import { ProductGrid } from '../products/ProductGrid';
import { useProducts } from '../../../hooks/useProducts';

export const ProductsPage: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Digital Products</h1>
      {isLoading ? (
        <div className="text-center py-12">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-600 py-12">{error}</div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};
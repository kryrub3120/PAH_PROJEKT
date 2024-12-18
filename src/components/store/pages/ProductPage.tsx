import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useProduct } from '../../../hooks/useProduct';
import { formatPrice } from '../../../utils/format';
import { PurchaseButton } from '../payment/PurchaseButton';

export const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { product, isLoading, error } = useProduct(slug);

  if (isLoading) {
    return <div className="text-center py-12">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="text-center text-red-600 py-12">
        {error || 'Product not found'}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/store')}
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <div className="prose prose-blue max-w-none mb-8">
            {product.description}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-blue-600">
              {formatPrice(product.price)}
            </span>
            <PurchaseButton 
              productId={product.id}
              price={product.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
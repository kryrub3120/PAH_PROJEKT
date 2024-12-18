import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Product } from '../../../types/store';
import { formatPrice } from '../../../utils/format';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link to={`/store/products/${product.slug}`}>
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <Link 
          to={`/store/products/${product.slug}`}
          className="block mb-2 hover:text-blue-600 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          <Link
            to={`/store/products/${product.slug}`}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
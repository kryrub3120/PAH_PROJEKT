import React from 'react';
import { Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EbookCardProps {
  title: string;
  description: string;
  price: string;
  coverImage: string;
  buttonText: string;
  slug: string;
}

export const EbookCard: React.FC<EbookCardProps> = ({
  title,
  description,
  price,
  coverImage,
  buttonText,
  slug,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/store/products/${slug}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row">
        {/* Cover Image */}
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              {price}
            </span>
            <button
              onClick={handleClick}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
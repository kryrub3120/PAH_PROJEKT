import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&h=800"
                alt="Dr. Krystian Rubajczyk"
                className="relative rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Meet Dr. Krystian Rubajczyk
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the work and innovations of Dr. Krystian Rubajczyk in sports science. 
              Learn how his research and tools are transforming athletic performance and training methods.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Learn More About Dr. Rubajczyk
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { RulerIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <RulerIcon className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Height Predictor</span>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Sports&Science Consulting</p>
              <p>Krystian Rubajczyk</p>
              <p>NIP: 8311612577</p>
              <p>REGON: 362484204</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-gray-600 hover:text-blue-600">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@heightpredictor.com" className="hover:text-blue-600">
                  contact@heightpredictor.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Poland</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Sports&Science Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
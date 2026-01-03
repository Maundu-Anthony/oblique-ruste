import React, { useState } from 'react';
import logo from '../images/logo/logo.jpeg';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src={logo} alt="OBLIQUE-RUSTE" className="h-16 w-auto" />
            <span className="text-2xl font-black uppercase tracking-tighter">OBLIQUE-RUSTE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center ml-auto mr-8">
            <a href="#clothing" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Clothing
            </a>
            <a href="#shoes" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Shoes
            </a>
            <a href="#caps" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
              Caps
            </a>
            <a href="#sale" className="text-red-600 hover:text-red-700 font-bold uppercase tracking-wide text-sm">
              Sale
            </a>
          </div>

          {/* Cart & Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-black">
            <div className="flex flex-col space-y-4">
              <a href="#clothing" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
                Clothing
              </a>
              <a href="#shoes" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
                Shoes
              </a>
              <a href="#caps" className="text-urban-black hover:text-gray-600 font-semibold uppercase tracking-wide text-sm">
                Caps
              </a>
              <a href="#sale" className="text-red-600 hover:text-red-700 font-bold uppercase tracking-wide text-sm">
                Sale
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

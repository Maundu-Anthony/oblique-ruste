import React, { useState } from 'react';
import logo from '../images/logo/logo.jpeg';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b-4 border-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4 group">
            <div className="relative">
              <img src={logo} alt="OBLIQUE-RUSTE" className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-3xl font-black uppercase tracking-tighter group-hover:tracking-tight transition-all duration-300 text-white">OBLIQUE-RUSTE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center ml-auto mr-10">
            <a href="#clothing" className="relative text-white hover:text-gray-300 font-black uppercase tracking-wider text-sm group">
              Clothing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#shoes" className="relative text-white hover:text-gray-300 font-black uppercase tracking-wider text-sm group">
              Shoes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#caps" className="relative text-white hover:text-gray-300 font-black uppercase tracking-wider text-sm group">
              Caps
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#sale" className="relative text-red-500 hover:text-red-400 font-black uppercase tracking-wider text-sm animate-pulse group">
              ⚡ Sale
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Cart & Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-3 hover:bg-white hover:text-black transition-all duration-300 border-2 border-transparent hover:border-white group text-white"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-black border-2 border-black shadow-lg group-hover:animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
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
          <div className="md:hidden py-4 border-t-2 border-white">
            <div className="flex flex-col space-y-4">
              <a href="#clothing" className="text-white hover:text-gray-300 font-semibold uppercase tracking-wide text-sm">
                Clothing
              </a>
              <a href="#shoes" className="text-white hover:text-gray-300 font-semibold uppercase tracking-wide text-sm">
                Shoes
              </a>
              <a href="#caps" className="text-white hover:text-gray-300 font-semibold uppercase tracking-wide text-sm">
                Caps
              </a>
              <a href="#sale" className="text-red-500 hover:text-red-400 font-bold uppercase tracking-wide text-sm">
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

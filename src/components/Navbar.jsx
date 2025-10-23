import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo - Left */}
          <div className="flex items-center w-1/4">
            <Link to="/" className="flex-linear-0 group">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent 
                group-hover:from-purple-500 group-hover:to-blue-400 transition-all duration-300">
                Logo
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center w-2/4">
            <div className="flex space-x-1">
              <Link to="/" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
                backdrop-blur-sm transition-all duration-200 font-medium">
                Home
              </Link>
              <Link to="/about"  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
                backdrop-blur-sm transition-all duration-200 font-medium">
                About
              </Link>
              <Link to="/skills" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
                backdrop-blur-sm transition-all duration-200 font-medium">
                Skills
              </Link>
              <Link to="/projects" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
                backdrop-blur-sm transition-all duration-200 font-medium">
                Projects
              </Link>
            </div>
          </div>

          {/* Contact - Right */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            <Link to="/contact" className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 
              transition-all duration-200 font-medium shadow-lg shadow-blue-500/20">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 
                hover:text-white hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50">
            <Link to="/" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
              transition-all duration-200 font-medium">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
              transition-all duration-200 font-medium">
              About
            </Link>
            <Link to="/skills" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
              transition-all duration-200 font-medium">
              Skills
            </Link>
            <Link to="/projects" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 
              transition-all duration-200 font-medium">
              Projects
            </Link>
            <Link to="/contact" className="block px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 
              transition-all duration-200 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
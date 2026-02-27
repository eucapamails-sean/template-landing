import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <span>ABOS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-700 hover:text-primary font-medium">
            Services
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-primary font-medium">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-primary font-medium">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="bg-secondary hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link href="#services" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="bg-secondary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-center transition duration-300"
              onClick={toggleMenu}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
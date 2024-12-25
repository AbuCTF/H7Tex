


import React, { useState } from 'react';
import { Terminal, Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="border-b border-green-800 p-4 fixed top-0 left-0 right-0 bg-black z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Terminal size={24} />
            <span className="text-xl font-mono">H7Tex</span>
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6 font-mono">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#achievements" className="hover:text-white">
              Achievements
            </a>
            <a href="#timeline" className="hover:text-white">
              Timeline
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a
              href="https://ctftime.org/team/281844"
              className="hover:text-white"
            >
              CTFTime
            </a>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`sm:hidden bg-black text-white font-mono space-y-4 p-4 absolute top-full left-0 w-full transition-transform duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#about" className="block hover:text-green-500">
            About
          </a>
          <a href="#achievements" className="block hover:text-green-500">
            Achievements
          </a>
          <a href="#timeline" className="block hover:text-green-500">
            Timeline
          </a>
          <a href="#team" className="block hover:text-green-500">
            Team
          </a>
          <a
            href="https://ctftime.org/team/281844"
            className="block hover:text-green-500"
          >
            CTFTime
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



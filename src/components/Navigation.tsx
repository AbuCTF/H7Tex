// components/Navigation.tsx
'use client';
import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#team', label: 'Team' },
    { href: 'https://ctftime.org/team/281844', label: 'CTFTime' }
  ];

  return (
    <nav className="border-b border-green-800 p-4 relative z-20 bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Terminal size={24} className="text-green-500" />
            <span className="text-xl font-mono">H7Tex</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-mono">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-green-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-500 hover:text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black border-b border-green-800">
            <div className="py-2 px-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 hover:text-green-400 transition-colors font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
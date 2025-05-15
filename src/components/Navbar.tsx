
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "בית", href: "#home" },
    { text: "מי אני", href: "#about" },
    { text: "גלריה", href: "#gallery" },
    { text: "צור קשר", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-rabbi-dark text-rabbi-beige py-2" : "bg-transparent text-rabbi-beige py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-frank">רב החופה</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="hover:text-rabbi-beige transition-colors pb-1 border-b-2 border-transparent hover:border-rabbi-beige"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out bg-rabbi-dark w-64 p-8",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <button 
            className="absolute top-4 right-4 text-rabbi-beige" 
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col gap-6 mt-16">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="text-rabbi-beige text-xl hover:text-rabbi-beige/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

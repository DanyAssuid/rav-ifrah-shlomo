
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        scrolled ? "bg-rabbi-dark/95 backdrop-blur-sm shadow-md text-rabbi-beige py-3" : "bg-gradient-to-b from-rabbi-dark/80 to-transparent text-rabbi-beige py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-frank text-rabbi-beige gold-text-shadow">רב החופה</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-rabbi-dark/90 p-2 rounded-full hover:bg-rabbi-darkGray transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="תפריט"
        >
          <Menu size={24} className="text-rabbi-beige" />
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="text-lg font-medium hover:text-rabbi-beige transition-colors pb-1 border-b-2 border-transparent hover:border-rabbi-beige relative group"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rabbi-beige transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity duration-300 ease-in-out flex md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="bg-rabbi-dark h-full w-64 p-8 shadow-2xl relative flex flex-col">
            <button 
              className="absolute top-4 right-4 text-rabbi-beige bg-rabbi-darkGray/50 p-2 rounded-full hover:bg-rabbi-darkGray transition-colors" 
              onClick={() => setIsOpen(false)}
              aria-label="סגור תפריט"
            >
              <X size={20} />
            </button>
            
            <div className="mt-16 mb-6 text-center">
              <a href="#" className="text-2xl font-bold font-frank text-rabbi-beige gold-text-shadow">רב החופה</a>
            </div>
            
            <ul className="flex flex-col gap-6 items-center">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full">
                  <a 
                    href={link.href}
                    className="block text-rabbi-beige text-xl text-center font-medium py-3 border-b border-rabbi-beige/20 hover:bg-rabbi-beige/10 transition-colors rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto text-center text-rabbi-beige/60 text-sm">
              <p>© {new Date().getFullYear()} רב החופה</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

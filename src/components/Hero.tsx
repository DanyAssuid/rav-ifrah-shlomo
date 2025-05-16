
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 bg-rabbi-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat gradient-overlay"
          style={{ 
            backgroundImage: "url('/lovable-uploads/cf1f18d1-8770-47c9-ad0b-f66ab495176b.png')",
          }}
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="reveal text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-frank gold-text-shadow">
          טקסי חופה וקידושין
        </h1>
        <p className="reveal text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-rabbi-beige">
          טקס חתונה מסורתי ואישי המותאם לכם ולאמונתכם
        </p>
        <div className="reveal flex justify-center">
          <Button 
            asChild 
            className="bg-rabbi-beige text-rabbi-dark hover:bg-white hover:text-rabbi-dark font-medium text-base px-8 py-6"
          >
            <a href="#contact">צור קשר</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white">
          <span className="mb-1">לחצו למטה</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

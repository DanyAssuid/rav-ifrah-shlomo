
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import BackgroundDecoration from '@/components/BackgroundDecoration';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <BackgroundDecoration /> */}
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

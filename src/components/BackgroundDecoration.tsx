
import React from 'react';

const BackgroundDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <img
          src="/lovable-uploads/cf1f18d1-8770-47c9-ad0b-f66ab495176b.png"
          alt=""
          className="absolute top-0 right-0 w-1/3 h-auto object-contain"
        />
        <img
          src="/lovable-uploads/6f9ea102-37b5-4835-86fc-f73d9c83a0fe.png"
          alt=""
          className="absolute bottom-10 left-0 w-1/4 h-auto object-contain rotate-12"
        />
        <img
          src="/lovable-uploads/eeb0e37d-dba3-4fae-aeb1-3b01bcd3ae10.png"
          alt=""
          className="absolute top-1/4 left-10 w-1/5 h-auto object-contain opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rabbi-beige to-transparent opacity-70"></div>
      </div>
    </div>
  );
};

export default BackgroundDecoration;

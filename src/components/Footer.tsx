
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rabbi-dark text-rabbi-beige py-8 border-t border-rabbi-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold font-frank mb-1">רב החופה</h3>
            <p className="text-rabbi-beige/70 text-sm">טקסי חופה וקידושין לפי דת ישראל</p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-rabbi-beige/70">© {currentYear} כל הזכויות שמורות</p>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-sm border-t border-rabbi-beige/10 text-rabbi-beige/50">
          <p>האתר עוצב בהשראת הדת היהודית העשירה והערכים שמלווים את טקסי החופה וקידושין</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

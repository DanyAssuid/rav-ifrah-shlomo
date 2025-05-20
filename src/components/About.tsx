
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">מי אני</h2>
          <div className="w-24 h-1 bg-rabbi-beige mx-auto reveal"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/3cf74cff-2872-4716-a6b2-a1cf004868e5.png" 
                alt="רב החופה" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold reveal">הרב שלמה יפרח</h3>
            <p className="reveal">
              שלום וברכה!
            </p>
            <p className="reveal">
              שמי הרב שלמה, רב מוסמך ביראת שמיים ובלב אוהב, העוסק זה למעלה מחמש עשרה שנה בקיום טקסי חופה וקידושין לכלל ישראל — מהצפון ועד הדרום.
            </p>
            <p className="reveal">
              במהלך השנים זכיתי ללוות זוגות רבים ביום חופתם, יום שמחת לבם, מתוך תחושת שליחות עמוקה והכרה בקדושת הרגע. בעיניי, טקס החופה איננו רק מעמד פורמלי, אלא מיזוג נשמות, פתיחת שער לברכה ולבניין עדי עד, על פי תפארת הדת היהדות.
            </p>
            <p className="reveal">
              אני מאמין שטקס החופה צריך להיות נאמן להלכה , אך גם לשקף את עולמם הפנימי של החתן והכלה. מתוך אהבה לתורה ואהבה לאדם, אני מקפיד ליצור חוויה מרגשת, מכבדת, מותאמת אישית – כזו שתישאר בלב הזוג לעד.
              אם גם אתם חפצים בטקס חופה שהוא מרומם, מרגש, וחדור קדושה – אשמח להיות לכם לעזר ולברכה.
            </p>
            <div className="pt-4 reveal">
              <a href="#contact" className="btn-primary">בואו נדבר</a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-rabbi-beige/20 rounded-lg p-6 text-center reveal">
              <div className="font-bold text-3xl md:text-4xl mb-2">
                {index === 0 ? "15+" : index === 1 ? "500+" : index === 2 ? "100%" : "תמיד"}
              </div>
              <div>
                {index === 0 ? "שנות ניסיון" : index === 1 ? "זוגות מאושרים" : index === 2 ? "שביעות רצון" : "פנוי לשאלות"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

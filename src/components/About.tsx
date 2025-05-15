
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
            <h3 className="text-2xl font-bold reveal">הרב שלמה ישראלי</h3>
            <p className="reveal">
              שלום וברכה! אני הרב שלמה, רב מוסמך המתמחה בעריכת טקסי חופה וקידושין לזוגות מכל רחבי הארץ. 
              יותר מ-15 שנות ניסיון בליווי זוגות ביום המיוחד בחייהם הביאו אותי להבנה עמוקה של חשיבות הרגע.
            </p>
            <p className="reveal">
              אני מאמין כי טקס החופה צריך לשקף את הערכים האישיים של הזוג יחד עם המסורת היהודית העשירה. 
              הגישה שלי מתאפיינת באיזון בין כבוד למסורת לבין התאמה אישית לכל זוג וזוג.
            </p>
            <p className="reveal">
              מעבר להסמכה הרבנית הרשמית, אני בעל תואר בלימודי יהדות ופילוסופיה, המאפשר לי להביא עומק ומשמעות לטקס החתונה שלכם.
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
                {index === 0 ? "15+" : index === 1 ? "500+" : index === 2 ? "100%" : "24/7"}
              </div>
              <div>
                {index === 0 ? "שנות ניסיון" : index === 1 ? "זוגות מאושרים" : index === 2 ? "שביעות רצון" : "זמינות לכל שאלה"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

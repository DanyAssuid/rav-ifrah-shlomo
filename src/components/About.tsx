
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
          
          <div className="space-y-4">
            <div className="reveal leading-relaxed text-base">
              <p>
                שלום וברכה
              </p>
              <p>
                שמי הרב שלמה יפרח
              </p>
              <p>
                רב קהילת אורות קרית השרון נתניה.
              </p>
              <p>
                ר"מ בישיבת אורות נתניה
              </p>
              <p>
                מוסמך מהרבנות הראשית לישראל לעריכת חופות.
              </p>
              
              <p>
                ב"ה עוסק שנים בעריכת טקסי חופות וקידושין בשפה העברית, אנגלית וצרפתית.
              </p>
              
              <p>
                אני זוכה ללוות זוגות ביום חופתם, יום שמחת ליבם מתוך תחושת שליחות עמוקה והכרה בקדושת הרגע של מיזוג נשמות לבניית בית בישראל.
              </p>
              
              <p>
                לחתן והכלה יש אפשרות לקיים פגישת הכרות מקדימה לתאום ציפיות, שילוב אלמנטים וסיפורים אישיים ומרגשים של הזוג שיצרו חופה ייחודית ושמחה שיכבשו את לב האורחים.
              </p>
              
              <p>
                כמו כן כהכנה לחופה הזוג מקבל הדרכה מפורטת וקלה בעניינים הקשורים לרבנות,
              </p>
              
              <p>
                ההכרות מאפשרת לי להיות קשוב לצרכים של הזוג ביום המאושר, לערוך חופה יחודית ובלתי נשכחת.
              </p>
              
              <p className="font-bold text-rabbi-beige text-lg">
                מזל טוב !
              </p>
            </div>
            
            <div className="pt-2 reveal">
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

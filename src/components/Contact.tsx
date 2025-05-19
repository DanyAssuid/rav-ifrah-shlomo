
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Phone, MapPin } from 'lucide-react';
import { sendContactEmail } from '@/services/EmailService';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // If user starts typing again after submission, enable the button again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitted(true);
      await sendContactEmail(formData);
      
      // Show success toast with green styling
      toast({
        title: "טופס נשלח בהצלחה!",
        description: "ניצור איתך קשר בהקדם.",
        className: "bg-green-50 border-green-200 text-green-800",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
      
      // Scroll to top of page
      scrollToTop();
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסו שוב מאוחר יותר.",
        variant: "destructive"
      });
      
      // Enable the button again if there was an error
      setIsSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-rabbi-dark text-rabbi-beige">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">צור קשר</h2>
          <div className="w-24 h-1 bg-rabbi-beige mx-auto reveal"></div>
          <p className="mt-4 max-w-2xl mx-auto reveal">
            מעוניינים לשמוע פרטים נוספים? אשמח לענות על כל שאלה ולהציע את השירות הטוב ביותר עבורכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border bg-transparent border-rabbi-beige/30 focus:border-rabbi-beige outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-1">דוא״ל</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border bg-transparent border-rabbi-beige/30 focus:border-rabbi-beige outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded border bg-transparent border-rabbi-beige/30 focus:border-rabbi-beige outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block mb-1">תאריך חתונה משוער</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded border bg-transparent border-rabbi-beige/30 focus:border-rabbi-beige outline-none transition-colors text-rabbi-beige"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded border bg-transparent border-rabbi-beige/30 focus:border-rabbi-beige outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full bg-rabbi-beige text-rabbi-dark transition-colors py-3 rounded font-bold ${
                  isSubmitted 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-rabbi-beige/90'
                }`}
              >
                {isSubmitted ? 'נשלח בהצלחה' : 'שלח הודעה'}
              </button>
            </form>
          </div>

          <div className="reveal space-y-8">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/d5f6e033-6e48-49ce-b906-fde0905f23f2.png" 
                alt="הרב שלמה יפרח" 
                className="max-w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">פרטי התקשרות</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="min-w-[24px]" size={24} />
                  <a href="tel:+97252-2725501" className="hover:text-white transition-colors" style={{ direction: 'ltr' }}>+972 52-2725501</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="min-w-[24px]" size={24} />
                  <span>נתניה, ישראל</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>ימים א׳-ה׳:</span>
                  <span>09:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

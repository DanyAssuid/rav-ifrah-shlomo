
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, send the form data to a server
    console.log(formData);
    toast({
      title: "טופס נשלח בהצלחה!",
      description: "ניצור איתך קשר בהקדם.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    });
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
                className="w-full bg-rabbi-beige text-rabbi-dark hover:bg-rabbi-beige/90 transition-colors py-3 rounded font-bold"
              >
                שלח הודעה
              </button>
            </form>
          </div>

          <div className="reveal space-y-8">
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

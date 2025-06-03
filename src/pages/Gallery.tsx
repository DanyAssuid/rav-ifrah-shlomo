
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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

  // Toutes les images de la galerie - anciennes et nouvelles
  const galleryImages = [
    // Anciennes images
    "/lovable-uploads/6f9ea102-37b5-4835-86fc-f73d9c83a0fe.png",
    "/lovable-uploads/write.jpg",
    "/lovable-uploads/eeb0e37d-dba3-4fae-aeb1-3b01bcd3ae10.png",
    "/lovable-uploads/image1.jpg",
    "/lovable-uploads/image2.jpg",
    "/lovable-uploads/image3.jpg",
    // Nouvelles images ajoutées
    "/lovable-uploads/d7948eb4-e5f6-4db7-86c7-1d7bd0821a79.png",
    "/lovable-uploads/6d8bfeb5-929e-4069-b76b-658873834dbe.png",
    "/lovable-uploads/4fb93998-1cac-4348-8f23-786c2292bfcf.png",
    "/lovable-uploads/d7b8f0fa-41ba-47d6-87ef-ce4e273c9363.png",
    "/lovable-uploads/7f775025-322a-43e1-a9ea-0aab8851b614.png",
    "/lovable-uploads/2e990953-9a7e-48e5-8f2f-e0464e54c895.png",
    "/lovable-uploads/82ace931-6a99-4a88-a0eb-ea69d797da9d.png",
    "/lovable-uploads/635ba545-1d7c-496c-90e4-01eada23b0f8.png",
    "/lovable-uploads/b1c6d12c-14c9-47b1-ae2f-afade2627135.png",
    "/lovable-uploads/bdcd480d-b10c-411b-8db9-b7a4a1cb8655.png"
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-rabbi-lightBeige">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-rabbi-beige/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal text-rabbi-dark">גלריית חופות</h1>
              <div className="w-24 h-1 bg-rabbi-dark mx-auto reveal"></div>
              <p className="mt-6 max-w-3xl mx-auto text-lg reveal text-rabbi-dark">
                אוסף תמונות מטקסי חופה וקידושין שערכתי לאורך השנים - רגעים קסומים של אהבה, שמחה וקדושה
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer relative reveal hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                  onClick={() => openImageModal(image)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <img
                    src={image}
                    alt={`טקס חופה ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="text-white text-lg font-medium">צפייה מורחבת</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 reveal">
              <p className="text-lg text-rabbi-dark/80 max-w-2xl mx-auto">
                כל תמונה מספרת סיפור של אהבה ושמחה. אשמח לערוך לכם טקס חופה מרגש ומיוחד שישאר בזיכרון לעד.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl bg-rabbi-dark p-1 border-0">
          <img
            src={selectedImage}
            alt="תמונת חופה מורחבת"
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;

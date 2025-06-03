
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';

const Gallery = () => {
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

  // Images d'aperçu pour la page d'accueil (sélection réduite)
  const previewImages = [
    "/lovable-uploads/d7948eb4-e5f6-4db7-86c7-1d7bd0821a79.png",
    "/lovable-uploads/4fb93998-1cac-4348-8f23-786c2292bfcf.png",
    "/lovable-uploads/b1c6d12c-14c9-47b1-ae2f-afade2627135.png",
    "/lovable-uploads/6f9ea102-37b5-4835-86fc-f73d9c83a0fe.png",
    "/lovable-uploads/write.jpg",
    "/lovable-uploads/bdcd480d-b10c-411b-8db9-b7a4a1cb8655.png",
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-rabbi-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">גלריית חופות</h2>
          <div className="w-24 h-1 bg-rabbi-dark mx-auto reveal"></div>
          <p className="mt-4 max-w-2xl mx-auto reveal">
            רגעים קסומים מטקסי חופות שערכתי, המשקפים את האהבה והרגע המיוחד
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer relative reveal hover:scale-[1.02] transition-transform duration-300"
              onClick={() => openImageModal(image)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image}
                alt={`חופה ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white text-lg">צפייה מורחבת</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Link 
            to="/gallery"
            className="btn-primary inline-block"
          >
            צפייה בגלריה המלאה
          </Link>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-rabbi-dark p-1 border-0">
          <img
            src={selectedImage}
            alt="תמונת חופה מורחבת"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

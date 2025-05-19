
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

  // Updated gallery images - added new uploaded images and replaced some existing ones
  const galleryImages = [
    "/lovable-uploads/6f9ea102-37b5-4835-86fc-f73d9c83a0fe.png", // Added shofar blowing image
    "/lovable-uploads/write.jpg",
    "/lovable-uploads/eeb0e37d-dba3-4fae-aeb1-3b01bcd3ae10.png", // Kept previously added image
    "/lovable-uploads/image1.jpg",
    "/lovable-uploads/image2.jpg",
    "/lovable-uploads/image3.jpg",

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
            רגעים קסומים מטקסי חופות שערכתי, המשקפים את האהבה, המסורת והרגע המיוחד
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
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

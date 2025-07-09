import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/17019910/pexels-photo-17019910.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Doces decorados em formato de coração"
    },
    {
      src: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Doces variados em uma mesa escura"
    },
    {
      src: "https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bandeja de brigadeiros e beijinhos coloridos"
    },
    {
      src: "https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Doces finos decorados para casamento"
    },
    {
      src: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mesa cheia de cupcakes coloridos"
    },
    {
      src: "https://images.pexels.com/photos/21581347/pexels-photo-21581347.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Chocolate doce em destaque"
    },
    {
      src: "https://images.pexels.com/photos/10510747/pexels-photo-10510747.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bombons de chocolate artesanal"
    },
    {
      src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bolo de chocolate com morangos frescos em cima"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-6">
            Nossa Galeria
          </h2>
          <div className="w-20 h-1 bg-pink-400 rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos e se inspire para sua próxima encomenda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {/* Nenhuma legenda */}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                {/* Nenhuma legenda */}
                <p className="text-sm opacity-75">{selectedImage + 1} de {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
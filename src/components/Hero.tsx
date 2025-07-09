import React from 'react';
import { ChevronDown, MapPin, Clock, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Doces do Bairro.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Doces artesanais da Doces do Bairro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/60 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Confeitaria Artesanal
            </span>
            <h1 className="font-pacifico text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Doces do Bairro
            </h1>
            <div className="w-20 h-1 bg-pink-400 rounded mb-6"></div>
          </div>

          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl leading-relaxed">
            Tradição e sabor no coração do 
            <span className="text-pink-300 font-semibold"> Sagrada Família</span>. 
            Bolos artesanais, brigadeiros gourmet e doces que fazem parte da sua história.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={openWhatsApp}
              className="group bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              <span>Faça seu Pedido</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('produtos')}
              className="group border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Ver Produtos</span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-white/10 backdrop-blur rounded-2xl">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-pink-300 mx-auto mb-2" />
              <div className="text-white font-semibold">Sagrada Família</div>
              <div className="text-pink-200 text-sm">Belo Horizonte - MG</div>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-pink-300 mx-auto mb-2" />
              <div className="text-white font-semibold">Seg a Sáb</div>
              <div className="text-pink-200 text-sm">8h às 18h</div>
            </div>
            <div className="text-center">
              <Phone className="w-6 h-6 text-pink-300 mx-auto mb-2" />
              <div className="text-white font-semibold">Delivery</div>
              <div className="text-pink-200 text-sm">WhatsApp e iFood</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
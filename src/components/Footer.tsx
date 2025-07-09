import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5571999998888?text=Olá! Gostaria de fazer um pedido na Doces do Bairro.', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/docesdobairro', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-pink-500 fill-current" />
              <span className="font-pacifico text-2xl text-pink-500">Doces do Bairro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Confeitaria artesanal no coração do Sagrada Família, 
              levando doçura para sua família desde 2018.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openInstagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <button 
                onClick={openWhatsApp}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Bolos Artesanais</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Brigadeiros Gourmet</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Doces Finos</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Encomendas Especiais</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-pink-500 transition-colors text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="hover:text-pink-500 transition-colors text-left"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="hover:text-pink-500 transition-colors text-left"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-pink-500 transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Avenida Sete de Setembro, 1000<br />Centro - Salvador/BA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">(31) 98765-4321</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Seg-Sex: 8h-18h<br />Sáb: 8h-16h</span>
              </li>
            </ul>
            <button 
              onClick={openWhatsApp}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fazer Pedido</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Doces do Bairro. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Confeitaria artesanal no Sagrada Família - Belo Horizonte/MG
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </footer>
  );
};

export default Footer;
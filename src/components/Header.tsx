import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-current" />
            <span className="font-pacifico text-2xl text-pink-600">Doces do Bairro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              Faça seu Pedido
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors w-fit"
              >
                Faça seu Pedido
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
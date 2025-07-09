import React from 'react';
import { Cake, Cookie, Gift, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Cake,
      title: "Bolos Artesanais",
      description: "Bolos personalizados para todas as ocasiões",
      items: [
        "Bolo de Chocolate Belga",
        "Bolo Red Velvet",
        "Bolo de Cenoura com Cobertura",
        "Bolo de Limão Siciliano",
        "Bolos Temáticos Personalizados"
      ],
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "A partir de R$ 45,00"
    },
    {
      icon: Cookie,
      title: "Brigadeiros Gourmet",
      description: "Brigadeiros artesanais com sabores únicos",
      items: [
        "Brigadeiro Tradicional",
        "Brigadeiro de Pistache",
        "Brigadeiro de Maracujá",
        "Brigadeiro de Café",
        "Brigadeiro Vegano"
      ],
      image: "https://images.pexels.com/photos/4110104/pexels-photo-4110104.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "R$ 3,50 cada"
    },
    {
      icon: Gift,
      title: "Doces Finos",
      description: "Seleção especial de doces para presentear",
      items: [
        "Bem-casados",
        "Cajuzinhos Gourmet",
        "Beijinhos Especiais",
        "Trufas de Chocolate",
        "Caixas Personalizadas"
      ],
      image: "https://images.pexels.com/photos/6186810/pexels-photo-6186810.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "A partir de R$ 25,00"
    }
  ];

  const openWhatsApp = (product: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${product} da Doces do Bairro.`;
    window.open(`https://wa.me/5531999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-6">
            Nossos Produtos
          </h2>
          <div className="w-20 h-1 bg-pink-400 rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doces artesanais feitos com ingredientes selecionados e muito carinho
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                  <button 
                    onClick={() => openWhatsApp(product.title)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors"
                  >
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Encomendas Especiais</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Fazemos bolos e doces personalizados para aniversários, casamentos, 
            formaturas e todas as suas ocasiões especiais.
          </p>
          <button 
            onClick={() => openWhatsApp('Encomendas Especiais')}
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Fazer Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, User, MapPin, MessageCircle } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', business: '', city: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-gradient-to-br from-pink-500 to-pink-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Proposta Enviada!
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Recebemos seus dados e entraremos em contato em até 24 horas para apresentar uma proposta personalizada para seu negócio.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-pink-100">
                Enquanto isso, que tal conhecer mais cases de sucesso em nossas redes sociais?
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-pink-500 to-pink-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-pacifico text-4xl md:text-5xl text-white mb-6">
              Quer fazer sua marca local crescer como a Doces do Bairro?
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Receba uma proposta personalizada e descubra como o marketing digital 
              pode transformar seu negócio em referência na sua região
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Análise Gratuita</h3>
                  <p className="text-pink-100">
                    Avaliamos sua marca atual e identificamos oportunidades de crescimento
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Estratégia Personalizada</h3>
                  <p className="text-pink-100">
                    Criamos um plano específico para seu nicho e localização
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resultados Mensuráveis</h3>
                  <p className="text-pink-100">
                    Acompanhamento completo com relatórios mensais de performance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Solicite sua Proposta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="business"
                    placeholder="Tipo do seu negócio"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    placeholder="Sua cidade"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Quero uma Campanha Assim!</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                🔒 Seus dados estão seguros conosco. Não fazemos spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
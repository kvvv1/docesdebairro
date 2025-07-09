import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle, Instagram, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5571999998888?text=Olá! Gostaria de fazer um pedido na Doces do Bairro.', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/docesdobairro', '_blank');
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
              Mensagem Enviada!
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Recebemos sua mensagem e entraremos em contato em breve. 
              Obrigada pelo interesse na Doces do Bairro!
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-pink-100">
                Para pedidos urgentes, entre em contato pelo WhatsApp!
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
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-4xl md:text-5xl text-white mb-6">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-pink-300 rounded mx-auto mb-6"></div>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Faça seu pedido ou tire suas dúvidas. Estamos aqui para adoçar seu dia!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-pink-100">
                      Avenida Sete de Setembro, 1000<br />
                      Centro - Salvador/BA<br />
                      CEP: 40060-001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Horário de Funcionamento</h4>
                    <p className="text-pink-100">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 16h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-pink-100">(31) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-pink-100">atendimento@docesdobairro.com.br</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
                <button 
                  onClick={openInstagram}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="(31) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre seu pedido ou dúvida..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
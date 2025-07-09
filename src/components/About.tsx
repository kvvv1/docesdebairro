import React from 'react';
import { Heart, Users, Award, Cake } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-6">
            Nossa História
          </h2>
          <div className="w-20 h-1 bg-pink-400 rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma confeitaria familiar que nasceu do amor pelos doces e cresceu no coração do Sagrada Família
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior da confeitaria Doces do Bairro"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Tradição e Sabor desde 2018
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A Doces do Bairro nasceu do sonho da Juliana em transformar sua paixão por confeitaria 
              em um negócio que trouxesse alegria para as famílias do Sagrada Família. Especializada 
              em bolos artesanais e brigadeiros gourmet, nossa confeitaria se tornou referência 
              na região pela qualidade e carinho em cada doce.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Localizada no coração do bairro Sagrada Família em Belo Horizonte, atendemos 
              com delivery próprio e também através do iFood, levando nossos doces fresquinhos 
              até a sua casa com todo o cuidado que eles merecem.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Feito com Amor</h4>
            <p className="text-gray-600">Cada doce é preparado com carinho e ingredientes selecionados</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cake className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Produtos Artesanais</h4>
            <p className="text-gray-600">Bolos personalizados, brigadeiros gourmet e doces finos</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Empresa Familiar</h4>
            <p className="text-gray-600">Gestão familiar com atendimento personalizado e receitas exclusivas</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Qualidade Garantida</h4>
            <p className="text-gray-600">Mais de 6 anos levando doçura para o Sagrada Família</p>
          </div>
        </div>

        <div className="mt-16 bg-pink-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Levar momentos doces e especiais para cada família do bairro, 
            criando memórias afetivas através dos nossos produtos artesanais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
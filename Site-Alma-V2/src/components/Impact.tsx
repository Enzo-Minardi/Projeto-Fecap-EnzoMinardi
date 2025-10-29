import React from 'react';
import { TrendingUp, MapPin, Clock, Star } from 'lucide-react';
// Importa React e alguns ícones que serão usados: TrendingUp, MapPin, Clock, Star

const Impact = () => {
  // Depoimentos de pessoas que tiveram experiências positivas
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Participante do Programa de Capacitação',
      content: 'Graças aos cursos oferecidos, consegui uma oportunidade de trabalho que mudou completamente minha vida e da minha família.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Santos',
      role: 'Beneficiário do Projeto Alimentação',
      content: 'Em momentos difíceis, vocês foram nossa luz. O apoio recebido nos deu forças para seguir em frente.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      role: 'Voluntária há 3 anos',
      content: 'Participar desta organização me ensinou o verdadeiro significado de fazer a diferença na vida das pessoas.',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  // Números que mostram o impacto da organização
  const impactNumbers = [
    { number: '5.284', label: 'Vidas Transformadas', icon: TrendingUp },
    { number: '15', label: 'Comunidades Atendidas', icon: MapPin },
    { number: '24/7', label: 'Suporte Disponível', icon: Clock },
    { number: '4.9', label: 'Avaliação dos Beneficiários', icon: Star }
  ];

  return (
    // Seção principal do impacto
    <section id="impacto" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nosso <span className="text-orange-500">Impacto</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números que contam histórias reais de transformação e esperança
          </p>
        </div>

        {/* Números de impacto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactNumbers.map((item, index) => (
            <div key={index} className="text-center group">
              {/* Ícone dentro de círculo com efeito hover */}
              <div className="bg-gradient-to-r from-orange-400 to-red-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              {/* Número em destaque */}
              <div className="text-4xl font-bold text-gray-800 mb-2">{item.number}</div>
              {/* Descrição do número */}
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Histórias de Transformação
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                
                {/* Foto e nome da pessoa */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Estrelas de avaliação */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                {/* Texto do depoimento */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chamada para ação (CTA) */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Faça Parte Desta Transformação
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Sua contribuição, seja como voluntário ou doador, multiplica nosso impacto na comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Seja Voluntário
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors">
              Fazer Doação
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;

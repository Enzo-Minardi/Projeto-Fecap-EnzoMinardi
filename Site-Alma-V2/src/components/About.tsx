// Importa o React (necessário para criar componentes)
import React from 'react';
// Importa ícones prontos da biblioteca lucide-react (desenhos de pessoas, coração, etc.)
import { Users, Target, Award, Heart } from 'lucide-react';

// Cria o componente "About", que será um pedaço da página
const About = () => {
  // Aqui temos uma lista (array) de dados que serão exibidos como estatísticas
  const stats = [
    { icon: Users, number: '5000+', label: 'Vidas Impactadas' },
    { icon: Target, number: '50+', label: 'Projetos Realizados' },
    { icon: Award, number: '15+', label: 'Anos de Experiência' },
    { icon: Heart, number: '100%', label: 'Amor pelo que Fazemos' }
  ];

  // O que esse componente vai "desenhar" na tela
  return (
    <section 
      id="sobre" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Área centralizada, que define o espaço máximo da seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título principal da seção "Sobre Nossa Missão" */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Nossa <span className="text-blue-500">Missão</span>
          </h2>
          {/* Linha colorida abaixo do título */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
        </div>

        {/* Parte dividida em 2 colunas (lado esquerdo texto, lado direito imagem + valores) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Lado esquerdo: textos explicativos */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
              Acreditamos que cada pessoa tem o potencial de transformar sua realidade
            </h3>
            
            {/* Primeiro parágrafo explicando sobre a organização */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa organização nasceu da necessidade de criar pontes entre pessoas que querem ajudar 
              e comunidades que precisam de apoio. Trabalhamos com projetos que geram impacto real e 
              duradouro na vida das pessoas.
            </p>
            
            {/* Segundo parágrafo explicativo */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Através de uma abordagem humanizada e transparente, desenvolvemos iniciativas que vão 
              desde a capacitação profissional até o apoio básico para famílias em situação de vulnerabilidade.
            </p>

            {/* Caixa destacada com citação inspiradora */}
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium italic">
                "Nossa missão é criar oportunidades que transformem não apenas vidas individuais, 
                mas comunidades inteiras, construindo um futuro mais justo e esperançoso para todos."
              </p>
              <p className="text-blue-600 text-sm mt-2">— Fundadores da Organização</p>
            </div>
          </div>

          {/* Lado direito: imagem + lista de valores */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-8 text-white">
              {/* Imagem ilustrativa */}
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Pessoas trabalhando juntas" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-xl font-semibold mb-3">Nossos Valores</h4>

              {/* Lista dos valores da organização */}
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Transparência em todas as ações</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Respeito à dignidade humana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Sustentabilidade dos projetos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Inclusão e diversidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parte final: os números/estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Aqui ele percorre a lista "stats" e cria um quadrinho para cada item */}
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Bolinha colorida com o ícone */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              {/* Número grande (ex: 5000+) */}
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              {/* Texto explicando o que o número significa */}
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporta o componente para ser usado em outra parte do site
export default About;

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
// Importa React e dois ícones: ArrowRight (seta) e Play (play botão)

const Hero = () => {
  // Função para rolar suavemente até a seção desejada
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Seção principal, ocupa toda a tela (min-h-screen) e centraliza o conteúdo
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fundo com gradiente de cores */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-500"></div>
      
      {/* Padrão de bolinhas no fundo (opacidade baixa) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Conteúdo principal do Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Título grande */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformando
            <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Vidas
            </span>
            Construindo Esperança
          </h1>
          
          {/* Texto descritivo */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Juntos, criamos oportunidades que geram impacto real na vida das pessoas e transformam comunidades inteiras.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Botão principal: conhecer história */}
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Conhecer Nossa História</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            {/* Botão secundário: ver projetos */}
            <button
              onClick={() => scrollToSection('projetos')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Ver Projetos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem (seta animada para baixo) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

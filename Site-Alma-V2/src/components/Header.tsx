import React, { useState, useEffect } from 'react';
// Importa React e duas funções importantes:
// useState -> cria variáveis que podem mudar
// useEffect -> executa código automaticamente em certos momentos
import { Menu, X, Heart } from 'lucide-react';
// Importa ícones prontos: Menu (três linhas), X (fechar) e Heart (coração)

const Header = () => {
  // Guarda se o menu do celular está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Guarda se a página foi rolada (scroll) para mudar o estilo do cabeçalho
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitora a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      // Se desceu mais de 50px, considera "rolado"
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Remove o evento quando sair da página (boa prática)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Faz rolar suavemente até a seção escolhida (ex: #sobre, #projetos)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Fecha o menu no celular depois de clicar
    }
  };

  return (
    // Cabeçalho fixo no topo, que muda de transparente para branco quando rola
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo com coração e nome */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Transformando
            </span>
          </div>

          {/* Menu normal (aparece só em telas grandes) */}
          <nav className="hidden md:flex space-x-8">
            {['sobre', 'projetos', 'impacto', 'transparencia', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-200'
                }`}
              >
                {item === 'transparencia' ? 'Transparência' : item}
              </button>
            ))}
          </nav>

          {/* Botão do menu (aparece no celular) */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Se menu aberto -> mostra X
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              // Se menu fechado -> mostra três linhas
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Menu que aparece no celular */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {['sobre', 'projetos', 'impacto', 'transparencia', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item === 'transparencia' ? 'Transparência' : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

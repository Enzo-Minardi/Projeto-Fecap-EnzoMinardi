import React from 'react';
// Importa alguns ícones prontos da biblioteca "lucide-react"
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Pega o ano atual automaticamente (ex: 2025)
  const currentYear = new Date().getFullYear();

  // Lista de redes sociais com ícone, link e nome
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  // Links rápidos para navegar dentro do site
  const quickLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Transparência', href: '#transparencia' },
    { label: 'Contato', href: '#contato' }
  ];

  // Função para rolar suavemente até a seção do site escolhida
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Rodapé com fundo escuro
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* PARTE 1: Logo, descrição e contatos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Logo e nome da ONG */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-2xl">Transformando</span>
            </div>
            
            {/* Texto de missão */}
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Construindo pontes de esperança e transformando vidas através de ações concretas 
              que geram impacto real em nossa comunidade.
            </p>

            {/* Informações de contato: email, telefone e endereço */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contato@transformando.org.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Rua das Esperanças, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* PARTE 2: Links rápidos para navegar */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* PARTE 3: Como ajudar */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Como Ajudar</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#">Seja Voluntário</a></li>
              <li><a href="#">Faça uma Doação</a></li>
              <li><a href="#">Parcerias</a></li>
              <li><a href="#">Divulgue Nosso Trabalho</a></li>
            </ul>
          </div>
        </div>

        {/* PARTE 4: Redes sociais e Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

            {/* Ícones de redes sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="flex space-x-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter para cadastro de email */}
            <div className="max-w-md w-full">
              <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 rounded-r-lg font-semibold">
                  Inscrever
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center lg:text-left">
                Receba novidades sobre nossos projetos e ações
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 5: Direitos autorais e créditos */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Mostra o ano atual automaticamente */}
            <p className="text-gray-400">
              © {currentYear} Transformando. Todos os direitos reservados.
            </p>
            
            {/* Links extras */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Cookies</a>
            </div>
          </div>
          
          {/* Créditos finais */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Desenvolvido com <Heart className="h-4 w-4 inline text-red-500" fill="currentColor" /> 
              para fazer a diferença no mundo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

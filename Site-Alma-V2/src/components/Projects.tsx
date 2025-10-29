import React, { useState } from 'react';
import { ExternalLink, Users, Calendar } from 'lucide-react';
// Importa React, useState para controlar o modal
// E ícones do lucide-react para UI

const Projects = () => {
  // Estado para controlar qual projeto está selecionado no modal
  // null significa que nenhum modal está aberto
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Array de projetos com todas as informações necessárias
  const projects = [
    {
      id: 1,
      title: 'Grupo das Mães', // título do projeto
      description: '', // descrição resumida
      fullDescription: 'Programa completo de capacitação profissional que oferece cursos em diversas áreas como tecnologia, culinária, artesanato e serviços gerais. Nosso objetivo é preparar pessoas para o mercado de trabalho com habilidades práticas e conhecimentos atualizados.', // descrição completa
      image: '', // imagem do projeto
      participants: 150, // número de pessoas impactadas
      duration: '6 meses' // duração do projeto
    },
    {
      id: 2,
      title: 'Natal de Amor',
      description: '',
      fullDescription: 'Projeto que garante alimentação digna para famílias em situação de vulnerabilidade social. Preparamos e distribuímos refeições nutritivas, além de cestas básicas mensais, garantindo segurança alimentar para quem mais precisa.',
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: 300,
      duration: 'Permanente'
    },
    {
      id: 3,
      title: 'Distribuição de Sopas',
      description: '',
      fullDescription: 'Programa educacional voltado para crianças em idade escolar, oferecendo reforço escolar, atividades culturais e esportivas. Nosso foco é no desenvolvimento integral das crianças, proporcionando um ambiente seguro e estimulante.',
      image: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: 80,
      duration: 'Ano letivo'
    },
    {
      id: 4,
      title: 'Entrega de Cestas Basicas',
      description: '',
      fullDescription: 'Programa dedicado ao cuidado e bem-estar de pessoas idosas, oferecendo atividades físicas adaptadas, acompanhamento de saúde básico e momentos de socialização. Valorizamos a experiência e sabedoria da terceira idade.',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: 60,
      duration: 'Permanente'
    },
    {
      id: 5,
      title: '',
      description: '',
      fullDescription: 'Iniciativas focadas na educação ambiental e sustentabilidade, incluindo hortas comunitárias, reciclagem e plantio de árvores. Trabalhamos para criar consciência ecológica e promover práticas sustentáveis na comunidade.',
      image: 'https://images.pexels.com/photos/9324662/pexels-photo-9324662.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: 120,
      duration: '1 ano'
    },
    {
      id: 6,
      title: '',
      description: '',
      fullDescription: 'Programa de saúde preventiva que oferece consultas básicas, campanhas de vacinação e orientações sobre cuidados com a saúde. Trabalhamos em parceria com profissionais de saúde para levar atendimento de qualidade à comunidade.',
      image: 'https://images.pexels.com/photos/7551648/pexels-photo-7551648.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: 200,
      duration: 'Permanente'
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Seção principal dos projetos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container centralizado */}

        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-teal-500">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as iniciativas que estão transformando vidas e construindo um futuro melhor para nossa comunidade
          </p>
        </div>

        {/* Grid de cards de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
              // Ao clicar, abre o modal com o projeto selecionado
            >
              <div className="relative overflow-hidden">
                {/* Imagem do projeto */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay escuro que aparece ao passar o mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Informações de participantes e duração que aparecem ao hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.participants} pessoas</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Botão Saiba Mais */}
                <button className="flex items-center space-x-2 text-teal-600 font-medium hover:text-teal-700 transition-colors">
                  <span>Saiba mais</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para detalhes do projeto selecionado */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
            // Clicar fora fecha o modal
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              // Previne fechamento ao clicar dentro do modal
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                // Encontra o projeto selecionado pelo ID
                return (
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{project.fullDescription}</p>

                      {/* Info detalhada do projeto */}
                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Users className="h-5 w-5 text-teal-500" />
                          <span>{project.participants} pessoas impactadas</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Calendar className="h-5 w-5 text-teal-500" />
                          <span>Duração: {project.duration}</span>
                        </div>
                      </div>

                      {/* Botão para fechar modal */}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

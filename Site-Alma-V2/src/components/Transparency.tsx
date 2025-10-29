import React from 'react';
import { Download, FileText, Eye, Shield } from 'lucide-react';
// Importa React e ícones do lucide-react para usar no layout

const Transparency = () => {
  // Lista de documentos públicos disponíveis
  const documents = [
    {
      title: 'Relatório Anual 2023', // título do documento
      description: 'Demonstrações financeiras e atividades realizadas', // breve descrição
      type: 'PDF', // tipo de arquivo
      size: '2.4 MB', // tamanho do arquivo
      icon: FileText // ícone que representa o documento
    },
    {
      title: 'Balanço Financeiro',
      description: 'Receitas e despesas do último trimestre',
      type: 'PDF',
      size: '1.8 MB',
      icon: FileText
    },
    {
      title: 'Certificado de Utilidade Pública',
      description: 'Documentação oficial da organização',
      type: 'PDF',
      size: '892 KB',
      icon: Shield
    }
  ];

  // Lista de princípios da organização
  const principles = [
    {
      icon: Eye, // ícone representativo
      title: 'Transparência Total', // título do princípio
      description: 'Todos os nossos relatórios financeiros e de atividades são públicos e auditados por terceiros.'
    },
    {
      icon: Shield,
      title: 'Prestação de Contas',
      description: 'Publicamos relatórios trimestrais detalhando como cada real doado foi utilizado.'
    },
    {
      icon: FileText,
      title: 'Documentação Completa',
      description: 'Mantemos registro detalhado de todas as atividades e beneficiários atendidos.'
    }
  ];

  return (
    <section id="transparencia" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Seção principal de Transparência */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container centralizado */}

        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Transparência</span> & Prestação de Contas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A confiança é a base do nosso trabalho. Por isso, mantemos total transparência em todas as nossas ações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Bloco de Princípios */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Nossos Princípios</h3>
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  {/* Ícone do princípio */}
                  <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-3 rounded-lg flex-shrink-0">
                    <principle.icon className="h-6 w-6 text-white" />
                  </div>
                  {/* Conteúdo do princípio */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">{principle.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco de Documentos */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Documentos Públicos</h3>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Ícone do documento */}
                      <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-3 rounded-lg">
                        <doc.icon className="h-6 w-6 text-white" />
                      </div>
                      {/* Conteúdo do documento */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{doc.title}</h4>
                        <p className="text-gray-400 text-sm">{doc.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
                            {doc.type}
                          </span>
                          <span className="text-xs text-gray-500">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    {/* Botão de download */}
                    <button className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                      <Download className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco de auditoria externa */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-semibold mb-3 text-blue-300">Auditoria Externa</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Nossos demonstrativos financeiros são auditados anualmente por empresa de auditoria independente, 
                garantindo a veracidade e transparência de nossas informações.
              </p>
              <p className="text-blue-300 text-sm font-medium">
                Última auditoria: Dezembro 2023 - Aprovada sem ressalvas
              </p>
            </div>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Resumo Financeiro 2023</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Total Arrecadado */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">R$ 2.847.000</div>
              <div className="text-gray-400">Total Arrecadado</div>
              <div className="text-xs text-gray-500 mt-1">Doações + Parcerias</div>
            </div>
            {/* Investimento em Projetos */}
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">R$ 2.633.000</div>
              <div className="text-gray-400">Investido em Projetos</div>
              <div className="text-xs text-gray-500 mt-1">92.5% do total arrecadado</div>
            </div>
            {/* Custos Administrativos */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">R$ 214.000</div>
              <div className="text-gray-400">Custos Administrativos</div>
              <div className="text-xs text-gray-500 mt-1">7.5% do total arrecadado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;

// Importa o React e o "useState" (para guardar informações temporárias, como os dados do formulário)
import React, { useState } from 'react';
// Importa alguns ícones prontos da biblioteca lucide-react
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  // "formData" guarda os dados digitados pelo usuário no formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // "isSubmitted" serve para saber se o formulário já foi enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função que acontece quando o formulário é enviado
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    setIsSubmitted(true); // Marca como enviado
    // Depois de 3 segundos, limpa o formulário e volta ao normal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  // Função para atualizar os dados do formulário sempre que o usuário digita algo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData, // mantém os valores já digitados
      [e.target.name]: e.target.value // altera só o campo editado
    });
  };

  // Informações de contato fixas (e-mail, telefone e endereço)
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@transformando.org.br',
      link: 'mailto:contato@transformando.org.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Esperanças, 123 - São Paulo, SP',
      link: 'https://maps.google.com'
    }
  ];

  // Se o formulário já foi enviado, mostra uma mensagem de agradecimento
  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Mensagem Enviada!</h3>
            <p className="text-xl text-gray-600 mb-6">
              Obrigado por entrar em contato. Responderemos em breve!
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // Caso contrário, mostra o formulário e as informações de contato
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em <span className="text-teal-500">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua voz é importante para nós. Entre em contato e ajude-nos a fazer a diferença
          </p>
        </div>

        {/* Divide em 2 partes: informações + formulário */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Lado esquerdo: informações de contato e horário */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Como nos encontrar</h3>
              <div className="space-y-6">
                {/* Percorre o array "contactInfo" e cria um quadrinho para cada info */}
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    {/* Ícone da informação */}
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Título e conteúdo (ex: "Telefone: (11)...") */}
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Caixa mostrando horário de atendimento */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-blue-100">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábados: 8h às 12h</p>
                <p>Domingos: Plantão de emergência</p>
              </div>
            </div>
          </div>

          {/* Lado direito: formulário de contato */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua mensagem</h3>
              
              {/* Campos do formulário */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                {/* Assunto */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="voluntario">Quero ser voluntário</option>
                    <option value="doacao">Quero fazer uma doação</option>
                    <option value="parceria">Proposta de parceria</option>
                    <option value="informacoes">Solicitar informações</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporta o componente para ser usado em outras partes do site
export default Contact;

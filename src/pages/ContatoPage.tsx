import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const ContatoPage = () => {
  const [state, handleSubmit] = useForm("xgvndwrv"); // Seu endpoint Formspree

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6 text-center">
          <div>
            <h1 className="text-4xl font-bold text-green-600 mb-4">Mensagem Enviada com Sucesso!</h1>
            <p className="text-gray-700 mb-6">Agradecemos seu contato. Em breve, um de nossos especialistas entrará em contato com você.</p>
            <button
              onClick={() => window.location.reload()} // Recarrega a página para permitir novo envio
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Enviar Nova Mensagem
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Entre em <span className="text-green-600">Contato</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a encontrar a melhor solução automotiva. Fale conosco através dos canais abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Fale Conosco</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                    <p className="text-gray-600">(12) 98290-0169</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600">vendas@usecarro.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Nove de Julho, nº 95 - Sala 21<br />
                      Vila Adyana, São José dos Campos - SP<br />
                      CEP: 12243-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+saber+mais+sobre+as+condicoes+da+UseCarro&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-700 transition-colors"
                    >
                      (12) 98290-0169
                    </a>
                    <p className="text-sm text-gray-500">Atendimento rápido via WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white">🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white">💼</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="Nova Mensagem - Use Carro (Contato)" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Manifestação *
                  </label>
                  <select 
                    name="Tipo de Manifestacao"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Reclamacao">Reclamação</option>
                    <option value="Sugestao">Sugestão</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Denuncia">Denúncia</option>
                    <option value="Solicitacao de Informacao">Solicitação de Informação</option>
                  </select>
                  <ValidationError 
                    prefix="Tipo de Manifestacao" 
                    field="Tipo de Manifestacao"
                    errors={state.errors}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="Nome Completo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Seu nome completo"
                      required
                    />
                    <ValidationError 
                      prefix="Nome Completo" 
                      field="Nome Completo"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="Email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="Telefone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="(12) 98290-0169"
                      required
                    />
                    <ValidationError 
                      prefix="Telefone" 
                      field="Telefone"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <select 
                      name="Assunto"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Assinatura de Veiculos">Assinatura de Veículos</option>
                      <option value="Consorcio">Consórcio</option>
                      <option value="Financiamento">Financiamento</option>
                      <option value="Duvidas Gerais">Dúvidas Gerais</option>
                      <option value="Suporte">Suporte</option>
                    </select>
                    <ValidationError 
                      prefix="Assunto" 
                      field="Assunto"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={6}
                    name="Mensagem"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Descreva como podemos ajudar você..."
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Mensagem" 
                    field="Mensagem"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Enviar Mensagem
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Localização</h2>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600">Mapa interativo em breve</p>
              <p className="text-sm text-gray-500 mt-2">
                Av. Nove de Julho, nº 95 - Sala 21<br />
                Vila Adyana, São José dos Campos - SP
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

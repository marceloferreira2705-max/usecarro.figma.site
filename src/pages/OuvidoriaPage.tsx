import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const OuvidoriaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              <span className="text-green-600">Ouvidoria</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Canal direto para reclamações, sugestões e elogios. Sua opinião é fundamental para melhorarmos nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Ouvidoria Content */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">O que é a Ouvidoria?</h2>
              <p className="text-lg text-gray-600 mb-6">
                A Ouvidoria da Use Carro é um canal independente e imparcial para receber, analisar e responder às manifestações de nossos clientes, parceiros e colaboradores.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Quando utilizar a Ouvidoria?</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Quando não obteve resposta satisfatória pelos canais tradicionais</li>
                <li>Para fazer denúncias sobre condutas inadequadas</li>
                <li>Para sugerir melhorias em nossos processos</li>
                <li>Para elogiar colaboradores ou serviços</li>
                <li>Para questões relacionadas à ética e compliance</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Nossos Compromissos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-green-600 text-2xl mb-3">⏱️</div>
                  <h4 className="font-semibold mb-2">Resposta Rápida</h4>
                  <p className="text-sm text-gray-600">Resposta em até 5 dias úteis</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-green-600 text-2xl mb-3">🔒</div>
                  <h4 className="font-semibold mb-2">Confidencialidade</h4>
                  <p className="text-sm text-gray-600">Sigilo absoluto das informações</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-green-600 text-2xl mb-3">⚖️</div>
                  <h4 className="font-semibold mb-2">Imparcialidade</h4>
                  <p className="text-sm text-gray-600">Análise justa e independente</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-green-600 text-2xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2">Transparência</h4>
                  <p className="text-sm text-gray-600">Relatórios periódicos públicos</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Canais de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-gray-600">ouvidoria@usecarro.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-gray-600">0800-123-4567 (gratuito)</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📮</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Correspondência</h4>
                    <p className="text-gray-600">
                      Ouvidoria Use Carro<br />
                      Av. Nove de Julho, nº 95 - Sala 21<br />
                      Vila Adyana, São José dos Campos - SP<br />
                      CEP: 12243-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Formulário da Ouvidoria</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Manifestação *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option>Selecione o tipo</option>
                    <option>Reclamação</option>
                    <option>Sugestão</option>
                    <option>Elogio</option>
                    <option>Denúncia</option>
                    <option>Solicitação de Informação</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                    <p className="text-xs text-gray-500 mt-1">Opcional - você pode fazer manifestação anônima</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="seu@email.com"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número do Protocolo (se houver)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Ex: UC2025001234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Resumo da sua manifestação"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição Detalhada *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Descreva detalhadamente sua manifestação, incluindo datas, nomes e qualquer informação relevante..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="mt-1"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-600">
                    Desejo fazer esta manifestação de forma anônima
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Manifestação enviada com sucesso! Você receberá um número de protocolo por e-mail para acompanhamento.");
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Enviar Manifestação
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda que suas informações sejam utilizadas exclusivamente para análise e resposta da sua manifestação, conforme nossa Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">Qual a diferença entre Ouvidoria e Atendimento ao Cliente?</h3>
              <p className="text-gray-600">O Atendimento ao Cliente resolve questões operacionais do dia a dia. A Ouvidoria atua quando você não obteve resposta satisfatória pelos canais tradicionais ou para questões mais complexas.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">Posso fazer uma manifestação anônima?</h3>
              <p className="text-gray-600">Sim, você pode fazer manifestações anônimas. Porém, sem seus dados de contato, não poderemos dar retorno sobre as ações tomadas.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">Em quanto tempo terei uma resposta?</h3>
              <p className="text-gray-600">Nosso compromisso é responder em até 5 dias úteis. Casos mais complexos podem levar mais tempo, mas você será informado sobre o andamento.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">A Ouvidoria é realmente independente?</h3>
              <p className="text-gray-600">Sim, a Ouvidoria tem autonomia para investigar e propor soluções, reportando-se diretamente à alta direção da empresa.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons
        containerVariant="z-50 right-6 bottom-6"
        innerVariant="relative"
        iconUrl="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-33.svg"
        iconClassName="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-nowrap w-4"
        hasButton={true}
      />
    </div>
  );
};

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";

export const FinanciamentoPage = () => {
  const [valorVeiculo, setValorVeiculo] = useState("80000");
  const [entrada, setEntrada] = useState("10000");
  const [prazo, setPrazo] = useState("60");

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulação de Financiamento:\nValor do Veículo: R$ ${valorVeiculo}\nEntrada: R$ ${entrada}\nPrazo: ${prazo} meses\n\nEntraremos em contato com uma proposta personalizada!`);
    window.location.href = "/contato";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Financiamento <span className="text-green-600">Inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Financie seu veículo com as melhores condições do mercado. Taxas competitivas, aprovação rápida e atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Por que Financiar com a Use Carro? (4 cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que Financiar com a Use Carro?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Taxas Competitivas</h3>
              <p className="text-gray-600">As melhores taxas do mercado para seu perfil.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Aprovação Rápida</h3>
              <p className="text-gray-600">Resposta em até 24 horas úteis.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Digital</h3>
              <p className="text-gray-600">Todo processo online, sem burocracia.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Suporte Dedicado</h3>
              <p className="text-gray-600">Acompanhamento personalizado do início ao fim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Como Funciona (4 etapas) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Simulação</h3>
              <p className="text-gray-600">Faça uma simulação online e veja as melhores condições.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Documentação</h3>
              <p className="text-gray-600">Envie seus documentos de forma digital e segura.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Análise e Aprovação</h3>
              <p className="text-gray-600">Análise rápida e resposta em até 24h úteis.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Realize sua Conquista</h3>
              <p className="text-gray-600">Pronto para escolher o seu próximo carro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Simule seu Financiamento (Formulário) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simule seu <span className="text-green-600">Financiamento</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha os dados abaixo e descubra as melhores opções de financiamento para você.
              </p>
              <form onSubmit={handleSimulate} className="space-y-6">
                <div>
                  <label htmlFor="valorVeiculo" className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do Veículo (R$)
                  </label>
                  <input
                    type="number"
                    id="valorVeiculo"
                    value={valorVeiculo}
                    onChange={(e) => setValorVeiculo(e.target.value)}
                    min="10000"
                    step="1000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="entrada" className="block text-sm font-medium text-gray-700 mb-2">
                    Entrada (R$)
                  </label>
                  <input
                    type="number"
                    id="entrada"
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                    min="0"
                    step="500"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo (meses)
                  </label>
                  <input
                    type="number"
                    id="prazo"
                    value={prazo}
                    onChange={(e) => setPrazo(e.target.value)}
                    min="12"
                    max="72"
                    step="12"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Simular Agora
                </button>
              </form>
            </div>
            <div className="flex justify-center">
              <img
                src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
                alt="Simulação de Financiamento"
                className="h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Pronto para ter um carro? */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter um carro?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa IA Clara vai analisar seu perfil e encontrar o plano perfeito para você.
          </p>
          <button 
            onClick={() => window.location.href = "/contato"}
            className="bg-white text-green-600 font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            Falar com Clara
          </button>
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

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";

export const ConsorcioPage = () => {
  const [valorCredito, setValorCredito] = useState("50000");
  const [prazo, setPrazo] = useState("60");

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Simulação de Consórcio:\nValor do Crédito: R$ ${valorCredito}\nPrazo: ${prazo} meses\n\nEntraremos em contato com uma proposta personalizada!`);
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
              Consórcio <span className="text-green-600">Sem Juros</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A forma mais econômica de conquistar seu veículo. Participe de um grupo e quite seu carro de forma planejada, sem juros abusivos.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Como Funciona o Consórcio (3 cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como Funciona o Consórcio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Escolha seu Plano</h3>
              <p className="text-gray-600">Defina o valor do crédito e o prazo de pagamento que se encaixam no seu orçamento.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Participe do Grupo</h3>
              <p className="text-gray-600">Entre em um grupo de consorciados e pague as parcelas mensais.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Seja Contemplado</h3>
              <p className="text-gray-600">Receba sua carta de crédito por sorteio ou lance e compre seu carro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Vantagens do Consórcio (4 cards) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Vantagens do Consórcio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sem Juros</h3>
              <p className="text-gray-600">Você paga apenas uma taxa administrativa, sem juros abusivos.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Poder de Compra</h3>
              <p className="text-gray-600">Com a carta de crédito, você tem poder de compra à vista.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planejamento</h3>
              <p className="text-gray-600">Organize suas finanças com parcelas que cabem no seu bolso.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibilidade</h3>
              <p className="text-gray-600">Escolha o carro que quiser, novo ou seminovo, ao ser contemplado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Simule seu Consórcio (Formulário) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simule seu <span className="text-green-600">Consórcio</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha os dados abaixo e descubra as melhores opções de consórcio para você.
              </p>
              <form onSubmit={handleSimulate} className="space-y-6">
                <div>
                  <label htmlFor="valorCredito" className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do Crédito (R$)
                  </label>
                  <input
                    type="number"
                    id="valorCredito"
                    value={valorCredito}
                    onChange={(e) => setValorCredito(e.target.value)}
                    min="10000"
                    step="1000"
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
                    min="36"
                    max="120"
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
                src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/6acf225b678e2ac6faff243270c8d2c0abf86127.png"
                alt="Simulação de Consórcio"
                className="h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Comece seu consórcio hoje */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comece seu consórcio hoje
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
    </div>
  );
};

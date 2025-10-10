import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ChatSection } from "@/sections/ChatSection"; // Garante que ChatSection está importado

export const AssinaturaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Assinatura de <span className="text-green-600">Veículos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A forma mais inteligente de ter seu carro. Pague uma mensalidade fixa e tenha tudo incluso: seguro, manutenção, IPVA e assistência 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Por que escolher a Use Carro? (3 cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que escolher a Use Carro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tudo Incluso</h3>
              <p className="text-gray-600">Seguro, manutenção, IPVA, licenciamento e assistência 24h inclusos na mensalidade.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibilidade Total</h3>
              <p className="text-gray-600">Troque de veículo a cada 12 meses ou cancele quando quiser, sem multas.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sem Entrada</h3>
              <p className="text-gray-600">Comece a dirigir sem precisar dar entrada ou fazer grandes investimentos iniciais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benefícios da Assinatura de Carro (4 cards) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefícios da Assinatura de Carro
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🐷</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Economia</h3>
              <p className="text-gray-600">Redução de custos com impostos, seguro e manutenção.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔑</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Conveniência</h3>
              <p className="text-gray-600">Carro sempre novo, sem preocupações com desvalorização.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🗓️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibilidade</h3>
              <p className="text-gray-600">Planos adaptáveis às suas necessidades e tempo de uso.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Segurança</h3>
              <p className="text-gray-600">Veículos revisados e com assistência 24h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Como funciona (4 etapas) */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como funciona
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Escolha seu carro</h3>
              <p className="text-gray-600">Selecione o modelo e o plano que mais combinam com você.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalize</h3>
              <p className="text-gray-600">Defina a quilometragem, período e serviços adicionais.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assine online</h3>
              <p className="text-gray-600">Contrato digital, rápido e sem burocracia.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Retire seu carro</h3>
              <p className="text-gray-600">Assim que seu carro estiver pronto, é só retirar e começar a aproveitar.</p>
            </div>
          </div>
        </div>
      </section>

      <ChatSection />
      <Footer />
    </div>
  );
};

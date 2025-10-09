
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useParams } from "react-router-dom";
import { useState } from "react";

// Mock data for vehicles - ONLY ID "1" for now, simplified for stability
const vehicleData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Fiat Strada",
    brand: "FIAT",
    version: "STRADA 1.3 CABINE PLUS ENDURANCE",
    type: "Picape Compacta",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.3",
    color: "Branco", // Mantido nos dados, mas não exibido no card de especificações
    doors: "2",
    year: "2026",
    clientType: "Pessoa Jurídica",
    prices: {
      assinatura: {
        monthly: "R$ 2.249,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.698,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.799,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png" // Placeholder image
    ],
    features: [ // Mantido nos dados, mas seções de exibição removidas
      "Ar condicionado",
      "Direção hidráulica",
      "Vidros elétricos",
      "Trava elétrica",
      "Caçamba",
      "Airbag duplo"
    ],
    description: "Parceira ideal para quem trabalha com cargas leves e entregas. Picape robusta, líder em economia e conhecida pela confiabilidade no dia a dia."
  }
  // Outros veículos serão adicionados aqui em uma etapa posterior
};

export const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Assinatura");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicle = id ? vehicleData[id] : null;

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Veículo não encontrado</h1>
          <p className="text-gray-600 mb-8">O veículo que você está procurando não existe ou foi removido.</p>
          <button 
            onClick={() => window.location.href = "/veiculos"}
            className="bg-green-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
          >
            Ver todos os veículos
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const getPriceDataByTab = (tab: string) => {
    switch (tab) {
      case "Assinatura":
        return vehicle.prices.assinatura;
      case "Financiamento":
        return vehicle.prices.financiamento;
      case "Consórcio":
        return vehicle.prices.consorcio;
      default:
        return vehicle.prices.assinatura;
    }
  };

  const currentPriceData = getPriceDataByTab(activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <nav className="text-sm text-gray-600">
            <button onClick={() => window.location.href = "/"} className="hover:text-green-600 cursor-pointer">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => window.location.href = "/veiculos"} className="hover:text-green-600 cursor-pointer">Veículos</button>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{vehicle.title}</span>
          </nav>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image and Description */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 flex justify-center items-center min-h-[320px] w-full max-w-lg">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={vehicle.title}
                  className="w-full max-h-80 object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-lg mb-6">
                <p className="text-gray-600 leading-relaxed text-center">
                  {vehicle.description}
                </p>
              </div>
              {vehicle.images.length > 1 && (
                <div className="flex space-x-2 justify-center mt-4">
                  {vehicle.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index ? 'border-green-600 ring-2 ring-green-300' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img src={image} alt={`${vehicle.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Vehicle Info, Specs, Price Tabs, CTA */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.type}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.clientType}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{vehicle.title}</h1>
                <p className="text-gray-600 text-lg">{vehicle.brand} • {vehicle.version}</p>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">⛽</div>
                  <div className="text-sm text-gray-600">Combustível</div>
                  <div className="font-semibold text-gray-800">{vehicle.fuelType}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm text-gray-600">Transmissão</div>
                  <div className="font-semibold text-gray-800">{vehicle.transmission}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm text-gray-600">Lugares</div>
                  <div className="font-semibold text-gray-800">{vehicle.seats}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm text-gray-600">Motor</div>
                  <div className="font-semibold text-gray-800">{vehicle.engine}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm text-gray-600">Ano</div>
                  <div className="font-semibold text-gray-800">{vehicle.year}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🚪</div>
                  <div className="text-sm text-gray-600">Portas</div>
                  <div className="font-semibold text-gray-800">{vehicle.doors}</div>
                </div>
              </div>

              {/* Price Tabs */}
              <div className="mb-8">
                <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                  {["Assinatura", "Financiamento", "Consórcio"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeTab === tab
                          ? tab === "Assinatura"
                            ? "bg-blue-100 text-blue-700 shadow-sm border border-blue-300"
                            : tab === "Financiamento"
                            ? "bg-blue-900/10 text-blue-900 shadow-sm border border-blue-900/30"
                            : "bg-green-100 text-green-700 shadow-sm border border-green-300"
                          : "text-gray-600 hover:text-gray-900 border border-transparent"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className={`rounded-lg p-6 border-2 transition-all duration-300 ${
                  activeTab === "Assinatura" 
                    ? "bg-blue-50 border-blue-300 shadow-lg shadow-blue-100" 
                    : activeTab === "Financiamento"
                    ? "bg-blue-900/5 border-blue-900/30 shadow-lg shadow-blue-900/10"
                    : activeTab === "Consórcio"
                    ? "bg-green-50 border-green-300 shadow-lg shadow-green-100"
                    : "bg-gradient-to-r from-green-50 to-blue-50 border-transparent"
                }`}>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className={`text-sm font-semibold ${
                        activeTab === "Assinatura" 
                          ? "text-blue-700" 
                          : activeTab === "Financiamento"
                          ? "text-blue-900"
                          : activeTab === "Consórcio"
                          ? "text-green-700"
                          : "text-gray-600"
                      }`}>{activeTab === "Assinatura" ? "Plano de Assinatura" : activeTab}</div>
                      <div className={`text-sm ${
                        activeTab === "Assinatura" 
                          ? "text-blue-600" 
                          : activeTab === "Financiamento"
                          ? "text-blue-800"
                          : activeTab === "Consórcio"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}>{currentPriceData.term} • {currentPriceData.mileage}</div>
                    </div>
                    <div className={`text-3xl font-bold ${
                      activeTab === "Assinatura" 
                        ? "text-blue-700" 
                        : activeTab === "Financiamento"
                        ? "text-blue-900"
                        : activeTab === "Consórcio"
                        ? "text-green-700"
                        : "text-green-600"
                    }`}>
                      {currentPriceData.monthly}
                      <span className="text-base font-normal ml-1">/mês</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {currentPriceData.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-8">
                <button 
                  onClick={() => window.location.href = "/contato"}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Solicitar Proposta
                </button>
                <button 
                  onClick={() => window.location.href = "/contato"}
                  className="w-full border-2 border-green-600 text-green-600 font-semibold py-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                >
                  Falar com Especialista
                </button>
              </div>

              {/* Informações para Pessoa Jurídica */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Informações para Pessoa Jurídica</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Se você possui CNPJ, temos condições especiais e planos personalizados para sua empresa. Fale com um de nossos consultores para saber mais.
                </p>
                <button 
                  onClick={() => window.location.href = "/contato"}
                  className="mt-4 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-green-700 transition-colors"
                >
                  Falar com Consultor PJ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Veículos Similares</h2>
          <div className="text-center">
            <button 
              onClick={() => window.location.href = "/veiculos"}
              className="inline-block bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
              Ver Todos os Veículos
            </button>
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

</file_content>

<file_content filePath="src/pages/SobrePage.tsx">

  import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const SobrePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Sobre a <span className="text-green-600">Use Carro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa história, missão e os valores que nos movem para revolucionar o mercado automotivo brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nascemos da experiência. Nossa equipe é formada por executivos que ajudaram a moldar o mercado de carros por assinatura no Brasil.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Com um profundo conhecimento e uma paixão pela inovação, unimos a experiência pioneira em assinaturas com uma sólida base no mercado financeiro.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mas percebemos que um único produto não serve para todo mundo. Por isso, nossa missão vai além da assinatura.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nosso propósito é te ajudar a encontrar a melhor solução de mobilidade para o seu momento de vida.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Se você busca flexibilidade, a assinatura é a resposta ideal.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Para quem quer ter o carro como um patrimônio rapidamente, o financiamento é a melhor opção.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                E para quem prefere planejar com calma e segurança, o consórcio é o caminho.
              </p>
              <p className="text-lg text-gray-600">
                Com essa visão de que o cliente está em primeiro lugar, oferecemos as soluções mais competitivas do mercado. Nosso compromisso é transformar a maneira como você se relaciona com seu carro, garantindo que a escolha certa seja sempre a sua.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/0c7523457f58ad84086d9881698a4e981695743f.png"
                  alt="Equipe Use Carro"
                  className="h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar o acesso a veículos através de soluções inteligentes e personalizadas, utilizando tecnologia para conectar pessoas aos seus carros ideais de forma simples e transparente.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal plataforma de soluções automotivas do Brasil, reconhecida pela inovação, confiabilidade e pela capacidade de transformar a experiência de ter um veículo.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparência, inovação, excelência no atendimento, responsabilidade social e compromisso com a satisfação do cliente são os pilares que guiam todas as nossas decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Liderança
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais que lideram a Use Carro e trabalham incansavelmente para revolucionar o mercado automotivo brasileiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Marcelo Rosal - CEO & Fundador */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/rosal.avif"
                  alt="Marcelo Rosal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Marcelo Rosal</h3>
              <p className="text-green-600 font-semibold mb-4">CEO & Fundador</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especialista em mercado automotivo com experiência pioneira em carros por assinatura.
              </p>
            </div>

            {/* Gedson Santin - Diretor Comercial & Co-fundador */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/gedson.png"
                  alt="Gedson Santin"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Gedson Santin</h3>
              <p className="text-green-600 font-semibold mb-4">Diretor Comercial & Co-fundador</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert em soluções de mobilidade e relacionamento com clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Numbers */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Use Carro em Números
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nosso crescimento reflete o impacto positivo que geramos na vida das pessoas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">25k+</div>
              <div className="text-white/90 text-lg font-medium">Clientes Atendidos</div>
              <div className="text-white/70 text-sm mt-2">Desde nossa fundação</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">10+</div>
              <div className="text-white/90 text-lg font-medium">Parceiros Ativos</div>
              <div className="text-white/70 text-sm mt-2">Concessionárias e seguradoras</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">180+</div>
              <div className="text-white/90 text-lg font-medium">Cidades Atendidas</div>
              <div className="text-white/70 text-sm mt-2">Em todo território nacional</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">98%</div>
              <div className="text-white/90 text-lg font-medium">Satisfação</div>
              <div className="text-white/70 text-sm mt-2">Índice de clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </section>


      {/* Join Us CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos que compartilhem nossa paixão por inovação e excelência no atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/contato"}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Ver Vagas Abertas
            </button>
            <button 
              onClick={() => window.location.href = "/contato"}
              className="border-2 border-green-600 text-green-600 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-green-600 hover:text-white transition-colors cursor-pointer"
            >
              Enviar Currículo
            </button>
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

</file_content>

<file_content filePath="src/pages/ContatoPage.tsx">

  import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const ContatoPage = () => {
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
                    <p className="text-gray-600">(11) 4000-1234</p>
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
                    <p className="text-gray-600">(11) 99999-9999</p>
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
              
              <form className="space-y-6">
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
                      Assunto
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                      <option>Selecione um assunto</option>
                      <option>Assinatura de Veículos</option>
                      <option>Consórcio</option>
                      <option>Financiamento</option>
                      <option>Dúvidas Gerais</option>
                      <option>Suporte</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Descreva como podemos ajudar você..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
                  }}
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

</file_content>
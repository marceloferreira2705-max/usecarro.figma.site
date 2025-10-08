import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useParams } from "react-router-dom";
import { useState } from "react";

// Mock data for vehicles - in a real app this would come from an API
const vehicleData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Fiat Mobi 1.0 Like Mec",
    brand: "Fiat",
    year: "2026",
    category: "Econômico",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Branco",
    doors: "4",
    prices: {
      assinatura: "R$ 1.800",
      financiamento: "R$ 2.160",
      consorcio: "R$ 1.440"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção hidráulica",
      "Vidros elétricos dianteiros",
      "Trava elétrica",
      "Rádio com Bluetooth",
      "Airbag duplo"
    ],
    description: "O Fiat Mobi é perfeito para quem busca economia e praticidade no dia a dia. Compacto e ágil, ideal para o trânsito urbano."
  },
  "2": {
    id: "2",
    title: "Fiat Argo 1.0 Drive",
    brand: "Fiat",
    year: "2026",
    category: "Hatch",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Vermelho",
    doors: "4",
    prices: {
      assinatura: "R$ 1.950",
      financiamento: "R$ 2.340",
      consorcio: "R$ 1.560"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia",
      "Airbag duplo"
    ],
    description: "O Fiat Argo oferece design moderno e tecnologia avançada em um hatch compacto e eficiente."
  },
  "3": {
    id: "3",
    title: "Hyundai HB20 1.0 Sense",
    brand: "Hyundai",
    year: "2026",
    category: "Hatch",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Prata",
    doors: "4",
    prices: {
      assinatura: "R$ 1.950",
      financiamento: "R$ 2.340",
      consorcio: "R$ 1.560"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia",
      "Airbag duplo"
    ],
    description: "O HB20 é conhecido por sua confiabilidade e economia, ideal para o uso urbano."
  },
  "4": {
    id: "4",
    title: "Volkswagen Polo Track",
    brand: "Volkswagen",
    year: "2026",
    category: "Hatch",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Branco",
    doors: "4",
    prices: {
      assinatura: "R$ 2.200",
      financiamento: "R$ 2.640",
      consorcio: "R$ 1.760"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia",
      "Airbag duplo",
      "Controle de estabilidade"
    ],
    description: "O Polo Track combina qualidade alemã com praticidade brasileira."
  },
  "5": {
    id: "5",
    title: "Fiat Argo 1.0 Drive CVT",
    brand: "Fiat",
    year: "2026",
    category: "Hatch",
    fuelType: "Flex",
    transmission: "CVT",
    seats: "5",
    engine: "1.0",
    color: "Azul",
    doors: "4",
    prices: {
      assinatura: "R$ 2.100",
      financiamento: "R$ 2.520",
      consorcio: "R$ 1.680"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia",
      "Airbag duplo",
      "Transmissão CVT"
    ],
    description: "O Fiat Argo CVT oferece maior conforto de condução com transmissão automática."
  },
  "6": {
    id: "6",
    title: "Chevrolet Onix Plus 1.0 MT",
    brand: "Chevrolet",
    year: "2026",
    category: "Sedan",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Prata",
    doors: "4",
    prices: {
      assinatura: "R$ 2.000",
      financiamento: "R$ 2.400",
      consorcio: "R$ 1.600"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia",
      "Airbag duplo",
      "Controle de estabilidade",
      "Sensor de estacionamento"
    ],
    description: "O Chevrolet Onix Plus combina espaço interno generoso com economia de combustível. Perfeito para famílias que buscam conforto e praticidade."
  },
  "7": {
    id: "7",
    title: "Fiat Strada Endurance 1.4",
    brand: "Fiat",
    year: "2026",
    category: "Picape",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.4",
    color: "Branco",
    doors: "2",
    prices: {
      assinatura: "R$ 2.300",
      financiamento: "R$ 2.760",
      consorcio: "R$ 1.840"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado",
      "Direção hidráulica",
      "Vidros elétricos",
      "Trava elétrica",
      "Caçamba",
      "Airbag duplo"
    ],
    description: "A Fiat Strada é ideal para trabalho e lazer, oferecendo robustez e economia."
  },
  "16": {
    id: "16",
    title: "Chevrolet Tracker 1.0 Turbo LT Auto",
    brand: "Chevrolet",
    year: "2025",
    category: "SUV Compacto",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Azul",
    doors: "4",
    prices: {
      assinatura: "R$ 2.859",
      financiamento: "R$ 3.431",
      consorcio: "R$ 2.287"
    },
    images: [
      "https://c.animaapp.com/mfxz26rhnSsSP4/assets/fb2d708a43f9d3bf76bb477efaad4452c387b94f.png"
    ],
    features: [
      "Ar condicionado automático",
      "Direção elétrica",
      "Vidros elétricos",
      "Trava elétrica",
      "Central multimídia com Android Auto/Apple CarPlay",
      "Airbags múltiplos",
      "Controle de estabilidade",
      "Sensor de estacionamento",
      "Câmera de ré",
      "Rodas de liga leve",
      "Faróis de LED"
    ],
    description: "O Chevrolet Tracker é um SUV compacto que oferece versatilidade, tecnologia e segurança. Ideal para aventuras urbanas e viagens em família."
  }
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

  const getPriceByTab = (tab: string) => {
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

  const getTabDescription = (tab: string) => {
    switch (tab) {
      case "Assinatura":
        return "/mês - Tudo incluso";
      case "Financiamento":
        return "/mês (60x)";
      case "Consórcio":
        return "/mês (grupo)";
      default:
        return "/mês";
    }
  };

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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="bg-gray-100 rounded-2xl p-8 mb-4">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={vehicle.title}
                  className="w-full h-80 object-contain"
                />
              </div>
              {vehicle.images.length > 1 && (
                <div className="flex space-x-2">
                  {vehicle.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden ${
                        currentImageIndex === index ? 'ring-2 ring-green-600' : ''
                      }`}
                    >
                      <img src={image} alt={`${vehicle.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {vehicle.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{vehicle.title}</h1>
                <p className="text-gray-600 text-lg">{vehicle.brand} • {vehicle.year}</p>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">⛽</div>
                  <div className="text-sm text-gray-600">Combustível</div>
                  <div className="font-semibold">{vehicle.fuelType}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm text-gray-600">Transmissão</div>
                  <div className="font-semibold">{vehicle.transmission}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm text-gray-600">Lugares</div>
                  <div className="font-semibold">{vehicle.seats}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm text-gray-600">Motor</div>
                  <div className="font-semibold">{vehicle.engine}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm text-gray-600">Cor</div>
                  <div className="font-semibold">{vehicle.color}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🚪</div>
                  <div className="text-sm text-gray-600">Portas</div>
                  <div className="font-semibold">{vehicle.doors}</div>
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
                  <div className="flex justify-between items-center">
                    <div>
                      <div className={`text-sm font-semibold ${
                        activeTab === "Assinatura" 
                          ? "text-blue-700" 
                          : activeTab === "Financiamento"
                          ? "text-blue-900"
                          : activeTab === "Consórcio"
                          ? "text-green-700"
                          : "text-gray-600"
                      }`}>{activeTab}</div>
                      <div className={`text-sm ${
                        activeTab === "Assinatura" 
                          ? "text-blue-600" 
                          : activeTab === "Financiamento"
                          ? "text-blue-800"
                          : activeTab === "Consórcio"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}>{getTabDescription(activeTab)}</div>
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
                      {getPriceByTab(activeTab)}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Description and Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Sobre este veículo</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {vehicle.description}
              </p>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Por que escolher {activeTab.toLowerCase()}?</h3>
                {activeTab === "Assinatura" && (
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Seguro incluso</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Manutenção inclusa</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> IPVA incluso</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Assistência 24h</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Sem entrada</li>
                  </ul>
                )}
                {activeTab === "Financiamento" && (
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Taxas competitivas</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Aprovação rápida</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Processo 100% digital</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Parcelas fixas</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Carro fica em seu nome</li>
                  </ul>
                )}
                {activeTab === "Consórcio" && (
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Sem juros</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Planejamento financeiro</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Flexibilidade de escolha</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Investimento protegido</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Grupos confiáveis</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Equipamentos e Opcionais</h2>
              <div className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-1 gap-3">
                  {vehicle.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety */}
              <div className="mt-8 bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Segurança</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🛡️</span>
                    <span className="text-gray-700">Airbag duplo</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🛡️</span>
                    <span className="text-gray-700">Freios ABS</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🛡️</span>
                    <span className="text-gray-700">Controle de estabilidade</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🛡️</span>
                    <span className="text-gray-700">Cintos de segurança com pré-tensionador</span>
                  </div>
                </div>
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

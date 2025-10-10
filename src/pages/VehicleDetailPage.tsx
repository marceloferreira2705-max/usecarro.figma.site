import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { vehiclesData, VehicleData } from "@/data/vehiclesData";

export const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Assinatura");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicle: VehicleData | undefined = id ? vehiclesData[id] : undefined;

  useEffect(() => {
    console.log("VehicleDetailPage: Componente montado. ID recebido:", id);
    if (!vehicle) {
      console.error("VehicleDetailPage: Veículo não encontrado para o ID:", id);
    } else {
      console.log("VehicleDetailPage: Dados do veículo carregados:", vehicle);
    }
  }, [id, vehicle]);

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
      // Adicione uma verificação para garantir que 'financiamento' existe
        return vehicle.prices.financiamento || vehicle.prices.assinatura; 
      case "Consórcio":
      // Adicione uma verificação para garantir que 'consorcio' existe
        return vehicle.prices.consorcio || vehicle.prices.assinatura;
      default:
        return vehicle.prices.assinatura;
    }
  };

  const currentPriceData = getPriceDataByTab(activeTab);

  // Adicione uma verificação para currentPriceData
  if (!currentPriceData) {
    console.error("VehicleDetailPage: currentPriceData é undefined para o veículo:", vehicle.id, "e aba:", activeTab);
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Erro ao carregar dados de preço</h1>
          <p className="text-gray-600 mb-8">Não foi possível encontrar os dados de preço para a modalidade selecionada.</p>
          <button 
            onClick={() => window.location.href = "/veiculos"}
            className="bg-green-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
          >
            Voltar para Veículos
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Vehicle Image and Info */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Vehicle Image and Description */}
            <div>
              {/* Tags above image */}
              <div className="flex gap-3 mb-4">
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {vehicle.type}
                </span>
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {vehicle.clientType}
                </span>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 flex items-start justify-center mb-6">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={vehicle.title}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Description Card */}
              <div className="bg-white shadow-lg rounded-2xl p-6 border-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed text-center">{vehicle.description}</p>
              </div>
            </div>

            {/* Right - Vehicle Info */}
            <div>
              <div className="mb-6">
                <p className="text-green-600 font-semibold text-lg mb-2">{vehicle.brand}</p>
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{vehicle.version}</h1>
                <p className="text-gray-600 text-lg">{vehicle.type} • {vehicle.year}</p>
              </div>

              {/* Specifications Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">⛽</div>
                  <div className="text-xs text-gray-500 mb-1">Combustível</div>
                  <div className="font-bold text-sm">{vehicle.fuelType}</div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">⚙️</div>
                  <div className="text-xs text-gray-500 mb-1">Câmbio</div>
                  <div className="font-bold text-sm">{vehicle.transmission}</div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="text-xs text-gray-500 mb-1">Lugares</div>
                  <div className="font-bold text-sm">{vehicle.seats}</div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="text-xs text-gray-500 mb-1">Motor</div>
                  <div className="font-bold text-sm">{vehicle.engine}</div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-xs text-gray-500 mb-1">Cor</div>
                  <div className="font-bold text-sm">{vehicle.color}</div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">🚪</div>
                  <div className="text-xs text-gray-500 mb-1">Portas</div>
                  <div className="font-bold text-sm">{vehicle.doors}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Tabs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Escolha a melhor forma de ter este veículo</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-2xl p-2 mb-8">
              {["Assinatura", "Financiamento", "Consórcio"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-6 rounded-xl text-base font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? tab === "Assinatura"
                        ? "bg-blue-600 text-white shadow-lg"
                        : tab === "Financiamento"
                        ? "bg-blue-900 text-white shadow-lg"
                        : "bg-green-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Price Card */}
            <div className={`rounded-2xl p-8 border-2 transition-all duration-300 shadow-xl ${
              activeTab === "Assinatura" 
                ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300" 
                : activeTab === "Financiamento"
                ? "bg-gradient-to-br from-blue-900/5 to-blue-900/10 border-blue-900/30"
                : "bg-gradient-to-br from-green-50 to-green-100 border-green-300"
            }`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    activeTab === "Assinatura" 
                      ? "text-blue-700" 
                      : activeTab === "Financiamento"
                      ? "text-blue-900"
                      : "text-green-700"
                  }`}>{activeTab}</h3>
                  <p className={`text-sm ${
                    activeTab === "Assinatura" 
                      ? "text-blue-600" 
                      : activeTab === "Financiamento"
                      ? "text-blue-800"
                      : "text-green-600"
                  }`}>
                    {currentPriceData.term}
                    {currentPriceData.mileage && ` • ${currentPriceData.mileage}`}
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className={`text-5xl font-black ${
                    activeTab === "Assinatura" 
                      ? "text-blue-700" 
                      : activeTab === "Financiamento"
                      ? "text-blue-900"
                      : "text-green-700"
                  }`}>
                    {currentPriceData.monthly}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">por mês</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {currentPriceData.details.map((detail: string, index: number) => (
                  <div key={index} className="flex items-center bg-white/50 rounded-lg p-3">
                    <span className={`mr-3 text-xl ${
                      activeTab === "Assinatura" 
                        ? "text-blue-600" 
                        : activeTab === "Financiamento"
                        ? "text-blue-900"
                        : "text-green-600"
                    }`}>✓</span>
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+saber+mais+sobre+as+condicoes+da+UseCarro&type=phone_number&app_absent=0", "_blank")}
                  className={`flex-1 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-white ${
                    activeTab === "Assinatura" 
                      ? "bg-gradient-to-r from-blue-600 to-blue-700" 
                      : activeTab === "Financiamento"
                      ? "bg-gradient-to-r from-blue-900 to-blue-800"
                      : "bg-gradient-to-r from-green-600 to-green-700"
                  }`}
                >
                  Fale com Especialista
                </button>
                <button 
                  onClick={() => window.open("https://www.chatbase.co/chatbot-iframe/Ey1TW94MhZcS3j_kJfNd7", "_blank")}
                  className={`flex-1 font-bold py-4 rounded-xl border-2 transition-all cursor-pointer ${
                    activeTab === "Assinatura" 
                      ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" 
                      : activeTab === "Financiamento"
                      ? "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                      : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  Falar com a IA - Clara
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter este veículo?
          </h2>
          <button 
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+saber+mais+sobre+as+condicoes+da+UseCarro&type=phone_number&app_absent=0", "_blank")}
            className="bg-white text-green-600 font-bold px-10 py-5 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
          >
            Fale com Especialista Agora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

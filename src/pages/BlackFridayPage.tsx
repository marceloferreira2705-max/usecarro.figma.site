import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlackFridayVehicleCard } from "@/components/BlackFridayVehicleCard";
import { ChatSection } from "@/sections/ChatSection";
import { useState, useEffect } from "react";

const blackFridayVehiclesData = [
  {
    vehicleId: "25",
    fipeValue: "R$ 156.329",
    assinaturaPrice: "R$ 3.424,99",
    financiamentoPrice: "R$ 3.655,54",
    consorcioCredit: "R$ 160.000",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 1.302,00",
  },
  {
    vehicleId: "1",
    fipeValue: "R$ 68.657",
    assinaturaPrice: "R$ 1.757,99",
    financiamentoPrice: "R$ 1.615,81",
    consorcioCredit: "R$ 72.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 674,00",
  },
  {
    vehicleId: "4",
    fipeValue: "R$ 81.992",
    assinaturaPrice: "R$ 1.939,99",
    financiamentoPrice: "R$ 1.930,08",
    consorcioCredit: "R$ 82.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 767,00",
  },
  {
    vehicleId: "14",
    fipeValue: "R$ 105.484",
    assinaturaPrice: "R$ 2.237,99",
    financiamentoPrice: "R$ 2.482,99",
    consorcioCredit: "R$ 102.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 953,00",
  },
  {
    vehicleId: "10",
    fipeValue: "R$ 95.620",
    assinaturaPrice: "R$ 2.289,99",
    financiamentoPrice: "R$ 2.115,77",
    consorcioCredit: "R$ 92.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 860,00",
  },
  {
    vehicleId: "31",
    fipeValue: "R$ 172.477",
    assinaturaPrice: "R$ 3.492,99",
    financiamentoPrice: "R$ 4.060,34",
    consorcioCredit: "R$ 170.000",
    consorcioTerm: "90m",
    consorcioPrice: "R$ 1.090,00",
  },
  {
    vehicleId: "22",
    fipeValue: "R$ 119.780",
    assinaturaPrice: "R$ 2.499,00",
    financiamentoPrice: "R$ 2.650,00",
    consorcioCredit: "R$ 122.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 1.084,00",
  },
  {
    vehicleId: "7",
    fipeValue: "R$ 112.155",
    assinaturaPrice: "R$ 1.799,00",
    financiamentoPrice: "R$ 2.480,00",
    consorcioCredit: "R$ 112.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 995,00",
  },
  {
    vehicleId: "32",
    fipeValue: "R$ 207.189",
    assinaturaPrice: "R$ 4.699,00",
    financiamentoPrice: "R$ 4.687,50",
    consorcioCredit: "R$ 200.000",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 1.560,00",
  },
  {
    vehicleId: "9",
    fipeValue: "R$ 99.999",
    assinaturaPrice: "R$ 2.169,00",
    financiamentoPrice: "R$ 2.213,00",
    consorcioCredit: "R$ 102.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 907,00",
  },
];

export const BlackFridayPage = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date('2025-11-30T23:59:59');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Black Friday */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 text-center text-white z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-6 py-2 rounded-full mb-6 animate-bounce">
            <span className="text-2xl">⚡</span>
            <span className="text-sm uppercase tracking-wider">Ofertas Relâmpago</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="block text-yellow-400 mb-2">BLACK FRIDAY</span>
            <span className="block">USECARRO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Assinatura de Veículos com <span className="text-green-400">ZERO SURPRESA!</span> 🥳
          </p>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
            Aproveite as ofertas exclusivas da Black Friday e garanta seu carro novo com as melhores condições de assinatura, financiamento ou consórcio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const element = document.getElementById('ofertas');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Ver Ofertas Agora 🔥
            </button>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+saber+mais+sobre+as+ofertas+da+Black+Friday&type=phone_number&app_absent=0", "_blank")}
              className="bg-white text-purple-900 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 cursor-pointer border-4 border-white"
            >
              Falar com Especialista
            </button>
          </div>
          
          {/* Countdown Timer */}
          <div className="mt-12 inline-block bg-black/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400">
            <p className="text-yellow-400 font-bold mb-3 text-sm uppercase tracking-wider">Ofertas por tempo limitado</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300 uppercase">Horas</div>
              </div>
              <div className="text-4xl font-black text-yellow-400">:</div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300 uppercase">Minutos</div>
              </div>
              <div className="text-4xl font-black text-yellow-400">:</div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300 uppercase">Segundos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
              Por que aproveitar a Black Friday?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Condições especiais que você só encontra nesta época do ano
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Preços Exclusivos</h3>
              <p className="text-gray-600 text-sm">Valores especiais só para Black Friday</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Aprovação Rápida</h3>
              <p className="text-gray-600 text-sm">Processo acelerado para Black Friday</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Benefícios por Indicar um Amigo</h3>
              <p className="text-gray-600 text-sm">Ganhe vantagens extras ao indicar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Friday Vehicles Section */}
      <section id="ofertas" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black px-6 py-2 rounded-full mb-4">
              <span className="text-xl">🔥</span>
              <span className="text-sm uppercase tracking-wider">Ofertas Imperdíveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              Veículos em Promoção
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Não perca a chance de ter seu carro novo com condições exclusivas!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blackFridayVehiclesData.map((vehicle, index) => (
              <BlackFridayVehicleCard key={index} {...vehicle} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = "/veiculos"}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              Ver Todos os Veículos em Oferta
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de 20.000 clientes satisfeitos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Aproveitei a Black Friday e consegui condições incríveis! O processo foi super rápido e transparente."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MC
                </div>
                <div>
                  <p className="font-bold">Maria Clara</p>
                  <p className="text-sm text-gray-600">São Paulo, SP</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Melhor decisão que tomei! Assinei meu carro na Black Friday e estou muito satisfeito com o atendimento."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RS
                </div>
                <div>
                  <p className="font-bold">Roberto Silva</p>
                  <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Preços justos e sem pegadinhas. A Use Carro realmente entrega o que promete!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  AP
                </div>
                <div>
                  <p className="font-bold">Ana Paula</p>
                  <p className="text-sm text-gray-600">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-6 py-2 rounded-full mb-6 animate-bounce">
            <span className="text-2xl">⏰</span>
            <span className="text-sm uppercase tracking-wider">Últimas Horas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            As ofertas da Black Friday são por tempo limitado. Garanta já o seu carro com condições exclusivas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+aproveitar+as+ofertas+da+Black+Friday&type=phone_number&app_absent=0", "_blank")}
              className="bg-white text-purple-600 font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Falar com Especialista Agora 🚀
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('ofertas');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105 cursor-pointer border-4 border-white"
            >
              Ver Ofertas Novamente
            </button>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <ChatSection />

      <Footer />
    </div>
  );
};

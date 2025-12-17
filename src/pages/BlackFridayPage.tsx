import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlackFridayVehicleCard } from "@/components/BlackFridayVehicleCard";
import { ChatSection } from "@/sections/ChatSection";
import { useState, useEffect } from "react";

const ofertas2026VehiclesData = [
  {
    vehicleId: "1",
    fipeValue: "R$ 68.657",
    assinaturaPrice: "R$ 1.749,99",
    financiamentoPrice: "R$ 1.615,81",
    consorcioCredit: "R$ 72.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 674,00",
  },
  {
    vehicleId: "14",
    fipeValue: "R$ 105.484",
    assinaturaPrice: "R$ 2.247,99",
    financiamentoPrice: "R$ 2.482,99",
    consorcioCredit: "R$ 102.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 953,00",
  },
  {
    vehicleId: "10",
    fipeValue: "R$ 95.620",
    assinaturaPrice: "R$ 2.388,99",
    financiamentoPrice: "R$ 2.115,77",
    consorcioCredit: "R$ 92.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 860,00",
  },
  {
    vehicleId: "19",
    fipeValue: "R$ 145.000",
    assinaturaPrice: "R$ 3.139,99",
    financiamentoPrice: "R$ 3.720,00",
    consorcioCredit: "R$ 150.000",
    consorcioTerm: "120m",
    consorcioPrice: "R$ 2.480,00",
  },
  {
    vehicleId: "31",
    fipeValue: "R$ 172.477",
    assinaturaPrice: "R$ 3.845,99",
    financiamentoPrice: "R$ 4.060,34",
    consorcioCredit: "R$ 170.000",
    consorcioTerm: "90m",
    consorcioPrice: "R$ 1.090,00",
  },
  {
    vehicleId: "17",
    fipeValue: "R$ 135.000",
    assinaturaPrice: "R$ 2.899,99",
    financiamentoPrice: "R$ 3.540,00",
    consorcioCredit: "R$ 140.000",
    consorcioTerm: "120m",
    consorcioPrice: "R$ 2.360,00",
  },
  {
    vehicleId: "22",
    fipeValue: "R$ 119.780",
    assinaturaPrice: "R$ 3.169,00",
    financiamentoPrice: "R$ 2.650,00",
    consorcioCredit: "R$ 122.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 1.084,00",
  },
  {
    vehicleId: "7",
    fipeValue: "R$ 112.155",
    assinaturaPrice: "R$ 2.059,00",
    financiamentoPrice: "R$ 2.480,00",
    consorcioCredit: "R$ 112.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 995,00",
  },
  {
    vehicleId: "32",
    fipeValue: "R$ 207.189",
    assinaturaPrice: "R$ 5.369,00",
    financiamentoPrice: "R$ 4.687,50",
    consorcioCredit: "R$ 200.000",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 1.560,00",
  },
  {
    vehicleId: "9",
    fipeValue: "R$ 99.999",
    assinaturaPrice: "R$ 2.359,00",
    financiamentoPrice: "R$ 2.213,00",
    consorcioCredit: "R$ 102.500",
    consorcioTerm: "80m",
    consorcioPrice: "R$ 907,00",
  },
];

export const Ofertas2026Page = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date('2026-01-01T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Ofertas 2026 */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 pt-32 pb-20 overflow-hidden">
        {/* Background Pattern - Bokeh Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        {/* Metallic Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 text-center text-white z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-black px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-2xl">✨</span>
            <span className="text-sm uppercase tracking-wider">Ofertas Especiais 2026</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="block mb-2">Comece 2026</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">no comando</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Inteligente, simples e <span className="text-cyan-300">livre de burocracia</span>
          </p>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Garanta seu carro para as viagens de fim de ano agora. Pule as preocupações com IPVA, seguro e manutenção: a única coisa que você vai acumular são novas memórias.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => {
                const element = document.getElementById('ofertas');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Quero garantir meu carro para o Natal 🎄
            </button>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+saber+mais+sobre+as+ofertas+2026&type=phone_number&app_absent=0", "_blank")}
              className="bg-white text-blue-900 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 cursor-pointer border-4 border-white"
            >
              Falar com Especialista
            </button>
          </div>
          
          {/* Countdown Timer */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-400/50">
            <p className="text-cyan-300 font-bold mb-3 text-sm uppercase tracking-wider">Contagem regressiva para 2026</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-blue-200 uppercase">Dias</div>
              </div>
              <div className="text-4xl font-black text-cyan-300">:</div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-blue-200 uppercase">Horas</div>
              </div>
              <div className="text-4xl font-black text-cyan-300">:</div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-blue-200 uppercase">Minutos</div>
              </div>
              <div className="text-4xl font-black text-cyan-300">:</div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-blue-200 uppercase">Segundos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Janeiro sem IPVA Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Janeiro sem boleto de IPVA? <br />
              <span className="text-cyan-200">Com a Use Carro é realidade.</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Enquanto todos se preocupam com as contas de início de ano, você só se preocupa com o destino da sua próxima viagem.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Smart */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
              Benefícios Smart para suas férias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformando características técnicas em soluções de férias
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="font-black text-xl mb-3 text-blue-950">Pronto para a estrada</h3>
              <p className="text-gray-700">Processo 100% digital e ágil. Você resolve tudo online e sai dirigindo antes de 2025 acabar.</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-cyan-100">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="font-black text-xl mb-3 text-blue-950">Férias Blindadas</h3>
              <p className="text-gray-700">Seguro completo e assistência 24h inclusos. Se imprevistos acontecerem na viagem, nós resolvemos.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="font-black text-xl mb-3 text-blue-950">Seu dinheiro rende mais</h3>
              <p className="text-gray-700">Sem entrada e sem desvalorização. Use seu capital para investir em você ou nas suas férias, não em um passivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="ofertas" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black px-6 py-2 rounded-full mb-4 shadow-lg">
              <span className="text-xl">🚗</span>
              <span className="text-sm uppercase tracking-wider">Ofertas Especiais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              Veículos Selecionados para 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Garanta seu carro novo com condições exclusivas de fim de ano
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ofertas2026VehiclesData.map((vehicle, index) => (
              <BlackFridayVehicleCard key={index} {...vehicle} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = "/veiculos"}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              Ver Todos os Veículos Disponíveis
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              Quem escolheu a inteligência para mover 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de 20.000 clientes satisfeitos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Vendi meu carro antigo em novembro e assinei com a Use Carro. Foi a melhor decisão: vou viajar tranquilo e com um carro zero, sem me preocupar com revisão."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  CS
                </div>
                <div>
                  <p className="font-bold text-blue-950">Cliente Smart</p>
                  <p className="text-sm text-gray-600">São Paulo, SP</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-cyan-100">
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Processo super rápido e transparente. Em menos de uma semana já estava com meu carro novo para as férias de fim de ano!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MR
                </div>
                <div>
                  <p className="font-bold text-blue-950">Marcos Roberto</p>
                  <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "A melhor decisão financeira que tomei. Sem IPVA, sem seguro, sem dor de cabeça. Só alegria!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JF
                </div>
                <div>
                  <p className="font-bold text-blue-950">Juliana Ferreira</p>
                  <p className="text-sm text-gray-600">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-blue-900 font-black px-6 py-2 rounded-full mb-6">
            <span className="text-2xl">⏰</span>
            <span className="text-sm uppercase tracking-wider">Estoque Limitado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            2026 já começou para quem decide rápido
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Não deixe para a última semana do ano. O estoque de final de ano é limitado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('ofertas');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-900 font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Simular meu carro novo agora 🚀
            </button>
            <button 
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Quero+garantir+meu+carro+para+2026&type=phone_number&app_absent=0", "_blank")}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105 cursor-pointer border-4 border-white"
            >
              Falar com Especialista
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

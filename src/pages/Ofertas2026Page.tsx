import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import { Ofertas2026VehicleCard } from "@/components/Ofertas2026VehicleCard";
import { useState, useEffect } from "react";
import { getVehicles } from "@/utils/vehicleStorage";

export const Ofertas2026Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to Jan 1, 2026
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const vehicles = getVehicles();
  // Filter or select specific vehicles if needed, for now we use all from the updated list
  const offerVehicles = Object.values(vehicles);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-400 selection:text-black">
      <LuxuryHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30"></div>
          {/* Bokeh effect simulation */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/40 rounded-full blur-[2px]"></div>
          <div className="absolute top-40 right-40 w-6 h-6 bg-cyan-400/30 rounded-full blur-[4px]"></div>
          <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-blue-300/30 rounded-full blur-[1px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-100">Ofertas de Ano Novo</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Comece 2026 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">no comando.</span>
          </h1>

          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Garanta seu carro para as viagens de fim de ano agora. Pule as preocupações com IPVA, seguro e manutenção: a única coisa que você vai acumular são novas memórias.
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-900/20">
                  <span className="text-3xl md:text-4xl font-black text-white font-mono">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs text-cyan-300 uppercase tracking-wider font-bold">{item.label}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm md:text-base tracking-[0.15em] uppercase py-5 px-10 rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 animate-fade-in-up cursor-pointer"
            style={{ animationDelay: '400ms' }}
          >
            Quero garantir meu carro para o Natal
          </button>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 py-12 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Janeiro sem boleto de IPVA? <span className="text-cyan-400">Com a Use Carro é realidade.</span>
            </h3>
            <p className="text-blue-200 text-lg">
              Enquanto todos se preocupam com as contas de início de ano, você só se preocupa com o destino da sua próxima viagem.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/50">
              <span className="text-3xl">🎉</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">⏱️</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Pronto para a estrada</h4>
              <p className="text-gray-400 leading-relaxed">
                Processo 100% digital e ágil. Você resolve tudo online e sai dirigindo antes de 2025 acabar.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Férias Blindadas</h4>
              <p className="text-gray-400 leading-relaxed">
                Seguro completo e assistência 24h inclusos. Se imprevistos acontecerem na viagem, nós resolvemos.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Seu dinheiro rende mais</h4>
              <p className="text-gray-400 leading-relaxed">
                Sem entrada e sem desvalorização. Use seu capital para investir em você ou nas suas férias, não em um passivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section id="ofertas" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase block mb-4">Estoque Limitado</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Seleção Virada de Ano</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerVehicles.map((vehicle) => (
              <Ofertas2026VehicleCard 
                key={vehicle.id}
                vehicleId={vehicle.id}
                monthlyPrice={vehicle.prices.assinatura.monthly}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">
            Quem escolheu a inteligência para mover 2025.
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-2xl text-black font-serif">
              "
            </div>
            <p className="text-xl md:text-2xl text-blue-100 font-light italic leading-relaxed mb-8">
              Vendi meu carro antigo em novembro e assinei com a Use Carro. Foi a melhor decisão: vou viajar tranquilo e com um carro zero, sem me preocupar com revisão.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Cliente" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">Ricardo M.</div>
                <div className="text-cyan-400 text-xs uppercase tracking-wider">Cliente Smart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Conversion */}
      <section className="py-20 px-6 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            2026 já começou para quem decide rápido.
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Não deixe para a última semana do ano. O estoque de final de ano é limitado.
          </p>
          <button 
            onClick={() => window.location.href = "/veiculos"}
            className="bg-white text-blue-950 font-black text-sm md:text-base tracking-[0.15em] uppercase py-5 px-12 rounded-full hover:bg-cyan-50 transition-colors duration-300 shadow-xl cursor-pointer"
          >
            Simular meu carro novo agora
          </button>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

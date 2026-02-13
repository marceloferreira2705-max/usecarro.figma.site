import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const ConsorcioPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de solicitar um Estudo de Viabilidade sobre a Inteligência Patrimonial.");
    window.open(`https://api.whatsapp.com/send/?phone=5512982900169&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />
      
      {/* 1. Hero Section: The Financial Thesis */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden border-b border-white/5">
        {/* Background: Abstract Lines */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L20 80 L40 85 L60 40 L80 50 L100 10" fill="none" stroke="#8C8C8C" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M0 90 L25 70 L50 75 L75 30 L100 20" fill="none" stroke="#8C8C8C" strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
            <defs>
              <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-grad)" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6 font-medium">
              Estratégia Financeira
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              Inteligência Patrimonial: <br />
              <span className="text-[#8C8C8C]">Estratégia Financeira.</span>
            </h1>
            <p className="text-[#8C8C8C] text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed border-l border-[#C5A059] pl-6">
              Por que descapitalizar? Utilize a alavancagem programada para a aquisição do seu veículo de alta performance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Value Proposition (The "Why") */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            
            {/* Column 1 */}
            <div className="group md:pr-12 md:border-r border-[#8C8C8C]/20">
              <div className="mb-8 text-[#C5A059] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Wallet/Safe */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <rect x="3" y="6" width="18" height="14" rx="2" />
                  <path d="M21 10H17C15.8954 10 15 10.8954 15 12V14C15 15.1046 15.8954 16 17 16H21" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Preservação de Liquidez</h3>
              <p className="text-[#8C8C8C] font-light text-sm leading-7 tracking-wide">
                Mantenha seu capital rendendo em suas aplicações financeiras enquanto constrói seu patrimônio automotivo com custo efetivo racional.
              </p>
            </div>

            {/* Column 2 */}
            <div className="group md:px-12 md:border-r border-[#8C8C8C]/20">
              <div className="mb-8 text-[#C5A059] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Percentage/Graph */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <path d="M3 21L21 21" />
                  <path d="M3 21L10 12L14 16L21 5" />
                  <circle cx="21" cy="5" r="2" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Eficiência Fiscal</h3>
              <p className="text-[#8C8C8C] font-light text-sm leading-7 tracking-wide">
                Isenção de juros compostos. Uma estratégia matemática superior ao financiamento bancário tradicional para bens de alto valor.
              </p>
            </div>

            {/* Column 3 */}
            <div className="group md:pl-12">
              <div className="mb-8 text-[#C5A059] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Exchange Arrows */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <path d="M7 10H21L17 6" />
                  <path d="M17 14H3L7 18" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Flexibilidade de Uso</h3>
              <p className="text-[#8C8C8C] font-light text-sm leading-7 tracking-wide">
                Utilize o crédito para aquisição direta, upgrade de blindagem ou como aporte complementar em negociações complexas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Consultant's Role (Strategic Allocation) */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase block mb-6">
                Strategic Allocation
              </span>
              <h2 className="font-serif text-4xl text-white mb-8 leading-tight">
                Engenharia de Crédito <br />Sob Medida
              </h2>
              <p className="text-[#8C8C8C] font-light text-lg leading-relaxed tracking-wide mb-8">
                Não vendemos cotas; desenhamos cenários. Nosso Concierge analisa a saúde dos grupos, a média de lances e a probabilidade estatística de contemplação para alinhar o crédito ao seu timing de compra.
              </p>
              
              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-3xl font-serif text-white mb-1">0%</span>
                  <span className="text-[10px] text-[#8C8C8C] uppercase tracking-widest">Juros Compostos</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-white mb-1">AAA</span>
                  <span className="text-[10px] text-[#8C8C8C] uppercase tracking-widest">Rating Parceiros</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative h-[500px] bg-[#121212] border border-white/5 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              {/* Abstract/Business Image */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Financial Analysis" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              
              {/* Overlay Data Element */}
              <div className="absolute bottom-8 left-8 z-20 border-l border-[#C5A059] pl-4">
                <p className="text-white text-xs font-mono mb-1">MARKET ANALYSIS</p>
                <p className="text-[#8C8C8C] text-[10px] tracking-widest">SCENARIO OPTIMIZATION</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Strategic Call to Action */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#0A0A0A] border border-[#C5A059] p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative corner lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C5A059]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C5A059]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C5A059]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C5A059]"></div>

            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Solicite um Estudo de Viabilidade
            </h2>
            <p className="text-[#8C8C8C] font-light text-sm md:text-base tracking-wide mb-10 max-w-2xl mx-auto">
              Receba uma projeção comparativa entre o custo de oportunidade do seu capital vs. a taxa administrativa da Inteligência Patrimonial.
            </p>

            <button 
              onClick={handleWhatsAppClick}
              className="bg-[#C5A059] text-black font-bold text-xs tracking-[0.2em] uppercase py-4 px-10 hover:bg-white transition-colors duration-300"
            >
              Falar com Concierge
            </button>
          </div>
        </div>
      </section>

      {/* 5. Trust Indicators (Footer) */}
      <section className="pb-24 px-6 text-center bg-[#050505]">
        <p className="text-[#8C8C8C] text-[10px] tracking-[0.2em] uppercase mb-8 opacity-60">
          Parcerias estratégicas com as administradoras mais sólidas do mercado financeiro nacional
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
           {/* Placeholder for Bank Logos - Using text for minimalist style as requested */}
           <span className="font-serif text-xl text-white">Porto Bank</span>
           <span className="font-serif text-xl text-white">Itaú</span>
           <span className="font-serif text-xl text-white">Santander</span>
           <span className="font-serif text-xl text-white">Bradesco</span>
           <span className="font-serif text-xl text-white">Safra</span>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

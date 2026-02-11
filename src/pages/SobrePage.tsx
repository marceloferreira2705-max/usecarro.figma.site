import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const SobrePage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />
      
      {/* 1. Hero Section: The Authority */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6 animate-fade-in-up">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6 font-medium">
            O Legado
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Muito Além da Posse.
          </h1>
          <p className="text-[#A0A0A0] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed border-t border-[#C5A059]/30 pt-6">
            A divisão de alta renda do Grupo Nexi, desenhada para quem exige exclusividade.
          </p>
        </div>
      </section>

      {/* 2. The Backbone (Grupo Nexi Trust Seal) */}
      <section className="py-32 px-6 md:px-12 bg-[#111111] relative">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-scales.png")' }}></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            
            <div className="md:w-1/3 text-center md:text-left">
              <p className="text-[#C5A059] font-serif italic text-xl mb-2">A Company by</p>
              <h2 className="text-4xl font-serif text-white tracking-widest">GRUPO NEXI</h2>
              <div className="w-16 h-[1px] bg-[#C5A059] mt-6 mx-auto md:mx-0"></div>
            </div>

            <div className="md:w-2/3 border-l border-[#C5A059]/20 pl-0 md:pl-12">
              <h3 className="font-serif text-3xl text-white mb-6">Solidez Corporativa</h3>
              <p className="text-[#A0A0A0] font-light text-lg leading-relaxed tracking-wide text-justify">
                Operamos sob a chancela do Grupo Nexi, sinônimo de integridade e robustez financeira. Nossa estrutura não é apenas digital; é fundamentada em processos auditáveis e compliance rigoroso, oferecendo a segurança jurídica que seu patrimônio exige.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Mission (The Boutique Concept) */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 md:order-1">
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase block mb-8">
                Filosofia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                Curadoria, <br />não Varejo.
              </h2>
              <p className="text-[#A0A0A0] font-light text-lg leading-relaxed tracking-wide mb-8 text-justify">
                No mercado massificado, você é apenas um contrato. Aqui, você é um portfólio. Nascemos para ser o filtro definitivo entre o cliente de alta performance e as maiores operadoras e montadoras do país.
              </p>
              
              <div className="bg-[#111111] border border-[#C5A059]/30 p-8 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]"></div>
                <p className="text-white font-light italic text-lg leading-relaxed">
                  "Não representamos uma única marca. Representamos você. Nossa independência nos permite buscar, negociar e validar a melhor opção técnica e financeira em qualquer player do mercado, sem conflito de interesses."
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative h-[600px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
                alt="Abstract Luxury Car Detail" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. The Concierge Promise (Closing) */}
      <section className="py-32 px-6 md:px-12 bg-[#080808] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-[#C5A059] text-xl">✦</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-snug">
            Seu tempo é o ativo mais valioso.
          </h2>
          
          <p className="text-[#A0A0A0] font-light text-lg leading-relaxed tracking-wide mb-12">
            Nossa missão é preservá-lo, entregando a chave do seu veículo com a burocracia resolvida e a excelência garantida.
          </p>
        </div>
      </section>

      {/* 5. Footer Connection */}
      <section className="pb-24 bg-[#050505] text-center">
        <a 
          href="/" 
          className="inline-block py-4 px-10 border border-[#C5A059] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-300"
        >
          Conheça Nossos Veículos
        </a>
      </section>

      <LuxuryFooter />
    </div>
  );
};

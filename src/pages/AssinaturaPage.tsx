import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const AssinaturaPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de falar com um Concierge Advisor sobre a Signature Experience.");
    window.open(`https://api.whatsapp.com/send/?phone=5512982900169&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans selection:bg-luxury-gold selection:text-black">
      <LuxuryHeader />
      
      {/* Hero Section Minimalista */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-luxury-gold/30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <span className="text-luxury-gold text-[10px] tracking-[0.4em] uppercase block mb-6">
            Mobilidade como Serviço
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
            Signature Experience
          </h1>
          <p className="text-luxury-gray text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            A liberdade de conduzir o excepcional. Posse blindada de depreciação com gestão completa de ativos.
          </p>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Curadoria de Frota */}
            <div className="group bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/5 hover:border-luxury-gold transition-all duration-500 p-10 flex flex-col h-full">
              <div className="mb-8 text-luxury-gold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Abstract Car Silhouette */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <path d="M5 12H19M5 12L3 15H21L19 12M5 12V17H19V12M7 17V19M17 17V19" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12L7 8H17L19 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-500">
                Acervo Premium
              </h3>
              
              <p className="text-luxury-gray font-light text-sm leading-7 tracking-wide">
                Atuamos como seu Concierge Pessoal, navegando entre as principais operadoras e montadoras premium do país, garantindo que você dirija adequado com as suas necessidades.
              </p>
            </div>

            {/* Card 2: Blindagem & Segurança */}
            <div className="group bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/5 hover:border-luxury-gold transition-all duration-500 p-10 flex flex-col h-full">
              <div className="mb-8 text-luxury-gold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Fine-line Shield */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-500">
                Proteção Sob Medida
              </h3>
              
              <p className="text-luxury-gray font-light text-sm leading-7 tracking-wide">
                Disponibilidade de veículos com Blindagem certificada, assegurando a integridade e tranquilidade que seu estilo de vida exige.
              </p>
            </div>

            {/* Card 3: Consultoria Estratégica */}
            <div className="group bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/5 hover:border-luxury-gold transition-all duration-500 p-10 flex flex-col h-full relative overflow-hidden">
              <div className="mb-8 text-luxury-gold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon: Abstract User/Advisor */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-[0.8]">
                  <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11V15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-500">
                Concierge Advisor
              </h3>
              
              <p className="text-luxury-gray font-light text-sm leading-7 tracking-wide mb-8">
                Mais que um atendimento, uma consultoria. Nosso especialista decodifica todas as vantagens tributárias, financeiras e operacionais da assinatura, provando na ponta do lápis por que este é o modelo mais inteligente para o seu perfil.
              </p>

              <div className="mt-auto">
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  Whatsapp Concierge 
                  <span className="text-lg leading-none">&rsaquo;</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

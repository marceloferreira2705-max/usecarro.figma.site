import React from "react";

export const BespokeSourcingBanner = () => {
  const handleConciergeClick = () => {
    const message = encodeURIComponent("Olá, não encontrei o veículo que procuro na coleção. Gostaria de solicitar uma Busca Personalizada (Bespoke Sourcing).");
    window.open(`https://api.whatsapp.com/send/?phone=5512982900169&text=${message}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <section className="bg-[#080808] border-y border-[#333333] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        
        {/* Icon: Elegant Key/Search */}
        <div className="mb-8 flex justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A059]">
            <path d="M21 10H17C15.8954 10 15 10.8954 15 12V14C15 15.1046 15.8954 16 17 16H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="13" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.5 9.5L15.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5 5.5L17.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
          Além da Coleção
        </h3>

        <p className="font-sans text-[#A0A0A0] text-lg leading-relaxed font-light tracking-wide mb-10">
          Os modelos acima representam nossa curadoria do mês. Seu desejo não está listado? Nosso Concierge possui acesso integral às montadoras e acervos privados para localizar e negociar o veículo exato que você procura.
        </p>

        <button 
          onClick={handleConciergeClick}
          className="text-[#C5A059] text-sm tracking-[0.2em] uppercase font-bold border-b border-[#C5A059] pb-1 hover:text-white hover:border-white transition-all duration-300"
        >
          Solicitar Busca Personalizada com Concierge &gt;
        </button>

      </div>
    </section>
  );
};

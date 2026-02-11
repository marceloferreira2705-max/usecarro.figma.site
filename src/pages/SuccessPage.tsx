import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import React from "react";

export const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black flex flex-col">
      <LuxuryHeader />
      
      <main className="flex-1 flex items-center justify-center p-6 pt-32">
        <div className="max-w-2xl w-full text-center animate-fade-in-up">
          
          <div className="w-20 h-20 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-[#C5A059] text-3xl">✓</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            Mensagem Enviada
          </h1>
          
          <p className="text-[#A0A0A0] font-light text-lg leading-relaxed tracking-wide mb-12 max-w-lg mx-auto">
            Agradecemos o contato. Em breve, um de nossos especialistas entrará em contato com você.
          </p>
          
          <button
            onClick={() => window.location.href = "/"}
            className="inline-block py-4 px-10 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            Voltar para a Home
          </button>
        </div>
      </main>
      
      <LuxuryFooter />
    </div>
  );
};

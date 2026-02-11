import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const FormularioEnviadoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para a home após 5 segundos (aumentado para dar tempo de ler a mensagem elegante)
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black flex flex-col">
      <LuxuryHeader />
      
      <main className="flex-1 flex items-center justify-center p-6 pt-32">
        <div className="max-w-2xl w-full text-center animate-fade-in-up">
          
          {/* Ícone Elegante */}
          <div className="w-24 h-24 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-10 relative">
            <div className="absolute inset-0 rounded-full border border-[#C5A059] animate-ping opacity-20"></div>
            <span className="text-[#C5A059] text-4xl">✓</span>
          </div>
          
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6">
            Solicitação Confirmada
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            Recebemos seu interesse.
          </h1>
          
          <div className="text-[#A0A0A0] font-light text-lg leading-relaxed tracking-wide space-y-6 mb-12 max-w-xl mx-auto">
            <p>
              Nossa equipe de Concierge já iniciou a análise do seu perfil.
            </p>
            <p>
              Em breve, um de nossos Advisors entrará em contato para apresentar a estratégia ideal para sua aquisição.
            </p>
          </div>
          
          <div className="w-12 h-[1px] bg-[#C5A059]/30 mx-auto mb-12"></div>
          
          <p className="text-[#A0A0A0] text-xs tracking-widest uppercase mb-8">
            Você será redirecionado para a coleção em instantes...
          </p>
          
          <button
            onClick={() => navigate("/")}
            className="inline-block py-4 px-10 border border-white/20 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Voltar Agora
          </button>
        </div>
      </main>

      <LuxuryFooter />
    </div>
  );
};

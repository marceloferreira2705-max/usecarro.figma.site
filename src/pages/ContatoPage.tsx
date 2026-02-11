import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const ContatoPage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5512982900169&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+Advisor+Dedicado.&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />
      
      <main className="pt-40 pb-24 px-6 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6">
            Exclusive Access
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Atendimento Private
          </h1>
          <p className="text-[#A0A0A0] text-lg font-light tracking-wide max-w-xl mx-auto">
            Um canal direto e blindado para clientes que valorizam discrição e eficiência.
          </p>
        </div>

        {/* The Gold Card */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-[#8A7038]/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#111111] border border-[#C5A059] p-12 md:p-16 text-center max-w-md mx-auto rounded-sm">
            <div className="mb-8 flex justify-center">
              {/* Monochrome Gold WhatsApp Icon */}
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A059]">
                <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.318 11.568 9.145 11.27C8.972 10.973 9.127 10.812 9.275 10.664C9.409 10.531 9.573 10.317 9.721 10.144C9.87 9.97 9.919 9.846 10.019 9.647C10.118 9.449 10.069 9.276 9.994 9.127C9.919 8.978 9.325 7.515 9.078 6.92C8.836 6.341 8.591 6.42 8.409 6.412C8.236 6.404 8.038 6.402 7.839 6.402C7.641 6.402 7.319 6.476 7.047 6.774C6.775 7.071 6.007 7.79 6.007 9.253C6.007 10.715 7.072 12.128 7.22 12.327C7.369 12.525 9.316 15.527 12.297 16.814C13.006 17.12 13.559 17.303 13.991 17.439C14.703 17.666 15.351 17.634 15.862 17.557C16.433 17.472 17.62 16.838 17.868 16.144C18.116 15.45 18.116 14.855 18.041 14.731C17.967 14.607 17.769 14.533 17.472 14.382Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.05 0C5.495 0 0.16 5.335 0.157 11.892C0.157 13.988 0.704 16.034 1.745 17.837L0.057 24L6.362 22.346C8.087 23.285 10.046 23.78 12.055 23.78H12.06C18.609 23.78 23.945 18.445 23.948 11.887C23.948 8.712 22.713 5.725 20.468 3.477C18.222 1.228 15.238 0 12.05 0ZM12.055 21.797C10.27 21.797 8.522 21.318 7.012 20.422L6.651 20.208L2.91 21.19L3.908 17.542L3.673 17.168C2.71 15.64 2.203 13.86 2.203 12.03C2.203 6.58 6.638 2.145 12.09 2.145C14.73 2.145 17.192 3.175 19.058 5.043C20.923 6.911 21.95 9.392 21.947 12.033C21.944 17.483 17.509 21.797 12.055 21.797Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="font-serif text-3xl text-white mb-4">Advisor Dedicado</h2>
            <p className="text-[#A0A0A0] font-light text-sm mb-10 leading-relaxed">
              Conecte-se instantaneamente com nossa equipe sênior para uma consultoria personalizada.
            </p>

            <button 
              onClick={handleWhatsAppClick}
              className="w-full py-4 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Iniciar Conversa Blindada
            </button>
          </div>
        </div>

        {/* Corporate Details */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-8 opacity-50"></div>
          
          <p className="text-white font-serif text-lg mb-4">
            São Paulo | Rio de Janeiro | Vale do Paraíba
          </p>
          
          <p className="text-[#8C8C8C] font-light text-sm tracking-wide mb-2">
            Av. Nove de Julho, nº 95 - Sala 21, Vila Adyana
          </p>
          <p className="text-[#8C8C8C] font-light text-sm tracking-wide mb-6">
            São José dos Campos - SP
          </p>
          
          <a href="mailto:concierge@usecarro.com.br" className="text-[#C5A059] hover:text-white transition-colors text-sm tracking-widest uppercase border-b border-[#C5A059]/30 pb-1">
            concierge@usecarro.com.br
          </a>
        </div>

      </main>

      <LuxuryFooter />
    </div>
  );
};

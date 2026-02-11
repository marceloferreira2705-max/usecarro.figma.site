import { useEffect } from "react";

export const EspecialistaPage = () => {
  useEffect(() => {
    // Redireciona automaticamente para o WhatsApp após 1.5s (tempo para ver a animação)
    const timer = setTimeout(() => {
      window.location.href = "https://api.whatsapp.com/send/?phone=5512982900169&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+Advisor+Dedicado.&type=phone_number&app_absent=0";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
      <div className="text-center">
        
        {/* Loader Sofisticado */}
        <div className="relative w-24 h-24 mx-auto mb-12">
          <div className="absolute inset-0 border-t-2 border-[#C5A059] rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-[#C5A059]/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ícone WhatsApp Minimalista Dourado */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A059]">
              <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.318 11.568 9.145 11.27C8.972 10.973 9.127 10.812 9.275 10.664C9.409 10.531 9.573 10.317 9.721 10.144C9.87 9.97 9.919 9.846 10.019 9.647C10.118 9.449 10.069 9.276 9.994 9.127C9.919 8.978 9.325 7.515 9.078 6.92C8.836 6.341 8.591 6.42 8.409 6.412C8.236 6.404 8.038 6.402 7.839 6.402C7.641 6.402 7.319 6.476 7.047 6.774C6.775 7.071 6.007 7.79 6.007 9.253C6.007 10.715 7.072 12.128 7.22 12.327C7.369 12.525 9.316 15.527 12.297 16.814C13.006 17.12 13.559 17.303 13.991 17.439C14.703 17.666 15.351 17.634 15.862 17.557C16.433 17.472 17.62 16.838 17.868 16.144C18.116 15.45 18.116 14.855 18.041 14.731C17.967 14.607 17.769 14.533 17.472 14.382Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-2xl text-white mb-4 tracking-wide">
          Conectando ao Concierge
        </h1>
        
        <p className="text-[#A0A0A0] text-xs tracking-[0.2em] uppercase animate-pulse">
          Estabelecendo conexão segura...
        </p>
      </div>
    </div>
  );
};

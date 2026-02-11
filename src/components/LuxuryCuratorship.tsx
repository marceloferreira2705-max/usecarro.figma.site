export const LuxuryCuratorship = () => {
  return (
    <section className="bg-luxury-black py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent to-luxury-gold/30"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-luxury-gold text-[10px] tracking-[0.4em] uppercase block mb-8 animate-fade-in-up">
          Concierge Automotivo
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-10 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Curadoria de Excelência
        </h2>
        
        <div className="w-12 h-[1px] bg-luxury-gold mx-auto mb-10 opacity-50"></div>
        
        <p className="font-sans text-luxury-gray text-lg md:text-xl leading-relaxed font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Somos especialistas em assinatura de veículos de alto valor e performance. Atuamos como seu concierge dedicado para definir a estratégia ideal de posse do seu ativo — cuidando minuciosamente de cada detalhe, da burocracia à entrega, para que sua única preocupação seja dirigir.
        </p>
      </div>
    </section>
  );
};

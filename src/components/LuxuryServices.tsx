export const LuxuryServices = () => {
  return (
    <section className="bg-luxury-black py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Card 1: Assinatura */}
          <div className="group relative bg-luxury-card p-12 md:p-16 border border-white/5 hover:border-luxury-gold/30 transition-all duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-500">
              Assinatura Exclusive
            </h3>
            
            <p className="font-sans text-luxury-gray text-lg leading-relaxed tracking-wide mb-12 font-light">
              A liberdade de conduzir o excepcional. Posse blindada de depreciação com gestão completa de ativos.
            </p>
            
            <a 
              href="/assinatura" 
              className="inline-block border-b border-luxury-gold/50 pb-1 text-luxury-gold text-sm tracking-[0.2em] uppercase hover:text-white hover:border-white transition-all duration-300"
            >
              Configurar Plano
            </a>
          </div>

          {/* Card 2: Consórcio */}
          <div className="group relative bg-luxury-card p-12 md:p-16 border border-white/5 hover:border-luxury-gold/30 transition-all duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-500">
              Inteligência Patrimonial
            </h3>
            
            <p className="font-sans text-luxury-gray text-lg leading-relaxed tracking-wide mb-12 font-light">
              Estratégia fiscal inteligente para aquisição programada de bens de alto valor.
            </p>
            
              <a 
              href="/consorcio" 
              className="inline-block border-b border-luxury-gold/50 pb-1 text-luxury-gold text-sm tracking-[0.2em] uppercase hover:text-white hover:border-white transition-all duration-300"
            >
              Falar com Concierge
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

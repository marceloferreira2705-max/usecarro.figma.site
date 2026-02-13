export const LuxuryHero = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay for contrast */}
        <img
          src="https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770820056218-0.png"
          alt="Luxury Car Detail"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6">
        <div className="text-center animate-fade-in-up max-w-4xl">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6 font-medium">
            O Legado
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
            Muito Além da Posse.
          </h1>
          <p className="text-[#A0A0A0] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
            Nossa divisão de alta renda, desenhada para quem exige exclusividade.
          </p>
          
          <button
            onClick={scrollToCollection}
            className="group relative px-8 py-4 overflow-hidden rounded-none bg-transparent transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full border border-white/30 group-hover:border-luxury-gold/80 transition-colors duration-500"></span>
            <span className="relative font-sans text-sm tracking-[0.3em] text-white uppercase group-hover:text-luxury-gold transition-colors duration-300">
              Explorar a Coleção
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

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
      <div className="relative z-20 h-full flex flex-col justify-end items-center pb-24 px-6">
        <div className="text-center animate-fade-in-up">
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

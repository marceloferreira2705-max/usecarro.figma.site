import { vehiclesData } from "@/data/vehiclesData";

export const LuxuryVehicleList = () => {
  // Show all vehicles from the registry
  const boutiqueInventory = Object.values(vehiclesData);

  return (
    <section id="collection" className="bg-luxury-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-luxury-gold text-xs tracking-[0.4em] uppercase block mb-6 animate-fade-in-up">Inventário Exclusivo</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>A Coleção</h2>
        </div>

        <div className="flex flex-col gap-24">
          {boutiqueInventory.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group relative w-full flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-luxury-card border border-white/5 rounded-sm">
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/1200x600/121212/333333?text=Imagem+Indisponível";
                  }}
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col items-center text-center">
                  <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {vehicle.brand}
                  </span>
                  
                  <h3 className="font-serif text-3xl md:text-5xl text-white mb-2 leading-tight">
                    {vehicle.version}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-luxury-gray text-sm font-light tracking-widest uppercase mb-8">
                    <span>{vehicle.year}</span>
                    <span className="w-1 h-1 bg-luxury-gold rounded-full"></span>
                    <span>{vehicle.engine}</span>
                  </div>

                  <a
                    href={`/veiculo/${vehicle.id}/${vehicle.title.replace(/\s+/g, '-')}`}
                    className="inline-block py-3 px-8 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-300 backdrop-blur-sm"
                  >
                    Explorar Detalhes
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center border-t border-white/5 pt-16">
           <p className="text-luxury-gray font-serif italic text-xl md:text-2xl opacity-60 max-w-2xl mx-auto">
             "A verdadeira elegância não é ser notado, é ser lembrado."
           </p>
        </div>
      </div>
    </section>
  );
};

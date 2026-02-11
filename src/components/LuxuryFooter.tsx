export const LuxuryFooter = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/5 py-16 px-6">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-xl text-white tracking-widest mb-2">USE CARRO</h2>
          <p className="text-luxury-gray text-xs tracking-widest uppercase">Boutique Digital</p>
        </div>

        <div className="flex gap-8">
          <a href="/termos" className="text-luxury-gray hover:text-white text-xs tracking-widest uppercase transition-colors">Termos</a>
          <a href="/privacidade" className="text-luxury-gray hover:text-white text-xs tracking-widest uppercase transition-colors">Privacidade</a>
          <a href="/contato" className="text-luxury-gray hover:text-white text-xs tracking-widest uppercase transition-colors">Contato</a>
        </div>

        <div className="text-luxury-gray text-xs tracking-widest">
          © 2026 USE CARRO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

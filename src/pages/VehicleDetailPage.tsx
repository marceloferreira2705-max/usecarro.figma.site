import { LuxuryHeader } from "@/components/LuxuryHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VehicleData } from "@/data/vehiclesData";
import { getVehicleById } from "@/utils/vehicleStorage";

export const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<VehicleData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      if (id) {
        const foundVehicle = getVehicleById(id);
        if (foundVehicle) {
          setVehicle(foundVehicle);
        } else {
          setError("Veículo não encontrado na base de dados.");
        }
      } else {
        setError("ID do veículo não fornecido.");
      }
    } catch (err) {
      console.error("Erro ao carregar veículo:", err);
      setError("Ocorreu um erro ao carregar os dados do veículo.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleOfferFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) window.location.href = "/formulario-enviado";
      else alert("Erro ao enviar formulário.");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de rede.");
    }
  };

  const handleWhatsAppClick = () => {
    if (!vehicle) return;
    
    const planText = selectedPlan ? `Tenho interesse na modalidade *${selectedPlan}*` : "Gostaria de mais informações";
    const message = `Olá! ${planText} para o veículo *${vehicle.title || "Veículo"}*. Poderia me ajudar?`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://api.whatsapp.com/send/?phone=5512982900169&text=${encodedMessage}&type=phone_number&app_absent=0`, '_blank');
  };

  // Helper seguro para formatar moeda
  const safeFormatCurrency = (value: string | number | undefined): string => {
    if (value === undefined || value === null || value === "") return "Sob Consulta";
    if (typeof value === 'string' && value.includes("R$")) return value;
    
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return "Sob Consulta";
    
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  if (loading) {
    return <div className="min-h-screen bg-luxury-black flex items-center justify-center"><div className="text-luxury-gold animate-pulse">Carregando...</div></div>;
  }

  if (error || !vehicle) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-white font-serif text-3xl mb-4">Veículo Indisponível</h1>
          <p className="text-luxury-gray mb-6">{error || "Não foi possível carregar as informações deste veículo."}</p>
          <a href="/" className="text-luxury-gold border-b border-luxury-gold pb-1 uppercase text-xs tracking-widest hover:text-white transition-colors">Voltar para a Coleção</a>
        </div>
      </div>
    );
  }

  // Safe access to properties with defaults
  const mainImage = (vehicle.images && vehicle.images.length > 0 && vehicle.images[0]) 
    ? vehicle.images[0] 
    : "https://via.placeholder.com/1200x800?text=Imagem+Indisponível";
    
  const thumbnails = (vehicle.images && vehicle.images.length > 0)
    ? vehicle.images.slice(0, 4) 
    : [mainImage];
    
  // Preencher thumbnails se tiver menos de 4
  while (thumbnails.length < 4) {
    thumbnails.push(mainImage);
  }

  // Safe access to prices
  const assinaturaPrice = vehicle.prices?.assinatura?.monthly || "Sob Consulta";
  const consorcioPrice = vehicle.prices?.consorcio?.monthly || "Sob Consulta";
  const consorcioTermStr = vehicle.prices?.consorcio?.term || "80 meses";
  
  // Calculate estimated credit safely
  let estimatedCreditValue = "Sob Consulta";
  try {
    if (consorcioPrice && consorcioPrice !== "Sob Consulta" && consorcioPrice !== "R$ 0,00") {
      // Remove R$, pontos e troca vírgula por ponto
      const cleanPrice = consorcioPrice.replace(/[^\d,]/g, '').replace(',', '.');
      const numericPrice = parseFloat(cleanPrice);
      
      const cleanTerm = consorcioTermStr.replace(/\D/g, '');
      const numericTerm = parseInt(cleanTerm) || 80;
      
      if (!isNaN(numericPrice) && !isNaN(numericTerm) && numericPrice > 0) {
        // Estimativa: (Parcela * Prazo) * 0.85 (fator de correção aproximado para taxa adm)
        const totalValue = numericPrice * numericTerm * 0.85;
        estimatedCreditValue = totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      }
    }
  } catch (e) {
    console.error("Erro ao calcular crédito estimado", e);
    estimatedCreditValue = "Sob Consulta";
  }

  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans selection:bg-luxury-gold selection:text-black pb-40">
      <LuxuryHeader />
      
      <main className="pt-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          
          {/* 1. Título e Subtítulo Centralizados */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-luxury-gold text-xs tracking-[0.4em] uppercase block mb-4">
              {vehicle.brand || "Marca"}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight">
              {vehicle.version || vehicle.title || "Veículo Exclusivo"}
            </h1>
            <p className="text-luxury-gray font-light text-lg tracking-wide uppercase">
              {vehicle.year || "2026"} • {vehicle.type || "Premium"}
            </p>
          </div>

          {/* 2. Foto Principal Centralizada */}
          <div className="w-full aspect-[16/9] bg-luxury-card border border-white/5 mb-16 overflow-hidden relative group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <img
              src={mainImage}
              alt={vehicle.title || "Veículo"}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x800?text=Imagem+Indisponível"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent pointer-events-none"></div>
          </div>

          {/* 3. Descrição do Veículo */}
          <div className="max-w-3xl text-center mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-serif text-2xl text-white mb-6">Sobre o Veículo</h3>
            <p className="text-luxury-gray font-light leading-relaxed text-lg">
              {vehicle.description || "Uma obra-prima da engenharia automotiva. Este veículo combina performance excepcional com o mais alto nível de conforto e tecnologia. Cada detalhe foi pensado para proporcionar uma experiência de condução única e inesquecível."}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-8 text-xs tracking-widest uppercase text-luxury-gold">
              <span>{vehicle.engine || "Motorização"}</span>
              <span className="text-white/20">•</span>
              <span>{vehicle.transmission || "Transmissão"}</span>
              <span className="text-white/20">•</span>
              <span>{vehicle.fuelType || "Combustível"}</span>
            </div>
          </div>

          {/* 4. 4 Fotos Pequenas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {thumbnails.map((thumb, index) => (
              <div key={index} className="aspect-[4/3] bg-luxury-card border border-white/5 overflow-hidden cursor-pointer hover:border-luxury-gold/50 transition-colors">
                <img 
                  src={thumb} 
                  alt={`Detalhe ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300?text=Detalhe"; }}
                />
              </div>
            ))}
          </div>

          {/* 5. Duas Caixas Elegantes (Seleção) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            
            {/* Caixa 1: Signature Experience */}
            <div 
              onClick={() => setSelectedPlan("Assinatura")}
              className={`relative p-10 border transition-all duration-500 cursor-pointer group overflow-hidden ${
                selectedPlan === "Assinatura" 
                  ? "bg-white/5 border-luxury-gold shadow-[0_0_30px_rgba(197,160,89,0.1)]" 
                  : "bg-[#0A0A0A] border-white/10 hover:border-luxury-gold/30"
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent transition-opacity duration-500 ${selectedPlan === "Assinatura" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-serif text-2xl transition-colors ${selectedPlan === "Assinatura" ? "text-luxury-gold" : "text-white group-hover:text-luxury-gold"}`}>
                  Signature Experience
                </h3>
                {selectedPlan === "Assinatura" && (
                  <span className="text-luxury-gold text-xl">✓</span>
                )}
              </div>
              
              <p className="text-luxury-gray text-sm leading-relaxed mb-8 font-light">
                Uso exclusivo sem depreciação do ativo. Blindagem, impostos e manutenção totalmente inclusos.
              </p>
              
              <div className="mt-auto">
                <span className="block text-[10px] text-luxury-gold tracking-[0.2em] uppercase mb-2">
                  A partir de
                </span>
                <span className="font-serif text-3xl text-white">
                  {assinaturaPrice}
                  <span className="text-lg text-luxury-gray font-light">/mês</span>
                </span>
              </div>

              <div className={`w-full mt-8 py-3 border text-xs tracking-[0.2em] uppercase text-center transition-all duration-300 ${
                selectedPlan === "Assinatura"
                  ? "bg-luxury-gold text-black border-luxury-gold font-bold"
                  : "border-white/20 text-white group-hover:bg-white group-hover:text-black"
              }`}>
                {selectedPlan === "Assinatura" ? "Selecionado" : "Selecionar"}
              </div>
            </div>

            {/* Caixa 2: Equity Planning */}
            <div 
              onClick={() => setSelectedPlan("Consórcio")}
              className={`relative p-10 border transition-all duration-500 cursor-pointer group overflow-hidden ${
                selectedPlan === "Consórcio" 
                  ? "bg-white/5 border-luxury-gold shadow-[0_0_30px_rgba(197,160,89,0.1)]" 
                  : "bg-[#0A0A0A] border-white/10 hover:border-luxury-gold/30"
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent transition-opacity duration-500 ${selectedPlan === "Consórcio" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-serif text-2xl transition-colors ${selectedPlan === "Consórcio" ? "text-luxury-gold" : "text-white group-hover:text-luxury-gold"}`}>
                  Equity Planning
                </h3>
                {selectedPlan === "Consórcio" && (
                  <span className="text-luxury-gold text-xl">✓</span>
                )}
              </div>

              <p className="text-luxury-gray text-sm leading-relaxed mb-8 font-light">
                Estratégia inteligente de aquisição de ativos. Taxas administrativas reduzidas e planejamento fiscal.
              </p>
              
              <div className="mt-auto">
                <span className="block text-[10px] text-luxury-gold tracking-[0.2em] uppercase mb-2">
                  Crédito Estimado
                </span>
                <span className="font-serif text-3xl text-white">
                  {estimatedCreditValue}
                </span>
                <span className="block text-xs text-luxury-gray mt-1">
                  Parcelas de {consorcioPrice}
                </span>
              </div>

              <div className={`w-full mt-8 py-3 border text-xs tracking-[0.2em] uppercase text-center transition-all duration-300 ${
                selectedPlan === "Consórcio"
                  ? "bg-luxury-gold text-black border-luxury-gold font-bold"
                  : "border-white/20 text-white group-hover:bg-white group-hover:text-black"
              }`}>
                {selectedPlan === "Consórcio" ? "Selecionado" : "Selecionar"}
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer Fixo com Dados do Veículo */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 z-40 py-4 px-6 md:px-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Dados do Veículo (Esquerda) */}
          <div className="flex items-center gap-4 w-full md:w-auto border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <div className="hidden md:block w-16 h-10 rounded overflow-hidden bg-gray-800">
              <img src={mainImage} alt={vehicle.title || "Veículo"} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/100x60?text=Carro"; }} />
            </div>
            <div>
              <h4 className="text-white font-serif text-sm md:text-base leading-tight">{vehicle.title || "Veículo Selecionado"}</h4>
              <div className="flex items-center gap-2 text-xs text-luxury-gray mt-1">
                <span className="uppercase tracking-wider">{vehicle.year || "2026"}</span>
                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span>
                <span className="text-luxury-gold">
                  {selectedPlan ? selectedPlan : "Selecione um plano"}
                </span>
              </div>
            </div>
          </div>

          {/* Botões de Ação (Direita) */}
          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={() => setShowOfferForm(true)}
              className="flex-1 md:flex-none px-6 py-3 bg-white text-black text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase hover:bg-luxury-gold transition-colors duration-300 min-w-[160px]"
            >
              Consulta Privada
            </button>
            
            <button 
              onClick={handleWhatsAppClick}
              className="flex-1 md:flex-none px-6 py-3 bg-transparent border border-white/30 text-white text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300 flex items-center justify-center gap-2 min-w-[180px]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Formulário */}
      {showOfferForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-luxury-card border border-white/10 max-w-md w-full shadow-2xl relative animate-fade-in-up">
            <button 
              onClick={() => setShowOfferForm(false)}
              className="absolute top-4 right-4 text-luxury-gray hover:text-white transition-colors"
            >
              ✕
            </button>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <span className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase block mb-2">
                  Atendimento Exclusivo
                </span>
                <h3 className="font-serif text-2xl text-white">{vehicle.title || "Veículo"}</h3>
                <p className="text-luxury-gray text-xs mt-2 uppercase tracking-widest">
                  {selectedPlan ? `Interesse em: ${selectedPlan}` : "Solicitação de Contato"}
                </p>
              </div>

              <form onSubmit={handleOfferFormSubmit} action="https://formspree.io/f/xgvndwrv" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value={`Interesse Luxury (${selectedPlan || "Geral"}) - ${vehicle.title || "Veículo"}`} />
                <input type="hidden" name="Veiculo" value={vehicle.title || "Veículo"} />
                <input type="hidden" name="Modalidade" value={selectedPlan || "Não selecionada"} />

                <div>
                  <input
                    type="text"
                    name="Nome"
                    placeholder="NOME COMPLETO"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder:text-luxury-gray/50 focus:border-luxury-gold focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="E-MAIL CORPORATIVO OU PESSOAL"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder:text-luxury-gray/50 focus:border-luxury-gold focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="Telefone"
                    placeholder="TELEFONE / WHATSAPP"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder:text-luxury-gray/50 focus:border-luxury-gold focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-luxury-gold text-luxury-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                >
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

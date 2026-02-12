import { useState } from "react";
import { getVehicleById } from "@/utils/vehicleStorage";

export type Ofertas2026VehicleCardProps = {
  vehicleId: string;
  monthlyPrice: string;
};

export const Ofertas2026VehicleCard = (props: Ofertas2026VehicleCardProps) => {
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const vehicle = getVehicleById(props.vehicleId);

  if (!vehicle) {
    return null;
  }

  const formattedTitle = vehicle.title.replace(/\s+/g, '-');

  const handleOfferFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Ocorreu um erro ao enviar o formulário.");
      }
    } catch (error) {
      alert("Ocorreu um erro de rede ao enviar o formulário.");
    }
  };

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
        {/* Vehicle Image */}
        <div className="relative aspect-video bg-gradient-to-b from-gray-900 to-black">
          <img
            src={vehicle.images[0]}
            alt={vehicle.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => { 
              e.currentTarget.src = "https://via.placeholder.com/600x400?text=Imagem+não+disponível"; 
            }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-cyan-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              2026
            </span>
            {vehicle.clientType === "Pessoa Jurídica" && (
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                PJ
              </span>
            )}
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{vehicle.title}</h3>
            <p className="text-gray-400 text-sm">
              {vehicle.version}
            </p>
          </div>

          {/* Specs */}
          <div className="flex gap-4 mb-6 text-xs text-gray-400 border-b border-white/10 pb-4">
            <div className="flex items-center gap-1.5">
              <span className="text-cyan-400">⛽</span>
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-cyan-400">⚙️</span>
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Assinatura a partir de</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">{props.monthlyPrice}</span>
              <span className="text-sm text-gray-500">/mês</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => setShowOfferForm(true)}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>⚡</span> GARANTIR OFERTA
            </button>
            
            <button
              onClick={() => window.location.href = `/veiculo/${props.vehicleId}/${formattedTitle}`}
              className="w-full bg-white/5 border border-white/10 text-white font-medium py-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>

      {/* Offer Form Modal */}
      {showOfferForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button 
              onClick={() => setShowOfferForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2 block">Oferta Exclusiva 2026</span>
                <h3 className="text-2xl font-bold text-white mb-2">{vehicle.title}</h3>
                <p className="text-gray-400 text-sm">Preencha para bloquear esta condição especial</p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Solicitação Recebida!</h4>
                  <p className="text-gray-400 mb-6">Nossa equipe entrará em contato em instantes para confirmar sua reserva.</p>
                  <button
                    onClick={() => setShowOfferForm(false)}
                    className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOfferFormSubmit} action="https://formspree.io/f/xgvndwrv" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value={`Interesse Oferta 2026 - ${vehicle.title}`} />
                  <input type="hidden" name="Veiculo" value={vehicle.title} />
                  <input type="hidden" name="Preco" value={props.monthlyPrice} />

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="Nome"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="Telefone"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">E-mail</label>
                    <input
                      type="email"
                      name="Email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors mt-4"
                  >
                    GARANTIR CONDIÇÃO
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

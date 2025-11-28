import { useState } from "react";
import { vehiclesData, VehicleData } from "@/data/vehiclesData";

export type BlackFridayVehicleCardProps = {
  vehicleId: string;
  fipeValue: string;
  assinaturaPrice: string;
  financiamentoPrice: string;
  consorcioCredit: string;
  consorcioTerm: string;
  consorcioPrice: string;
};

export const BlackFridayVehicleCard = (props: BlackFridayVehicleCardProps) => {
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Move vehicle lookup inside the component body but ensure it doesn't cause side effects
  const vehicle = vehiclesData[props.vehicleId];

  if (!vehicle) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h4 className="text-lg font-bold mb-2">Veículo não encontrado</h4>
        <p className="text-gray-600">ID: {props.vehicleId}</p>
      </div>
    );
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
        form.reset();
        setTimeout(() => {
          setShowOfferForm(false);
          setFormSubmitted(false);
        }, 3000);
      } else {
        const data = await response.json();
        if (data.errors) {
          alert(data.errors.map((error: any) => error.message).join(", "));
        } else {
          alert("Ocorreu um erro ao enviar o formulário.");
        }
      }
    } catch (error) {
      alert("Ocorreu um erro de rede ao enviar o formulário.");
      console.error("Erro de envio:", error);
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
        {/* Vehicle Image */}
        <div className="relative aspect-video bg-white">
          <img
            src={vehicle.images[0]}
            alt={vehicle.title}
            className="w-full h-full object-contain"
            onError={(e) => { 
              e.currentTarget.src = "https://via.placeholder.com/600x400?text=Imagem+não+disponível"; 
              e.currentTarget.style.backgroundColor = "#ffffff"; 
            }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              BLACK FRIDAY
            </span>
            {vehicle.clientType === "Pessoa Jurídica" && (
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                PJ - DESTAQUE
              </span>
            )}
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{vehicle.title}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {vehicle.brand} • {vehicle.year} • {vehicle.type}
          </p>

          {/* Specs */}
          <div className="flex gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>⛽</span>
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚙️</span>
              <span>{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{vehicle.seats}</span>
            </div>
          </div>

          {/* FIPE Value */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-purple-700 font-semibold mb-1">Valor FIPE</p>
            <p className="text-xl font-black text-purple-900">{props.fipeValue}</p>
          </div>

          {/* Prices */}
          <div className="space-y-3 mb-6">
            {/* Assinatura */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-blue-700">Assinatura</p>
                  <p className="text-xs text-blue-600">/mês</p>
                </div>
                <p className="text-xl font-bold text-blue-700">{props.assinaturaPrice}</p>
              </div>
            </div>

            {/* Financiamento */}
            <div className="bg-blue-900/5 border-2 border-blue-900/30 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-blue-900">Financiamento</p>
                  <p className="text-xs text-blue-800">/mês</p>
                </div>
                <p className="text-xl font-bold text-blue-900">{props.financiamentoPrice}</p>
              </div>
            </div>

            {/* Consórcio */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-green-700">Consórcio</p>
                  <p className="text-xs text-green-600">{props.consorcioTerm}</p>
                </div>
                <p className="text-xl font-bold text-green-700">{props.consorcioPrice}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => setShowOfferForm(true)}
              className="w-full bg-green-500 text-white font-black py-3 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all cursor-pointer animate-pulse transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>⚡</span> ENVIAR PROPOSTA AGORA
            </button>
            
            <button
              onClick={() => window.location.href = `/veiculo/${props.vehicleId}/${formattedTitle}`}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all cursor-pointer"
            >
              Ver Detalhes da Oferta
            </button>
          </div>
        </div>
      </div>

      {/* Offer Form Modal */}
      {showOfferForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Solicitar Oferta Black Friday</h3>
                <button 
                  onClick={() => setShowOfferForm(false)}
                  className="text-white hover:text-gray-200 text-3xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>
              <p className="text-white/90 mt-2">Garanta as condições exclusivas para o {vehicle.title}</p>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold text-green-600 mb-2">Solicitação Enviada!</h4>
                  <p className="text-gray-600">Entraremos em contato em breve com sua oferta personalizada.</p>
                </div>
              ) : (
                <form onSubmit={handleOfferFormSubmit} action="https://formspree.io/f/xgvndwrv" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value={`Nova Oferta Black Friday - ${vehicle.title}`} />
                  <input type="hidden" name="_gotcha" style={{display: 'none'}} />
                  <input type="hidden" name="Veiculo" value={vehicle.title} />
                  <input type="hidden" name="Origem" value="Black Friday Card" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        name="Nome Completo"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        name="Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        name="Telefone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="(12) 99109-5018"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Pessoa</label>
                      <select
                        name="Tipo de Pessoa"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interesse Principal</label>
                    <select
                      name="Interesse"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="Assinatura">Assinatura ({props.assinaturaPrice})</option>
                      <option value="Financiamento">Financiamento ({props.financiamentoPrice})</option>
                      <option value="Consórcio">Consórcio ({props.consorcioPrice})</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                    <textarea
                      name="Mensagem"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Deixe uma mensagem ou dúvida..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    Enviar Solicitação Black Friday
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você concorda com nossa política de privacidade
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

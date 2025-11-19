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
  const vehicle: VehicleData | undefined = vehiclesData[props.vehicleId];

  if (!vehicle) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h4 className="text-lg font-bold mb-2">Veículo não encontrado</h4>
        <p className="text-gray-600">ID: {props.vehicleId}</p>
      </div>
    );
  }

  const formattedTitle = vehicle.title.replace(/\s+/g, '-');

  return (
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
        <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          BLACK FRIDAY
        </span>
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
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-600 mb-1">Valor FIPE</p>
          <p className="text-lg font-bold text-gray-800">{props.fipeValue}</p>
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

        {/* CTA Button */}
        <button
          onClick={() => window.location.href = `/veiculo/${props.vehicleId}/${formattedTitle}`}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all cursor-pointer"
        >
          Ver Detalhes da Oferta
        </button>
      </div>
    </div>
  );
};

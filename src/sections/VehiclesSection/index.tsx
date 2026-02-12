import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";
import { getVehicles } from "@/utils/vehicleStorage";
import { useEffect, useState } from "react";
import { VehicleData } from "@/data/vehiclesData";

export const VehiclesSection = () => {
  const [featuredVehicles, setFeaturedVehicles] = useState<VehicleData[]>([]);

  const loadVehicles = () => {
    const vehicles = getVehicles();
    const vehiclesList = Object.values(vehicles);
    
    // Tenta pegar os destaques específicos
    const featuredIds = ["1", "14", "7"];
    let selected = featuredIds.map(id => vehicles[id]).filter(Boolean);
    
    // Se não encontrar os destaques específicos, ou se tivermos poucos, 
    // completa com os últimos veículos cadastrados (novidades) para garantir que a Home não fique vazia
    // e mostre as novidades cadastradas pelo usuário
    if (selected.length < 3 || vehiclesList.length > 0) {
      // Prioriza mostrar os últimos 3 veículos adicionados/editados
      const latest = vehiclesList
        .sort((a, b) => Number(b.id) - Number(a.id))
        .slice(0, 3);
      
      // Se tivermos veículos novos suficientes, usamos eles como destaque
      if (latest.length > 0) {
        selected = latest;
      }
    }
    
    setFeaturedVehicles(selected);
  };

  useEffect(() => {
    loadVehicles();

    // Escuta eventos de atualização do storage (disparados pelo Admin)
    window.addEventListener("vehiclesUpdated", loadVehicles);
    return () => {
      window.removeEventListener("vehiclesUpdated", loadVehicles);
    };
  }, []);

  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-black px-6 py-2 rounded-full mb-4">
            <span className="text-xl">⭐</span>
            <span className="text-sm uppercase tracking-wider">Destaques 2026</span>
          </div>
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Veículos em Destaque
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Aproveite as melhores ofertas em veículos selecionados
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicleIcon={vehicle.type === "SUV Compacto" ? "🚙" : vehicle.type === "Picape Compacta" ? "🚚" : "🚗"}
              vehicleImage={vehicle.images[0]}
              categoryName={vehicle.type}
              popularityLabel="OFERTAS 2026"
              popularityVariant="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 right-4"
              vehicleTitle={vehicle.title}
              vehicleDescription={`${vehicle.brand} • ${vehicle.year} • ${vehicle.type}`}
              fuelType={vehicle.fuelType}
              transmissionType={vehicle.transmission}
              seatingCapacity={vehicle.seats}
              monthlyPrice={vehicle.prices.assinatura.monthly}
              vehicleId={vehicle.id}
              category={vehicle.type}
            />
          ))}
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "/veiculos"}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Ver Estoque Completo
            </button>
            <button
              onClick={() => window.location.href = "/veiculos"}
              className="text-green-600 font-medium bg-white border-2 border-green-600 px-8 py-4 rounded-2xl text-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer"
            >
              Ver Todos os Veículos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

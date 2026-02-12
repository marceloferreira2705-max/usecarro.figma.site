import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";
import { useState, useEffect } from "react";
import { VehicleData } from "@/data/vehiclesData";
import { getVehicles } from "@/utils/vehicleStorage";

export const VeiculosPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [visibleVehicles, setVisibleVehicles] = useState(9);
  const [allVehicles, setAllVehicles] = useState<VehicleData[]>([]);

  const loadVehicles = () => {
    const vehicles = getVehicles();
    setAllVehicles(Object.values(vehicles));
  };

  useEffect(() => {
    loadVehicles();
    
    // Escuta atualizações em tempo real
    window.addEventListener("vehiclesUpdated", loadVehicles);
    return () => window.removeEventListener("vehiclesUpdated", loadVehicles);
  }, []);

  const filters = ["Todos", "Econômico", "Hatch Compacto", "SUV Compacto", "SUV Médio", "SUV Coupé", "Picape Compacta", "Picape Média"];

  const filteredVehicles = selectedFilter === "Todos" 
    ? allVehicles 
    : allVehicles.filter(vehicle => vehicle.type === selectedFilter);

  const displayedVehicles = filteredVehicles.slice(0, visibleVehicles);

  const loadMoreVehicles = () => {
    setVisibleVehicles(prev => Math.min(prev + 6, filteredVehicles.length));
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleVehicles(6); // Reset to show first 6 vehicles when filter changes
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-black px-6 py-2 rounded-full mb-6 animate-bounce">
              <span className="text-2xl">✨</span>
              <span className="text-sm uppercase tracking-wider">Ofertas 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
              Ofertas <span className="text-cyan-300">Especiais 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore nossa seleção especial com {allVehicles.length} veículos em promoção. Compare preços entre assinatura, consórcio e financiamento.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-center md:text-left">
            <p className="text-gray-600">
              {selectedFilter === "Todos" 
                ? `Mostrando ${displayedVehicles.length} de ${allVehicles.length} veículos`
                : `Mostrando ${displayedVehicles.length} de ${filteredVehicles.length} veículos em ${selectedFilter}`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedVehicles.map((vehicle) => (
              <VehicleCard 
                key={vehicle.id} 
                vehicleIcon={vehicle.type === "SUV Compacto" ? "🚙" : vehicle.type === "Picape Compacta" ? "🚚" : "🚗"}
              vehicleImage={vehicle.images[0]} // Usar a primeira imagem do array
              categoryName={vehicle.type}
              categoryVariant="bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]" // Placeholder, adjust as needed
              popularityLabel={vehicle.type} // Placeholder, adjust as needed
              popularityVariant="bg-green-600 right-4" // Placeholder, adjust as needed
              vehicleTitle={vehicle.title}
              vehicleDescription={`${vehicle.brand} • ${vehicle.year} • ${vehicle.type}`}
              fuelType={vehicle.fuelType}
              transmissionType={vehicle.transmission}
              seatingCapacity={vehicle.seats}
              monthlyPrice={vehicle.prices.assinatura.monthly} // Agora puxa do vehiclesData
              vehicleId={vehicle.id}
              category={vehicle.type}
            />
            ))}
          </div>
          
          {/* Load More */}
          {visibleVehicles < filteredVehicles.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMoreVehicles}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              >
                Carregar Mais Ofertas ({filteredVehicles.length - visibleVehicles} restantes)
              </button>
            </div>
          )}

          {/* No More Vehicles Message */}
          {visibleVehicles >= filteredVehicles.length && filteredVehicles.length > 9 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Você visualizou todas as {filteredVehicles.length} ofertas disponíveis
                {selectedFilter !== "Todos" && ` em ${selectedFilter}`}.
              </p>
              <button
                onClick={() => window.location.href = "/ofertas2026"}
                className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Ver Página Ofertas 2026 Completa
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";
import { useState } from "react";
import { vehiclesData, VehicleData } from "@/data/vehiclesData";

export const VeiculosPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [visibleVehicles, setVisibleVehicles] = useState(6);

  const allVehicles: VehicleData[] = Object.values(vehiclesData);

  const filters = ["Todos", "Econômico", "Hatch", "Sedan", "Picape Compacta", "SUV Compacto", "SUV Médio", "Crossover Coupé", "Comercial"];

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
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Nossos <span className="text-green-600">Veículos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossa frota completa com {allVehicles.length} veículos 0km e seminovos. Compare preços entre assinatura, consórcio e financiamento.
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
                className="bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Carregar Mais Veículos ({filteredVehicles.length - visibleVehicles} restantes)
              </button>
            </div>
          )}

          {/* No More Vehicles Message */}
          {visibleVehicles >= filteredVehicles.length && filteredVehicles.length > 6 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Você visualizou todos os {filteredVehicles.length} veículos disponíveis
                {selectedFilter !== "Todos" && ` em ${selectedFilter}`}.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

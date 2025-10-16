import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";
import { vehiclesData } from "@/data/vehiclesData";

export const VehiclesSection = () => {
  // Get the first 3 vehicles for the featured section
  const featuredVehicles = Object.values(vehiclesData).slice(0, 3);

  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Nossos veículos em destaque
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Compare preços e escolha a modalidade ideal para cada modelo
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicleIcon={vehicle.type === "SUV Compacto" ? "🚙" : vehicle.type === "Picape Compacta" ? "🚚" : "🚗"}
              vehicleImage={vehicle.images[0]} // Usar a primeira imagem do array
              categoryName={vehicle.type}
              // categoryVariant="bg-white" // Removido
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
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mt-12">
          <a
            href="/veiculos"
            className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
          >
            <button className="text-green-600 text-sm font-medium items-center bg-white caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-left text-nowrap border border-green-600 px-8 py-4 rounded-[14px] border-solid">
              Ver todos os veículos
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";

export const VehiclesSection = () => {
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
          <VehicleCard
            vehicleIcon="🚗"
            categoryName="Econômico"
            categoryVariant="bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]"
            popularityLabel="Econômico"
            popularityVariant="bg-[oklch(0.546_0.245_262.881)] right-4"
            vehicleTitle="Fiat Mobi 1.0 Like Mec"
            vehicleDescription="Fiat • 2026 • Econômico"
            fuelType="Flex"
            transmissionType="Manual"
            seatingCapacity="5"
            monthlyPrice="R$ 1.800"
            vehicleId="1"
          />
          <VehicleCard
            vehicleIcon="🚙"
            categoryName="Compacto"
            categoryVariant="bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]"
            popularityLabel="Econômico"
            popularityVariant="bg-[oklch(0.546_0.245_262.881)] right-4"
            vehicleTitle="Chevrolet Onix Plus 1.0 MT"
            vehicleDescription="Chevrolet • 2026 • Compacto"
            fuelType="Flex"
            transmissionType="Manual"
            seatingCapacity="5"
            monthlyPrice="R$ 2.000"
            vehicleId="6"
          />
          <VehicleCard
            vehicleIcon="🚙"
            categoryName="SUV Compacto"
            categoryVariant="bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]"
            popularityLabel="SUV popular"
            popularityVariant="bg-green-600 left-4"
            vehicleTitle="Chevrolet Tracker 1.0 Turbo LT Auto"
            vehicleDescription="Chevrolet • 2025 • SUV Compacto"
            fuelType="Flex"
            transmissionType="Automático"
            seatingCapacity="5"
            monthlyPrice="R$ 2.859"
            vehicleId="16"
          />
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

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { VehicleCard } from "@/sections/VehiclesSection/components/VehicleCard";
import { useState } from "react";

export const VeiculosPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [visibleVehicles, setVisibleVehicles] = useState(6);

  const allVehicles = [
    {
      vehicleIcon: "🚗",
      categoryName: "Econômico",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-[oklch(0.546_0.245_262.881)] right-4",
      vehicleTitle: "Fiat Mobi 1.0 Like Mec",
      vehicleDescription: "Fiat • 2026 • Econômico",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 1.800",
      vehicleId: "1",
      category: "Econômicos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-[oklch(0.546_0.245_262.881)] right-4",
      vehicleTitle: "Fiat Argo 1.0 Drive",
      vehicleDescription: "Fiat • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 1.950",
      vehicleId: "2",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-blue-600 right-4",
      vehicleTitle: "Hyundai HB20 1.0 Sense",
      vehicleDescription: "Hyundai • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 1.950",
      vehicleId: "3",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]",
      popularityLabel: "Premium",
      popularityVariant: "bg-purple-600 right-4",
      vehicleTitle: "Volkswagen Polo Track",
      vehicleDescription: "Volkswagen • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.200",
      vehicleId: "4",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-[oklch(0.546_0.245_262.881)] right-4",
      vehicleTitle: "Fiat Argo 1.0 Drive CVT",
      vehicleDescription: "Fiat • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "CVT",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.100",
      vehicleId: "5",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "Sedan",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]",
      popularityLabel: "Popular",
      popularityVariant: "bg-green-600 right-4",
      vehicleTitle: "Chevrolet Onix Plus 1.0 MT",
      vehicleDescription: "Chevrolet • 2026 • Sedan",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.000",
      vehicleId: "6",
      category: "Sedans"
    },
    {
      vehicleIcon: "🚚",
      categoryName: "Picape",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "Trabalho",
      popularityVariant: "bg-orange-600 right-4",
      vehicleTitle: "Fiat Strada Endurance 1.4",
      vehicleDescription: "Fiat • 2026 • Picape",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "2",
      monthlyPrice: "R$ 2.300",
      vehicleId: "7",
      category: "Picapes"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-blue-600 right-4",
      vehicleTitle: "Hyundai HB20 1.0 Evolution",
      vehicleDescription: "Hyundai • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.100",
      vehicleId: "8",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Fiat Pulse Drive 1.3",
      vehicleDescription: "Fiat • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.650",
      vehicleId: "9",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]",
      popularityLabel: "Premium",
      popularityVariant: "bg-purple-600 right-4",
      vehicleTitle: "Volkswagen Polo Sense",
      vehicleDescription: "Volkswagen • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.000",
      vehicleId: "10",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.623_0.214_259.815)_0%,oklch(0.546_0.245_262.881)_100%)]",
      popularityLabel: "Econômico",
      popularityVariant: "bg-[oklch(0.546_0.245_262.881)] right-4",
      vehicleTitle: "Fiat Argo Drive 1.3 AT",
      vehicleDescription: "Fiat • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.400",
      vehicleId: "11",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚗",
      categoryName: "Hatch",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]",
      popularityLabel: "Premium",
      popularityVariant: "bg-purple-600 right-4",
      vehicleTitle: "Volkswagen Polo Highline",
      vehicleDescription: "Volkswagen • 2026 • Hatch",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.800",
      vehicleId: "12",
      category: "Compactos"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Citroën Basalt Feel 1.0",
      vehicleDescription: "Citroën • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.500",
      vehicleId: "13",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen Taos Comfort",
      vehicleDescription: "Volkswagen • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.500",
      vehicleId: "14",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen Taos Highline",
      vehicleDescription: "Volkswagen • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.800",
      vehicleId: "15",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV popular",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Chevrolet Tracker 1.0 Turbo LT Auto",
      vehicleDescription: "Chevrolet • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.859",
      vehicleId: "16",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Fiat Pulse Audace 1.3 AT",
      vehicleDescription: "Fiat • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.950",
      vehicleId: "17",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚚",
      categoryName: "Comercial",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "Trabalho",
      popularityVariant: "bg-orange-600 right-4",
      vehicleTitle: "Fiat Fiorino Endurance",
      vehicleDescription: "Fiat • 2026 • Comercial",
      fuelType: "Flex",
      transmissionType: "Manual",
      seatingCapacity: "2",
      monthlyPrice: "R$ 2.100",
      vehicleId: "18",
      category: "Comerciais"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen T-Cross TSI",
      vehicleDescription: "Volkswagen • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.100",
      vehicleId: "19",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Hyundai Creta 1.0 Turbo",
      vehicleDescription: "Hyundai • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.200",
      vehicleId: "20",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Citroën Basalt Shine 1.0 Turbo",
      vehicleDescription: "Citroën • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.800",
      vehicleId: "21",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Coupé",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Fiat Fastback Audace 1.3 AT",
      vehicleDescription: "Fiat • 2025 • SUV Coupé",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.400",
      vehicleId: "22",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "Sedan",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.723_0.219_149.579)_0%,oklch(0.627_0.194_149.214)_100%)]",
      popularityLabel: "Premium",
      popularityVariant: "bg-purple-600 right-4",
      vehicleTitle: "Volkswagen Virtus Comfortline",
      vehicleDescription: "Volkswagen • 2026 • Sedan",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.900",
      vehicleId: "23",
      category: "Sedans"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen Nivus Highline",
      vehicleDescription: "Volkswagen • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.000",
      vehicleId: "24",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen T-Cross Comfortline",
      vehicleDescription: "Volkswagen • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.800",
      vehicleId: "25",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV popular",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Chevrolet Tracker LT 1.0 Turbo",
      vehicleDescription: "Chevrolet • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.000",
      vehicleId: "26",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Hyundai Creta Limited 2.0",
      vehicleDescription: "Hyundai • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.800",
      vehicleId: "27",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Jeep Renegade Longitude",
      vehicleDescription: "Jeep • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.600",
      vehicleId: "28",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Nissan Kicks Sense CVT",
      vehicleDescription: "Nissan • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "CVT",
      seatingCapacity: "5",
      monthlyPrice: "R$ 2.900",
      vehicleId: "29",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV Compacto",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Volkswagen T-Cross Highline",
      vehicleDescription: "Volkswagen • 2025 • SUV Compacto",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 3.200",
      vehicleId: "30",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚙",
      categoryName: "SUV",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "SUV Premium",
      popularityVariant: "bg-green-600 left-4",
      vehicleTitle: "Jeep Compass Longitude",
      vehicleDescription: "Jeep • 2025 • SUV",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 4.200",
      vehicleId: "31",
      category: "SUVs"
    },
    {
      vehicleIcon: "🚚",
      categoryName: "Picape",
      categoryVariant: "bg-[linear-gradient(to_right_bottom,oklch(0.705_0.213_47.604)_0%,oklch(0.646_0.222_41.116)_100%)]",
      popularityLabel: "Picape Premium",
      popularityVariant: "bg-orange-600 right-4",
      vehicleTitle: "RAM Rampage Big Horn",
      vehicleDescription: "RAM • 2025 • Picape",
      fuelType: "Flex",
      transmissionType: "Automático",
      seatingCapacity: "5",
      monthlyPrice: "R$ 4.800",
      vehicleId: "32",
      category: "Picapes"
    }
  ];

  const filters = ["Todos", "Econômicos", "Compactos", "SUVs", "Sedans", "Picapes", "Comerciais", "Crossover Coupé"];

  const filteredVehicles = selectedFilter === "Todos" 
    ? allVehicles 
    : allVehicles.filter(vehicle => vehicle.category === selectedFilter || vehicle.categoryName === selectedFilter);

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
            {displayedVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.vehicleId} {...vehicle} />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa IA Clara pode ajudar você a encontrar o veículo perfeito para seu perfil e orçamento.
          </p>
          <button 
            onClick={() => window.location.href = "/contato"}
            className="bg-white text-green-600 font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            Falar com Clara
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

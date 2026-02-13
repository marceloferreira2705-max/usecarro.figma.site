import { getVehicles } from "@/utils/vehicleStorage";
import { useEffect, useState } from "react";
import { VehicleData } from "@/data/vehiclesData";

export const VehicleCategories = () => {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);

  useEffect(() => {
    const allVehicles = Object.values(getVehicles());
    setVehicles(allVehicles);
  }, []);

  // Agrupa veículos por marca
  const vehiclesByBrand = vehicles.reduce((acc, vehicle) => {
    const brand = vehicle.brand;
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(vehicle);
    return acc;
  }, {} as Record<string, VehicleData[]>);

  return (
    <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-16">
      <h2 className="text-green-600 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-12">
        Nossa Coleção 2026
      </h2>
      <div className="box-border caret-transparent gap-x-12 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        
        {/* Coluna 1: Marcas Premium */}
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <h3 className="text-green-600 text-xl font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
            Marcas Disponíveis
          </h3>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            {Object.entries(vehiclesByBrand).map(([brand, brandVehicles]) => (
              <div key={brand} className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
                <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                  {brand}:
                </h4>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                  {brandVehicles.map((vehicle) => (
                    <a
                      key={vehicle.id}
                      href={`/veiculo/${vehicle.id}/${vehicle.title.replace(/\s+/g, '-')}`}
                      className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] hover:text-green-600 transition-colors"
                    >
                      {vehicle.version},
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna 2: Categorias */}
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <h3 className="text-green-600 text-xl font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
            Categorias
          </h3>
          <ul className="box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a href="/" className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] hover:text-green-600">
                SUVs de Luxo
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a href="/" className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] hover:text-green-600">
                Híbridos Plug-in
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a href="/" className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] hover:text-green-600">
                Picapes Premium
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a href="/" className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] hover:text-green-600">
                Blindados (Sob Consulta)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

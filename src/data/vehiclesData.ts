export type VehicleData = {
  id: string;
  title: string;
  brand: string;
  version: string;
  type: string;
  clientType: string;
  fuelType: string;
  transmission: string;
  seats: string;
  engine: string;
  color: string;
  doors: string;
  year: string;
  prices: {
    assinatura: {
      monthly: string;
      term: string;
      mileage: string;
      details: string[];
    };
    consorcio: {
      monthly: string;
      term: string;
      credit: string; // Novo campo para Crédito Estimado
      details: string[];
    };
  };
  images: string[];
  description: string;
};

export const vehiclesData: Record<string, VehicleData> = {
  "998": {
    id: "998",
    title: "Volvo XC60 T8 Ultimate Dark",
    brand: "Volvo",
    version: "XC60 T8 ULTIMATE DARK",
    type: "SUV Híbrido",
    clientType: "Pessoa Física",
    fuelType: "Híbrido Plug-in",
    transmission: "Automático 8 marchas",
    seats: "5",
    engine: "2.0 Turbo + Elétrico (462cv)",
    color: "Crystal White",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 14.900,00",
        term: "24 meses",
        mileage: "1.000 km/mês",
        details: ["Blindagem Nível III-A", "IPVA e Licenciamento", "Seguro Total", "Manutenção Preventiva"]
      },
      consorcio: {
        monthly: "R$ 4.200,00",
        term: "80 meses",
        credit: "R$ 450.000,00",
        details: ["Taxa Adm. Reduzida", "Sem Juros", "Lance Embutido"]
      }
    },
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"],
    description: "O Volvo XC60 T8 Ultimate Dark é a expressão máxima do luxo escandinavo. Com motorização híbrida plug-in de 462cv, oferece performance esportiva com eficiência energética. Acabamento interno em couro Nappa, sistema de som Harman Kardon e teto solar panorâmico completam a experiência. Veículo blindado nível III-A com vidros AGP B33."
  },
  "999": {
    id: "999",
    title: "Veículo Teste Incompleto",
    brand: "Marca Genérica",
    version: "VERSÃO BASE",
    type: "Sedan",
    clientType: "Pessoa Física",
    fuelType: "",
    transmission: "",
    seats: "",
    engine: "",
    color: "",
    doors: "",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 5.000,00",
        term: "12 meses",
        mileage: "",
        details: []
      },
      consorcio: {
        monthly: "R$ 0,00",
        term: "",
        credit: "R$ 0,00",
        details: []
      }
    },
    images: ["https://via.placeholder.com/600x400?text=Teste+Incompleto"],
    description: ""
  }
};

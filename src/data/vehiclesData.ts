import { VehicleData } from "./vehiclesData";

export type { VehicleData };

export interface VehicleData {
  id: string;
  title: string;
  brand: string;
  version: string;
  type: string;
  clientType: "Pessoa Física" | "Pessoa Jurídica";
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
      credit: string;
      details: string[];
    };
  };
  images: string[];
  description: string;
}

export const vehiclesData: Record<string, VehicleData> = {
  "1": {
    id: "1",
    title: "Mobi 1.0 Trekking",
    brand: "FIAT",
    version: "Mobi 1.0 Trekking MT",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0 Fire",
    color: "Branco",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 1.749,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["IPVA Incluso", "Seguro Total", "Manutenção Inclusa"]
      },
      consorcio: {
        monthly: "R$ 450,00",
        term: "80 meses",
        credit: "R$ 75.000,00",
        details: ["Taxa Adm. Reduzida"]
      }
    },
    images: ["https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop"],
    description: "O urbano mais valente do Brasil. Econômico, robusto e perfeito para o dia a dia na cidade."
  },
  "2": {
    id: "2",
    title: "Tera 1.0 MPI",
    brand: "VOLKSWAGEN",
    version: "Tera 1.0 MPI MT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0 MPI",
    color: "Prata",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.247,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Lançamento", "IPVA Incluso"]
      },
      consorcio: {
        monthly: "R$ 600,00",
        term: "80 meses",
        credit: "R$ 95.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop"],
    description: "O novo SUV de entrada da VW. Moderno, conectado e com o espaço que você precisa."
  },
  "3": {
    id: "3",
    title: "Polo 1.0 TSI Sense",
    brand: "VOLKSWAGEN",
    version: "Polo 1.0 170 TSI Sense Auto",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Cinza",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.388,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Câmbio Automático", "Turbo"]
      },
      consorcio: {
        monthly: "R$ 650,00",
        term: "80 meses",
        credit: "R$ 105.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop"],
    description: "Tecnologia e performance. O hatch premium que define a categoria."
  },
  "4": {
    id: "4",
    title: "T-Cross 200 TSI",
    brand: "VOLKSWAGEN",
    version: "T-Cross 200 TSI AT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Branco",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 3.139,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["SUV Líder", "Conforto Total"]
      },
      consorcio: {
        monthly: "R$ 850,00",
        term: "80 meses",
        credit: "R$ 140.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop"],
    description: "Versatilidade e segurança. O SUV que se adapta ao seu estilo de vida."
  },
  "5": {
    id: "5",
    title: "Compass Longitude",
    brand: "JEEP",
    version: "Compass Longitude T270",
    type: "SUV Médio",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.3 Turbo",
    color: "Preto",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 3.845,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Premium", "Motor T270"]
      },
      consorcio: {
        monthly: "R$ 1.100,00",
        term: "80 meses",
        credit: "R$ 190.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"],
    description: "O SUV médio mais desejado. Acabamento refinado e motor potente."
  },
  "6": {
    id: "6",
    title: "Pulse Audace Hybrid",
    brand: "FIAT",
    version: "Pulse 1.0 T200 Mhev Audace CVT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Híbrido",
    transmission: "CVT",
    seats: "5",
    engine: "1.0 Turbo Híbrido",
    color: "Prata",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.899,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Híbrido Leve", "Economia"]
      },
      consorcio: {
        monthly: "R$ 780,00",
        term: "80 meses",
        credit: "R$ 130.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop"],
    description: "Eficiência híbrida com estilo italiano. O Pulse que você já conhece, agora mais econômico."
  },
  "7": {
    id: "7",
    title: "Fastback Audace PJ",
    brand: "FIAT",
    version: "Fastback Audace 200 TB Aut (Híbrido)",
    type: "SUV Coupé",
    clientType: "Pessoa Jurídica",
    fuelType: "Híbrido",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Cinza",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.169,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Oferta PJ", "Design Coupé"]
      },
      consorcio: {
        monthly: "R$ 880,00",
        term: "80 meses",
        credit: "R$ 145.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"],
    description: "Design esportivo e porta-malas gigante. Condição especial para CNPJ."
  },
  "8": {
    id: "8",
    title: "Strada Endurance PJ",
    brand: "FIAT",
    version: "Strada Endurance 1.3 Flex 8V CP",
    type: "Picape Compacta",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.3 Firefly",
    color: "Branca",
    doors: "2",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.059,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Trabalho", "Oferta PJ"]
      },
      consorcio: {
        monthly: "R$ 550,00",
        term: "80 meses",
        credit: "R$ 90.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"],
    description: "A picape líder de vendas. Pronta para o trabalho pesado com economia."
  },
  "9": {
    id: "9",
    title: "Rampage Rebel PJ",
    brand: "RAM",
    version: "RAMPAGE REBEL 2.2 TB CD 4X4 Diesel",
    type: "Picape Média",
    clientType: "Pessoa Jurídica",
    fuelType: "Diesel",
    transmission: "Automático",
    seats: "5",
    engine: "2.2 Turbo Diesel",
    color: "Vermelha",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 5.369,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["4x4 Diesel", "Força Bruta"]
      },
      consorcio: {
        monthly: "R$ 1.500,00",
        term: "80 meses",
        credit: "R$ 260.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"],
    description: "Poder inigualável. A picape nacional mais potente e luxuosa."
  },
  "10": {
    id: "10",
    title: "Pulse Drive PJ",
    brand: "FIAT",
    version: "Pulse Drive 1.3 MT",
    type: "SUV Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.3 Firefly",
    color: "Preto",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.359,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Custo-Benefício", "Oferta PJ"]
      },
      consorcio: {
        monthly: "R$ 620,00",
        term: "80 meses",
        credit: "R$ 100.000,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop"],
    description: "O SUV automático mais acessível. Conforto e economia para sua frota."
  }
};

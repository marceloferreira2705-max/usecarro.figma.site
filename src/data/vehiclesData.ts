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
    financiamento: {
      monthly: string;
      term: string;
      details: string[];
    };
    consorcio: {
      monthly: string;
      term: string;
      details: string[];
    };
  };
  images: string[];
  description: string;
};

export const vehiclesData: Record<string, VehicleData> = {
  "32": {
    id: "32",
    title: "RAM Rampage Rebel 2.2 TB CD 4X4 Diesel Aut",
    brand: "RAM",
    version: "RAMPAGE REBEL 2.2 TB CD 4X4 DIESEL AUT",
    type: "Picape Média",
    clientType: "Pessoa Jurídica",
    fuelType: "Diesel",
    transmission: "Automático",
    seats: "5",
    engine: "2.2 Diesel",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 5.369,00",
        term: "18 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.687,50",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.560,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/rambig.webp"],
    description: "Picape média com motor diesel potente e design imponente."
  },
  "46": {
    id: "46",
    title: "VW Tera Comfort 1.0 TSI AT PJ",
    brand: "VW",
    version: "TERA COMFORT 1.0 TSI AT",
    type: "SUV Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.384,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.861,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.907,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tera.png"],
    description: "Versão PJ do Tera Comfort, SUV moderno para frotas empresariais."
  },
  "47": {
    id: "47",
    title: "Novo Veículo 47 (Editar)",
    brand: "Marca",
    version: "VERSÃO DO VEÍCULO",
    type: "Categoria",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0",
    color: "Cor",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 0,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 0,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 0,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://via.placeholder.com/600x400?text=Veiculo+47"],
    description: "Descrição do veículo 47. Edite este veículo no painel administrativo."
  },
  "48": {
    id: "48",
    title: "Novo Veículo 48 (Editar)",
    brand: "Marca",
    version: "VERSÃO DO VEÍCULO",
    type: "Categoria",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0",
    color: "Cor",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 0,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 0,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 0,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://via.placeholder.com/600x400?text=Veiculo+48"],
    description: "Descrição do veículo 48. Edite este veículo no painel administrativo."
  }
};

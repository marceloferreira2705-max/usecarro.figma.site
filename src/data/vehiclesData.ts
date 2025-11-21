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
  "1": {
    id: "1",
    title: "Fiat Mobi 1.0 Like Mec",
    brand: "FIAT",
    version: "MOBI 1.0 LIKE MEC",
    type: "Econômico",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.757,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 1.615,81",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 674,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/mobi_like_2026__1.png"],
    description: "O carro mais compacto e prático da lista, perfeito para enfrentar o trânsito intenso e a dificuldade de estacionar nas grandes cidades."
  },
  "2": {
    id: "2",
    title: "Fiat Argo 1.0 Drive",
    brand: "FIAT",
    version: "ARGO 1.0 DRIVE",
    type: "Hatch",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.950,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.340,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.560,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "Hatch moderno e econômico com o consagrado motor Firefly, ideal para quem busca simplicidade e baixo custo."
  },
  "3": {
    id: "3",
    title: "Hyundai HB20 1.0 Sense",
    brand: "HYUNDAI",
    version: "HB20 1.0 SENSE",
    type: "Hatch",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.950,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.340,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.560,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch de entrada focado em baixo custo operacional e alta conectividade. Uma escolha inteligente e confiável para o uso diário."
  },
  "4": {
    id: "4",
    title: "VW Polo Track MT 5P",
    brand: "VW",
    version: "POLO TRACK MT 5P",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.939,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 1.930,08",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 767,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polo_track_2026.png"],
    description: "Hatch de entrada robusto, construído na plataforma MQB, oferecendo maior segurança e um desempenho confiável."
  },
  "5": {
    id: "5",
    title: "Fiat Argo Drive 1.0 MT",
    brand: "FIAT",
    version: "ARGO DRIVE 1.0 MT",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.949,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.339,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.559,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "Hatch moderno e econômico com o consagrado motor Firefly, ideal para quem busca simplicidade e baixo custo."
  },
  "6": {
    id: "6",
    title: "Chevrolet Onix Plus 1.0 MT",
    brand: "CHEVROLET",
    version: "ONIX PLUS 1.0 MT",
    type: "Sedan Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.999,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.399,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.599,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/captura-de-pantalla-2025-10-10-092903.png"],
    description: "Sedan que se destaca pela segurança e conectividade, oferecendo um ótimo custo-benefício e um bom porta-malas."
  },
  "7": {
    id: "7",
    title: "Fiat Strada Endurance 1.3",
    brand: "FIAT",
    version: "STRADA 1.3 CABINE PLUS ENDURANCE",
    type: "Picape Compacta",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.3",
    color: "Diversas",
    doors: "2",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.799,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.480,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 995,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/strada.png"],
    description: "Parceira ideal para quem trabalha com cargas leves e entregas. Picape robusta, líder em economia e conhecida pela confiabilidade no dia a dia."
  },
  "8": {
    id: "8",
    title: "Hyundai HB20 1.0 Evolution",
    brand: "HYUNDAI",
    version: "HB20 1.0 EVOLUTION",
    type: "Hatch",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.100,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.520,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.680,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch de entrada focado em baixo custo operacional e alta conectividade. Uma escolha inteligente e confiável para o uso diário."
  },
  "9": {
    id: "9",
    title: "Fiat Pulse Drive 1.3 MT",
    brand: "FIAT",
    version: "PULSE DRIVE 1.3 MT",
    type: "SUV Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.169,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.213,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 907,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/pulse.png"],
    description: "SUV compacto com design moderno e tecnologia avançada. Ideal para quem busca conforto, segurança e economia no dia a dia."
  },
  "10": {
    id: "10",
    title: "VW Polo Sense 1.0 170 TSI AT",
    brand: "VW",
    version: "POLO SENSE 1.0 170 TSI AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.939,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 1.849,67",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 888,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polosense.png"],
    description: "Versão de entrada automática. Possui o eficiente motor turbo (TSI), garantindo conforto na cidade e agilidade na estrada."
  },
  "11": {
    id: "11",
    title: "Fiat Argo Drive 1.3 CVT AT",
    brand: "FIAT",
    version: "ARGO DRIVE 1.3 CVT AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.599,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.119,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.079,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "A combinação do motor 1.3 e câmbio CVT proporciona uma direção suave e sem trancos, ideal para o conforto diário."
  },
  "12": {
    id: "12",
    title: "VW Polo Highline 1.0 170 TSI AT",
    brand: "VW",
    version: "POLO HIGHLINE 1.0 170 TSI AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.599,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.119,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.079,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polohighline.png"],
    description: "O Polo mais completo, focado em tecnologia (painel digital) e um acabamento superior, mantendo o motor 1.0 Turbo potente."
  },
  "13": {
    id: "13",
    title: "Citroën Basalt Feel 1.0 MT",
    brand: "CITROEN",
    version: "BASALT FEEL 1.0 5P MT",
    type: "Crossover Coupé",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.635,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.163,19",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.108,79",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/basalt-feel-1-0-mt.png"],
    description: "Crossover que aposta no estilo cupê e na posição de dirigir mais alta. Uma opção de visual marcante."
  },
  "14": {
    id: "14",
    title: "VW Tera Comfort 1.0 TSI AT",
    brand: "VW",
    version: "TERA COMFORT 1.0 TSI AT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.237,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.482,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 953,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tera.png"],
    description: "Novo SUV compacto da VW. Design moderno e a praticidade do câmbio automático e motor turbo para o uso urbano."
  },
  "15": {
    id: "15",
    title: "VW Tera High 1.0 TSI AT",
    brand: "VW",
    version: "TERA HIGH 1.0 TSI AT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.849,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.419,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.279,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/captura-de-pantalla-2025-10-10-081131.png"],
    description: "Versão topo de linha do Tera, com pacote de tecnologia e conforto completo, e motor 1.0 TSI ágil."
  },
  "16": {
    id: "16",
    title: "Chevrolet Tracker 1.0 Turbo LT Auto",
    brand: "CHEVROLET",
    version: "TRACKER 1.0 TURBO LT AUTO",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.859,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.430,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.287,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tracker.png"],
    description: "SUV compacto e moderno, ideal para a família urbana. Combina o conforto do câmbio automático com a eficiência do motor 1.0 turbo."
  },
  "17": {
    id: "17",
    title: "Fiat Pulse Audace 1.3 AT",
    brand: "FIAT",
    version: "PULSE AUDACE 1.3 AT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.950,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.540,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.360,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/pulseaudance2025.png"],
    description: "SUV compacto com design moderno e tecnologia avançada. Ideal para quem busca conforto, segurança e economia no dia a dia."
  },
  "18": {
    id: "18",
    title: "Fiat Fiorino Endurance",
    brand: "FIAT",
    version: "FIORINO ENDURANCE",
    type: "Comercial",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.4",
    color: "Diversas",
    doors: "2",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.100,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.520,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.680,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/fiorino.png"],
    description: "Veículo comercial compacto e versátil, ideal para pequenos negócios e entregas urbanas."
  },
  "19": {
    id: "19",
    title: "VW T-Cross TSI 200 Aut.",
    brand: "VW",
    version: "T-CROSS TSI 200 AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.100,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.720,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.480,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tcross200tsi.png"],
    description: "SUV compacto conhecido pela robustez e por oferecer um dos melhores espaços internos do segmento."
  },
  "20": {
    id: "20",
    title: "Hyundai Creta 1.0 Turbo",
    brand: "HYUNDAI",
    version: "CRETA 1.0 TURBO",
    type: "SUV",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.200,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.840,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.560,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/creta.png"],
    description: "SUV moderno com motor 1.0 Turbo, reconhecido pela confiabilidade mecânica e lista de itens de série."
  },
  "21": {
    id: "21",
    title: "Citroën Basalt Shine 1.0 T200 AT",
    brand: "CITROEN",
    version: "BASALT SHINE 1.0 T200 AUTO AT",
    type: "Crossover Coupé",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.047,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.657,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.438,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/basalt.png"],
    description: "Versão automática do Basalt, garantindo conforto de direção e a agilidade do motor turbo."
  },
  "22": {
    id: "22",
    title: "Fiat Fastback Audace Turbo",
    brand: "FIAT",
    version: "FASTBACK AUDACE TURBO 1.0",
    type: "SUV Coupé",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.499,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.650,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.084,00",
        term: "80 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/pulse_audace_turbo200_hybrid_2026_prata_bari_1.png"],
    description: "Combina estilo cupê esportivo com um porta-malas generoso, sendo ideal para quem busca design e funcionalidade."
  },
  "23": {
    id: "23",
    title: "VW Virtus Comfortline 1.0 TSI",
    brand: "VW",
    version: "VIRTUS COMFORTLINE 1.0 200 TSI AUT.",
    type: "Sedan Médio",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.089,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.707,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.471,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/virtusconfortline2.png"],
    description: "Sedan com excelente espaço para os passageiros de trás e um dos maiores porta-malas da categoria."
  },
  "24": {
    id: "24",
    title: "VW Nivus Highline 1.0 200 TSI",
    brand: "VW",
    version: "NIVUS HIGHLINE 1.0 200 TSI AUT.",
    type: "Crossover Coupé",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.207,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.849,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.566,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/nivus.png"],
    description: "Crossover cupê com design arrojado e tecnologia de ponta. Ideal para quem busca estilo e modernidade."
  },
  "25": {
    id: "25",
    title: "VW T-Cross Comfortline 1.0 TSI",
    brand: "VW",
    version: "T-CROSS COMFORTLINE 1.0 200 TSI AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.299,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.959,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.639,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tcrossconforline3_1.png"],
    description: "SUV compacto versátil com bom espaço interno e tecnologia avançada."
  },
  "26": {
    id: "26",
    title: "Chevrolet Tracker LT 1.2 Turbo",
    brand: "CHEVROLET",
    version: "TRACKER LT 1.2 TURBO AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.2 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.399,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.079,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.719,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/tracker_1.png"],
    description: "SUV compacto com motor 1.2 turbo mais potente, ideal para quem busca desempenho."
  },
  "27": {
    id: "27",
    title: "Hyundai Creta Limited 1.0 Turbo",
    brand: "HYUNDAI",
    version: "CRETA LIMITED 1.0 TURBO AUT.",
    type: "SUV",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.499,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.199,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.799,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/creta_1_0_t_gdi_ultimate_1.png"],
    description: "Versão topo de linha do Creta com todos os recursos de tecnologia e conforto."
  },
  "28": {
    id: "28",
    title: "Jeep Renegade Longitude 1.3 Turbo",
    brand: "JEEP",
    version: "RENEGADE LONGITUDE 1.3 TURBO AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.3 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.599,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.319,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.879,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/renegade-long-t270-1-3-tb-4x2-flex-aut_1.jpg"],
    description: "SUV compacto com DNA off-road e design icônico da Jeep."
  },
  "29": {
    id: "29",
    title: "Nissan Kicks Sense 1.6",
    brand: "NISSAN",
    version: "KICKS SENSE 1.6 AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.6",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.699,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.439,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.959,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/kicks_sense_1.png"],
    description: "SUV compacto com design moderno e tecnologia avançada."
  },
  "30": {
    id: "30",
    title: "VW T-Cross Highline 1.4 TSI",
    brand: "VW",
    version: "T-CROSS HIGHLINE 1.4 250 TSI AUT.",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.4 TSI",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.799,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.559,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.039,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/t_cross_highline1_4_tsi_flex_2025_1.png"],
    description: "Versão topo de linha do T-Cross com motor 1.4 TSI mais potente."
  },
  "31": {
    id: "31",
    title: "Jeep Compass Longitude 1.3 Turbo",
    brand: "JEEP",
    version: "COMPASS LONGITUDE 1.3 TURBO AUT.",
    type: "SUV Médio",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.3 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.492,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.060,34",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.090,00",
        term: "90 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/compass_longitude.png"],
    description: "SUV médio com design robusto e tecnologia avançada."
  },
  "32": {
    id: "32",
    title: "RAM Rampage Big Horn 2.2 Diesel",
    brand: "RAM",
    version: "RAMPAGE BIG HORN 2.2 DIESEL AUT.",
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
        monthly: "R$ 4.699,00",
        term: "36 meses",
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
  "33": {
    id: "33",
    title: "Fiat Mobi 1.0 Like Mec PJ",
    brand: "FIAT",
    version: "MOBI 1.0 LIKE MEC",
    type: "Econômico",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.620,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 1.944,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.296,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/mobi_like_2026__1.png"],
    description: "Versão PJ do Mobi, ideal para empresas que buscam economia e praticidade."
  },
  "34": {
    id: "34",
    title: "Fiat Argo 1.0 Drive PJ",
    brand: "FIAT",
    version: "ARGO 1.0 DRIVE",
    type: "Hatch",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.755,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.106,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.404,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "Versão PJ do Argo, perfeito para frotas empresariais."
  },
  "35": {
    id: "35",
    title: "Hyundai HB20 1.0 Sense PJ",
    brand: "HYUNDAI",
    version: "HB20 1.0 SENSE",
    type: "Hatch",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.755,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.106,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.404,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão PJ do HB20, ideal para empresas que valorizam conectividade."
  },
  "36": {
    id: "36",
    title: "VW Polo Track MT 5P PJ",
    brand: "VW",
    version: "POLO TRACK MT 5P",
    type: "Hatch Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.745,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.095,19",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.396,79",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polo_track_2026.png"],
    description: "Versão PJ do Polo Track, robustez e segurança para empresas."
  },
  "37": {
    id: "37",
    title: "Fiat Argo Drive 1.0 MT PJ",
    brand: "F  IAT",
    version: "ARGO DRIVE 1.0 MT",
    type: "Hatch Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.754,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.105,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.403,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "Versão PJ do Argo Drive, economia e modernidade para frotas."
  },
  "38": {
    id: "38",
    title: "Chevrolet Onix Plus 1.0 MT PJ",
    brand: "CHEVROLET",
    version: "ONIX PLUS 1.0 MT",
    type: "Sedan Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.799,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.159,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.439,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/captura-de-pantalla-2025-10-10-092903.png"],
    description: "Versão PJ do Onix Plus, segurança e espaço para empresas."
  },
  "39": {
    id: "39",
    title: "Fiat Strada Endurance 1.3 PJ",
    brand: "FIAT",
    version: "STRADA 1.3 CABINE PLUS ENDURANCE",
    type: "Picape Compacta",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.3",
    color: "Diversas",
    doors: "2",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.024,10",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.428,92",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.619,28",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/strada.png"],
    description: "Versão PJ da Strada, ideal para trabalho e entregas empresariais."
  },
  "40": {
    id: "40",
    title: "Hyundai HB20 1.0 Evolution PJ",
    brand: "HYUNDAI",
    version: "HB20 1.0 EVOLUTION",
    type: "Hatch",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 1.890,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.268,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.512,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão PJ do HB20 Evolution, conectividade para empresas modernas."
  },
  "41": {
    id: "41",
    title: "Fiat Pulse Drive 1.3 PJ",
    brand: "FIAT",
    version: "PULSE DRIVE 1.3",
    type: "SUV Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.385,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.862,00",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.908,00",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/pulse.png"],
    description: "Versão PJ do Pulse, SUV compacto para empresas."
  },
  "42": {
    id: "42",
    title: "VW Polo Sense 1.0 170 TSI AT PJ",
    brand: "VW",
    version: "POLO SENSE 1.0 170 TSI AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.114,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.537,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.691,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polosense.png"],
    description: "Versão PJ do Polo Sense automático, conforto para frotas executivas."
  },
  "43": {
    id: "43",
    title: "Fiat Argo Drive 1.3 CVT AT PJ",
    brand: "FIAT",
    version: "ARGO DRIVE 1.3 CVT AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.339,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.807,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.871,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/argo.png"],
    description: "Versão PJ do Argo CVT, suavidade e conforto para empresas."
  },
  "44": {
    id: "44",
    title: "VW Polo Highline 1.0 170 TSI AT PJ",
    brand: "VW",
    version: "POLO HIGHLINE 1.0 170 TSI AT",
    type: "Hatch Compacto",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.0 TSI",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.339,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.807,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.871,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/polohighline.png"],
    description: "Versão PJ do Polo Highline, tecnologia e acabamento premium."
  },
  "45": {
    id: "45",
    title: "Citroën Basalt Feel 1.0 MT PJ",
    brand: "CITROEN",
    version: "BASALT FEEL 1.0 5P MT",
    type: "Crossover Coupé",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "5",
    engine: "1.0",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.372,39",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.846,87",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.897,91",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/basalt-feel-1-0-mt.png"],
    description: "Versão PJ do Basalt Feel, estilo cupê para empresas modernas."
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
  }
};

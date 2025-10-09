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
    title: "Fiat Strada Endurance",
    brand: "FIAT",
    version: "STRADA 1.3 CABINE PLUS ENDURANCE",
    type: "Picape Compacta",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Manual",
    seats: "2",
    engine: "1.3",
    color: "Diversas",
    doors: "2",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.249,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.698,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.799,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Parceira ideal para quem trabalha com cargas leves e entregas. Picape robusta, líder em economia e conhecida pela confiabilidade no dia a dia."
  },
  "2": {
    id: "2",
    title: "Chevrolet Tracker LT",
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
        monthly: "R$ 2.549,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.058,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.039,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV compacto e moderno, ideal para a família urbana. Combina o conforto do câmbio automático com a eficiência do motor 1.0 turbo."
  },
  "3": {
    id: "3",
    title: "Chevrolet Onix LT",
    brand: "CHEVROLET",
    version: "ONIX 1.0 LT",
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
        monthly: "R$ 1.949,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.338,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.559,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch de entrada focado em baixo custo operacional e alta conectividade. Uma escolha inteligente e confiável para o uso diário."
  },
  "4": {
    id: "4",
    title: "Nissan Kicks Sense",
    brand: "NISSAN",
    version: "KICKS PLAY 1.6 SENSE CVT",
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
        monthly: "R$ 2.549,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.058,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.039,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV conhecido pela dirigibilidade suave (graças ao câmbio CVT), confiabilidade e excelente espaço interno."
  },
  "5": {
    id: "5",
    title: "Citroën Basalt Feel",
    brand: "CITROËN",
    version: "BASALT FEEL 1.0 MT",
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
        monthly: "R$ 2.309,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.770,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.847,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Crossover com estilo coupé diferenciado e motor turbo. Oferece altura elevada e um visual arrojado na categoria."
  },
  "6": {
    id: "6",
    title: "Fiat Cronos Drive",
    brand: "FIAT",
    version: "CRONOS DRIVE 1.0 6V FLEX",
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
        monthly: "R$ 2.289,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.746,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.831,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Sedan com bom porta-malas e motor 1.0 Firefly, oferecendo economia para o uso diário ou frotas."
  },
  "7": {
    id: "7",
    title: "Fiat Fastback Audace",
    brand: "FIAT",
    version: "FASTBACK AUDACE 200 TB AUT (HÍBRIDO)",
    type: "SUV Coupé",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex/Híbrido",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.979,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.574,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.383,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV Coupé com design esportivo e motor 1.0 Turbo, que pode incluir um sistema micro-híbrido (mHEV) para maior eficiência."
  },
  "8": {
    id: "8",
    title: "Fiat Fastback Impetus",
    brand: "FIAT",
    version: "FASTBACK IMPETUS 200 T. AUT (HÍBRIDO)",
    type: "SUV Coupé",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex/Híbrido",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.409,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.090,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.727,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão topo de linha do Fastback, com acabamento premium e todos os recursos de performance do motor turbo."
  },
  "9": {
    id: "9",
    title: "Fiat Argo Drive",
    brand: "FIAT",
    version: "ARGO DRIVE 1.0 6V FLEX",
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
        monthly: "R$ 2.059,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.470,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.647,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch de entrada com motor 1.0 Firefly, muito econômico e prático para uso corporativo."
  },
  "10": {
    id: "10",
    title: "Fiat Argo Trekking",
    brand: "FIAT",
    version: "ARGO TREKKING 1.3 8V FLEX AUT.",
    type: "Hatch Crossover",
    clientType: "Pessoa Jurídica",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.3",
    color: "Diversas",
    doors: "4",
    year: "2026",
    prices: {
      assinatura: {
        monthly: "R$ 2.649,00",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.178,80",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.119,20",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão aventureira do Argo, com motor 1.3 e câmbio automático, oferecendo maior altura do solo e visual diferenciado."
  },
  "11": {
    id: "11",
    title: "Fiat Mobi Like",
    brand: "FIAT",
    version: "Mobi 1.0 Like Mec",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "O carro mais compacto e prático da lista, perfeito para enfrentar o trânsito intenso e a dificuldade de estacionar nas grandes cidades."
  },
  "12": {
    id: "12",
    title: "VW Polo Track",
    brand: "VW",
    version: "Polo Track MT 5P",
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
        monthly: "R$ 2.327,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.551,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch de entrada robusto, construído na plataforma MQB, oferecendo maior segurança e um desempenho confiável."
  },
  "13": {
    id: "13",
    title: "Fiat Argo Drive MT",
    brand: "FIAT",
    version: "Argo Drive 1.0 MT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Hatch moderno e econômico com o consagrado motor Firefly, ideal para quem busca simplicidade e baixo custo."
  },
  "14": {
    id: "14",
    title: "Chevrolet Onix Plus",
    brand: "CHEVROLET",
    version: "Onix Plus 1.0 MT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Sedan que se destaca pela segurança e conectividade, oferecendo um ótimo custo-benefício e um bom porta-malas."
  },
  "15": {
    id: "15",
    title: "VW Polo Sense",
    brand: "VW",
    version: "Polo Sense 1.0 170 TSI AT",
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
        monthly: "R$ 2.349,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 2.819,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 1.879,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão de entrada automática. Possui o eficiente motor turbo (TSI), garantindo conforto na cidade e agilidade na estrada."
  },
  "16": {
    id: "16",
    title: "Fiat Argo Drive CVT",
    brand: "FIAT",
    version: "Argo Drive 1.3 CVT AT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "A combinação do motor 1.3 e câmbio CVT proporciona uma direção suave e sem trancos, ideal para o conforto diário."
  },
  "17": {
    id: "17",
    title: "VW Polo Highline",
    brand: "VW",
    version: "Polo Highline 1.0 170 TSI AT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "O Polo mais completo, focado em tecnologia (painel digital) e um acabamento superior, mantendo o motor 1.0 Turbo potente."
  },
  "18": {
    id: "18",
    title: "Citroën Basalt Feel MT",
    brand: "CITROEN",
    version: "Basalt Feel 1.0 5P MT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Crossover que aposta no estilo cupê e na posição de dirigir mais alta. Uma opção de visual marcante."
  },
  "19": {
    id: "19",
    title: "VW Tera Comfort",
    brand: "VW",
    version: "Tera Comfort 1.0 TSI AT",
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
        monthly: "R$ 2.649,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.179,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.119,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Novo SUV compacto da VW. Design moderno e a praticidade do câmbio automático e motor turbo para o uso urbano."
  },
  "20": {
    id: "20",
    title: "VW Tera High",
    brand: "VW",
    version: "Tera High 1.0 TSI AT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão topo de linha do Tera, com pacote de tecnologia e conforto completo, e motor 1.0 TSI ágil."
  },
  "21": {
    id: "21",
    title: "Fiat Pulse Audace Hybrid",
    brand: "FIAT",
    version: "Pulse Audace 1.0 Turbo 200 Hybrid AT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex/Híbrido",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 2.899,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.479,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.319,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/pulse_audace_turbo200_hybrid_2026_prata_bari.png"],
    description: "Um dos SUVs mais vendidos. O motor 1.0 Turbo oferece excelente torque, com o adicional de eficiência do sistema micro-híbrido."
  },
  "22": {
    id: "22",
    title: "VW T-Cross TSI",
    brand: "VW",
    version: "T-Cross TSI 200 Aut.",
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
        monthly: "R$ 2.997,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.597,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.398,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV compacto conhecido pela robustez e por oferecer um dos melhores espaços internos do segmento."
  },
  "23": {
    id: "23",
    title: "Citroën Basalt Shine",
    brand: "CITROEN",
    version: "Basalt Shine 1.0 T200 Auto AT",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão automática do Basalt, garantindo conforto de direção e a agilidade do motor turbo."
  },
  "24": {
    id: "24",
    title: "Fiat Fastback Audace Hybrid",
    brand: "FIAT",
    version: "Fastback Audace Turbo 1.0 Hybrid",
    type: "SUV Coupé",
    clientType: "Pessoa Física",
    fuelType: "Flex/Híbrido",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.0 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 3.049,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.659,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.439,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Combina estilo cupê esportivo com um porta-malas generoso, sendo ideal para quem busca design e funcionalidade."
  },
  "25": {
    id: "25",
    title: "VW Virtus Comfortline",
    brand: "VW",
    version: "Virtus Comfortline 1.0 200 TSI Aut.",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Sedan com excelente espaço para os passageiros de trás e um dos maiores porta-malas da categoria."
  },
  "26": {
    id: "26",
    title: "Hyundai Creta Comfort",
    brand: "HYUNDAI",
    version: "Creta Comfort 1.0 T-GDI AT 5P",
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
        monthly: "R$ 3.099,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.719,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.479,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV moderno com motor 1.0 Turbo, reconhecido pela confiabilidade mecânica e lista de itens de série."
  },
  "27": {
    id: "27",
    title: "VW Nivus Highline",
    brand: "VW",
    version: "Nivus Highline 1.0 200 TSI Aut.",
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
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Crossover que define tendências. Destaca-se pelo design cupê, tecnologia de ponta e Multimídia VW Play."
  },
  "28": {
    id: "28",
    title: "VW T-Cross Comfortline",
    brand: "VW",
    version: "T-Cross Comfortline 200 TSI Aut.",
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
        monthly: "R$ 3.326,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.992,39",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.661,59",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão intermediária que oferece o melhor custo-benefício em equipamentos, mantendo a performance do motor turbo."
  },
  "29": {
    id: "29",
    title: "Chevrolet Tracker LT Turbo",
    brand: "CHEVROLET",
    version: "Tracker LT 1.0 Turbo AT",
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
        monthly: "R$ 3.332,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 3.999,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.666,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV com ótimo desempenho e foco em conectividade, sendo uma opção robusta e equilibrada no segmento."
  },
  "30": {
    id: "30",
    title: "Hyundai Creta Limited",
    brand: "HYUNDAI",
    version: "Creta Limited 1.0 T-GDI AT 5P",
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
        monthly: "R$ 3.559,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.271,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.847,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão do Creta com mais itens de conforto e acabamento, subindo o nível de sofisticação em relação à Comfort."
  },
  "31": {
    id: "31",
    title: "Jeep Renegade Longitude",
    brand: "JEEP",
    version: "Renegade Longitude 1.3 T270 Turbo AT",
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
        monthly: "R$ 3.578,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.294,79",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.863,19",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV com DNA off-road inconfundível. Oferece alta segurança e o desempenho forte do motor 1.3 Turbo."
  },
  "32": {
    id: "32",
    title: "Nissan Kicks Sense 220T",
    brand: "NISSAN",
    version: "Kicks Sense 220T 1.0 DCT 5P",
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
        monthly: "R$ 3.588,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.306,79",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.871,19",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV econômico e confiável, ideal para o uso familiar. O novo motor turbo (220T) proporciona mais agilidade."
  },
  "33": {
    id: "33",
    title: "VW T-Cross Highline",
    brand: "VW",
    version: "T-Cross Highline 1.4 TSI Aut.",
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
        monthly: "R$ 3.591,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.310,39",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.873,59",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão topo de linha do T-Cross. Conta com o motor 1.4 Turbo (250 TSI), o mais potente, focado em alta performance."
  },
  "34": {
    id: "34",
    title: "Chevrolet Tracker LTZ",
    brand: "CHEVROLET",
    version: "Tracker LTZ Turbo 1.0 AT",
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
        monthly: "R$ 3.630,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.357,19",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 2.904,79",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão bem equipada do Tracker."
  },
  "35": {
    id: "35",
    title: "Nissan Kicks Exclusive",
    brand: "NISSAN",
    version: "Kicks Exclusive 1.0 220T DCT",
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
        monthly: "R$ 3.797,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.557,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.038,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão mais luxuosa do Kicks, com foco em tecnologia e conforto."
  },
  "36": {
    id: "36",
    title: "Chevrolet Tracker Premier",
    brand: "CHEVROLET",
    version: "Tracker Premier AT Turbo 1.2 4P R8G Aut.",
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
        monthly: "R$ 4.001,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.802,39",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.201,59",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Topo de linha do Tracker. Motor 1.2 Turbo (o mais forte) e pacote completo de itens de série."
  },
  "37": {
    id: "37",  ```typescript
    title: "Hyundai Creta Ultimate",
    brand: "HYUNDAI",
    version: "Creta Ultimate 1.6 T-GDI DCT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático",
    seats: "5",
    engine: "1.6 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 4.054,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.865,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.243,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Versão mais completa e sofisticada do Creta, com motorização forte e recursos avançados."
  },
  "38": {
    id: "38",
    title: "Jeep Compass Longitude",
    brand: "JEEP",
    version: "Compass Longitude T270 1.3 TB 4x2 Aut.",
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
        monthly: "R$ 4.099,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.919,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.279,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV de categoria superior, com acabamento premium e performance do motor 1.3 Turbo."
  },
  "39": {
    id: "39",
    title: "Honda HR-V EXL",
    brand: "HONDA",
    version: "HR-V 1.5 EXL CVT",
    type: "SUV Compacto",
    clientType: "Pessoa Física",
    fuelType: "Flex",
    transmission: "Automático (CVT)",
    seats: "5",
    engine: "1.5",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 4.120,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 4.945,19",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.296,79",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "Reconhecido pela confiabilidade Honda e o sistema de bancos modulares (Magic Seat)."
  },
  "40": {
    id: "40",
    title: "VW Taos Highline",
    brand: "VW",
    version: "Taos Highline 250 TSI Aut.",
    type: "SUV Médio",
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
        monthly: "R$ 4.577,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 5.493,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.662,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV médio que entrega excelente espaço interno e porta-malas, com motor 1.4 TSI."
  },
  "41": {
    id: "41",
    title: "Ford Territory Titanium",
    brand: "FORD",
    version: "Territory 1.5 T Ecoboost GTDI Titanium DCT",
    type: "SUV Médio",
    clientType: "Pessoa Física",
    fuelType: "Gasolina",
    transmission: "Automático",
    seats: "5",
    engine: "1.5 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 4.992,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 5.991,59",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 3.994,39",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV médio com forte foco em tecnologia e conforto para viagens longas."
  },
  "42": {
    id: "42",
    title: "GWM Haval H6 PHEV",
    brand: "GWM",
    version: "Haval H6 1.5T PHEV 19 Premium DHT 5P",
    type: "SUV Médio",
    clientType: "Pessoa Física",
    fuelType: "Gasolina/Híbrido",
    transmission: "Automático",
    seats: "5",
    engine: "1.5 Turbo",
    color: "Diversas",
    doors: "4",
    year: "2025",
    prices: {
      assinatura: {
        monthly: "R$ 5.199,99",
        term: "36 meses",
        mileage: "1.000 km/mês",
        details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
      },
      financiamento: {
        monthly: "R$ 6.239,99",
        term: "60 meses",
        details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
      },
      consorcio: {
        monthly: "R$ 4.159,99",
        term: "120 meses",
        details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/hb20.png"],
    description: "SUV Híbrido Plug-in (PHEV) de alta tecnologia, ideal para quem busca luxo e máxima eficiência energética."
  }
};
```

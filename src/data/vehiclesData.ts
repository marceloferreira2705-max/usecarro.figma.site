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
  "1": {
    "id": "1",
    "title": "Mobi 1.0 Trekking MT",
    "brand": "FIAT",
    "version": "Mobi 1.0 Trekking MT",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Fire",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 1.749,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 72.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5689/model_main_comprar-trekking-1-0_5722410b6d.png"
    ],
    "description": "O Fiat Mobi é o carro ideal para quem busca praticidade e economia no dia a dia. Compacto e ágil, ele é perfeito para a cidade."
  },
  "2": {
    "id": "2",
    "title": "Argo 1.0",
    "brand": "FIAT",
    "version": "Argo 1.0",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Firefly",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.199,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 84.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5698/model_main_comprar-1-0_d004070243.png"
    ],
    "description": "O Fiat Argo combina design italiano com tecnologia e conforto. Um hatch premium que se destaca em qualquer lugar."
  },
  "3": {
    "id": "3",
    "title": "HB20 1.0 Sense",
    "brand": "HYUNDAI",
    "version": "HB20 1.0 Sense",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Kappa",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.299,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 86.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7438/model_main_comprar-sense-1-0_3535e60967.png"
    ],
    "description": "O Hyundai HB20 traz um novo patamar de segurança e tecnologia para a categoria. Design ousado e conectividade de ponta."
  },
  "4": {
    "id": "4",
    "title": "Polo Track 1.0",
    "brand": "VOLKSWAGEN",
    "version": "Polo Track 1.0",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 MPI",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.399,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 89.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8766/model_main_comprar-track-1-0-mpi_9343288f35.png"
    ],
    "description": "O sucessor do Gol. O Polo Track é robusto, espaçoso e confiável. A engenharia alemã a serviço do seu dia a dia."
  },
  "5": {
    "id": "5",
    "title": "Argo 1.0",
    "brand": "FIAT",
    "version": "Argo 1.0",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Firefly",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.199,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 84.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5698/model_main_comprar-1-0_d004070243.png"
    ],
    "description": "O Fiat Argo combina design italiano com tecnologia e conforto. Um hatch premium que se destaca em qualquer lugar."
  },
  "6": {
    "id": "6",
    "title": "Onix Plus 1.0 LT",
    "brand": "CHEVROLET",
    "version": "Onix Plus 1.0 LT",
    "type": "Sedan Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Aspirado",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.599,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 96.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7938/model_main_comprar-lt-1-0_5b35768309.png"
    ],
    "description": "O sedan mais vendido do Brasil. O Onix Plus oferece espaço, economia e muita tecnologia embarcada."
  },
  "7": {
    "id": "7",
    "title": "Strada Endurance 1.3",
    "brand": "FIAT",
    "version": "Strada Endurance 1.3 Flex 8V CP",
    "type": "Picape Compacta",
    "clientType": "Pessoa Jurídica",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "2",
    "engine": "1.3 Firefly",
    "color": "DIVERSAS",
    "doors": "2",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.059,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 105.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5712/model_main_comprar-endurance-cabine-plus-1-3-firefly_930235d352.png"
    ],
    "description": "A picape líder de mercado. A Fiat Strada Endurance é robusta, versátil e pronta para o trabalho pesado."
  },
  "8": {
    "id": "8",
    "title": "HB20 1.0 Comfort",
    "brand": "HYUNDAI",
    "version": "HB20 1.0 Comfort",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Kappa",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.499,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 92.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7439/model_main_comprar-comfort-1-0_9131733569.png"
    ],
    "description": "Mais conforto e tecnologia no seu dia a dia. O HB20 Comfort traz central multimídia e acabamento superior."
  },
  "9": {
    "id": "9",
    "title": "Pulse Drive 1.3 MT",
    "brand": "FIAT",
    "version": "Pulse Drive 1.3 MT",
    "type": "SUV Compacto",
    "clientType": "Pessoa Jurídica",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.3 Firefly",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.359,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 107.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5704/model_main_comprar-drive-1-3-flex_f746f93905.png"
    ],
    "description": "O SUV da Fiat que conquistou o Brasil. Design moderno, altura do solo elevada e muito estilo."
  },
  "10": {
    "id": "10",
    "title": "Polo 1.0 170 Tsi Sense Auto",
    "brand": "VOLKSWAGEN",
    "version": "Polo 1.0 170 Tsi Sense Auto",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2026",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.388,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 102.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8767/model_main_comprar-tsi-1-0-tsi_2f0766b80a.png"
    ],
    "description": "Performance e economia com o motor TSI. O Polo Sense é a escolha inteligente para quem busca um automático acessível."
  },
  "11": {
    "id": "11",
    "title": "Argo Drive 1.3 AT",
    "brand": "FIAT",
    "version": "Argo Drive 1.3 AT",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.3 Firefly",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.699,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 97.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5699/model_main_comprar-drive-1-0_9343288f35.png"
    ],
    "description": "Conforto do câmbio automático CVT com a economia do motor 1.3 Firefly. O Argo Drive é completo."
  },
  "12": {
    "id": "12",
    "title": "Polo Highline TSI",
    "brand": "VOLKSWAGEN",
    "version": "Polo Highline TSI",
    "type": "Hatch Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.199,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 124.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8769/model_main_comprar-highline-1-0-tsi_9343288f35.png"
    ],
    "description": "Tecnologia de ponta com painel digital Active Info Display e VW Play. O topo de linha dos hatches."
  },
  "13": {
    "id": "13",
    "title": "Basalt Feel 1.0",
    "brand": "CITROEN",
    "version": "Basalt Feel 1.0",
    "type": "SUV Coupé",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 Firefly",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.599,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 98.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/10245/model_main_comprar-feel-1-0_9343288f35.png"
    ],
    "description": "O primeiro SUV Coupé acessível do mercado. Estilo único, espaço interno generoso e economia."
  },
  "14": {
    "id": "14",
    "title": "Tera 1.0 MPI MT",
    "brand": "VOLKSWAGEN",
    "version": "Volkswagen Tera 1.0 MPI MT",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "5",
    "engine": "1.0 MPI",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.247,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 109.990,00",
        "details": []
      }
    },
    "images": [
      "https://s2-autoesporte.glbimg.com/eX-y-z-0-1-2-3-4-5-6-7-8-9/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/0/1/2/3/4/5/6/7/8/9/vw-tera-2025-1.jpg"
    ],
    "description": "O novo SUV de entrada da Volkswagen. Compacto por fora, gigante por dentro. Perfeito para a cidade."
  },
  "15": {
    "id": "15",
    "title": "Tera High 170 TSI",
    "brand": "VOLKSWAGEN",
    "version": "Tera High 170 TSI",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.999,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 129.990,00",
        "details": []
      }
    },
    "images": [
      "https://s2-autoesporte.glbimg.com/eX-y-z-0-1-2-3-4-5-6-7-8-9/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/0/1/2/3/4/5/6/7/8/9/vw-tera-2025-1.jpg"
    ],
    "description": "A versão topo de linha do Tera. Motor turbo, câmbio automático e pacote tecnológico completo."
  },
  "16": {
    "id": "16",
    "title": "Tracker 1.0 Turbo AT",
    "brand": "CHEVROLET",
    "version": "Tracker 1.0 Turbo AT",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.299,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 139.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7945/model_main_comprar-1-0-turbo_5b35768309.png"
    ],
    "description": "O SUV que dita tendências. Motor turbo de série, 6 airbags e Wi-Fi nativo. Segurança e conectividade."
  },
  "17": {
    "id": "17",
    "title": "Pulse Audace T200",
    "brand": "FIAT",
    "version": "Pulse 1.0 T200 Mhev Audace Cvt",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2026",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.899,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 125.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5705/model_main_comprar-audace-turbo-200-flex_f746f93905.png"
    ],
    "description": "Potência do motor Turbo 200 com câmbio CVT. O Pulse Audace entrega performance e conforto superiores."
  },
  "18": {
    "id": "18",
    "title": "Fiorino Endurance",
    "brand": "FIAT",
    "version": "Fiorino Endurance",
    "type": "Utilitário",
    "clientType": "Pessoa Jurídica",
    "fuelType": "FLEX",
    "transmission": "MANUAL",
    "seats": "2",
    "engine": "1.4 Fire",
    "color": "BRANCA",
    "doors": "2",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.699,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 115.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/5718/model_main_comprar-endurance-1-4-evo-flex_9343288f35.png"
    ],
    "description": "O parceiro ideal para o seu negócio. A Fiorino é líder absoluta em vendas por sua robustez e baixo custo de manutenção."
  },
  "19": {
    "id": "19",
    "title": "T-Cross 200 TSI AT",
    "brand": "VOLKSWAGEN",
    "version": "T-Cross 200 TSI AT 1.0 4P",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2026",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.139,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 146.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8772/model_main_comprar-200-tsi_9343288f35.png"
    ],
    "description": "O SUV mais vendido do Brasil. Espaço interno de sobra, motor turbo eficiente e segurança 5 estrelas."
  },
  "20": {
    "id": "20",
    "title": "Creta Comfort 1.0",
    "brand": "HYUNDAI",
    "version": "Creta Comfort 1.0",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.499,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 142.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7445/model_main_comprar-comfort-plus-1-0-tgdi-at_9343288f35.png"
    ],
    "description": "Design futurista e tecnologia de ponta. O novo Creta se destaca pelo conforto e pelos itens de série."
  },
  "21": {
    "id": "21",
    "title": "Basalt Shine Turbo",
    "brand": "CITROEN",
    "version": "Basalt Shine Turbo",
    "type": "SUV Coupé",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.099,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 125.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/10247/model_main_comprar-shine-1-0-turbo-200_9343288f35.png"
    ],
    "description": "Estilo coupé com motor turbo. O Basalt Shine une o design esportivo com a performance do motor T200."
  },
  "22": {
    "id": "22",
    "title": "Fastback Audace T200",
    "brand": "FIAT",
    "version": "Fastback Audace 200 TB Aut (Hibrído)",
    "type": "SUV Coupé",
    "clientType": "Pessoa Jurídica",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.169,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 149.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8635/model_main_comprar-audace-turbo-200-flex-at_9343288f35.png"
    ],
    "description": "O SUV Coupé da Fiat. Porta-malas gigante, design arrebatador e motor turbo potente."
  },
  "23": {
    "id": "23",
    "title": "Virtus Comfortline",
    "brand": "VOLKSWAGEN",
    "version": "Virtus Comfortline",
    "type": "Sedan Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.199,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 135.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8778/model_main_comprar-comfortline-200-tsi_9343288f35.png"
    ],
    "description": "Elegância e espaço de sobra. O Virtus é o sedan ideal para quem busca conforto e desempenho."
  },
  "24": {
    "id": "24",
    "title": "Nivus Highline",
    "brand": "VOLKSWAGEN",
    "version": "Nivus Highline",
    "type": "SUV Coupé",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.699,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 155.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8776/model_main_comprar-highline-200-tsi_9343288f35.png"
    ],
    "description": "Design que inaugurou tendência. O Nivus Highline traz ACC, frenagem autônoma e muito estilo."
  },
  "25": {
    "id": "25",
    "title": "T-Cross Comfortline",
    "brand": "VOLKSWAGEN",
    "version": "T-Cross Comfortline",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.799,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 165.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8773/model_main_comprar-comfortline-200-tsi_9343288f35.png"
    ],
    "description": "Mais equipamentos e conforto. O T-Cross Comfortline adiciona painel digital e ar Climatronic."
  },
  "26": {
    "id": "26",
    "title": "Tracker LT",
    "brand": "CHEVROLET",
    "version": "Tracker LT",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.499,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 145.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7946/model_main_comprar-lt-1-0-turbo_5b35768309.png"
    ],
    "description": "Conectividade total com MyLink e OnStar. A Tracker LT é perfeita para a vida urbana."
  },
  "27": {
    "id": "27",
    "title": "Creta Limited",
    "brand": "HYUNDAI",
    "version": "Creta Limited",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.0 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.699,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 155.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/7446/model_main_comprar-limited-safety-1-0-tgdi-at_9343288f35.png"
    ],
    "description": "Segurança reforçada com pacote Smartsense. O Creta Limited cuida de você e sua família."
  },
  "28": {
    "id": "28",
    "title": "Renegade Longitude",
    "brand": "JEEP",
    "version": "Renegade Longitude",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.3 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.899,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 165.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8643/model_main_comprar-longitude-t270_9343288f35.png"
    ],
    "description": "O ícone da Jeep. Motor T270 de 185cv, o mais potente da categoria. Aventura e estilo."
  },
  "29": {
    "id": "29",
    "title": "Kicks Sense",
    "brand": "NISSAN",
    "version": "Kicks Sense",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.6 Aspirado",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 2.999,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 119.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8356/model_main_comprar-sense-1-6-cvt_9343288f35.png"
    ],
    "description": "Conforto absoluto com os bancos Zero Gravity. O Kicks é espaçoso, econômico e muito confortável."
  },
  "30": {
    "id": "30",
    "title": "T-Cross Highline",
    "brand": "VOLKSWAGEN",
    "version": "T-Cross Highline",
    "type": "SUV Compacto",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.4 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 4.499,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 185.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8774/model_main_comprar-highline-250-tsi_9343288f35.png"
    ],
    "description": "Performance de esportivo com motor 250 TSI. Teto solar, Park Assist e som Beats."
  },
  "31": {
    "id": "31",
    "title": "Compass Longitude T270",
    "brand": "JEEP",
    "version": "Compass Longitude T270 1.3 TB 4x2 Flex Aut",
    "type": "SUV Médio",
    "clientType": "Pessoa Física",
    "fuelType": "FLEX",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "1.3 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2026",
    "prices": {
      "assinatura": {
        "monthly": "R$ 3.845,99",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 184.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/8649/model_main_comprar-longitude-t270_9343288f35.png"
    ],
    "description": "O líder absoluto dos SUVs médios. Acabamento premium, tecnologia e status em um só carro."
  },
  "32": {
    "id": "32",
    "title": "RAMPAGE REBEL 2.2",
    "brand": "RAM",
    "version": "RAMPAGE REBEL 2.2 TB CD 4X4 Diesel Aut.",
    "type": "Picape Média",
    "clientType": "Pessoa Jurídica",
    "fuelType": "DIESEL",
    "transmission": "AUTOMÁTICO",
    "seats": "5",
    "engine": "2.2 TURBO",
    "color": "DIVERSAS",
    "doors": "4",
    "year": "2025",
    "prices": {
      "assinatura": {
        "monthly": "R$ 5.369,00",
        "term": "36 meses",
        "mileage": "1.000 km/mês",
        "details": []
      },
      "consorcio": {
        "monthly": "SOB MEDIDA",
        "term": "80 meses",
        "credit": "R$ 264.990,00",
        "details": []
      }
    },
    "images": [
      "https://production.autoforce.com/uploads/version/profile_image/9412/model_main_comprar-rebel-2-0-turbodiesel_9343288f35.png"
    ],
    "description": "A picape mais potente produzida no Brasil. Luxo, força e capacidade 4x4 inigualável."
  }
};

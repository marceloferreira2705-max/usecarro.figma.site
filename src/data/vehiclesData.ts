import { VehicleData } from "./vehiclesData";

export type { VehicleData };

export interface VehicleData {
  id: string;
  title: string;
  brand: string;
  version: string;
  type: string;
  clientType: "Pessoa Física" | "Pessoa Jurídica" | "PF" | "PJ";
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
    title: "Volvo XC60 2.0 T8 Ultra Auto AWD 25/26",
    brand: "Volvo",
    version: "Volvo XC60 2.0 T8 Ultra Auto AWD",
    type: "SUV de Luxo",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido (Gasolina/Elétrico)",
    transmission: "Automática de 8 marchas",
    engine: "2.0 Turbo + Motor Elétrico (462 cv combinados)",
    color: "Platinum Grey",
    doors: "5",
    seats: "5",
    description: "O Volvo XC60 Ultra é a síntese da sofisticação escandinava e da vanguarda tecnológica. Com um interior minimalista adornado com detalhes em cristal Orrefors e som Bowers & Wilkins, ele oferece uma condução serena e potente. É a escolha definitiva para quem busca segurança máxima sem abrir mão do status e do compromisso ambiental.",
    prices: {
      assinatura: {
        monthly: "R$ 10.599,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 6.890,00",
        term: "80 Meses",
        credit: "R$ 477.457,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974553793-0.png"]
  },
  "2": {
    id: "2",
    title: "Volvo XC90 2.0 T8 Ultra Auto AWD 25/26",
    brand: "Volvo",
    version: "Volvo XC90 2.0 T8 Ultra Auto AWD",
    type: "SUV Premium",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido (Gasolina/Elétrico)",
    transmission: "Automática de 8 marchas",
    engine: "2.0 Turbo + Motor Elétrico (462 cv combinados)",
    color: "Onyx Black",
    doors: "5",
    seats: "7",
    description: "Majestoso em cada detalhe, o XC90 Ultra redefine a experiência de primeira classe em movimento. Com sete lugares envoltos em couro nappa de altíssima qualidade e suspensão a ar auto-adaptativa, este SUV é uma obra de arte da engenharia, desenhada para elevar cada viagem de família ao nível de uma jornada épica de luxo e bem-estar.",
    prices: {
      assinatura: {
        monthly: "R$ 14.499,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 9.580,00",
        term: "80 Meses",
        credit: "R$ 666.083,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974383803-0.png"]
  },
  "3": {
    id: "3",
    title: "Haval H6 1.5T PHEV 19 Premium",
    brand: "GWM",
    version: "Haval H6 1.5T PHEV 19 Premium",
    type: "SUV Médio",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido Plug-in",
    transmission: "DHT (Híbrida)",
    engine: "1.5 Turbo + Motor Elétrico (323 cv)",
    color: "Azul Safira",
    doors: "5",
    seats: "5",
    description: "O Haval H6 PHEV 19 traz o equilíbrio perfeito entre autonomia elétrica e eficiência. Seu design futurista e o cockpit totalmente digital criam um ambiente de inovação e exclusividade. Ideal para quem deseja transitar entre o urbano sustentável e a performance de estrada com elegância e inteligência tecnológica.",
    prices: {
      assinatura: {
        monthly: "R$ 6.779,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 2.950,00",
        term: "80 Meses",
        credit: "R$ 204.767,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973626209-1.png"]
  },
  "4": {
    id: "4",
    title: "Haval H6 GT 1.5T PHEV GT DHT AWD 25/26",
    brand: "GWM",
    version: "Haval H6 GT 1.5T PHEV GT DHT AWD",
    type: "SUV Coupé",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido Plug-in",
    transmission: "DHT (Híbrida)",
    engine: "1.5 Turbo + Dois Motores Elétricos (393 cv)",
    color: "Cinza Shark",
    doors: "5",
    seats: "5",
    description: "Com uma silhueta Coupé audaciosa e aceleração de tirar o fôlego, o Haval H6 GT é a expressão máxima de performance emocionante. O interior escurecido com acabamentos em alcântara evoca um luxo esportivo raro, proporcionando uma experiência imersiva para condutores que exigem presença marcante e potência imediata.",
    prices: {
      assinatura: {
        monthly: "R$ 7.589,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 3.550,00",
        term: "80 Meses",
        credit: "R$ 245.903,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974072714-0.png"]
  },
  "5": {
    id: "5",
    title: "Tank 300 2.0T PHEV Hi4T Auto 25/26",
    brand: "GWM",
    version: "Tank 300 2.0T PHEV Hi4T Auto",
    type: "SUV Off-Road Premium",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido Plug-in",
    transmission: "Automática de 9 marchas",
    engine: "2.0 Turbo + Motor Elétrico (408 cv)",
    color: "Laranja Desert",
    doors: "5",
    seats: "5",
    description: "O Tank 300 une a robustez indomável de um jipe purista ao refinamento de um sedã de luxo. Equipado com tração inteligente Hi4T e um interior suntuoso repleto de couro e telas panorâmicas, ele é o veículo ideal para conquistar os terrenos mais difíceis sem abrir mão do conforto aristocrático.",
    prices: {
      assinatura: {
        monthly: "R$ 8.249,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 4.880,00",
        term: "80 Meses",
        credit: "R$ 339.000,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973919967-0.png"]
  },
  "6": {
    id: "6",
    title: "COMMANDER OVERLAND TD 2.2L 4X4",
    brand: "Jeep",
    version: "COMMANDER OVERLAND TD 2.2L 4X4",
    type: "SUV 7 Lugares",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 9 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Billet Silver",
    doors: "5",
    seats: "7",
    description: "O Jeep Commander Overland é o epítome do luxo aventureiro. Com acabamentos em camurça premium e som Harman Kardon, oferece uma atmosfera de exclusividade e robustez. Sua motorização diesel e tração 4x4 garantem autoridade em qualquer solo, mantendo o requinte de um Jeep topo de linha.",
    prices: {
      assinatura: {
        monthly: "R$ 6.189,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 3.860,00",
        term: "80 Meses",
        credit: "R$ 268.125,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973626220-2.png"]
  },
  "7": {
    id: "7",
    title: "TITANO RANCH 2.2 16V 4X4 TB DIESEL AUT.",
    brand: "Fiat",
    version: "TITANO RANCH 2.2 16V 4X4 TB DIESEL AUT.",
    type: "Picape Média",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 6 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Branco Ambiente",
    doors: "4",
    seats: "5",
    description: "A Titano Ranch é a força bruta vestida de gala. Com um interior refinado, central multimídia intuitiva e bancos em couro premium, ela transcende a função de picape para se tornar uma aliada de estilo e poder. Perfeita para quem domina qualquer terreno com imponência e máxima eficiência.",
    prices: {
      assinatura: {
        monthly: "R$ 6.299,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 3.160,00",
        term: "80 Meses",
        credit: "R$ 219.742,00",
        details: []
      }
    },
    images: ["https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=1200&auto=format&fit=crop"]
  },
  "8": {
    id: "8",
    title: "COMPASS S T270 1.3 TB 4X2 FLEX AUT.",
    brand: "Jeep",
    version: "COMPASS S T270 1.3 TB 4X2 FLEX AUT.",
    type: "SUV Médio",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Flex",
    transmission: "Automática de 6 marchas",
    engine: "1.3 Turbo Flex (185 cv)",
    color: "Cinza Sting",
    doors: "5",
    seats: "5",
    description: "O Compass Série S é o benchmark de tecnologia e elegância urbana. Equipado com direção autônoma e um teto solar panorâmico que convida à liberdade, este SUV combina agilidade e um design escurecido exclusivo que exala sofisticação contemporânea em cada detalhe.",
    prices: {
      assinatura: {
        monthly: "R$ 3.549,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 2.660,00",
        term: "80 Meses",
        credit: "R$ 184.776,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973099189-1.png"]
  },
  "9": {
    id: "9",
    title: "RAMPAGE REBEL 2.2 TB CD 4X4 DIESEL AUT.",
    brand: "Ram",
    version: "RAMPAGE REBEL 2.2 TB CD 4X4 DIESEL AUT.",
    type: "Picape Sport Premium",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 9 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Flame Red",
    doors: "4",
    seats: "5",
    description: "A Rampage Rebel é onde o instinto selvagem encontra o luxo absoluto. Com aceleração vigorosa e um interior revestido em materiais premium, ela redefine o segmento de picapes. É um convite ao prazer de dirigir, oferecendo o status inconfundível do universo RAM com a agilidade de um SUV de luxo.",
    prices: {
      assinatura: {
        monthly: "R$ 7.189,00",
        term: "36 Meses",
        mileage: "1000 km",
        details: []
      },
      consorcio: {
        monthly: "R$ 2.990,00",
        term: "80 Meses",
        credit: "R$ 207.451,00",
        details: []
      }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973099186-0.png"]
  }
};

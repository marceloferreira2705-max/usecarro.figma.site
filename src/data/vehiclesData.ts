export interface VehicleData {
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
      credit: string;
      details: string[];
    };
  };
  images: string[];
  description: string;
}

export const vehiclesData: Record<string, VehicleData> = {
  "V1": {
    id: "V1",
    title: "Volvo XC60 2.0 T8 Ultra Auto AWD 25 26",
    brand: "Volvo",
    version: "Volvo XC60 2.0 T8 Ultra",
    type: "SUV de Luxo",
    year: "2025 2026",
    clientType: "PF",
    fuelType: "Hibrido Gasolina Eletrico",
    transmission: "Automatica de 8 marchas",
    engine: "2.0 Turbo Motor Eletrico 462 cv",
    color: "Platinum Grey",
    doors: "05",
    seats: "05",
    description: "O Volvo XC60 Ultra e a sintese da sofisticacao escandinava e da vanguarda tecnologica. Com interior minimalista adornado com detalhes em cristal Orrefors e som Bowers e Wilkins, oferece conducao serena e potente. E a escolha definitiva para quem busca seguranca maxima sem abrir mao do status e compromisso ambiental.",
    prices: {
      assinatura: { monthly: "R$ 10.599,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 6.890,00", term: "80 Meses", credit: "R$ 477.457,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974553793-0.png"]
  },
  "V2": {
    id: "V2",
    title: "Volvo XC90 2.0 T8 Ultra Auto AWD 25 26",
    brand: "Volvo",
    version: "Volvo XC90 2.0 T8 Ultra",
    type: "SUV Premium",
    year: "2025 2026",
    clientType: "PF",
    fuelType: "Hibrido Gasolina Eletrico",
    transmission: "Automatica de 8 marchas",
    engine: "2.0 Turbo Motor Eletrico 462 cv",
    color: "Onyx Black",
    doors: "05",
    seats: "07",
    description: "Majestoso em cada detalhe, o XC90 Ultra redefine a experiencia de primeira classe. Com sete lugares envoltos em couro nappa de altissima qualidade e suspensao a ar auto-adaptativa, este SUV e uma obra de arte da engenharia, desenhada para elevar cada viagem de familia ao nivel de uma jornada epica de luxo e bem-estar.",
    prices: {
      assinatura: { monthly: "R$ 14.499,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 9.580,00", term: "80 Meses", credit: "R$ 658.027,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974383803-0.png"]
  },
  "V3": {
    id: "V3",
    title: "Haval H6 1.5T PHEV 19 Premium",
    brand: "GWM",
    version: "Haval H6 1.5T 19 Premium",
    type: "SUV Médio",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Híbrido Plug-in",
    transmission: "DHT (Híbrida)",
    engine: "1.5 Turbo + Motor Elétrico (323 cv)",
    color: "Azul Safira",
    doors: "5",
    seats: "5",
    description: "O Haval H6 PHEV 19 traz o equilíbrio perfeito entre autonomia elétrica e eficiência. Seu design futurista e cockpit totalmente digital criam um ambiente de inovação e exclusividade. Ideal para quem deseja transitar entre o urbano sustentável e a performance de estrada com elegância e inteligência tecnológica.",
    prices: {
      assinatura: { monthly: "R$ 6.779,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 3.580,00", term: "80 Meses", credit: "R$ 248.000,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973626209-1.png"]
  },
  "V4": {
    id: "V4",
    title: "Haval H6 GT 1.5T PHEV GT DHT AWD 25 26",
    brand: "GWM",
    version: "Haval H6 GT",
    type: "SUV Coupe",
    year: "2025 2026",
    clientType: "PF",
    fuelType: "Hibrido Plug-in",
    transmission: "DHT Hibrida",
    engine: "1.5 Turbo Dois Motores Eletricos 393 cv",
    color: "Cinza Shark",
    doors: "05",
    seats: "05",
    description: "Com silhueta Coupe audaciosa e aceleracao de tirar o folego, o Haval H6 GT e a expressao maxima de performance. O interior escurecido com acabamentos em alcantara evoca um luxo esportivo raro, proporcionando uma experiencia imersiva para condutores que exigem presenca marcante e potencia imediata.",
    prices: {
      assinatura: { monthly: "R$ 7.589,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 4.690,00", term: "80 Meses", credit: "R$ 325.000,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770974072714-0.png"]
  },
  "V5": {
    id: "V5",
    title: "Tank 300 2.0T PHEV Hi4T Auto 25 26",
    brand: "GWM",
    version: "Tank 300 PHEV",
    type: "SUV Off-Road Premium",
    year: "2025 2026",
    clientType: "PF",
    fuelType: "Hibrido Plug-in",
    transmission: "Automatica de 9 marchas",
    engine: "2.0 Turbo Motor Eletrico 408 cv",
    color: "Laranja Desert",
    doors: "05",
    seats: "05",
    description: "O Tank 300 une a robustez indomavel de um jipe purista ao refinamento de um seda de luxo. Equipado com tracao inteligente Hi4T e interior suntuoso repleto de couro e telas panoramicas, e o veiculo ideal para conquistar os terrenos mais dificeis sem abrir mao do conforto aristocratico e tecnologia de ponta.",
    prices: {
      assinatura: { monthly: "R$ 8.249,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 4.890,00", term: "80 Meses", credit: "R$ 339.000,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973919967-0.png"]
  },
  "V6": {
    id: "V6",
    title: "COMMANDER OVERLAND TD 2.2L 4X4",
    brand: "Jeep",
    version: "COMMANDER OVERLAND",
    type: "SUV 7 Lugares",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 9 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Billet Silver",
    doors: "5",
    seats: "7",
    description: "O Jeep Commander Overland é o epítome do luxo aventureiro. Com acabamentos em camurça premium e som Harman Kardon, oferece atmosfera de exclusividade e robustez. Sua motorização diesel e tração 4x4 garantem autoridade em qualquer solo, mantendo o requinte que apenas um Jeep de topo pode proporcionar.",
    prices: {
      assinatura: { monthly: "R$ 6.189,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 4.450,00", term: "80 Meses", credit: "R$ 308.490,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973626220-2.png"]
  },
  "V7": {
    id: "V7",
    title: "TITANO RANCH 2.2 16V 4X4 TB DIESEL AUT.",
    brand: "Fiat",
    version: "TITANO RANCH",
    type: "Picape Média",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 6 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Branco Ambiente",
    doors: "4",
    seats: "5",
    description: "A Titano Ranch é a força bruta vestida de gala. Com interior refinado, central multimídia intuitiva e bancos em couro premium, transcende a função de picape para se tornar uma aliada de estilo e poder. Perfeita para quem domina qualquer terreno com imponência e máxima eficiência diesel.",
    prices: {
      assinatura: { monthly: "R$ 6.299,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 2.760,00", term: "80 Meses", credit: "R$ 190.990,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1771011866654-0.png"]
  },
  "V8": {
    id: "V8",
    title: "COMPASS S T270 1.3 TB 4X2 FLEX AUT.",
    brand: "Jeep",
    version: "COMPASS S T270",
    type: "SUV Médio",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Flex",
    transmission: "Automática de 6 marchas",
    engine: "1.3 Turbo Flex (185 cv)",
    color: "Cinza Sting",
    doors: "5",
    seats: "5",
    description: "O Compass Série S é o benchmark de tecnologia e elegância urbana. Equipado com direção autônoma e teto solar panorâmico que convida à liberdade, combina agilidade e design escurecido exclusivo que exala sofisticação contemporânea em cada curva.",
    prices: {
      assinatura: { monthly: "R$ 3.549,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 2.890,00", term: "80 Meses", credit: "R$ 200.690,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973099189-1.png"]
  },
  "V9": {
    id: "V9",
    title: "RAMPAGE REBEL 2.2 TB CD 4X4 DIESEL AUT.",
    brand: "Ram",
    version: "RAMPAGE REBEL",
    type: "Picape Sport Premium",
    year: "2025/2026",
    clientType: "PF",
    fuelType: "Diesel",
    transmission: "Automática de 9 marchas",
    engine: "2.2 Turbo Diesel (200 cv)",
    color: "Flame Red",
    doors: "4",
    seats: "5",
    description: "A Rampage Rebel é onde o instinto selvagem encontra o luxo absoluto. Com aceleração vigorosa e interior revestido em materiais premium de toque macio, redefine o segmento. É um convite ao prazer de dirigir, oferecendo status inconfundível RAM com a agilidade de um SUV de luxo.",
    prices: {
      assinatura: { monthly: "R$ 7.189,00", term: "36 Meses", mileage: "1000 km", details: [] },
      consorcio: { monthly: "R$ 3.740,00", term: "80 Meses", credit: "R$ 258.990,00", details: [] }
    },
    images: ["https://c.animaapp.com/mfxz26rhnSsSP4/img/uploaded-asset-1770973099186-0.png"]
  }
};

export type BenefitGridProps = {
  activeTab: string;
};

export const BenefitGrid = ({ activeTab }: BenefitGridProps) => {
  const getBenefits = () => {
    switch (activeTab) {
      case "Assinatura":
        return [
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-15.svg",
            title: "Tudo incluso",
            description: "Seguro, manutenção, documentação e assistência 24h inclusos na mensalidade"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-16.svg",
            title: "Flexibilidade total",
            description: "Troque de veículo a cada 12 meses ou cancele quando quiser"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-17.svg",
            title: "Sem entrada",
            description: "Comece a dirigir sem precisar dar entrada ou sinal"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-18.svg",
            title: "Aprovação em 24h",
            description: "Processo 100% digital com aprovação rápida"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-19.svg",
            title: "Carros novos",
            description: "Frota sempre renovada com veículos 0km e seminovos"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-20.svg",
            title: "Suporte dedicado",
            description: "Atendimento especializado em assinatura de veículos"
          }
        ];
      case "Consórcio":
        return [
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-17.svg",
            title: "Sem juros",
            description: "Você paga apenas uma taxa administrativa, sem juros abusivos"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-18.svg",
            title: "Poder de compra",
            description: "Com a carta de crédito, você tem poder de compra à vista"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-19.svg",
            title: "Planejamento",
            description: "Organize suas finanças com parcelas que cabem no seu bolso"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-16.svg",
            title: "Flexibilidade",
            description: "Escolha o carro que quiser, novo ou seminovo, ao ser contemplado"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-15.svg",
            title: "Economia",
            description: "Forma mais econômica de adquirir seu veículo a longo prazo"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-20.svg",
            title: "Segurança",
            description: "Administradoras regulamentadas pelo Banco Central"
          }
        ];
      case "Financiamento":
        return [
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-18.svg",
            title: "Aprovação rápida",
            description: "Análise de crédito em até 24 horas úteis"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-15.svg",
            title: "Taxas competitivas",
            description: "As melhores taxas do mercado para seu perfil"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-19.svg",
            title: "Carro é seu",
            description: "O veículo fica em seu nome desde o início"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-16.svg",
            title: "Parcelas flexíveis",
            description: "Escolha o prazo que melhor se adapta ao seu orçamento"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-17.svg",
            title: "Entrada facilitada",
            description: "Opções de entrada a partir de 0% do valor do veículo"
          },
          {
            icon: "https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-20.svg",
            title: "100% digital",
            description: "Todo processo online, sem burocracia"
          }
        ];
      default:
        return [];
    }
  };

  const benefits = getBenefits();

  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 rounded-2xl">
          <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 pt-6 pb-4 px-6">
            <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.546_0.245_262.881)_0%,rgb(0,156,73)_100%)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-12 mb-4 rounded-[14px]">
              <img
                src={benefit.icon}
                alt="Icon"
                className="text-white box-border caret-transparent h-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-6"
              />
            </div>
            <h4 className="text-xl box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {benefit.title}
            </h4>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pb-6 px-6">
            <p className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent leading-[26px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

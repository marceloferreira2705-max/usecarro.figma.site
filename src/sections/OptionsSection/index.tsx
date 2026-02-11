import { OptionCard } from "@/sections/OptionsSection/components/OptionCard";

export const OptionsSection = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Opções principais
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Escolha a modalidade que melhor se adapta ao seu perfil e
            necessidades
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <OptionCard
            iconSrc="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-6.svg"
            title="Assinatura"
            description="Pague um valor mensal fixo e tenha seu carro sem se preocupar com manutenção, IPVA ou seguro."
            href="/assinatura"
            buttonText="Ver assinatura"
          />
          <OptionCard
            iconSrc="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-7.svg"
            title="Consórcio"
            description="Participe de um grupo e quite seu carro de forma planejada, sem juros abusivos."
            href="/consorcio"
            buttonText="Ver consórcio"
          />
        </div>
      </div>
    </section>
  );
};
